/*
 * Translations for the DnDialogueGenerator project page (dndialogue-details.html).
 * Each entry is the English text exactly as it appears on the page ("en") with its
 * European Portuguese ("pt") and Dutch ("nl") versions. Markup inside the text (links,
 * bold, icons) must stay the same in all three.
 * If you change English text on the page, change the matching "en" here too; until then
 * that piece simply shows in English. Anything without an entry stays in English.
 */

SiteI18n.add([
  {
    en: "This project explores an automated tool to help Game Masters generate dynamic, context-aware NPC dialogue for Dungeons &amp; Dragons campaigns. I fine-tuned a GPT-2 model on dialogue data annotated with categories and character personalities to produce dialogue that better matches specific character traits and improves narrative continuity.",
    pt: "Este projeto explora uma ferramenta automática para ajudar os Game Masters a gerar diálogos de NPCs dinâmicos e adequados ao contexto em campanhas de Dungeons &amp; Dragons. Fiz o fine-tuning de um modelo GPT-2 com dados de diálogo anotados com categorias e personalidades de personagens, para produzir diálogos mais fiéis aos traços de cada personagem e com melhor continuidade narrativa.",
    nl: "Dit project verkent een automatische tool die Game Masters helpt om dynamische, contextbewuste NPC-dialogen te genereren voor Dungeons &amp; Dragons-campagnes. Ik heb een GPT-2-model gefinetuned op dialoogdata met labels voor categorieën en persoonlijkheden van personages, zodat de dialogen beter bij specifieke karaktertrekken passen en het verhaal beter doorloopt."
  },
  {
    en: "What's Inside",
    pt: "O que inclui",
    nl: "Wat erin staat"
  },
  {
    en: "Problem &amp; Motivation",
    pt: "Problema e motivação",
    nl: "Probleem &amp; motivatie"
  },
  {
    en: "Why NPC dialogue generation is hard and what existing tools miss, continuity and character consistency are critical for immersive roleplay experiences.",
    pt: "Porque é difícil gerar diálogos de NPCs e o que falta às ferramentas existentes: a continuidade e a coerência das personagens são essenciais para uma experiência de roleplay imersiva.",
    nl: "Waarom het genereren van NPC-dialogen lastig is en wat bestaande tools missen: continuïteit en consistente personages zijn essentieel voor een meeslepende roleplay-ervaring."
  },
  {
    en: "Model &amp; Training Approach",
    pt: "Modelo e abordagem de treino",
    nl: "Model &amp; trainingsaanpak"
  },
  {
    en: "GPT-2 decoder-only transformer; fine-tuned via next-word prediction with selective layer training (frozen layers except the LM head). This approach allows efficient adaptation to dialogue generation without catastrophic forgetting.",
    pt: "Transformer GPT-2 só com descodificador, ajustado por previsão da palavra seguinte com treino seletivo de camadas (todas congeladas exceto a cabeça LM). Esta abordagem permite adaptar o modelo à geração de diálogo de forma eficiente, sem esquecimento catastrófico.",
    nl: "GPT-2, een decoder-only transformer, gefinetuned via next-word prediction met selectieve training van lagen (alles bevroren behalve de LM-head). Zo past het model zich efficiënt aan dialooggeneratie aan zonder catastrofaal vergeten."
  },
  {
    en: "Data Pipeline",
    pt: "Pipeline de dados",
    nl: "Datapipeline"
  },
  {
    en: "Preprocessing format that encodes categories and personalities followed by multi-line dialogue turns. This structured approach enables the model to condition generation on character traits.",
    pt: "Formato de pré-processamento que codifica categorias e personalidades, seguidas de várias falas de diálogo. Esta estrutura permite ao modelo condicionar a geração aos traços da personagem.",
    nl: "Een preprocessingformaat dat categorieën en persoonlijkheden codeert, gevolgd door meerdere dialoogbeurten. Dankzij die structuur kan het model de generatie laten afhangen van karaktertrekken."
  },
  {
    en: "Dataset Choice",
    pt: "Escolha do dataset",
    nl: "Keuze van de dataset"
  },
  {
    en: "Used a personality-labelled conversation dataset as a substitute for a dedicated D&amp;D dataset. While not domain-specific, this approach demonstrates transfer learning principles.",
    pt: "Utilização de um dataset de conversas anotado com personalidades, como substituto de um dataset dedicado a D&amp;D. Embora não seja específico do domínio, esta abordagem demonstra os princípios do transfer learning.",
    nl: "Een conversatiedataset met persoonlijkheidslabels gebruikt als vervanging voor een specifieke D&amp;D-dataset. Hoewel die niet domeinspecifiek is, laat deze aanpak de principes van transfer learning zien."
  },
  {
    en: "Results Summary",
    pt: "Resumo dos resultados",
    nl: "Samenvatting van de resultaten"
  },
  {
    en: "Strengths",
    pt: "Pontos fortes",
    nl: "Sterke punten"
  },
  {
    en: "Generated text resembles roleplaying dialogue and is often relevant to the player's prompt",
    pt: "O texto gerado parece diálogo de roleplay e é muitas vezes relevante para o prompt do jogador",
    nl: "De gegenereerde tekst lijkt op roleplay-dialoog en sluit vaak aan bij de prompt van de speler"
  },
  {
    en: "Limitations Observed",
    pt: "Limitações observadas",
    nl: "Waargenomen beperkingen"
  },
  {
    en: "Sometimes continues generating category/personality tokens even after the end-of-text token",
    pt: "Por vezes continua a gerar tokens de categoria/personalidade mesmo depois do token de fim de texto",
    nl: "Genereert soms nog categorie- of persoonlijkheidstokens na het end-of-text-token"
  },
  {
    en: "Tends toward romantic dialogue patterns due to dataset bias",
    pt: "Tende para padrões de diálogo românticos, devido ao enviesamento do dataset",
    nl: "Neigt naar romantische dialoogpatronen door bias in de dataset"
  },
  {
    en: "Personality conditioning is not always respected consistently",
    pt: "O condicionamento pela personalidade nem sempre é respeitado de forma consistente",
    nl: "De persoonlijkheidsconditionering wordt niet altijd consequent gevolgd"
  },
  {
    en: "Planned Improvements",
    pt: "Melhorias previstas",
    nl: "Geplande verbeteringen"
  },
  {
    en: "Train longer / to convergence; try larger GPT-2 variants",
    pt: "Treinar durante mais tempo / até à convergência; experimentar variantes maiores do GPT-2",
    nl: "Langer trainen / tot convergentie; grotere GPT-2-varianten proberen"
  },
  {
    en: "Consider adjusting the language-model head and/or briefly unfreezing more layers at low learning rate",
    pt: "Ajustar a cabeça do modelo de linguagem e/ou descongelar brevemente mais camadas com uma taxa de aprendizagem baixa",
    nl: "De language-model-head aanpassen en/of kort meer lagen vrijgeven voor training met een lage learning rate"
  },
  {
    en: "Collect domain-specific D&amp;D dialogue data for better fine-tuning",
    pt: "Recolher dados de diálogo específicos de D&amp;D para um melhor fine-tuning",
    nl: "Domeinspecifieke D&amp;D-dialoogdata verzamelen voor betere finetuning"
  },
  {
    en: "Implement better post-processing to handle token cleanup",
    pt: "Melhorar o pós-processamento para limpar os tokens",
    nl: "Betere nabewerking implementeren om tokens op te schonen"
  },
  {
    en: "Credits",
    pt: "Créditos",
    nl: "Credits"
  },
  {
    en: "Poster authors: Linus Lundgren and Maria Madalena Barros, Chalmers University of Technology.",
    pt: "Autores do poster: Linus Lundgren e Maria Madalena Barros, Chalmers University of Technology.",
    nl: "Auteurs van de poster: Linus Lundgren en Maria Madalena Barros, Chalmers University of Technology."
  },
  {
    en: "<strong>Focus Areas</strong> NLP, Fine-tuning, Transformers",
    pt: "<strong>Áreas</strong> NLP, fine-tuning, transformers",
    nl: "<strong>Focusgebieden</strong> NLP, finetuning, transformers"
  },
  {
    en: "<strong>Model</strong> GPT-2",
    pt: "<strong>Modelo</strong> GPT-2",
    nl: "<strong>Model</strong> GPT-2"
  },
  {
    en: "<strong>University</strong> Chalmers University of Technology",
    pt: "<strong>Universidade</strong> Chalmers University of Technology",
    nl: "<strong>Universiteit</strong> Chalmers University of Technology"
  },
  {
    en: "Project Resources",
    pt: "Recursos do projeto",
    nl: "Projectbronnen"
  },
  {
    en: "<i class=\"bi bi-file-pdf\"></i> Open Poster (PDF)",
    pt: "<i class=\"bi bi-file-pdf\"></i> Abrir o poster (PDF)",
    nl: "<i class=\"bi bi-file-pdf\"></i> Poster openen (pdf)"
  },
  {
    en: "<i class=\"bi bi-download\"></i> Download Poster",
    pt: "<i class=\"bi bi-download\"></i> Descarregar o poster",
    nl: "<i class=\"bi bi-download\"></i> Poster downloaden"
  },
  {
    en: "DnDialogueGenerator - Portfolio Details",
    pt: "DnDialogueGenerator | Detalhes do projeto",
    nl: "DnDialogueGenerator | Projectdetails"
  }
]);
