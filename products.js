// Perfectum Produktdatabas V6 — Komplett
const PRODUCTS=[
// ══ 1. SPOLARVÄTSKA & GLYKOL ══
{id:"spolar",n:"Spolarvätska",cat:"Spolarvätska & Glykol",r:1,e:"💧",c:"#0ea5e9",tags:["åkeri","verkstad","bygg"],box:"2x25L → 1x25L",bonus:"Gängsats 110 delar (M2-M18) värd 3000-3500kr GRATIS vid 2x25L, pris 89→79kr/L",p:"Vi jobbar med Swedhandling i Norrköping — en av Sveriges största. 93% aktivhalt/koncentrat, späd 3-6 gånger = billig brukslösning. 59-69kr/L. 1L-pack EJ farligt gods, 25L dunk (farlig gods), 205L fat. Vi har en 90% koncentrat — måste späda 5-6x och på så vis ett riktigt billigt brukslösning.",sp:["93% aktivhalt","Späds 3-6x","1L: EJ farligt gods"],pr:"59-69kr/L | Kampanj: 79kr/L vid 2x25L",fm:["1L (12/24-pack)","25L dunk","205L fat"],di:[{q:"Koncentrat eller färdigblandad?"},{q:"Hur mycket per år?"},{q:"Glykol?",lk:"glykol"}]},
{id:"glykol",n:"Glykol",cat:"Spolarvätska & Glykol",r:1,e:"🧊",c:"#6366f1",tags:["åkeri","verkstad"],box:"2x25L → 1x25L",p:"93% aktivhalt, Klass 3 longlife — 5 år i maskineri och dunk. Blå(etylen) 69kr/L, Röd 69-79, Grön(miljö propylen) 79-99, Gul(Volvo) 69-79, Transparent(blandbar) 79-89.",sp:["93% aktivhalt","Klass 3 longlife","5 år","5 färger"],pr:"69-99 kr/L beroende färg",fm:["4L","20L","25L","205L fat"],di:[{q:"Vilken FÄRG?"},{q:"Maskiner eller fordon?"},{q:"AD-Blue?",lk:"adblue"}]},
{id:"adblue",n:"AD-Blue",cat:"Spolarvätska & Glykol",r:1,e:"🔵",c:"#3b82f6",tags:["åkeri"],box:"205L → 25L",p:"Swedhandling. Diesel — AD-Blue rinner bara ur. 10L-1000L IBC. Volymrabatt.",sp:["ISO 22241","SCR"],pr:"Volymbaserat",fm:["10L","25L","205L","1000L IBC"],di:[{q:"Hur mycket i månaden?"}]},

// ══ 2. SPRAYER & AEROSOLER ══
{id:"sprayer",n:"Sprayer — Översikt",cat:"Sprayer",r:2,e:"🧴",c:"#ef4444",tags:["verkstad","svetsare","bygg"],box:"24st blandlåda → 12st dussin",bonus:"Paket 24st + kylsnyckelsats = 2995kr. Styckpris från 12st: 129kr",p:"Aerosoler på burk går alltid åt. Tony Rikardsson-serien. 149kr/burk (159 ut), brakeclean 60kr billigare. 14 typer. Jäkla tryck, massa teflon. Kunden innan tog VD40, Brakeclean och rostlösare — vilka går åt mest för dig?",sp:["Tony Rikardsson","149-159kr/burk","Brakeclean billigare","14 typer"],pr:"149-159kr/burk | Paket 24st: 2995kr",fm:["Enstaka","Dussin 12","Blandlåda 24"],di:[{q:"Brakeclean?",lk:"brake"},{q:"Rostlösare?",lk:"rost"},{q:"Allround/VD40?",lk:"allround"},{q:"Kedjespray?",lk:"kedja"},{q:"Krypfett?",lk:"kryp"},{q:"Kylspray?",lk:"kyl"},{q:"Teflon?",lk:"tefl"},{q:"Citrus A?",lk:"citr"},{q:"Glasrent?",lk:"glas"},{q:"Multiskum?",lk:"multi"},{q:"Kopparspray?",lk:"kopp"},{q:"Kontaktspray?",lk:"kont"}]},
{id:"brake",n:"Brakeclean/Maskinrent",cat:"Sprayer",r:2,e:"🔵",c:"#3b82f6",tags:["verkstad","svetsare"],p:"Fettlösare broms/hjulhus. Mest sålda. 60kr billigare än övriga.",sp:["Fettlösare","Billigaste"],pr:"~89-99kr",fm:["Enstaka","Dussin"],di:[{q:"Hur många i månaden?"}],art:"000000"},
{id:"rost",n:"Rostlösare",cat:"Sprayer",r:2,e:"🟠",c:"#f97316",tags:["verkstad"],p:"Löser rost, tar gnissel i dörrar osv.",sp:["Löser rost"],pr:"149kr",fm:["Enstaka","Dussin"],di:[],art:"942100"},
{id:"allround",n:"Allroundspray PTFE",cat:"Sprayer",r:2,e:"🟢",c:"#10b981",tags:["verkstad"],p:"Bättre än VD40. Teflon, starkt tryck.",sp:["Motsvarar VD40","Teflon"],pr:"149kr",fm:["Enstaka","Dussin"],di:[{q:"Kör ni VD40?"}],art:"250200"},
{id:"kedja",n:"Kedjespray",cat:"Sprayer",r:2,e:"⛓️",c:"#8b5cf6",tags:["skog"],p:"Stark vidhäftning. Motorsågar, industrikedjor.",sp:["Vidhäftning"],pr:"149kr",fm:["Enstaka"],di:[],art:"070106"},
{id:"kryp",n:"Krypfett/Mos2",cat:"Sprayer",r:2,e:"💛",c:"#eab308",tags:["verkstad"],p:"Mellanting smörjfett/allround. Kryper in i springor.",sp:["Kryper in"],pr:"149kr",fm:["Enstaka"],di:[],art:"240200"},
{id:"kyl",n:"Kylspray/Skärspray",cat:"Sprayer",r:2,e:"❄️",c:"#06b6d4",tags:["verkstad"],p:"Kyler borr/skär. Förlänger livslängd.",sp:["Kyler verktyg"],pr:"149kr",fm:["Enstaka"],di:[],art:"72012"},
{id:"tefl",n:"Teflonspray PTFE",cat:"Sprayer",r:2,e:"⚪",c:"#64748b",tags:["verkstad"],p:"PTFE-film, minskar friktion. Rörliga delar.",sp:["PTFE"],pr:"149kr",fm:["Enstaka"],di:[],art:"520800"},
{id:"citr",n:"Citrus A",cat:"Sprayer",r:2,e:"🍊",c:"#f59e0b",tags:["verkstad"],p:"Klisterrester — fantastisk doft!",sp:["Klister","Doft"],pr:"149kr",fm:["Enstaka"],di:[],art:"550200"},
{id:"glas",n:"Glasrent",cat:"Sprayer",r:2,e:"🪟",c:"#0ea5e9",tags:["verkstad"],p:"Effektiv fönsterputs — väldigt förbättrad!",sp:["Fönsterputs"],pr:"149kr",fm:["Enstaka"],di:[],art:"340100"},
{id:"multi",n:"Multiskum",cat:"Sprayer",r:2,e:"🫧",c:"#a855f7",tags:["åkeri"],p:"Interiör bilar/maskiner.",sp:["Interiör"],pr:"149kr",fm:["Enstaka"],di:[],art:"101100"},
{id:"kopp",n:"Kopparspray",cat:"Sprayer",r:2,e:"🟤",c:"#b45309",tags:["verkstad"],p:"Värmebeständig, höga temp.",sp:["Värme"],pr:"149kr",fm:["Enstaka"],di:[],art:"060100"},
{id:"kont",n:"Kontaktspray",cat:"Sprayer",r:2,e:"⚡",c:"#eab308",tags:["verkstad"],p:"El-artiklar vid fordon.",sp:["El"],pr:"149kr",fm:["Enstaka"],di:[],art:"4148100"},
{id:"kera",n:"Keramikpasta",cat:"Sprayer",r:2,e:"⚪",c:"#d1d5db",tags:["verkstad"],p:"Aluminium främst.",sp:["Aluminium"],pr:"149kr",fm:["Enstaka"],di:[],art:"200792"},
{id:"tjar",n:"Tjärspray",cat:"Sprayer",r:2,e:"⬛",c:"#1e293b",tags:["åkeri"],p:"Tjärborttagning.",sp:["Tjära"],pr:"149kr",fm:["Enstaka"],di:[],art:"70022"},

// ══ 3. AVFETTNING & KEM ══
{id:"bamse",n:"Bamse Alkalisk Special",cat:"Avfettning & Kem",r:3,e:"🐻",c:"#dc2626",tags:["verkstad","åkeri","bygg"],box:"205L fat → 25L dunk → 5L",bonus:"108-delars verktygsväska (2000kr) + gottepåse gratis vid köp",p:"Mest sålda produkten 30 år. 87% aktivhalt (andra 18-23%), lutbaserad, späds 50x. Brukslösning 2-4kr/L — absolut billigaste på marknaden. Kunder: Modo Skog, Assi Domän, Stockholms kommun, kriminalvården, 6000 åkerier. Tar ALLT inkl miljöoljor, fastbrända oljor. Koncentrat tar lacken — var försiktig! Kemikaliesvepets vita lista. Fungerar i högtryck + handspruta. Miljövänlig, inga lösningsmedel/petroleum.",sp:["87% aktivhalt","Lutbaserad","Späds 50x","Brukslösning 2-4kr/L","30 år på marknaden","Miljövänlig, vita listan"],pr:"119-149kr/L | Ord: 99,90/fat",fm:["5L","25L dunk","205L fat"],di:[{q:"Alkaliskt eller kall?"},{q:"Prickbort?",lk:"prickbort"},{q:"Skumglans/Foamer?",lk:"skumglans"}]},
{id:"prickbort",n:"Prickbort Kallavfettning",cat:"Avfettning & Kem",r:3,e:"✨",c:"#e11d48",tags:["verkstad","åkeri"],box:"2x25L → 1x25L",p:"Högtryckscleaner — svårlösliga oljeföroreningar, asfalt, vägsmuts. 3 varianter — vi har starkaste. Späds INTE. Spraya, vänta 2min, skölj. Tar gödsel, olja, kåda, flygrost. Svensktillverkad, biologiskt nedbrytbar.",sp:["Späds INTE","Starkaste","Svensktillverkad","Biologiskt nedbrytbar"],pr:"119kr/L (25L)",fm:["25L dunk"],di:[],art:"197"},
{id:"skumglans",n:"Skumglanschampo/Foamer",cat:"Avfettning & Kem",r:3,e:"🫧",c:"#0891b2",tags:["åkeri","verkstad"],box:"25L → 5L",p:"Foamer = grädtårta! 149kr/L men 2-i-1: rengöring + bilvård. Maskinen blir grädtårta, dammar av snabbt. Foamlancer eller högtryck.",sp:["2-i-1","Foamlancer/högtryck","149kr/L"],pr:"149kr/L",fm:["5L","25L"],di:[{q:"Har ni foamer?"}]},
{id:"algfasad",n:"Alg & Fasadtvätt",cat:"Avfettning & Kem",r:3,e:"🏠",c:"#059669",tags:["bygg"],box:"25L",p:"Alger/mögel/lav. Späds 10x = 16,90kr/L — Sveriges billigaste! Biologiskt nedbrytbar. Behöver ej spolas — regnet sköter det. Vartannat år. Båtar, utemöbler, plasttak, stuprännor.",sp:["Späds 10x","16,90kr/L brukslösning","Behöver ej spolas"],pr:"~169kr/L",fm:["25L"],di:[{q:"Fastigheter med alger/mögel?"}]},
{id:"vegavfett",n:"Veg-Avfettning Special",cat:"Avfettning & Kem",r:3,e:"🌿",c:"#16a34a",tags:["verkstad"],p:"Vegetabilisk. 25 år svensk kemfabrik. pH 12,5. Blandas 1:5.",sp:["Vegetabilisk","pH 12,5"],pr:"Kontakta",fm:["4x5L kartong"],bonus:"GPS-vakt värd 2995kr",di:[]},
{id:"vaxschampo",n:"Vaxschampo",cat:"Avfettning & Kem",r:3,e:"🚗",c:"#0ea5e9",tags:["åkeri"],p:"Vaxemulsion — vägsuts, fett, salt, diesel. Skyddsfilm efter tvätt.",sp:["Skyddsfilm","pH 10"],pr:"Kontakta",fm:["5L"],di:[],art:"513"},
{id:"handrent",n:"Handrent Aloe Vera",cat:"Avfettning & Kem",r:3,e:"🤲",c:"#10b981",tags:["verkstad"],p:"Handrengöring utan vatten. Citrusdoft, aloe vera.",sp:["Utan vatten","Aloe vera"],pr:"~12kr",fm:["1.5L","2.7L","4.5L"],di:[],art:"149"},

// ══ 4. HANDSKAR ══
{id:"handskar",n:"Handskar — Översikt",cat:"Handskar",r:4,e:"🧤",c:"#2563eb",tags:["verkstad","svetsare","bygg","åkeri","skog"],box:"2 dussin (24 par) → 1 dussin (12 par)",p:"Nånting som alltid går — man kan inte gå runt naken som sagt Börje. Tunn montage? Nitril? Getskin? Oljiga miljöer eller vanlig montering? Social proof: 69 000 par sålda 2024!",sp:["8 modeller","Stl 6-12","Från 49kr/st","69000 par sålda 2024"],pr:"49-189kr/st",fm:["Styckvis","Dussin 12","Kartong 24"],di:[{q:"Tunn montage/nitril?",lk:"ergotec"},{q:"Oljiga/våta miljöer?",lk:"aquaguard"},{q:"Vinterhandskar getskinn?",lk:"ducavinter"},{q:"Skärskydd?",lk:"foamcut"},{q:"Svetshandskar?",lk:"svetshandske"},{q:"Premium allround?",lk:"perfhandsken"},{q:"Sommar precision?",lk:"ducasommar"}]},
{id:"ergotec",n:"Ergo Tec (Tunn montage)",cat:"Handskar",r:4,e:"✋",c:"#2563eb",tags:["verkstad","bygg"],box:"24 par → 12 par",p:"Nitril undertill, tunn tyg upptill. 49kr/st. PU+Nitril blandning, sömnlös stickad, siliconfri/kromfri/nickelfri. Tvättbar, slitstark. Du kan lyfta en 50-öring med dessa. Stl 6-12.",sp:["PU+Nitril","Sömnlös stickad","Siliconfri/kromfri/nickelfri","Tvättbar","49kr/st"],pr:"49kr/st",fm:["Stl 6-12"],di:[{q:"Storlek?"},{q:"Hur många är ni?"}],art:"ADF-874"},
{id:"aquaguard",n:"Aquaguard Thermo (Vinter/Olja)",cat:"Handskar",r:4,e:"💦",c:"#0284c7",tags:["verkstad","åkeri"],box:"24→12",p:"100% vattentät — TRIPPELDOPPAD (unikt!). Sandygrip = grepp i olja/blött. Vinterfodrad akrylfoder. Extremt tunn och smidig trots vinterfodring, elastisk.",sp:["Trippeldoppad (unikt)","100% vattentät","Sandygrip","Akrylfoder","Tunn trots vinter"],pr:"99-119kr/st",fm:["Stl 8-12"],di:[{q:"Oljiga miljöer?"},{q:"Vattentät?"}],art:"HV-LKX970"},
{id:"ducavinter",n:"Perfectum Duca Vinter",cat:"Handskar",r:4,e:"❄️",c:"#1d4ed8",tags:["verkstad","bygg"],box:"24→12",p:"Äkta getskinn. Fleece vinterfoder. Fingertopps förstärkt. Lätt på/av. OBS: Finns ofodrad sommar!",sp:["Äkta getskinn","Fleece","Fingertopps förstärkt"],pr:"99-149kr/st",fm:["Stl 7-11(vinter) 7-12(sommar)"],di:[{q:"Vinter eller sommar?"}],art:"6900(V)/7900(S)"},
{id:"ducasommar",n:"Perfectum Duca Sommar",cat:"Handskar",r:4,e:"☀️",c:"#f59e0b",tags:["verkstad"],p:"Samma som Duca Vinter men ofodrad. Getskinn, precision.",sp:["Getskinn","Ofodrad"],pr:"Kontakta",fm:["Stl 7-12"],di:[],art:"7900"},
{id:"perfhandsken",n:"Perfectum Handsken (Brand Glove)",cat:"Handskar",r:4,e:"🏆",c:"#f97316",tags:["verkstad","bygg","svetsare"],box:"24→12",bonus:"Mest uppskattade handsken alla kategorier",p:"Riktigt mockaläder. Förstärkt tumme/pekfinger. Spandex + komfortdyna = vibrationsskydd. Air vent — andas. Sitter som en smäck. Alla branscher.",sp:["Mockaläder","Vibrationsdämpning","Air vent","Förstärkt tumme/pekfinger","Allround"],pr:"Sommar 149kr | Vinter 189kr",fm:["Sommar+Vinter"],di:[{q:"Storlek?"},{q:"Hur många är ni?"}]},
{id:"foamcut",n:"Foamcut C (Skärskydd)",cat:"Handskar",r:4,e:"🔪",c:"#4f46e5",tags:["verkstad"],box:"24→12",p:"Skärskydd nivå C (EN388: 4X42C). HPPE/stål + nitril. Nylanserad! 2-i-1 montage+skärskydd. Oljebeständig, vattenresistent. Smidig, passar alla.",sp:["Nivå C","2-i-1","Oljebeständig","Nylanserad"],pr:"79-129kr/st",fm:["Stl 6-12 (12/120)"],di:[{q:"Kräver ni skärskydd?"}],art:"HV-NJE3231"},
{id:"svetshandske",n:"Svetshandskar",cat:"Handskar",r:4,e:"🔥",c:"#b91c1c",tags:["svetsare"],p:"Håller sig mjuka — billiga blir stenhårda efter en vecka. TIG/MIG/MMA.",sp:["Mjuka länge","TIG/MIG/MMA"],pr:"Kontakta",fm:["Styckvis"],di:[]},

// ══ 5. KAP & SLIP ══
{id:"kapskivor",n:"Kapskivor Perfectum Premium",cat:"Kap & Slip",r:5,e:"⚙️",c:"#a855f7",tags:["verkstad","svetsare","bygg"],box:"100st (2 lådor) → 50st",bonus:"25% rabatt: 49→34,95. FLEX 125 vinkelslip (1700kr) vid 2 lådor. Paket 4995:-. Bara ~10 kvar!",p:"Rhodius/Perfectum Premium — tysk superkvalité, motsvarar Tyrolit XGTS (världens bästa 2022). 20-40% bättre, samma pris som 2021, förbättrad 2025. Dubbel ythärdning — vobbar/splittras ej. Hydroteck — tål vatten/väte. 49kr/st. Plöjt igenom ett kylskåp!",sp:["20-40% längre vs Tyrolit","Hydroteck","Dubbel ythärdning","Förbättrad 2025","Samma pris som 2021"],pr:"49kr/st → 34,95 rabatt | Paket 4995:- inkl FLEX",fm:["125x0.8/1.0/1.5","180x1.5","230x1.9/2.5","50st/packe"],di:[{q:"125 eller 230?"},{q:"Slip?",lk:"slipskivor"},{q:"Lamell?",lk:"lamell"},{q:"Vision Pro?",lk:"visionpro"}],art:"6912510/515/6918015/6923019"},
{id:"slipskivor",n:"Slipskivor Ferox",cat:"Kap & Slip",r:5,e:"💿",c:"#9333ea",tags:["verkstad"],p:"Ferox — jämn finish, tysk kvalitet.",sp:["Ferox"],pr:"49kr/st",fm:["125x7.0","180x7.0","230x7.0"],di:[],art:"200451/442/466"},
{id:"lamell",n:"Lamellskivor",cat:"Kap & Slip",r:5,e:"🌀",c:"#7c3aed",tags:["verkstad"],p:"P40/P60/P80 i 125 och 180.",sp:["P40/P60/P80"],pr:"Kontakta",fm:["125/180"],di:[],art:"204015/018/021"},
{id:"visionpro",n:"Vision Pro Cool (Premium Lamell)",cat:"Kap & Slip",r:5,e:"🌟",c:"#eab308",tags:["verkstad","svetsare"],box:"10st → 5st",bonus:"Ord 279→189kr (32% rabatt). Ferox borrsats värd 3300kr.",p:"FÖRSTA I SVERIGE! Flygplanspropeller-design — 3 mellanrum = klar sikt + kylande slipning. Perfekt rostfritt/alu utan värme. Fastnar INTE i kanter.",sp:["Första i Sverige","Flygplanspropeller","Kylande slipning","Rostfritt/alu"],pr:"189kr/st (ord 279, 32% rabatt)",fm:["P40/P60/P80"],di:[{q:"Rostfritt/alu?"}]},

// ══ 6. SMÖRJFETT ══
{id:"smorjfett",n:"Smörjfett LX-Polar",cat:"Smörjfett",r:6,e:"🔧",c:"#f97316",tags:["verkstad"],box:"2 lådor (50 tuber) → 1 låda (25)",bonus:"Vid 2 lådor: GRATIS batterispruta 690 bar (4000-6000kr). 340000 sålda/år. Bransch 140-190kr → Perfectum 89kr.",p:"EP2 litiumkomplex, nordisk marknad, testat USA 2010. Pumpbarhet -33°C (andra -20). Droppunkt 260°C (andra 100-120). 220 centistoke (andra 50). Kladdfria Lube Shuttle-tuber skruvgänga. Vi representerade Castrol förut — detta är annan nivå. 340000 tuber/år!",sp:["EP2 litiumkomplex","-33°C pumpbarhet","260°C droppunkt","220 cst","340000 sålda/år","Lube Shuttle"],pr:"89kr/tub (bransch 140-190) | Maxi 99kr",fm:["LX 25 tuber","Maxi 50","Hugo Eff 0002 (skruv)"],di:[{q:"Vanligt/skruvgängat lock?"},{q:"Fettspruta?",lk:"fettspruta"}],art:"Hugo Eff 0002"},
{id:"fettspruta",n:"Fettspruta Batteri 690 bar",cat:"Smörjfett",r:6,e:"💉",c:"#ea580c",tags:["verkstad"],p:"690 bar (normalt 450). 100gr/min. Lube Shuttle — skruva fast, slipper kladda.",sp:["690 bar","100gr/min","Batteri"],pr:"4000-6000kr (GRATIS vid 2 lådor fett)",fm:["Batteridragen"],di:[]},

// ══ 7. RENGÖRING ══
{id:"vatservetter",n:"Våtservetter Unicleaner",cat:"Rengöring",r:7,e:"🧻",c:"#14b8a6",tags:["verkstad","åkeri"],box:"50st → 12st → 6st",p:"Slät+räfflad sida. Scrubs 299kr, våra 80kr. Torkar INTE ut! Frostar inte. Händer/verktyg/interiörer. Lagom blötta.",sp:["80kr (Scrubs 299)","Torkar inte ut","Frostar inte","Slät+räfflad"],pr:"~80kr/burk",fm:["50st","12st","6st"],di:[{q:"Kör ni Scrubs?"}]},

// ══ 8. KLÄDER ══
{id:"understall",n:"Underställ Millers Bambu",cat:"Kläder",r:8,e:"👕",c:"#059669",tags:["verkstad","bygg","åkeri"],p:"Bambu — andas (ull bara håller värmen), halva priset mot ull (>1500kr). Styckvis. Dam+herr.",sp:["Bambu","Halva priset","Styckvis","Dam+herr"],pr:"Under 750kr",fm:["Överdel","Underdel"],di:[{q:"Kör ni ull?"},{q:"Hur många?"}],art:"5212(H)/5307(D)"},
{id:"strumptjock",n:"Perfectum Dura (Tjock strumpa)",cat:"Kläder",r:8,e:"🧦",c:"#b45309",tags:["verkstad","bygg","åkeri"],box:"12 par → 6 par",p:"Rejäl arbetsstrumpa allround. Frotesula, kraftigt resår, sitter klockrent — glider inte runt. Håller sig på plats i stövlar.",sp:["Frotesula","Kraftigt resår","Glider inte","Stövlar"],pr:"89-99kr/par",fm:["Stl 35-38/39-42/43-46/47-50"],di:[{q:"Skostorlek?"},{q:"Hur många?"}],art:"69-(stl)"},
{id:"strumptunn",n:"Perfectum Dura Spring (Tunn)",cat:"Kläder",r:8,e:"🧦",c:"#16a34a",tags:["verkstad","bygg","åkeri"],box:"12→6",p:"Tunnare arbetssocka/funktionssocka. 80% cotton 15% poly 5% elastane. Tennissocka/fritid. Förstärkt tå och häl, vriststriktning. Funkar till vardags. Vår/sommar. Svart clean.",sp:["80% cotton","Funktion","Förstärkt tå/häl","Vår/sommar"],pr:"69-99kr/par (300st: 59kr eget tryck)",fm:["Stl 39-42/43-46/47-50"],di:[{q:"Tunna eller tjocka?"}],art:"69-10101"},

// ══ 9. SVETS ══
{id:"svetshjalm",n:"Svetshjälmar",cat:"Svets",r:9,e:"⚡",c:"#dc2626",tags:["svetsare"],p:"Automatisk mörkläggning, slipfunktion.",sp:["Automatisk"],pr:"Se katalog",fm:["Diverse"],di:[{q:"Hur många svetsare?"}]},
{id:"svetsmaskin",n:"Svetsmaskiner",cat:"Svets",r:9,e:"🔌",c:"#b91c1c",tags:["svetsare"],p:"TIG, MIG, MMA.",sp:["TIG/MIG/MMA"],pr:"Se katalog",fm:["Diverse"],di:[{q:"TIG, MIG eller pinne?"}]},
{id:"elektroder",n:"NC 312ER Super Speed",cat:"Svets",r:9,e:"⚡",c:"#991b1b",tags:["svetsare"],box:"16-20kg kartong → 4kg",p:"Optimala reparationselektroden. Rostfritt/fjäderstål/mangan/gjutstål. Sprickbeständig, korrosionsbeständig. Alla svetslägen, växel+likström. Jämnare båge, rent smält, klänger material. Lätt tänd. Syrafri/rostfri.",sp:["Alla svetslägen","Sprickbeständig","Rostfritt/fjäder/mangan/gjut","Lätt tänd"],pr:"2.00: 236kr(in)/599(ut)/680\n2.50: 165(in)/179(ut)\n3.25: 150(in)/449/221\n4.00: 160(in)",fm:["2.00x300 4kg","2.50x300 4kg","3.25x350 5kg","4.00x350 5kg"],di:[{q:"Vilken dimension?"}],art:"1612212/249250/244320/1614312"},
{id:"svetskl",n:"Svetskläder",cat:"Svets",r:9,e:"🧥",c:"#a21c1c",tags:["svetsare"],p:"Förkläden, ärmar, huvor.",sp:["Arbetsmiljökrav"],pr:"Se katalog",fm:["Diverse"],di:[]},

// ══ 10. MASKINER ══
{id:"flex",n:"Vinkelslip FLEX 125",cat:"Maskiner",r:10,e:"🔩",c:"#6366f1",tags:["verkstad"],p:"1010W, 11500 varv/min. Tyskt proffsmonster!",sp:["1010W","11500 varv"],pr:"~1700kr (bonus vid 2 lådor kap)",fm:["1st"],di:[],art:"4383"},
{id:"slangvindor",n:"Slangvindor Blubird",cat:"Maskiner",r:10,e:"🔄",c:"#475569",tags:["verkstad"],box:"2st → 1st",p:"Köln verktygsmässa 2025, tysk producent. Tillverkar bara åt bästa märkena. Perfectum-varumärke. 5 års garanti. Lättaste på marknaden. Tål solljus (normalt förstör slang). Olje/fett/dieselresistent. Flexibel i minus. 2 dimensioner vatten+luft per vinda.",sp:["Tysk producent, Köln 2025","5 års garanti","Lättaste","Tål solljus","Olje/fett/dieselresistent","Flexibel i minus"],pr:"Kontakta",fm:["Vatten","Luft","2 dimensioner/vinda"],di:[{q:"Har ni slangvindor?"},{q:"Tryckluft?"}]},
{id:"induktion",n:"Induktionsvärmare",cat:"Maskiner",r:10,e:"🌡️",c:"#9333ea",tags:["verkstad"],p:"Värmer bultar på sekunder — ingen brandrisk.",sp:["Sekunder","Säkert"],pr:"Kontakta",fm:["Diverse"],di:[{q:"Fastrostade bultar?"}]},
{id:"starthjalp",n:"Starthjälp RIMAC",cat:"Maskiner",r:10,e:"🚗",c:"#059669",tags:["åkeri","verkstad"],p:"RIMAC booster — personbilar till tungt.",sp:["RIMAC","Kompakt"],pr:"Se katalog",fm:["Diverse"],di:[]},
{id:"led",n:"LED-lampor",cat:"Maskiner",r:10,e:"💡",c:"#eab308",tags:["verkstad"],p:"Arbetslampor, ficklampor, pannlampor. Laddningsbara!",sp:["LED","Laddningsbar"],pr:"Kontakta",fm:["Diverse"],di:[]},

// ══ 11. VERKTYG ══
{id:"gangsats",n:"Gängsats Mannesmann 110 delar",cat:"Verktyg",r:11,e:"🔩",c:"#334155",tags:["verkstad"],p:"400 st inköpta. Mannesmann komplett 110 delar, M2-M18. 70 gängtappar (35 för + 35 sluttappar), olika stigningar. Gängsnitt, gängkloppshållare, gängkloppar, tappadepter. Värd 3000-3500kr, 10 års garanti — GRATIS vid köp 2x25L spolarvätska!",sp:["110 delar","M2-M18","70 gängtappar","10 års garanti","Värd 3000-3500kr"],pr:"GRATIS vid kampanj",fm:["Komplett sats"],di:[]},
{id:"handverktyg",n:"Handverktyg & Väskor",cat:"Verktyg",r:11,e:"🛠️",c:"#334155",tags:["verkstad","bygg"],p:"Nyckelsatser, tänger. Verktygsväska 94/108 delar ingår vid samarbete.",sp:["94/108-delarsväska"],pr:"Väska ingår",fm:["Satser"],di:[]},
{id:"sagblad",n:"Mandrex Tigersågblad",cat:"Verktyg",r:11,e:"🪚",c:"#64748b",tags:["verkstad","bygg"],p:"9 typer: 3X Fastcut, Multicut, Steelcut, Hardcut, Woodcut, Toughcut, Multicut Varia, Multicut Renovering, Ezygrind. Alla material.",sp:["9 typer","Trä/metall/sten/plast/stål"],pr:"Se prislista",fm:["Diverse (2st förp.)"],di:[{q:"Vilka material?"}]},
{id:"brandsack",n:"Brandsläckare",cat:"Verktyg",r:11,e:"🧯",c:"#ef4444",tags:["verkstad"],p:"Kontroll varje år, byte vart 5:e.",sp:["Årlig kontroll"],pr:"Kontakta",fm:["Diverse"],di:[]},
];

