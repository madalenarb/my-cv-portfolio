/*
 * Translations for the building extraction project page (building-extraction-details.html).
 * Each entry is the English text exactly as it appears on the page ("en") with its
 * European Portuguese ("pt") and Dutch ("nl") versions. Markup inside the text (links,
 * bold, icons) must stay the same in all three.
 * If you change English text on the page, change the matching "en" here too; until then
 * that piece simply shows in English. Anything without an entry stays in English.
 */

SiteI18n.add([
  {
    en: "IEEE BigData Cup Building Extraction",
    pt: "Extração de edifícios na IEEE BigData Cup",
    nl: "Gebouwextractie voor de IEEE BigData Cup"
  },
  {
    en: "Building Footprint Extraction using YOLOv8",
    pt: "Extração de contornos de edifícios com YOLOv8",
    nl: "Extractie van gebouwcontouren met YOLOv8"
  },
  {
    en: "Computer Vision · Instance Segmentation · Geospatial AI",
    pt: "Visão Computacional · Segmentação de Instâncias · IA Geoespacial",
    nl: "Computer Vision · Instance-segmentatie · Geospatiale AI"
  },
  {
    en: "This project focuses on extracting <strong>building footprints from aerial imagery</strong> for the <strong>IEEE BigData Cup 2024</strong>. The objective was to generate a single submission file where each image is matched with the polygons of every detected building, so the output captures not just location but also the building's shape.",
    pt: "Este projeto foca-se na extração de <strong>contornos de edifícios a partir de imagens aéreas</strong> para a <strong>IEEE BigData Cup 2024</strong>. O objetivo era gerar um único ficheiro de submissão em que cada imagem fosse associada aos polígonos de todos os edifícios detetados, para que o resultado captasse não só a localização mas também a forma de cada edifício.",
    nl: "Dit project draait om het extraheren van <strong>gebouwcontouren uit luchtfoto's</strong> voor de <strong>IEEE BigData Cup 2024</strong>. Het doel was één inzendingsbestand te maken waarin elke afbeelding gekoppeld is aan de polygonen van alle gedetecteerde gebouwen, zodat de output niet alleen de locatie maar ook de vorm van elk gebouw vastlegt."
  },
  {
    en: "Each prediction had to follow the competition format:",
    pt: "Cada previsão tinha de seguir o formato da competição:",
    nl: "Elke voorspelling moest het formaat van de competitie volgen:"
  },
  {
    en: "<strong>ImageID</strong> - the identifier of the test image",
    pt: "<strong>ImageID</strong>: o identificador da imagem de teste",
    nl: "<strong>ImageID</strong>: de identificatie van de testafbeelding"
  },
  {
    en: "<strong>Coordinates</strong> - a stringified list of polygon points representing the detected buildings",
    pt: "<strong>Coordinates</strong>: uma lista, em texto, dos pontos dos polígonos que representam os edifícios detetados",
    nl: "<strong>Coordinates</strong>: een lijst van polygoonpunten als tekst, die de gedetecteerde gebouwen weergeven"
  },
  {
    en: "That makes this a combined <strong>object detection + instance segmentation</strong> task. Detecting a building with a box was not enough; the model needed to trace each footprint accurately enough to create usable polygons.",
    pt: "Isto torna-a uma tarefa combinada de <strong>deteção de objetos + segmentação de instâncias</strong>. Detetar um edifício com uma caixa não chegava: o modelo tinha de traçar cada contorno com precisão suficiente para criar polígonos utilizáveis.",
    nl: "Daarmee is het een gecombineerde taak van <strong>objectdetectie + instance-segmentatie</strong>. Een gebouw met een box detecteren was niet genoeg: het model moest elke contour nauwkeurig genoeg volgen om bruikbare polygonen te maken."
  },
  {
    en: "Model Choice &amp; Justification",
    pt: "Escolha do modelo e justificação",
    nl: "Modelkeuze &amp; onderbouwing"
  },
  {
    en: "I selected <strong>YOLOv8n-Seg</strong> from Ultralytics because it gave the best balance between <strong>segmentation quality</strong> and <strong>hardware constraints</strong>.",
    pt: "Escolhi o <strong>YOLOv8n-Seg</strong> da Ultralytics porque oferecia o melhor equilíbrio entre <strong>qualidade de segmentação</strong> e <strong>limitações de hardware</strong>.",
    nl: "Ik koos <strong>YOLOv8n-Seg</strong> van Ultralytics omdat het de beste balans bood tussen <strong>segmentatiekwaliteit</strong> en <strong>hardwarebeperkingen</strong>."
  },
  {
    en: "<strong>Direct polygon-friendly output</strong> - the segmentation head produces masks that align naturally with polygon extraction.",
    pt: "<strong>Resultado fácil de converter em polígonos</strong>: a cabeça de segmentação produz máscaras que se adequam naturalmente à extração de polígonos.",
    nl: "<strong>Output die direct naar polygonen te vertalen is</strong>: de segmentatiehead levert maskers die goed aansluiten op polygoonextractie."
  },
  {
    en: "<strong>Modern and efficient</strong> - it is fast to train and run, while still giving reliable results for a single-class task.",
    pt: "<strong>Moderno e eficiente</strong>: é rápido de treinar e de executar, e dá resultados fiáveis numa tarefa com uma só classe.",
    nl: "<strong>Modern en efficiënt</strong>: snel te trainen en uit te voeren, met betrouwbare resultaten voor een taak met één klasse."
  },
  {
    en: "<strong>Built-in evaluation metrics</strong> - precision, recall, and mAP were available directly during training.",
    pt: "<strong>Métricas de avaliação integradas</strong>: precisão, recall e mAP estavam disponíveis diretamente durante o treino.",
    nl: "<strong>Ingebouwde evaluatiemetrieken</strong>: precision, recall en mAP waren direct beschikbaar tijdens het trainen."
  },
  {
    en: "<strong>Practical setup</strong> - compared with alternatives like Detectron2, the dependency setup was much lighter.",
    pt: "<strong>Configuração prática</strong>: em comparação com alternativas como o Detectron2, as dependências eram muito mais simples.",
    nl: "<strong>Praktische setup</strong>: vergeleken met alternatieven zoals Detectron2 waren de afhankelijkheden veel lichter."
  },
  {
    en: "I also tested a plain <strong>YOLOv8n detection model</strong>, but box-only predictions were not precise enough for footprint extraction. Segmentation produced much better building outlines.",
    pt: "Também testei um <strong>modelo de deteção YOLOv8n</strong> simples, mas as previsões só com caixas não eram suficientemente precisas para extrair contornos. A segmentação produziu contornos de edifícios muito melhores.",
    nl: "Ik testte ook een gewoon <strong>YOLOv8n-detectiemodel</strong>, maar voorspellingen met alleen boxes waren niet nauwkeurig genoeg voor contourextractie. Segmentatie leverde veel betere gebouwcontouren op."
  },
  {
    en: "I deliberately stayed with the <strong>nano segmentation variant</strong> because I trained locally on a GPU with <strong>4 GB of VRAM</strong>. Larger or newer variants were less realistic for that environment.",
    pt: "Fiquei de propósito com a <strong>variante nano de segmentação</strong>, porque treinei localmente numa GPU com <strong>4 GB de VRAM</strong>. Variantes maiores ou mais recentes eram menos realistas nesse ambiente.",
    nl: "Ik koos bewust voor de <strong>nano-segmentatievariant</strong>, omdat ik lokaal trainde op een GPU met <strong>4 GB VRAM</strong>. Grotere of nieuwere varianten waren in die omgeving minder realistisch."
  },
  {
    en: "Assumptions Behind the Approach",
    pt: "Pressupostos da abordagem",
    nl: "Aannames achter de aanpak"
  },
  {
    en: "<strong>Single class problem</strong> - the dataset only contains buildings, which is well suited to YOLOv8.",
    pt: "<strong>Problema com uma só classe</strong>: o dataset só contém edifícios, o que se adequa bem ao YOLOv8.",
    nl: "<strong>Probleem met één klasse</strong>: de dataset bevat alleen gebouwen, wat goed past bij YOLOv8."
  },
  {
    en: "<strong>Useful segmentation annotations</strong> - JSON labels included both bounding boxes and segments, making a segmentation model practical.",
    pt: "<strong>Anotações de segmentação úteis</strong>: as etiquetas JSON incluíam caixas delimitadoras e segmentos, o que tornava prático um modelo de segmentação.",
    nl: "<strong>Bruikbare segmentatieannotaties</strong>: de JSON-labels bevatten zowel bounding boxes als segmenten, waardoor een segmentatiemodel praktisch werd."
  },
  {
    en: "<strong>Reasonable training coverage</strong> - the train/validation split was strong enough to learn building shapes from aerial views.",
    pt: "<strong>Cobertura de treino razoável</strong>: a divisão treino/validação era suficiente para aprender as formas dos edifícios em vista aérea.",
    nl: "<strong>Redelijke trainingsdekking</strong>: de train/validatie-split was ruim genoeg om gebouwvormen vanuit de lucht te leren."
  },
  {
    en: "Evaluation Strategy",
    pt: "Estratégia de avaliação",
    nl: "Evaluatiestrategie"
  },
  {
    en: "I tracked both optimization signals and final detection quality:",
    pt: "Acompanhei tanto os sinais de otimização como a qualidade final da deteção:",
    nl: "Ik volgde zowel de optimalisatiesignalen als de uiteindelijke detectiekwaliteit:"
  },
  {
    en: "<strong>Training and validation losses</strong> - <code>box_loss</code>, <code>seg_loss</code>, and <code>dfl_loss</code>",
    pt: "<strong>Perdas de treino e de validação</strong>: <code>box_loss</code>, <code>seg_loss</code> e <code>dfl_loss</code>",
    nl: "<strong>Trainings- en validatieverliezen</strong>: <code>box_loss</code>, <code>seg_loss</code> en <code>dfl_loss</code>"
  },
  {
    en: "<strong>Precision / Recall / mAP</strong> - especially <code>mAP50</code> and <code>mAP50-95</code>",
    pt: "<strong>Precisão / Recall / mAP</strong>: sobretudo <code>mAP50</code> e <code>mAP50-95</code>",
    nl: "<strong>Precision / Recall / mAP</strong>: vooral <code>mAP50</code> en <code>mAP50-95</code>"
  },
  {
    en: "<strong>Confusion matrix</strong> - to inspect false positives and false negatives",
    pt: "<strong>Matriz de confusão</strong>: para analisar falsos positivos e falsos negativos",
    nl: "<strong>Confusiematrix</strong>: om fout-positieven en fout-negatieven te bekijken"
  },
  {
    en: "The main interpretation was simple but useful: if training and validation losses both decrease steadily and remain close, the model is learning without severe overfitting. That is the behavior I observed here.",
    pt: "A interpretação principal era simples mas útil: se as perdas de treino e de validação descem de forma estável e se mantêm próximas, o modelo está a aprender sem sobreajuste grave. Foi esse o comportamento que observei.",
    nl: "De belangrijkste interpretatie was eenvoudig maar nuttig: als de trainings- en validatieverliezen allebei gestaag dalen en dicht bij elkaar blijven, leert het model zonder ernstige overfitting. Dat is wat ik hier zag."
  },
  {
    en: "Results",
    pt: "Resultados",
    nl: "Resultaten"
  },
  {
    en: "The final Kaggle submission scored approximately <strong>0.5</strong>. Even though that leaderboard score was lower than I wanted, the training metrics showed a model that was learning solid footprint representations and maintaining a good precision/recall trade-off.",
    pt: "A submissão final no Kaggle obteve cerca de <strong>0,5</strong>. Embora essa pontuação tenha ficado abaixo do que eu queria, as métricas de treino mostraram um modelo a aprender boas representações dos contornos e a manter um bom equilíbrio entre precisão e recall.",
    nl: "De uiteindelijke Kaggle-inzending scoorde ongeveer <strong>0,5</strong>. Hoewel die score lager was dan ik wilde, lieten de trainingsmetrieken een model zien dat degelijke contourrepresentaties leerde en een goede balans tussen precision en recall hield."
  },
  {
    en: "Example output showing predicted building footprint extraction from aerial imagery.",
    pt: "Exemplo de resultado com a extração prevista dos contornos de edifícios a partir de imagens aéreas.",
    nl: "Voorbeeldoutput met de voorspelde gebouwcontouren uit luchtfoto's."
  },
  {
    en: "Metric",
    pt: "Métrica",
    nl: "Metriek"
  },
  {
    en: "Value",
    pt: "Valor",
    nl: "Waarde"
  },
  {
    en: "Interpretation",
    pt: "Interpretação",
    nl: "Interpretatie"
  },
  {
    en: "Precision (B)",
    pt: "Precisão (B)",
    nl: "Precision (B)"
  },
  {
    en: "The model correctly identified most predicted buildings.",
    pt: "O modelo identificou corretamente a maioria dos edifícios previstos.",
    nl: "Het model had de meeste voorspelde gebouwen juist."
  },
  {
    en: "It retrieved a strong share of the buildings present in ground truth.",
    pt: "Recuperou uma boa parte dos edifícios presentes na verdade de referência (ground truth).",
    nl: "Het vond een groot deel van de gebouwen uit de ground truth terug."
  },
  {
    en: "Strong overlap quality at the 50 percent IoU threshold.",
    pt: "Boa qualidade de sobreposição com o limiar de IoU de 50 %.",
    nl: "Sterke overlap bij de IoU-drempel van 50 procent."
  },
  {
    en: "Reasonably consistent performance across stricter IoU thresholds.",
    pt: "Desempenho razoavelmente consistente com limiares de IoU mais exigentes.",
    nl: "Redelijk consistente prestaties bij strengere IoU-drempels."
  },
  {
    en: "Taken together, the curves and summary metrics suggested <strong>good generalization</strong> rather than a model that was simply memorizing the training set.",
    pt: "Em conjunto, as curvas e as métricas sugeriam uma <strong>boa generalização</strong>, e não um modelo que simplesmente memorizava o conjunto de treino.",
    nl: "Samen wezen de curves en samenvattende metrieken op <strong>goede generalisatie</strong>, en niet op een model dat de trainingsset gewoon uit het hoofd leerde."
  },
  {
    en: "Limitations &amp; Next Steps",
    pt: "Limitações e próximos passos",
    nl: "Beperkingen &amp; volgende stappen"
  },
  {
    en: "The main gap was the difference between promising validation metrics and the more modest Kaggle score. Likely reasons include distribution mismatch between local validation and the final test set, as well as limited training time and compute.",
    pt: "A principal lacuna era a diferença entre as métricas de validação promissoras e a pontuação mais modesta no Kaggle. As razões prováveis incluem diferenças de distribuição entre a validação local e o conjunto de teste final, bem como tempo de treino e capacidade de computação limitados.",
    nl: "Het grootste verschil zat tussen de veelbelovende validatiemetrieken en de bescheidener Kaggle-score. Waarschijnlijke oorzaken zijn een verschil in verdeling tussen de lokale validatie en de uiteindelijke testset, en de beperkte trainingstijd en rekenkracht."
  },
  {
    en: "Train longer and test whether performance improves past the plateau after additional tuning.",
    pt: "Treinar durante mais tempo e testar se o desempenho ultrapassa o patamar após mais afinação.",
    nl: "Langer trainen en testen of de prestaties na extra tuning boven het plateau uitkomen."
  },
  {
    en: "Try a larger segmentation model such as <strong>YOLOv8m-Seg</strong> if more VRAM is available.",
    pt: "Experimentar um modelo de segmentação maior, como o <strong>YOLOv8m-Seg</strong>, se houver mais VRAM disponível.",
    nl: "Een groter segmentatiemodel proberen, zoals <strong>YOLOv8m-Seg</strong>, als er meer VRAM beschikbaar is."
  },
  {
    en: "Add more diverse geospatial data or augmentations to improve generalization.",
    pt: "Acrescentar dados geoespaciais mais variados ou augmentations para melhorar a generalização.",
    nl: "Meer gevarieerde geodata of augmentaties toevoegen om de generalisatie te verbeteren."
  },
  {
    en: "Tune learning rate, batch size, confidence thresholds, and IoU thresholds more aggressively.",
    pt: "Afinar de forma mais agressiva a taxa de aprendizagem, o tamanho do lote e os limiares de confiança e de IoU.",
    nl: "Learning rate, batchgrootte, betrouwbaarheidsdrempels en IoU-drempels intensiever tunen."
  },
  {
    en: "Overall, <strong>YOLOv8n-Seg</strong> was a practical and reliable choice for this building extraction task. It delivered accurate enough masks to make polygon-based submission feasible, while staying within the compute budget of a local setup. The project was a good example of balancing <strong>model quality</strong>, <strong>resource limits</strong>, and <strong>competition constraints</strong> in a real computer vision workflow.",
    pt: "No geral, o <strong>YOLOv8n-Seg</strong> foi uma escolha prática e fiável para esta tarefa de extração de edifícios. Produziu máscaras suficientemente precisas para tornar viável uma submissão baseada em polígonos, dentro do orçamento de computação de uma configuração local. O projeto foi um bom exemplo de equilíbrio entre <strong>qualidade do modelo</strong>, <strong>limites de recursos</strong> e <strong>restrições da competição</strong> num fluxo real de visão computacional.",
    nl: "Al met al was <strong>YOLOv8n-Seg</strong> een praktische en betrouwbare keuze voor deze gebouwextractie. Het leverde maskers die nauwkeurig genoeg waren voor een inzending op basis van polygonen, binnen het rekenbudget van een lokale setup. Het project was een goed voorbeeld van het balanceren van <strong>modelkwaliteit</strong>, <strong>beperkte middelen</strong> en <strong>de randvoorwaarden van een competitie</strong> in een echte computer-visionworkflow."
  },
  {
    en: "Resources",
    pt: "Recursos",
    nl: "Bronnen"
  },
  {
    en: "The project code, notebooks, and competition context are available online. This page gives a concise summary, while the repository and Kaggle page provide the implementation and challenge background.",
    pt: "O código, os notebooks e o contexto da competição estão disponíveis online. Esta página é um resumo; o repositório e a página do Kaggle têm a implementação e o enquadramento do desafio.",
    nl: "De code, notebooks en context van de competitie staan online. Deze pagina geeft een beknopte samenvatting; de repository en de Kaggle-pagina bevatten de implementatie en de achtergrond van de uitdaging."
  },
  {
    en: "<i class=\"bi bi-github me-2\"></i>View Code",
    pt: "<i class=\"bi bi-github me-2\"></i>Ver o código",
    nl: "<i class=\"bi bi-github me-2\"></i>Bekijk de code"
  },
  {
    en: "<i class=\"bi bi-box-arrow-up-right me-2\"></i>View Competition",
    pt: "<i class=\"bi bi-box-arrow-up-right me-2\"></i>Ver a competição",
    nl: "<i class=\"bi bi-box-arrow-up-right me-2\"></i>Bekijk de competitie"
  },
  {
    en: "<strong>Focus</strong> Computer Vision, Instance Segmentation",
    pt: "<strong>Foco</strong> Visão computacional, segmentação de instâncias",
    nl: "<strong>Focus</strong> Computer vision, instance-segmentatie"
  },
  {
    en: "<strong>Competition</strong> IEEE BigData Cup 2024",
    pt: "<strong>Competição</strong> IEEE BigData Cup 2024",
    nl: "<strong>Competitie</strong> IEEE BigData Cup 2024"
  },
  {
    en: "<strong>Compute</strong> Local GPU, 4 GB VRAM",
    pt: "<strong>Computação</strong> GPU local, 4 GB de VRAM",
    nl: "<strong>Rekenkracht</strong> Lokale GPU, 4 GB VRAM"
  },
  {
    en: "<strong>Repository</strong> Public GitHub repository",
    pt: "<strong>Repositório</strong> Repositório público no GitHub",
    nl: "<strong>Repository</strong> Openbare GitHub-repository"
  },
  {
    en: "<i class=\"bi bi-box-arrow-up-right me-2\"></i>View Kaggle Competition",
    pt: "<i class=\"bi bi-box-arrow-up-right me-2\"></i>Ver a competição no Kaggle",
    nl: "<i class=\"bi bi-box-arrow-up-right me-2\"></i>Bekijk de Kaggle-competitie"
  },
  {
    en: "Example of extracted building footprints from aerial imagery",
    pt: "Exemplo de contornos de edifícios extraídos de imagens aéreas",
    nl: "Voorbeeld van gebouwcontouren geëxtraheerd uit luchtfoto's"
  },
  {
    en: "IEEE BigData Cup Building Extraction - Portfolio Details",
    pt: "Extração de edifícios na IEEE BigData Cup | Detalhes do projeto",
    nl: "Gebouwextractie IEEE BigData Cup | Projectdetails"
  }
]);
