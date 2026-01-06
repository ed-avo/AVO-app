
import { LearningModule } from './types';

export const APP_TITLE = "Agressievrij onderwijs";

export const MODULES: LearningModule[] = [
  {
    id: 'norm',
    title: '1. De Collectieve Norm',
    description: 'De basis van het protocol: Visie, doelen, gedragsverwachtingen en rollen & verantwoordelijkheden.',
    icon: 'Shield',
    steps: [
      {
        title: 'Onze Collectieve Norm',
        content: `De kern van het Agressievrij onderwijs protocol is helder: 

**BC**Agressie en intimidatie houd je nooit stil.
**BC**Onze norm is: melden helpt.
**BC**Samen trekken we een duidelijke grens.
**BC**Emotie mag, Agressie niet

Dit raakt niet alleen alle Agressievrij onderwijs medewerkers, maar ook de kwaliteit van het onderwijs en de veiligheid van leerlingen. Veiligheid is de basis voor goed onderwijs.`
      },
      {
        title: 'Concrete Doelen',
        content: `Het protocol heeft 7 concrete doelen:
        
1. **Veilige leeromgeving**: Fysiek en emotioneel veilig voor iedereen.
2. **Verminderen agressie**: Terugdringen van verbaal, non-verbaal en fysiek geweld.
3. **Grenzen stellen**: Duidelijk maken what acceptabel is en wat niet.
4. **Bewustwording**: Bij leerlingen, ouders en alle Agressievrij onderwijs medewerkers over de impact van gedrag.
5. **Consistente opvolging**: Een gestandaardiseerde aanpak bij incidenten.
6. **Samenwerking**: Ouders als partners zien in de opvoeding.
7. **Nazorg**: Herstel van relaties en voorkomen van herhaling.`
      },
      {
        title: 'Gedragsverwachtingen Ouders/Verzorgers',
        content: `Onze samenwerking met ouders is gebaseerd op wederzijds respect en een gedeelde verantwoordelijkheid voor de leerling. We verwachten:

1. **Veiligheid & Respect**: Draag actief bij aan een veilige omgeving en help mee grensoverschrijdend gedrag van uw kind te corrigeren.
2. **Betrokkenheid**: Wees actief betrokken bij de schoolgemeenschap. Communiceer zorgen tijdig en constructief naar de juiste persoon.
3. **Verantwoordelijkheid**: Neem verantwoordelijkheid voor het gedrag van uw kind (ook online) en onderschrijf de schoolregels in de opvoeding thuis.
4. **Constructieve communicatie**: Communiceer altijd respectvol met medewerkers, sta open voor feedback en werk samen aan oplossingen.
5. **Modelgedrag**: Geef het goede voorbeeld in gedrag naar medewerkers en andere ouders. Stimuleer eigen verantwoordelijkheid bij uw kind.`
      },
      {
        title: 'Gedragsverwachtingen Leerlingen',
        content: `Van leerlingen verwachten we een actieve bijdrage aan een positieve en veilige sfeer op school:

1. **Respect**: Ga respectvol om met medeleerlingen en personeel, zowel verbaal als non-verbaal.
2. **Geen geweld**: Agressie in elke vorm (fysiek, verbaal of non-verbaal) is onacceptabel.
3. **Grenzen**: Respecteer de persoonlijke, fysieke en emotionele grenzen van others.
4. **Participatie**: Neem actief deel aan voorlichtingssessies over gedrag, grenzen en veiligheid.
5. **Melden**: Meld incidenten van agressie of grensoverschrijdend gedrag (voor jezelf of een ander) direct bij een medewerker.`
      },
      {
        title: 'Gedragsverwachtingen Medewerkers',
        content: `Als Agressievrij onderwijs professional heb je een sleutelrol in het handhaven van de sociale veiligheid:

1. **Voorbeeldfunctie**: Toon professioneel en begrensd gedrag in alle situaties.
2. **Consistent handelen**: Pas de collectieve norm en het protocol eenduidig toe.
3. **Signaleren**: Wees alert op veranderingen in gedrag van leerlingen of ouders.
4. **Melden & Registreren**: Houd incidenten niet voor jezelf; registreren is de basis voor opvolging.
5. **Collegiale steun**: Steun collega's bij incidenten en zorg for emotionele opvang.`
      },
      {
        title: 'Rollen & Verantwoordelijkheden',
        content: `Een veilige schoolomgeving is een gezaminglijke inspanning. Hieronder vind je het overzicht van wie welke rol vervult binnen en buiten onze stichting.`,
        visualType: 'roles_responsibilities'
      }
    ],
    quiz: [
      {
        question: "Wat is de kernspreuk van de collectieve norm?",
        options: ["Samen staan we sterk", "Melden helpt", "Nultolerantie voor geweld", "De school is van ons allemaal"],
        correctIndex: 1,
        explanation: "De norm is expliciet gedefinieerd als: 'Agressie en intimidatie houd je nooit stil. Onze norm is: melden helpt.'"
      },
      {
        question: "Hoeveel concrete doelen heeft het veiligheidsprotocol?",
        options: ["3 doelen", "5 doelen", "7 doelen", "10 doelen"],
        correctIndex: 2,
        explanation: "Het protocol beschrijft 7 concrete doelen, variërend van een veilige leeromgeving tot nazorg."
      },
      {
        question: "Welke uitspraak over veiligheid is leidend binnen de stichting?",
        options: ["Veiligheid is een keuze", "Veiligheid is de basis voor goed onderwijs", "Veiligheid is een gedeelde last", "Veiligheid regelt zichzelf"],
        correctIndex: 1,
        explanation: "In de collectieve norm staat centraal dat veiligheid de absolute basis is voor het kunnen bieden van goed onderwijs."
      },
      {
        question: "Wie is eindverantwoordelijk voor de naleving van het veiligheidsprotocol?",
        options: ["De leerkracht", "De conciërge", "De schooldirectie", "Het College van Bestuur"],
        correctIndex: 3,
        explanation: "Het College van Bestuur (CvB) is eindverantwoordelijk voor de naleving van en het toezicht op het protocol."
      },
      {
        question: "Wat wordt verwacht van ouders als 'partners in de opvoeding'?",
        options: ["Dat zij alle schoolregels negeren", "Dat zij verantwoordelijkheid nemen voor het gedrag van hun kind", "Dat zij alleen op school komen bij feesten", "Dat zij de professional vertellen hoe die zijn werk moet doen"],
        correctIndex: 1,
        explanation: "Er wordt van ouders verwacht dat zij verantwoordelijkheid nemen voor het gedrag van hun kind (ook online) en de schoolregels onderschrijven."
      }
    ]
  },
  {
    id: 'abcd',
    title: '2. Herkennen',
    description: 'Kennis van het ABCD model, inclusief voorbeelden voor fysiek en online gedrag, en cultuur sensitieve aandachtspunten.',
    icon: 'Eye',
    steps: [
      {
        title: 'De Agressieladder',
        content: `Om effectief te handelen, gebruiken we het ABCD-model. Dit helpt om gedrag te herkennen en er effectief mee om te gaan.`,
        visualType: 'abcd_model'
      },
      {
        title: 'A-gedrag',
        content: `**BC**Definitie: Uiting van emotie voortkomend uit onmacht of frustratie.
        
👨‍🎓 Voorbeelden Leerling:
- Fysiek: Met de deur slaan na een slecht cijfer, luid zuchten tijdens de uitleg, de ogen wegdraaien als je ze aanspreekt.
- Online: In een app-bericht aan een docent: "WAAROM IS DIT FOUT???? IK HEB ZO HARD GELEERD DIT IS ECHT NIET EERLIJK :(:(:("

👪 Voorbeelden Ouder:
- Fysiek: Huilend aan de balie staan omdat hun kind gepest wordt, herhaaldelijk dezelfde bezorgde vraag stellen zonder te luisteren.
- Online: Een e-mail sturen om 23:00 uur vol paniek: "Help, ik weet het niet meer met mijn zoon, hij wil niet meer naar school, wat moet ik doen??"`
      },
      {
        title: 'B-gedrag',
        content: `**BC**Definitie: Kritiek gericht op de organisatie of de regels ("Jullie").
        
👨‍🎓 Voorbeelden Leerling:
- Fysiek: "Dit is echt een kut-school, jullie hebben alleen maar onzinregels hier."
- Online: In de klassen-app een poll starten: "Wie vindt ook dat Agressievrij onderwijs de slechtste regels van Nederland heeft? 👎"

👪 Voorbeelden Ouder:
- Fysiek: Hardop op het schoolplein verkondigen: "Het is hier een puinhoop, ze weten bij de directie van toeten noch blazen."
- Online: Op een openbare review-site plaatsen: "Schrijf je kind hier niet in! De school heeft nul controle over de veiligheid en de communicatie is een drama."`
      },
      {
        title: 'C-gedrag',
        content: `**BC**Definitie: De agressie wordt persoonlijk ("Jij"). Schelden, beledigen, kleineren.
        
👨‍🎓 Voorbeelden Leerling:
- Fysiek: "Jij bent een waardeloze docent, je snapt er zelf niks van," of schelden met ziektes.
- Online: Een bewerkte foto (meme) van een medewerker verspreiden via TikTok met een kleinerende tekst eronder.

👪 Voorbeelden Ouder:
- Fysiek: De vinger op de borst van de conciërge prikken en zeggen: "Wie denk jij wel niet dat je bent, jij bent maar een simpele krabbelaar."
- Online: Een boze mail direct aan de leerkracht: "Jij hebt een persoonlijke pik op mijn kind, je bent ongeschikt voor dit vak en ik zorg dat je ontslagen wordt."`
      },
      {
        title: 'D-gedrag',
        content: `**BC**Definitie: Fysiek geweld of directe dreiging met geweld.
        
👨‍🎓 Voorbeelden Leerling:
- Fysiek: Een tafel omver gooien, een medewerker de weg versperren, spugen of een klap uitdelen.
- Online: Een screenshot van het huis van de docent op social media plaatsen met de tekst: "Ik weet waar je woont, we komen vannacht even langs."

👪 Voorbeelden Ouder:
- Fysiek: De weg naar de auto blokkeren, dreigend heel dichtbij gaan staan (neus-aan-neus), de telefoon uit de hand van een medewerker slaan.
- Online: Via een anoniem nummer een WhatsApp sturen: "Als mijn dochter morgen die schorsing nog heeft, dan zoek ik je op buiten het schoolplein. Je bent gewaarswd."`
      },
      {
        title: 'Cultuur Sensitiviteit',
        content: `Verschillende culturele achtergronden hebben invloed op hoe agressie wordt geïnterpreteerd. Het model van Fons Trompenaars helpt ons deze verschillen in kaart te brengen.`,
        visualType: 'trompenaars_model'
      },
      {
        title: 'Gedrag & Belang',
        content: `Cultuur beïnvloedt communicatiestijlen, non-verbaal gedrag en groepsdynamiek. Inzicht hierin voorkomt misinterpretaties en escalaties.`,
        visualType: 'cultural_sensitivity'
      },
      {
        title: 'Concrete Aanpak & Praktijk',
        content: `Respectvolle interventies en bewustzijn zijn cruciaal. Hieronder vind je concrete stappen en een voorbeeld uit de praktijk.`,
        visualType: 'cultural_steps'
      }
    ],
    quiz: [
      {
        question: "Een ouder stuurt een mail naar de directeur: 'Jij bent een corrupte dief die alleen voor zijn eigen zakken werkt'. Welk gedrag is dit?",
        options: ["A-gedrag", "B-gedrag", "C-gedrag", "D-gedrag"],
        correctIndex: 2,
        explanation: "Dit is C-gedrag omdat de aanval persoonlijk is ('Jij') en beledigend ('corrupte dief')."
      },
      {
        question: "Wat typeert B-gedrag op de agressieladder?",
        options: ["Persoonlijke beledigingen", "Fysiek geweld", "Kritiek op de organisatie of de regels ('jullie')", "Huilen uit onmacht"],
        correctIndex: 2,
        explanation: "B-gedrag is systeem-agressie, waarbij de kritiek gericht is op de organisatie of de regels, niet op de persoon."
      },
      {
        question: "Wat is de juiste definitie van A-gedrag?",
        options: ["Directe dreiging met geweld", "Schelden tegen de leerkracht", "Uiting van emotie uit onmacht of frustratie", "Kritiek op het schoolbeleid"],
        correctIndex: 2,
        explanation: "A-gedrag is uiting van emotie voortkomend uit onmacht of frustratie, waarbij de persoon geen kwade bedoelingen heeft richting de professional."
      },
      {
        question: "Wat is het belangrijkste verschil tussen C- en D-gedrag?",
        options: ["C is online, D is fysiek", "Bij C word je persoonlijk aangevallen, bij D is er sprake van fysiek geweld of directe dreiging", "C is bij leerlingen, D bij ouders", "Er is geen verschil"],
        correctIndex: 1,
        explanation: "Bij C-gedrag is de aanval verbaal persoonlijk (schelden). Bij D-gedrag gaat het over fysieke agressie of de dreiging daarmee."
      },
      {
        question: "Waarom is cultuursensitiviteit van belang bij het ABCD-model?",
        options: ["Om regels per cultuur te veranderen", "Om misinterpretatie van emotionele uitingen te voorkomen", "Om minder streng te zijn", "Om alleen Nederlands te spreken"],
        correctIndex: 1,
        explanation: "In sommige culturen worden emoties sterker getoond. Zonder sensitiviteit zou je dit onterecht als agressie kunnen bestempelen."
      }
    ]
  },
  {
    id: 'stappenplan',
    title: '3. De Escalatieladder',
    description: 'Wat te doen bij een incident? Van melding tot opvolging.',
    icon: 'FileText',
    steps: [
      {
        title: 'Meldingsstructuur',
        content: `Een duidelijke keten van verantwoordelijkheid zorgt voor adequate opvolging.`,
        visualType: 'reporting_chain'
      },
      {
        title: 'Interactieve Melding-wijzer',
        content: `**BC**Hoe handel je bij welk gedrag?

Doorloop de stappen in de onderstaande tool om te zien welke actie van jou wordt verwacht en wat het gevolg daarvan is binnen de organisatie.`,
        visualType: 'incident_interactive'
      }
    ],
    quiz: [
      {
        question: "Wanneer wordt een incident geregistreerd in het incidenten registratiesysteem?",
        options: ["Alleen bij A-gedrag", "Alleen bij fysiek geweld", "Bij C- en D-gedrag", "Bij elk incident, ongeacht de ladder"],
        correctIndex: 2,
        explanation: "In het protocol wordt bij C- en D-gedrag altijd een officiële melding gedaan die leidt tot registratie in het systeem."
      },
      {
        question: "Wat is de eerste actie bij het ervaren van C- of D-gedrag?",
        options: ["In discussie gaan", "Het negeren", "Benoemen, begrenzen en direct melden bij de directie", "Wachten tot de volgende dag"],
        correctIndex: 2,
        explanation: "Veiligheid is prioriteit. Benoem het gedrag, stel de grens en meld het direct bij de directie."
      },
      {
        question: "Binnen welke termijn neemt de regisseur contact op met een slachtoffer na een D-incident?",
        options: ["Binnen 1 uur", "Binnen 24 uur", "Binnen een week", "Binnen een maand"],
        correctIndex: 1,
        explanation: "Volgens het protocol moet de veiligheidsregisseur binnen 24 uur contact opnemen met het slachtoffer voor nazorg en vervolgstappen."
      },
      {
        question: "Wat is het doel van de 'frequentie check' bij B-gedrag?",
        options: ["Om te zien wie er gelijk heeft", "Vaststellen of het een incident is of een structureel probleem met beleid", "Om de persoon te straffen", "Om de melding te verwijderen"],
        correctIndex: 1,
        explanation: "De check helpt te bepalen of de regels zelf misschien niet werkbaar zijn (als veel mensen klagen) of dat het een individueel probleem is."
      },
      {
        question: "Bij welk type gedrag moet de professional de interactie direct verbreken?",
        options: ["A-gedrag", "B-gedrag", "C-gedrag", "D-gedrag"],
        correctIndex: 3,
        explanation: "Bij D-gedrag (fysiek geweld of dreiging) moet de professional de situatie onmiddellijk verlaten voor de eigen veiligheid."
      }
    ]
  },
  {
    id: 'maatregelen',
    title: '4. Begrenzen, Sancties en Herstel',
    description: 'Begrenzen, mogelijke sancties en herstelgesprekken',
    icon: 'Gavel',
    steps: [
      {
        title: '',
        content: ``,
        visualType: 'begrenzen_wizard'
      },
      {
        title: 'Opvolging bij D-gedrag',
        content: `Bij D-gedrag is de impact groot en de opvolging strikt volgens protocol.`,
        visualType: 'opvolging_d'
      },
      {
        title: 'Sancties bij D-gedrag',
        content: `D-gedrag is onacceptabel en heeft direct consequenties for de agressor.`,
        visualType: 'sancties_d'
      },
      {
        title: 'Adviezen om A- en B-gedrag te verminderen',
        content: `Bij A en B-gedrag volgen er in principe geen sancties. Om voortgang van gedrag te voorkomen en de relatie goed te houden, is preventie en heldere communicatie cruciaal.`,
        visualType: 'agedrag_advies'
      },
      {
        title: 'Herstelgesprekken',
        content: `Bij A en B-gedrag is een herstelgesprek niet noodzakelijk. Meestal vinden herstelgesprekken plaats na C-of D-gedrag`,
        visualType: 'herstelgesprekken'
      }
    ],
    quiz: [
      {
        question: "Wat is het doel van een herstelgesprek?",
        options: ["De dader extra straffen", "De werkrelatie normaliseren en impact bespreekbaar maken", "Een officiële klacht indienen", "Het incident uit het dossier verwijderen"],
        correctIndex: 1,
        explanation: "Herstelgesprekken zijn gericht op het bespreekbaar maken van de impact en het maken van afspraken om de relatie weer werkbaar te maken."
      },
      {
        question: "Wat houdt de 'keuzetechniek' in bij het begrenzen?",
        options: ["De ander laten kiezen welk scheldwoord ze gebruiken", "Het benoemen van gedrag, de grens en de consequentie bij doorgaan", "Kiezen of je wel of niet meldt", "De ander laten kiezen wie het gesprek voert"],
        correctIndex: 1,
        explanation: "Je benoemt het gedrag, stelt de grens en geeft de keuze: stoppen en verder praten, of doorgaan en het gesprek beëindigen."
      },
      {
        question: "Wat is een mogelijke sanctie voor een ouder na ernstig D-gedrag?",
        options: ["Een waarschuwing via de mail", "Gebouwsontzegging en eventueel aangifte bij de politie", "Geen sanctie, alleen een gesprek", "De leerling van school sturen"],
        correctIndex: 1,
        explanation: "Bij fysieke agressie of dreiging kan een gebouwsontzegging worden opgelegd en wordt er vaak aangifte gedaan."
      },
      {
        question: "Waarom is 'H.E.V.' de aanbevolen aanpak bij A-gedrag?",
        options: ["Om de ander te overtuigen", "Om emoties te begrenzen met sancties", "Om erkenning te geven aan de emotie en de kern te verkennen", "Het is een techniek voor D-gedrag"],
        correctIndex: 2,
        explanation: "H.E.V. staat voor Herkennen, Erkennen en Verkennen. Dit de-escaleert frustratie."
      },
      {
        question: "Wat is de rol van de pedagogische regie bij leerlingen?",
        options: ["De leerling de baas laten zijn", "Zorgen dat de professional de volwassen regie houdt in het gesprek", "De leerling direct schorsen zonder gesprek", "Alles toelaten uit medelijden"],
        correctIndex: 1,
        explanation: "Als professional blijf je de 'volwassene in de kamer' en houd je de pedagogische regie, ook bij lastig gedrag."
      }
    ]
  }
];