// Kundtyper
const CTYPES=[
{id:"verkstad",n:"🔧 Verkstad",ps:["sprayer","brake","smorjfett","kapskivor","handskar","ergotec","vatservetter","bamse"]},
{id:"svetsare",n:"⚡ Svetsare",ps:["kapskivor","slipskivor","svetshandske","svetshjalm","svetsmaskin","elektroder","sprayer","brake","visionpro"]},
{id:"åkeri",n:"🚛 Åkeri",ps:["spolar","glykol","adblue","handskar","aquaguard","vatservetter","citr","skumglans","starthjalp"]},
{id:"bygg",n:"🏗️ Bygg",ps:["handskar","ergotec","ducavinter","kapskivor","sprayer","understall","strumptjock","algfasad"]},
{id:"skog",n:"🌲 Skog",ps:["kedja","handskar","foamcut","sprayer","understall","strumptjock"]}
];

// Invändningar
const OBJ=[
{q:"Vi har redan leverantör",a:"Perfekt — vi kompletterar med det de inte har. Testa en handske!",w:"Tala inte illa"},
{q:"Skicka mejl",a:"Mejl hamnar bland hundra. Testpaket — 2 min att utvärdera?",w:"Bara maila"},
{q:"Inte intresserad",a:"De flesta säger så innan de sett. Köper ni handskar nånstans?",w:"Ge upp"},
{q:"Ingen budget",a:"Budget för förbrukningsvaror har ni redan — ni testar en produkt ni redan köper.",w:"Acceptera"},
{q:"Ring i augusti",a:"Skickar varuprov nu — du testar, vi stämmer av i augusti!",w:"Bara boka om"},
{q:"Inte beslutsfattare",a:"Vem bestämmer om inköp? Jag ringer rätt person.",w:"Avfärda"},
{q:"Får inte ta emot gåvor",a:"Inga gåvor — varuprover för utvärdering. Som Würth-tester.",w:"Insistera gåva"},
{q:"Vi har ramavtal",a:"Ramavtal täcker inte allt. Specifikt på handskar/kem? Komplettera!",w:"Bryta ramavtal"},
{q:"Skicka prislista",a:"Vilka 3 produkter mest? Skräddarsyr offert.",w:"Generisk PDF"},
{q:"Vi köper lokalt",a:"Vi sitter i Skövde — mer lokalt blir det inte!",w:"Argumentera"},
{q:"Låter för bra",a:"18 000 kunder, Skövde sedan 2017. Ingen hake.",w:"Bli defensiv"},
{q:"Vad är haken?",a:"Haken: vi räknar med att du gillar det. Inget avtal.",w:"Undvika"},
{q:"Har inte tid",a:"45 sek: vi levererar handskar, kem, verktyg. Vilken adress?",w:"Prata längre"},
{q:"Nöjda med leverantör",a:"Inte ersätta — vi är back-up som alltid har grejerna.",w:"Attackera"},
{q:"Tionde som ringer",a:"Skillnaden: jag ber inte köpa. Testpaket, du bestämmer.",w:"Ignorera"},
{q:"Ring chefen",a:"Vad heter chefen? Kan jag nämna att vi pratat?",w:"Inte ta namn"},
{q:"Bara huvudleverantörer",a:"Fortsätt! Vi kompletterar — det lilla varje vecka.",w:"Dag 1 huvud"},
{q:"För dyrt",a:"Jämfört med vad? Totalkostnad med leverans = billigare.",w:"Sänk direkt"},
{q:"Testade er förut",a:"Vad funkade inte? Vi gjort om en hel del.",w:"Förneka"},
{q:"Ska tänka",a:"Vad specifikt? Kanske jag kan hjälpa med info?",w:"Bara okej"},
{q:"Kör Biltema/Jula",a:"Levererar till dörren, faktura, bättre löpande.",w:"Tala illa"},
{q:"Vi är för små",a:"Perfekt! Exakt sådana vi jobbar med — 5-20 anställda.",w:"Köp mer"},
{q:"Litar inte telefonsäljare",a:"Köper det. Därför vill jag komma ut. En kvart?",w:"Bli kränkt"},
];

