/*
 * Translations for the Milky Way radio astronomy project page (modern-astro-project.html).
 * Each entry is the English text exactly as it appears on the page ("en") with its
 * European Portuguese ("pt") and Dutch ("nl") versions. Markup inside the text (links,
 * bold, icons) must stay the same in all three.
 * If you change English text on the page, change the matching "en" here too; until then
 * that piece simply shows in English. Anything without an entry stays in English.
 */

SiteI18n.add([
  {
    en: "Mapping the Milky Way",
    pt: "Mapear a Via Láctea",
    nl: "De Melkweg in kaart"
  },
  {
    en: "Mapping the Milky Way with SALSA",
    pt: "Mapear a Via Láctea com o SALSA",
    nl: "De Melkweg in kaart brengen met SALSA"
  },
  {
    en: "Radio Astronomy · Signal Processing · MATLAB",
    pt: "Radioastronomia · Processamento de Sinal · MATLAB",
    nl: "Radioastronomie · Signaalverwerking · MATLAB"
  },
  {
    en: "For the Modern Astrophysics course at <strong>Chalmers University of Technology</strong>, I used <strong>SALSA</strong>, a 2.3&nbsp;m radio telescope at <strong>Onsala Space Observatory</strong>, to observe the 21&nbsp;cm line of neutral hydrogen across the plane of the Galaxy. From the Doppler shift of that line I measured the <strong>Milky Way's rotation curve</strong> and built a <strong>face-on map</strong> of its hydrogen clouds.",
    pt: "Na unidade curricular de Modern Astrophysics da <strong>Chalmers University of Technology</strong>, usei o <strong>SALSA</strong>, um radiotelescópio de 2,3&nbsp;m do <strong>Observatório Espacial de Onsala</strong>, para observar a risca de 21&nbsp;cm do hidrogénio neutro ao longo do plano da Galáxia. A partir do desvio Doppler dessa risca, medi a <strong>curva de rotação da Via Láctea</strong> e construí um <strong>mapa visto de cima</strong> das suas nuvens de hidrogénio.",
    nl: "Voor het vak Modern Astrophysics aan de <strong>Chalmers University of Technology</strong> gebruikte ik <strong>SALSA</strong>, een radiotelescoop van 2,3&nbsp;m bij <strong>Onsala Space Observatory</strong>, om de 21&nbsp;cm-lijn van neutraal waterstof langs het vlak van de Melkweg waar te nemen. Uit de dopplerverschuiving van die lijn heb ik de <strong>rotatiecurve van de Melkweg</strong> gemeten en een <strong>kaart van bovenaf</strong> van de waterstofwolken gemaakt."
  },
  {
    en: "Why hydrogen",
    pt: "Porquê o hidrogénio",
    nl: "Waarom waterstof"
  },
  {
    en: "Neutral hydrogen fills the Galactic disc and emits faintly at 1420&nbsp;MHz. Gas moving towards us shifts the line to higher frequencies and gas moving away shifts it lower, so each peak in a spectrum gives the speed of a hydrogen cloud along the line of sight.",
    pt: "O hidrogénio neutro enche o disco da Galáxia e emite fracamente a 1420&nbsp;MHz. O gás que se aproxima desloca a risca para frequências mais altas e o gás que se afasta desloca-a para frequências mais baixas, por isso cada pico de um espetro dá a velocidade de uma nuvem de hidrogénio na linha de visão.",
    nl: "Neutraal waterstof vult de schijf van de Melkweg en zendt zwak uit op 1420&nbsp;MHz. Gas dat naar ons toe beweegt, verschuift de lijn naar hogere frequenties en gas dat van ons af beweegt naar lagere, dus elke piek in een spectrum geeft de snelheid van een waterstofwolk langs de gezichtslijn."
  },
  {
    en: "What I did",
    pt: "O que fiz",
    nl: "Wat ik heb gedaan"
  },
  {
    en: "<strong>Observations:</strong> spectra in frequency-switching mode (256 channels, 2.5&nbsp;MHz bandwidth, 20&nbsp;s integrations) at Galactic longitudes from 16° to 190°.",
    pt: "<strong>Observações:</strong> espetros em modo de comutação de frequência (256 canais, largura de banda de 2,5&nbsp;MHz, integrações de 20&nbsp;s) em longitudes galácticas de 16° a 190°.",
    nl: "<strong>Waarnemingen:</strong> spectra in frequency-switchingmodus (256 kanalen, 2,5&nbsp;MHz bandbreedte, integraties van 20&nbsp;s) op galactische lengtes van 16° tot 190°."
  },
  {
    en: "<strong>Signal processing:</strong> baseline subtraction on every spectrum in MATLAB, then Gaussian fits to the hydrogen peaks to measure their velocities precisely.",
    pt: "<strong>Processamento de sinal:</strong> subtração da linha de base em cada espetro, em MATLAB, e depois ajustes gaussianos aos picos de hidrogénio para medir as suas velocidades com precisão.",
    nl: "<strong>Signaalverwerking:</strong> basislijnaftrek op elk spectrum in MATLAB, daarna gaussische fits op de waterstofpieken om hun snelheden nauwkeurig te meten."
  },
  {
    en: "<strong>Rotation curve:</strong> the tangent-point method on 24 directions between 18° and 110°, with the Sun 8.5&nbsp;kpc from the Galactic centre and orbiting at 220&nbsp;km/s.",
    pt: "<strong>Curva de rotação:</strong> o método do ponto tangente em 24 direções entre 18° e 110°, com o Sol a 8,5&nbsp;kpc do centro da Galáxia e a orbitar a 220&nbsp;km/s.",
    nl: "<strong>Rotatiecurve:</strong> de raakpuntmethode in 24 richtingen tussen 18° en 110°, met de zon op 8,5&nbsp;kpc van het galactisch centrum en een baansnelheid van 220&nbsp;km/s."
  },
  {
    en: "<strong>Map:</strong> about 125 velocity peaks converted into distances and then into positions for a top-down view of the Galaxy.",
    pt: "<strong>Mapa:</strong> cerca de 125 picos de velocidade convertidos em distâncias e depois em posições, para uma vista de cima da Galáxia.",
    nl: "<strong>Kaart:</strong> ongeveer 125 snelheidspieken omgezet in afstanden en daarna in posities, voor een blik van bovenaf op de Melkweg."
  },
  {
    en: "Results",
    pt: "Resultados",
    nl: "Resultaten"
  },
  {
    en: "The rotation velocity climbs to about 180&nbsp;km/s within 3.2&nbsp;kpc of the Galactic centre and then stays roughly flat, mostly between 190 and 227&nbsp;km/s, out to 8.5&nbsp;kpc. If visible matter were all there is, the velocity would drop at larger radii. The flat curve points to unseen mass, usually attributed to dark matter, and matches the curves measured for other spiral galaxies.",
    pt: "A velocidade de rotação sobe até cerca de 180&nbsp;km/s nos primeiros 3,2&nbsp;kpc a partir do centro da Galáxia e depois mantém-se quase constante, sobretudo entre 190 e 227&nbsp;km/s, até 8,5&nbsp;kpc. Se só existisse a matéria visível, a velocidade cairia a raios maiores. A curva plana aponta para massa que não vemos, normalmente atribuída à matéria escura, e é semelhante às curvas medidas noutras galáxias espirais.",
    nl: "De rotatiesnelheid loopt binnen 3,2&nbsp;kpc van het galactisch centrum op tot ongeveer 180&nbsp;km/s en blijft daarna vrijwel vlak, meestal tussen 190 en 227&nbsp;km/s, tot 8,5&nbsp;kpc. Als er alleen zichtbare materie was, zou de snelheid op grotere afstand dalen. De vlakke curve wijst op onzichtbare massa, meestal toegeschreven aan donkere materie, en komt overeen met de curves die voor andere spiraalstelsels zijn gemeten."
  },
  {
    en: "Rotation curve measured with SALSA: orbital velocity against distance from the Galactic centre.",
    pt: "Curva de rotação medida com o SALSA: velocidade orbital em função da distância ao centro da Galáxia.",
    nl: "Rotatiecurve gemeten met SALSA: baansnelheid uitgezet tegen de afstand tot het galactisch centrum."
  },
  {
    en: "The face-on map places each hydrogen cloud at its derived position. Some points fall off the expected spiral arms, partly because the map takes a single distance for each cloud.",
    pt: "O mapa visto de cima coloca cada nuvem de hidrogénio na posição calculada. Alguns pontos ficam fora dos braços espirais esperados, em parte porque o mapa usa uma única distância para cada nuvem.",
    nl: "De kaart van bovenaf zet elke waterstofwolk op de berekende positie. Sommige punten vallen buiten de verwachte spiraalarmen, deels omdat de kaart voor elke wolk één afstand aanneemt."
  },
  {
    en: "Face-on map of the hydrogen clouds, built from about 125 velocity peaks.",
    pt: "Mapa visto de cima das nuvens de hidrogénio, construído a partir de cerca de 125 picos de velocidade.",
    nl: "Kaart van bovenaf van de waterstofwolken, gemaakt op basis van ongeveer 125 snelheidspieken."
  },
  {
    en: "Near or far?",
    pt: "Perto ou longe?",
    nl: "Dichtbij of ver weg?"
  },
  {
    en: "Inside the Sun's orbit, one velocity can match two distances along the same line of sight. Observing the same direction slightly above the Galactic plane tells them apart: clouds that fade are far away, and clouds that stay bright are near. I tested this at longitude 45°, where three of the four hydrogen peaks had two possible distances.",
    pt: "Dentro da órbita do Sol, a mesma velocidade pode corresponder a duas distâncias na mesma linha de visão. Observar a mesma direção um pouco acima do plano da Galáxia permite distingui-las: as nuvens que perdem brilho estão longe e as que continuam brilhantes estão perto. Testei isto na longitude 45°, onde três dos quatro picos de hidrogénio tinham duas distâncias possíveis.",
    nl: "Binnen de baan van de zon kan één snelheid bij twee afstanden op dezelfde gezichtslijn horen. Door dezelfde richting iets boven het vlak van de Melkweg waar te nemen, zijn ze uit elkaar te halen: wolken die vervagen staan ver weg en wolken die helder blijven staan dichtbij. Ik heb dit getest op lengte 45°, waar drie van de vier waterstofpieken twee mogelijke afstanden hadden."
  },
  {
    en: "<strong>Category</strong> Radio Astronomy",
    pt: "<strong>Categoria</strong> Radioastronomia",
    nl: "<strong>Categorie</strong> Radioastronomie"
  },
  {
    en: "<strong>Course</strong> Modern Astrophysics (RRY125)",
    pt: "<strong>Unidade curricular</strong> Modern Astrophysics (RRY125)",
    nl: "<strong>Vak</strong> Modern Astrophysics (RRY125)"
  },
  {
    en: "<strong>University</strong> Chalmers University of Technology",
    pt: "<strong>Universidade</strong> Chalmers University of Technology",
    nl: "<strong>Universiteit</strong> Chalmers University of Technology"
  },
  {
    en: "<strong>Telescope</strong> SALSA, 2.3&nbsp;m, Onsala Space Observatory",
    pt: "<strong>Telescópio</strong> SALSA, 2,3&nbsp;m, Observatório Espacial de Onsala",
    nl: "<strong>Telescoop</strong> SALSA, 2,3&nbsp;m, Onsala Space Observatory"
  },
  {
    en: "<strong>Tools</strong> MATLAB",
    pt: "<strong>Ferramentas</strong> MATLAB",
    nl: "<strong>Software</strong> MATLAB"
  },
  {
    en: "<strong>Date</strong> December 2024",
    pt: "<strong>Data</strong> dezembro de 2024",
    nl: "<strong>Datum</strong> december 2024"
  },
  {
    en: "Project Resources",
    pt: "Recursos do projeto",
    nl: "Projectbronnen"
  },
  {
    en: "<i class=\"bi bi-file-pdf\" aria-hidden=\"true\"></i> Open Report (PDF)",
    pt: "<i class=\"bi bi-file-pdf\" aria-hidden=\"true\"></i> Abrir o relatório (PDF)",
    nl: "<i class=\"bi bi-file-pdf\" aria-hidden=\"true\"></i> Rapport openen (pdf)"
  },
  {
    en: "<i class=\"bi bi-download\" aria-hidden=\"true\"></i> Download Report",
    pt: "<i class=\"bi bi-download\" aria-hidden=\"true\"></i> Descarregar o relatório",
    nl: "<i class=\"bi bi-download\" aria-hidden=\"true\"></i> Rapport downloaden"
  },
  {
    en: "PDF, 12 pages, 1.9 MB",
    pt: "PDF, 12 páginas, 1,9 MB",
    nl: "Pdf, 12 pagina's, 1,9 MB"
  },
  {
    en: "Rotation curve: velocity rises from about 86 km/s at 2.6 kpc to about 180 km/s at 3.2 kpc, then stays mostly between about 190 and 227 km/s out to 8.5 kpc",
    pt: "Curva de rotação: a velocidade sobe de cerca de 86 km/s a 2,6 kpc para cerca de 180 km/s a 3,2 kpc e depois mantém-se sobretudo entre cerca de 190 e 227 km/s até 8,5 kpc",
    nl: "Rotatiecurve: de snelheid stijgt van ongeveer 86 km/s bij 2,6 kpc tot ongeveer 180 km/s bij 3,2 kpc en blijft daarna meestal tussen ongeveer 190 en 227 km/s tot 8,5 kpc"
  },
  {
    en: "Top-down scatter plot of the hydrogen clouds in the Galactic disc, with distances in kiloparsecs",
    pt: "Gráfico de dispersão, visto de cima, das nuvens de hidrogénio no disco da Galáxia, com distâncias em quiloparsecs",
    nl: "Spreidingsdiagram van bovenaf van de waterstofwolken in de schijf van de Melkweg, met afstanden in kiloparsec"
  },
  {
    en: "Mapping the Milky Way with SALSA - Portfolio Details",
    pt: "Mapear a Via Láctea com o SALSA | Detalhes do projeto",
    nl: "De Melkweg in kaart brengen met SALSA | Projectdetails"
  },
  {
    en: "The directions I observed for the rotation curve, drawn from the Sun. Background image: NASA/JPL-Caltech/R.&nbsp;Hurt.",
    pt: "As direções que observei para a curva de rotação, traçadas a partir do Sol. Imagem de fundo: NASA/JPL-Caltech/R.&nbsp;Hurt.",
    nl: "De richtingen die ik voor de rotatiecurve heb waargenomen, getekend vanaf de zon. Achtergrond: NASA/JPL-Caltech/R.&nbsp;Hurt."
  },
  {
    en: "The Milky Way seen from above, with blue lines from the Sun showing the directions observed with SALSA",
    pt: "A Via Láctea vista de cima, com linhas azuis a partir do Sol que mostram as direções observadas com o SALSA",
    nl: "De Melkweg van bovenaf gezien, met blauwe lijnen vanaf de zon die de met SALSA waargenomen richtingen tonen"
  }
]);
