/*
 * Translations for the debate video analytics project page (legislative-debate-details.html).
 * Each entry is the English text exactly as it appears on the page ("en") with its
 * European Portuguese ("pt") and Dutch ("nl") versions. Markup inside the text (links,
 * bold, icons) must stay the same in all three.
 * If you change English text on the page, change the matching "en" here too; until then
 * that piece simply shows in English. Anything without an entry stays in English.
 */

SiteI18n.add([
  {
    en: "Big Data Processing · Multimodal CV/NLP · Clustering &amp; Embeddings",
    pt: "Processamento de Big Data · CV/NLP multimodal · Clustering e embeddings",
    nl: "Big Data-verwerking · Multimodale CV/NLP · Clustering &amp; embeddings"
  },
  {
    en: "I completed this project during the 2024 legislative elections in Portugal as part of the <strong>Big Data Processing</strong> course. The goal was to analyze video frames from televised election debates and extract structured signals (<strong>objects</strong>, <strong>facial emotions</strong>, and <strong>frame embeddings</strong>) to study content and attempt to <strong>separate identities and scenes via clustering</strong>. The debate used for the project featured André Ventura and Mariana Mortágua. Final grade: <strong>8/10</strong>.",
    pt: "Fiz este projeto durante as eleições legislativas de 2024 em Portugal, no âmbito da unidade curricular de <strong>Processamento de Big Data</strong>. O objetivo era analisar fotogramas de debates eleitorais televisivos e extrair sinais estruturados (<strong>objetos</strong>, <strong>emoções faciais</strong> e <strong>embeddings dos fotogramas</strong>) para estudar o conteúdo e tentar <strong>separar identidades e cenas através de clustering</strong>. O debate usado no projeto foi entre André Ventura e Mariana Mortágua. Nota final: <strong>8/10</strong>.",
    nl: "Ik deed dit project tijdens de parlementsverkiezingen van 2024 in Portugal, als onderdeel van het vak <strong>Big Data Processing</strong>. Het doel was frames uit televisiedebatten voor de verkiezingen te analyseren en gestructureerde signalen te extraheren (<strong>objecten</strong>, <strong>gezichtsemoties</strong> en <strong>frame-embeddings</strong>) om de inhoud te bestuderen en te proberen <strong>identiteiten en scènes te scheiden met clustering</strong>. In het gebruikte debat stonden André Ventura en Mariana Mortágua tegenover elkaar. Eindcijfer: <strong>8/10</strong>."
  },
  {
    en: "Election debates contain repeating visual patterns (candidate close-ups, split screens, candidate + presenter shots). Our goal was to build a pipeline that:",
    pt: "Os debates eleitorais têm padrões visuais repetidos (grandes planos dos candidatos, ecrãs divididos, planos de candidato + apresentador). O nosso objetivo era construir uma pipeline que:",
    nl: "Verkiezingsdebatten bevatten terugkerende visuele patronen (close-ups van kandidaten, split screens, shots van kandidaat + presentator). Ons doel was een pipeline te bouwen die:"
  },
  {
    en: "Extracts <strong>frame-level features</strong> (detections, faces, text, emotion, embeddings)",
    pt: "Extrai <strong>características ao nível do fotograma</strong> (deteções, rostos, texto, emoção, embeddings)",
    nl: "<strong>features per frame</strong> extraheert (detecties, gezichten, tekst, emotie, embeddings)"
  },
  {
    en: "Uses <strong>embeddings</strong> to group visually similar frames/faces",
    pt: "Usa <strong>embeddings</strong> para agrupar fotogramas/rostos visualmente semelhantes",
    nl: "<strong>embeddings</strong> gebruikt om visueel vergelijkbare frames/gezichten te groeperen"
  },
  {
    en: "Applies clustering to separate <strong>candidates / presenter / mixed scenes</strong>",
    pt: "Aplica clustering para separar <strong>candidatos / apresentador / cenas mistas</strong>",
    nl: "clustering toepast om <strong>kandidaten / presentator / gemengde scènes</strong> te scheiden"
  },
  {
    en: "Visualizes results to validate whether clusters match real debate structure",
    pt: "Visualiza os resultados para validar se os clusters correspondem à estrutura real do debate",
    nl: "de resultaten visualiseert om te controleren of de clusters overeenkomen met de echte opbouw van het debat"
  },
  {
    en: "Approach",
    pt: "Abordagem",
    nl: "Aanpak"
  },
  {
    en: "1) Multimodal frame extraction",
    pt: "1) Extração multimodal por fotograma",
    nl: "1) Multimodale extractie per frame"
  },
  {
    en: "For each frame we extracted:",
    pt: "Para cada fotograma extraímos:",
    nl: "Per frame extraheerden we:"
  },
  {
    en: "<strong>Object detections</strong> (e.g., person, tie, TV, laptop)",
    pt: "<strong>Deteção de objetos</strong> (por exemplo, pessoa, gravata, TV, portátil)",
    nl: "<strong>Objectdetecties</strong> (bijv. persoon, stropdas, tv, laptop)"
  },
  {
    en: "<strong>Face crops + facial emotion recognition</strong> (FER categories like Neutral, Surprise, Sadness, etc.)",
    pt: "<strong>Recortes de rostos + reconhecimento de emoções faciais</strong> (categorias FER como neutro, surpresa, tristeza, etc.)",
    nl: "<strong>Gezichtsuitsneden + herkenning van gezichtsemoties</strong> (FER-categorieën zoals neutraal, verrassing, verdriet, enz.)"
  },
  {
    en: "<strong>OCR text</strong> (when available)",
    pt: "<strong>Texto por OCR</strong> (quando disponível)",
    nl: "<strong>OCR-tekst</strong> (indien beschikbaar)"
  },
  {
    en: "<strong>Embeddings</strong> to represent frames/faces for clustering and retrieval",
    pt: "<strong>Embeddings</strong> para representar fotogramas/rostos no clustering e na pesquisa",
    nl: "<strong>Embeddings</strong> om frames/gezichten te representeren voor clustering en retrieval"
  },
  {
    en: "2) Candidate/scene identification via embeddings + clustering",
    pt: "2) Identificação de candidatos/cenas com embeddings + clustering",
    nl: "2) Kandidaten en scènes herkennen met embeddings + clustering"
  },
  {
    en: "To estimate which frames correspond to which person/scene, we used embeddings and clustering.",
    pt: "Para estimar que fotogramas correspondem a cada pessoa/cena, usámos embeddings e clustering.",
    nl: "Om te schatten welke frames bij welke persoon of scène horen, gebruikten we embeddings en clustering."
  },
  {
    en: "Expected number of clusters:",
    pt: "Número de clusters esperado:",
    nl: "Verwacht aantal clusters:"
  },
  {
    en: "Because debates typically contain recurring shot types:",
    pt: "Porque os debates costumam ter tipos de plano recorrentes:",
    nl: "Omdat debatten meestal terugkerende soorten shots hebben:"
  },
  {
    en: "Candidate A alone",
    pt: "Candidato A sozinho",
    nl: "Kandidaat A alleen"
  },
  {
    en: "Candidate B alone",
    pt: "Candidato B sozinho",
    nl: "Kandidaat B alleen"
  },
  {
    en: "Presenter alone",
    pt: "Apresentador sozinho",
    nl: "Presentator alleen"
  },
  {
    en: "Candidate A + presenter",
    pt: "Candidato A + apresentador",
    nl: "Kandidaat A + presentator"
  },
  {
    en: "Candidate B + presenter",
    pt: "Candidato B + apresentador",
    nl: "Kandidaat B + presentator"
  },
  {
    en: "Multi-person / “everyone” / split-screen shots",
    pt: "Planos com várias pessoas / “todos” / ecrã dividido",
    nl: "Shots met meerdere personen / “iedereen” / split screen"
  },
  {
    en: "3) Choosing K (Elbow Method)",
    pt: "3) Escolher K (método do cotovelo)",
    nl: "3) K kiezen (elleboogmethode)"
  },
  {
    en: "We applied the <strong>elbow method</strong> to estimate a reasonable number of clusters for K-Means: we look for the point where increasing <em>k</em> yields diminishing returns in within-cluster distortion.",
    pt: "Aplicámos o <strong>método do cotovelo</strong> para estimar um número razoável de clusters para o K-Means: procuramos o ponto a partir do qual aumentar <em>k</em> traz ganhos cada vez menores na distorção dentro dos clusters.",
    nl: "We pasten de <strong>elleboogmethode</strong> toe om een redelijk aantal clusters voor K-Means te schatten: we zoeken het punt waarop een grotere <em>k</em> steeds minder winst oplevert in de distortie binnen de clusters."
  },
  {
    en: "Elbow method curve used to estimate the number of clusters.",
    pt: "Curva do método do cotovelo usada para estimar o número de clusters.",
    nl: "Curve van de elleboogmethode, gebruikt om het aantal clusters te schatten."
  },
  {
    en: "4) Clustering algorithms explored",
    pt: "4) Algoritmos de clustering explorados",
    nl: "4) Onderzochte clusteringalgoritmen"
  },
  {
    en: "<strong>K-Means</strong>: used with the elbow method to pick the number of clusters",
    pt: "<strong>K-Means</strong>: usado com o método do cotovelo para escolher o número de clusters",
    nl: "<strong>K-Means</strong>: gebruikt met de elleboogmethode om het aantal clusters te kiezen"
  },
  {
    en: "<strong>Spectral Clustering</strong>: produced a strong, stable separation in practice",
    pt: "<strong>Spectral Clustering</strong>: na prática, produziu uma separação forte e estável",
    nl: "<strong>Spectral Clustering</strong>: gaf in de praktijk een sterke, stabiele scheiding"
  },
  {
    en: "<strong>DBSCAN</strong>: identified outliers (noise), but was sensitive to parameters and tended to create too many clusters",
    pt: "<strong>DBSCAN</strong>: identificou outliers (ruído), mas era sensível aos parâmetros e tendia a criar demasiados clusters",
    nl: "<strong>DBSCAN</strong>: vond uitschieters (ruis), maar was gevoelig voor parameters en maakte vaak te veel clusters"
  },
  {
    en: "<strong>Isolation Forest</strong>: used for outlier detection / preprocessing (not clustering itself), which affected downstream clustering outcomes",
    pt: "<strong>Isolation Forest</strong>: usado para deteção de outliers / pré-processamento (não é clustering em si), o que afetou os resultados do clustering seguinte",
    nl: "<strong>Isolation Forest</strong>: gebruikt voor detectie van uitschieters / preprocessing (geen clustering op zich), wat de latere clusteringresultaten beïnvloedde"
  },
  {
    en: "<strong>t-SNE visualization</strong>: used to project high-dimensional embeddings to 2D for interpretability and qualitative validation of cluster structure",
    pt: "<strong>Visualização t-SNE</strong>: usada para projetar embeddings de alta dimensão em 2D, para interpretação e validação qualitativa da estrutura dos clusters",
    nl: "<strong>t-SNE-visualisatie</strong>: gebruikt om hoogdimensionale embeddings naar 2D te projecteren, voor interpretatie en kwalitatieve validatie van de clusterstructuur"
  },
  {
    en: "Results &amp; Visual Diagnostics",
    pt: "Resultados e diagnósticos visuais",
    nl: "Resultaten &amp; visuele diagnostiek"
  },
  {
    en: "Emotion and object statistics",
    pt: "Estatísticas de emoções e objetos",
    nl: "Statistieken van emoties en objecten"
  },
  {
    en: "Example frames annotated with face landmarks, pose and detection overlays.",
    pt: "Exemplos de fotogramas anotados com pontos faciais, pose e deteções sobrepostas.",
    nl: "Voorbeeldframes met gezichtspunten, pose en detecties als overlay."
  },
  {
    en: "Spectral clustering (strong baseline)",
    pt: "Spectral clustering (referência forte)",
    nl: "Spectral clustering (sterke baseline)"
  },
  {
    en: "Spectral clustering produced a <strong>reliable division</strong> of embeddings into visually consistent groups, aligning well with repeated debate shot patterns.",
    pt: "O spectral clustering produziu uma <strong>divisão fiável</strong> dos embeddings em grupos visualmente coerentes, alinhada com os padrões de planos que se repetem no debate.",
    nl: "Spectral clustering gaf een <strong>betrouwbare indeling</strong> van de embeddings in visueel samenhangende groepen, die goed aansloot bij de terugkerende shotpatronen van het debat."
  },
  {
    en: "Spectral clustering results with representative frame grids.",
    pt: "Resultados do spectral clustering com grelhas de fotogramas representativos.",
    nl: "Resultaten van spectral clustering met rasters van representatieve frames."
  },
  {
    en: "DBSCAN (best outlier handling, but over-clustered)",
    pt: "DBSCAN (melhor a lidar com outliers, mas com clusters a mais)",
    nl: "DBSCAN (beste omgang met uitschieters, maar te veel clusters)"
  },
  {
    en: "DBSCAN was <strong>even better at identifying outliers</strong> (noise points), but it <strong>over-segmented</strong> into too many clusters. It probably needed a tighter parameter search (eps/min_samples) to match the expected debate structure.",
    pt: "O DBSCAN foi <strong>ainda melhor a identificar outliers</strong> (pontos de ruído), mas <strong>segmentou em excesso</strong>, com demasiados clusters. Provavelmente exigiria uma pesquisa de parâmetros mais apertada (eps/min_samples) para corresponder à estrutura esperada do debate.",
    nl: "DBSCAN was <strong>nog beter in het vinden van uitschieters</strong> (ruispunten), maar <strong>segmenteerde te fijn</strong>, in te veel clusters. Waarschijnlijk is een nauwkeurigere zoektocht naar parameters (eps/min_samples) nodig om bij de verwachte debatstructuur te passen."
  },
  {
    en: "DBSCAN clustering visualization with noisy/outlier points.",
    pt: "Visualização do clustering DBSCAN com pontos de ruído/outliers.",
    nl: "Visualisatie van DBSCAN-clustering met ruis- en uitschieterpunten."
  },
  {
    en: "Isolation Forest (outlier preprocessing, fewer clusters)",
    pt: "Isolation Forest (pré-processamento de outliers, menos clusters)",
    nl: "Isolation Forest (preprocessing van uitschieters, minder clusters)"
  },
  {
    en: "Isolation Forest helped detect outliers, but in our case it resulted in fewer clusters than expected (some shot types were merged). Despite that, the key candidates/scenes were still recognizable.",
    pt: "O Isolation Forest ajudou a detetar outliers, mas no nosso caso resultou em menos clusters do que o esperado (alguns tipos de plano foram juntos). Mesmo assim, os principais candidatos/cenas continuaram reconhecíveis.",
    nl: "Isolation Forest hielp uitschieters te vinden, maar leverde in ons geval minder clusters op dan verwacht (sommige soorten shots werden samengevoegd). Toch bleven de belangrijkste kandidaten en scènes herkenbaar."
  },
  {
    en: "Isolation Forest preprocessing with cluster visualization.",
    pt: "Pré-processamento com Isolation Forest e visualização dos clusters.",
    nl: "Preprocessing met Isolation Forest en visualisatie van de clusters."
  },
  {
    en: "This project gave me hands-on experience building a <strong>multimodal data pipeline</strong>, using <strong>embeddings for unsupervised identification</strong>, and validating clustering quality through both <strong>quantitative heuristics</strong> (elbow method, parameter tuning) and <strong>visual diagnostics</strong> (t-SNE + cluster image grids).",
    pt: "Este projeto deu-me experiência prática a construir uma <strong>pipeline de dados multimodal</strong>, a usar <strong>embeddings para identificação não supervisionada</strong> e a validar a qualidade do clustering com <strong>heurísticas quantitativas</strong> (método do cotovelo, afinação de parâmetros) e <strong>diagnósticos visuais</strong> (t-SNE + grelhas de imagens por cluster).",
    nl: "Dit project gaf me praktijkervaring met het bouwen van een <strong>multimodale datapipeline</strong>, het gebruik van <strong>embeddings voor identificatie zonder supervisie</strong> en het valideren van de clusteringkwaliteit met zowel <strong>kwantitatieve heuristieken</strong> (elleboogmethode, parametertuning) als <strong>visuele diagnostiek</strong> (t-SNE + afbeeldingsrasters per cluster)."
  },
  {
    en: "Qualitative identity check",
    pt: "Verificação qualitativa das identidades",
    nl: "Kwalitatieve identiteitscontrole"
  },
  {
    en: "Using embedding-based clustering, the system identified the two candidates correctly <strong>the majority of the time</strong>, especially in stable close-up shots.",
    pt: "Com clustering baseado em embeddings, o sistema identificou corretamente os dois candidatos <strong>na maioria dos casos</strong>, sobretudo em grandes planos estáveis.",
    nl: "Met clustering op basis van embeddings herkende het systeem de twee kandidaten <strong>meestal</strong> correct, vooral in stabiele close-ups."
  },
  {
    en: "Mariana Mortágua frame cluster example showing consistent close-up shots.",
    pt: "Exemplo de cluster de fotogramas de Mariana Mortágua, com grandes planos consistentes.",
    nl: "Voorbeeld van een framecluster van Mariana Mortágua met consistente close-ups."
  },
  {
    en: "André Ventura frame cluster example highlighting stable identity grouping.",
    pt: "Exemplo de cluster de fotogramas de André Ventura, com um agrupamento de identidade estável.",
    nl: "Voorbeeld van een framecluster van André Ventura met een stabiele groepering per identiteit."
  },
  {
    en: "<strong>Category</strong> Big Data Processing",
    pt: "<strong>Categoria</strong> Processamento de Big Data",
    nl: "<strong>Categorie</strong> Big Data-verwerking"
  },
  {
    en: "<strong>Methods</strong> Multimodal CV/NLP, Clustering, Embeddings",
    pt: "<strong>Métodos</strong> CV/NLP multimodal, clustering, embeddings",
    nl: "<strong>Methoden</strong> Multimodale CV/NLP, clustering, embeddings"
  },
  {
    en: "<strong>Course</strong> Big Data Processing",
    pt: "<strong>Unidade curricular</strong> Processamento de Big Data",
    nl: "<strong>Vak</strong> Big Data Processing"
  },
  {
    en: "Year",
    pt: "Ano",
    nl: "Jaar"
  },
  {
    en: "Elbow method for K selection",
    pt: "Método do cotovelo para escolher K",
    nl: "Elleboogmethode om K te kiezen"
  },
  {
    en: "Debate frames annotated with face-landmark and detection overlays",
    pt: "Fotogramas do debate anotados com pontos faciais e deteções sobrepostas",
    nl: "Debatframes met gezichtspunten en detecties als overlay"
  },
  {
    en: "Spectral clustering with image grid",
    pt: "Spectral clustering com grelha de imagens",
    nl: "Spectral clustering met afbeeldingsraster"
  },
  {
    en: "DBSCAN cluster visualization",
    pt: "Visualização dos clusters DBSCAN",
    nl: "Visualisatie van DBSCAN-clusters"
  },
  {
    en: "Isolation Forest clustering visualization",
    pt: "Visualização do clustering com Isolation Forest",
    nl: "Visualisatie van clustering met Isolation Forest"
  },
  {
    en: "Mariana Mortágua candidate frames",
    pt: "Fotogramas da candidata Mariana Mortágua",
    nl: "Frames van kandidaat Mariana Mortágua"
  },
  {
    en: "André Ventura candidate frames",
    pt: "Fotogramas do candidato André Ventura",
    nl: "Frames van kandidaat André Ventura"
  },
  {
    en: "Legislative Debate Video Analytics | Madalena Barros",
    pt: "Análise de vídeo de debates legislativos | Madalena Barros",
    nl: "Videoanalyse van verkiezingsdebatten | Madalena Barros"
  }
]);