// Skämt
const JOKES=[
{cat:"🎤 Öppning",items:["Sitter du i grävarn?","Brödfödan ska ju in oavsett tid och väder!","Femte växeln!","Hoppas jag inte ringer mitt i fikat","Ännu en telefonförsäljare — men trevligaste idag!","Stör mitt i nåt viktigt? Typ googla semesterresor?"]},
{cat:"😅 Självdiss",items:["Min chef sa jag ska bli jobbig — jag gör mitt bästa!","Inget är gratis — men det här kommer nära","Lovar att inte ringa igen... förrän om 2 månader","Skövdes trevligaste telefonförsäljare"]},
{cat:"🎬 Avslut",items:["Svetsmaskin också va? Nej tänkte väl det!","Ska jag skicka Tesla? Skämt... eller?","Verktygsvagn 339 delar på det? Om du inte vill?"]},
{cat:"🔄 Comeback",items:["Bra! Testa handskarna — skämta mer nästa gång","Roligare än förra kunden — han la bara på","Den sparar jag!"]},
{cat:"⏰ Stressad",items:["30 sekunder, lovar","Kortare än reklamfilm","Halv minut bara"]},
];

// Status pipeline
const STATUSES=[
{id:"ny",l:"🟡 Ny kontakt",c:"#f59e0b"},
{id:"skickad",l:"📦 Skickad",c:"#3b82f6"},
{id:"uppfoljning",l:"📞 Uppföljning",c:"#8b5cf6"},
{id:"order",l:"✅ Första order",c:"#10b981"},
{id:"aterkommande",l:"🔄 Återkommande",c:"#059669"},
{id:"forlorad",l:"❌ Förlorad",c:"#6b7280"},
];
