import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SimulationConfig } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-3-flash-preview';

export const startSimulation = async (config: SimulationConfig): Promise<string> => {
  try {
    const behaviorInstructions = {
      'A': 'Gedraag je volgens A-gedrag (Frustratie): De persoon is emotioneel, onmachtig en vraagt veel aandacht/begrip, maar valt de professional niet persoonlijk aan.',
      'B': 'Gedraag je volgens B-gedrag (Systeem-agressie): De persoon uit felle kritiek op de school, de regels of "jullie" als organisatie.',
      'C': 'Gedraag je volgens C-gedrag (Persoonlijk): De persoon wordt brutaal, scheldt, kleineert de medewerker ("jij bent maar een...") of beschuldigt hen vals.',
      'D': 'Gedraag je volgens D-gedrag (Destructief/Dreigend): De persoon is fysiek dreigend, slaat op tafels, vernielt iets of uit directe dreigementen naar de persoon van de medewerker.',
      'any': 'Kies een passend gedragstype uit de ABCD-ladder.'
    };

    const chosenPersona = config.persona === 'willekeurig' 
      ? (Math.random() > 0.5 ? 'ouder' : 'leerling') 
      : config.persona;

    const mediumContext = config.medium === 'online' 
      ? "De interactie vindt ONLINE plaats (bijv. via e-mail, WhatsApp of social media)." 
      : "De interactie vindt FYSIEK plaats op de schoollocatie.";

    const prompt = `
      Jij bent een simulatie-bot voor Unicoz onderwijsprofessionals.
      De gebruiker van deze app is een professional (leerkracht, conciërge, IB-er of directeur).
      
      DOEL: Beschrijf een interactie in de DERDE PERSOON.
      MEDIUM: ${mediumContext}
      STIJL: Gebruik een narratieve stijl waarin je beschrijft wat de ${chosenPersona} doet en wat hij/zij letterlijk zegt/stuurt.
      
      Gedragstype om te simuleren: ${behaviorInstructions[config.behaviorType] || behaviorInstructions.any}
      
      INSTRUCTIE VOOR DE OPENING:
      1. Start ALTIJD met de setting tussen vierkante haken: [Locatie/Medium: ..., Jouw rol: ...].
      2. Beschrijf daarna in de DERDE PERSOON de actie. Als het online is, beschrijf dan dat de professional een bericht of mail opent.
      3. Eindig met wat de ${chosenPersona} letterlijk zegt of heeft getypt.
      
      Houd het realistisch en passend bij het ABCD-gedragstype ${config.behaviorType}.
      Taal: Nederlands.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });
    
    return response.text || "Er ging iets mis bij het starten van de simulatie.";
  } catch (error) {
    console.error("Error starting simulation:", error);
    return "Kan de simulatie niet starten. Controleer de configuratie.";
  }
};

export const continueSimulation = async (history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  try {
    const lastMessage = history[history.length - 1];
    if (lastMessage.role !== 'user') {
      throw new Error("Last message must be from user");
    }

    const previousHistory = history.slice(0, history.length - 1).map(h => ({
      role: h.role === 'user' ? 'user' : 'model',
      parts: h.parts
    }));

     const chatSession = ai.chats.create({
      model: MODEL_NAME,
      history: previousHistory,
      config: {
        systemInstruction: `
          Blijf schrijven in de DERDE PERSOON over de acties van de leerling of ouder.
          De gebruiker is de onderwijsprofessional.
          
          Als de simulatie ONLINE is, reageer dan door te beschrijven hoe de persoon een nieuw bericht typt of een e-mail beantwoordt.
          Als de simulatie FYSIEK is, beschrijf dan de lichaamstaal en spraak.
          
          Houd je antwoorden kort (max 60 woorden).
        `
      }
    });

    const result = await chatSession.sendMessage({ message: lastMessage.parts[0].text });
    return result.text || "...";

  } catch (error) {
    console.error("Error in simulation:", error);
    return "Er is een fout opgetreden in de verbinding.";
  }
};

export const evaluateResponse = async (userAction: string, scenarioContext: string): Promise<string> => {
    try {
        const prompt = `
        Context: Unicoz sociale veiligheidstraining voor professionals.
        Scenario geschiedenis: ${scenarioContext}
        Laatste actie professional: "${userAction}"
        
        Geef 1 zin feedback op basis van het ABCD protocol:
        - Hebben ze de juiste interventie gepleegd voor dit gedragstype?
        - Was de reactie professioneel en begrensd?
        - Let op: online agressie moet ook begrensd en geregistreerd worden.
        
        Feedback moet direct en coachend zijn.
        `;

        const response = await ai.models.generateContent({
            model: MODEL_NAME,
            contents: prompt
        });
        return response.text || "Geen feedback beschikbaar.";
    } catch (e) {
        return "Kon geen feedback genereren.";
    }
}