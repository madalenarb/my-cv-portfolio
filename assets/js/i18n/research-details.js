/*
 * Translations for the Master's thesis page (research-details.html).
 * Each entry is the English text exactly as it appears on the page ("en") with its
 * European Portuguese ("pt") and Dutch ("nl") versions. Markup inside the text (links,
 * bold, icons) must stay the same in all three.
 * If you change English text on the page, change the matching "en" here too; until then
 * that piece simply shows in English. Anything without an entry stays in English.
 */

SiteI18n.add([
  {
    en: "Master's Thesis",
    pt: "Tese de mestrado",
    nl: "Masterscriptie"
  },
  {
    en: "Thesis",
    pt: "Tese",
    nl: "Scriptie"
  },
  {
    en: "Read the thesis",
    pt: "Ler a tese",
    nl: "Lees de scriptie"
  },
  {
    en: "MSc thesis in Electrical and Computer Engineering, Instituto Superior Técnico, October 2026",
    pt: "Tese de mestrado em Engenharia Eletrotécnica e de Computadores, Instituto Superior Técnico, outubro de 2026",
    nl: "Masterscriptie Electrical and Computer Engineering, Instituto Superior Técnico, oktober 2026"
  },
  {
    en: "Supervised by Prof. Leonel Sousa and Prof. Aleksandar Ilić",
    pt: "Orientação do Prof. Leonel Sousa e do Prof. Aleksandar Ilić",
    nl: "Begeleid door prof. Leonel Sousa en prof. Aleksandar Ilić"
  },
  {
    en: "<i class=\"bi bi-file-earmark-pdf\" aria-hidden=\"true\"></i> Read the thesis",
    pt: "<i class=\"bi bi-file-earmark-pdf\" aria-hidden=\"true\"></i> Ler a tese",
    nl: "<i class=\"bi bi-file-earmark-pdf\" aria-hidden=\"true\"></i> Lees de scriptie"
  },
  {
    en: "<i class=\"bi bi-download\" aria-hidden=\"true\"></i> Download PDF",
    pt: "<i class=\"bi bi-download\" aria-hidden=\"true\"></i> Descarregar PDF",
    nl: "<i class=\"bi bi-download\" aria-hidden=\"true\"></i> Pdf downloaden"
  },
  {
    en: "PDF, 118 pages, 2.7 MB",
    pt: "PDF, 118 páginas, 2,7 MB",
    nl: "Pdf, 118 pagina's, 2,7 MB"
  },
  {
    en: "Published simulator comparisons often rank runtimes without saying under which conditions a backend does well. My thesis benchmarks six state-vector simulators on three circuit families, from a single CPU thread up to 64 nodes and 16 NVIDIA A100 GPUs on the EuroHPC supercomputer Deucalion, and uses performance models and profiling to explain the rankings.",
    pt: "As comparações publicadas entre simuladores ordenam muitas vezes os tempos de execução sem dizer em que condições cada backend se destaca. A minha tese compara seis simuladores de vetor de estado em três famílias de circuitos, desde uma única thread de CPU até 64 nós e 16 GPUs NVIDIA A100 no supercomputador EuroHPC Deucalion, e usa modelos de desempenho e profiling para explicar os resultados.",
    nl: "Gepubliceerde vergelijkingen van simulatoren rangschikken vaak alleen looptijden, zonder te zeggen onder welke omstandigheden een backend goed presteert. Mijn scriptie benchmarkt zes state-vectorsimulatoren op drie circuitfamilies, van één CPU-thread tot 64 nodes en 16 NVIDIA A100-GPU's op de EuroHPC-supercomputer Deucalion, en verklaart de rangschikking met prestatiemodellen en profiling."
  },
  {
    en: "What I did",
    pt: "O que fiz",
    nl: "Wat ik heb gedaan"
  },
  {
    en: "Circuits",
    pt: "Circuitos",
    nl: "Circuits"
  },
  {
    en: "The Quantum Fourier Transform (QFT), a hardware-efficient ansatz (HEA) and a Clifford circuit",
    pt: "A transformada de Fourier quântica (QFT), um ansatz eficiente em hardware (HEA) e um circuito de Clifford",
    nl: "De kwantum-Fouriertransformatie (QFT), een hardware-efficiënte ansatz (HEA) en een Clifford-circuit"
  },
  {
    en: "Scale",
    pt: "Escala",
    nl: "Schaal"
  },
  {
    en: "1 to 128 threads on one node, up to 64 CPU nodes and up to 16 A100 GPUs on <a href=\"https://rnca.fccn.pt/en/deucalion/\" target=\"_blank\" rel=\"noopener\">Deucalion</a>",
    pt: "De 1 a 128 threads num nó, até 64 nós de CPU e até 16 GPUs A100 no <a href=\"https://rnca.fccn.pt/en/deucalion/\" target=\"_blank\" rel=\"noopener\">Deucalion</a>",
    nl: "1 tot 128 threads op één node, tot 64 CPU-nodes en tot 16 A100-GPU's op <a href=\"https://rnca.fccn.pt/en/deucalion/\" target=\"_blank\" rel=\"noopener\">Deucalion</a>"
  },
  {
    en: "Analysis",
    pt: "Análise",
    nl: "Analyse"
  },
  {
    en: "Performance models, the cache-aware roofline model (CARM) and top-down profiling in Intel VTune",
    pt: "Modelos de desempenho, o modelo roofline sensível à cache (CARM) e profiling top-down no Intel VTune",
    nl: "Prestatiemodellen, het cache-aware rooflinemodel (CARM) en top-down profiling in Intel VTune"
  },
  {
    en: "Beyond state vectors",
    pt: "Para além do vetor de estado",
    nl: "Meer dan state vectors"
  },
  {
    en: "Stabiliser, tensor-network and noisy density-matrix simulation",
    pt: "Simulação por estabilizadores, redes tensoriais e matriz de densidade com ruído",
    nl: "Simulatie met stabilisatoren, tensornetwerken en dichtheidsmatrices met ruis"
  },
  {
    en: "Main findings",
    pt: "Principais resultados",
    nl: "Belangrijkste bevindingen"
  },
  {
    en: "No backend is fastest everywhere. The leader depends on the circuit, the qubit count and the hardware.",
    pt: "Nenhum backend é o mais rápido em todos os casos. O líder depende do circuito, do número de qubits e do hardware.",
    nl: "Geen enkele backend is overal de snelste. Welke wint, hangt af van het circuit, het aantal qubits en de hardware."
  },
  {
    en: "Qiskit Aer on a full 128-thread node versus one thread, on the 30-qubit QFT, helped by gate fusion",
    pt: "Qiskit Aer num nó completo de 128 threads face a uma só thread, na QFT de 30 qubits, com a ajuda da fusão de portas",
    nl: "Qiskit Aer op een volledige node met 128 threads ten opzichte van één thread, op de QFT met 30 qubits, geholpen door gate fusion"
  },
  {
    en: "mpiQulacs on 64 nodes versus one, the fastest of the backends measured on 32 and 64 nodes",
    pt: "mpiQulacs em 64 nós face a um, o mais rápido dos backends medidos em 32 e 64 nós",
    nl: "mpiQulacs op 64 nodes ten opzichte van één, de snelste van de gemeten backends op 32 en 64 nodes"
  },
  {
    en: "from gate fusion with AVX2 in Qulacs on one core (1.7× with scalar code), more than vectorisation alone",
    pt: "com fusão de portas e AVX2 no Qulacs num núcleo (1.7× com código escalar), mais do que só a vetorização",
    nl: "door gate fusion met AVX2 in Qulacs op één core (1.7× met scalaire code), meer dan vectorisatie alleen"
  },
  {
    en: "the fastest distributed backend within one node of four A100 GPUs, at every measured size",
    pt: "o backend distribuído mais rápido num nó com quatro GPUs A100, em todos os tamanhos medidos",
    nl: "de snelste gedistribueerde backend binnen één node met vier A100-GPU's, bij elke gemeten grootte"
  },
  {
    en: "for the Clifford circuit up to 60 qubits with the stabiliser backends of Qiskit Aer and Qibo",
    pt: "para o circuito de Clifford até 60 qubits, com os backends de estabilizadores do Qiskit Aer e do Qibo",
    nl: "voor het Clifford-circuit tot 60 qubits met de stabilisatorbackends van Qiskit Aer en Qibo"
  },
  {
    en: "qubits with tensor networks for GHZ and a single-layer HEA, with sampled output",
    pt: "qubits com redes tensoriais para GHZ e um HEA de uma camada, com saída amostrada",
    nl: "qubits met tensornetwerken voor GHZ en een HEA met één laag, met gesamplede output"
  },
  {
    en: "Simulator-selection framework",
    pt: "Guia de seleção de simuladores",
    nl: "Keuzekader voor simulatoren"
  },
  {
    en: "The results support a two-level guide for choosing a simulator.",
    pt: "Os resultados sustentam um guia em dois níveis para escolher um simulador.",
    nl: "De resultaten onderbouwen een keuzekader in twee niveaus voor het kiezen van een simulator."
  },
  {
    en: "Pick the method",
    pt: "Escolher o método",
    nl: "Kies de methode"
  },
  {
    en: "Circuit structure and the required output decide between state vector, stabiliser, tensor network and density matrix.",
    pt: "A estrutura do circuito e o resultado pretendido decidem entre vetor de estado, estabilizadores, redes tensoriais e matriz de densidade.",
    nl: "De structuur van het circuit en de gewenste output bepalen de keuze tussen state vector, stabilisatoren, tensornetwerken en dichtheidsmatrix."
  },
  {
    en: "Pick the backend",
    pt: "Escolher o backend",
    nl: "Kies de backend"
  },
  {
    en: "The hardware and the state size decide which simulator runs it.",
    pt: "O hardware e a dimensão do estado decidem que simulador o executa.",
    nl: "De hardware en de grootte van de toestand bepalen welke simulator het uitvoert."
  },
  {
    en: "I built a first prototype that encodes both levels and the measured results as rules.",
    pt: "Construí um primeiro protótipo que codifica os dois níveis e os resultados medidos como regras.",
    nl: "Ik heb een eerste prototype gebouwd dat beide niveaus en de gemeten resultaten als regels vastlegt."
  },
  {
    en: "<i class=\"bi bi-sliders\" aria-hidden=\"true\"></i> Try the selector prototype",
    pt: "<i class=\"bi bi-sliders\" aria-hidden=\"true\"></i> Experimentar o protótipo do seletor",
    nl: "<i class=\"bi bi-sliders\" aria-hidden=\"true\"></i> Probeer het prototype van de kiezer"
  },
  {
    en: "<i class=\"bi bi-github\" aria-hidden=\"true\"></i> Selector code",
    pt: "<i class=\"bi bi-github\" aria-hidden=\"true\"></i> Código do seletor",
    nl: "<i class=\"bi bi-github\" aria-hidden=\"true\"></i> Code van de kiezer"
  },
  {
    en: "PIC2: \"Phase 1\" of my Master's thesis",
    pt: "PIC2: a \"fase 1\" da minha tese de mestrado",
    nl: "PIC2: \"fase 1\" van mijn masterscriptie"
  },
  {
    en: "<i class=\"bi bi-check2-circle\" aria-hidden=\"true\"></i> Completed in June&nbsp;2025",
    pt: "<i class=\"bi bi-check2-circle\" aria-hidden=\"true\"></i> Concluído em junho&nbsp;de&nbsp;2025",
    nl: "<i class=\"bi bi-check2-circle\" aria-hidden=\"true\"></i> Afgerond in juni&nbsp;2025"
  },
  {
    en: "Read the PIC2 report",
    pt: "Ler o relatório do PIC2",
    nl: "Lees het PIC2-rapport"
  },
  {
    en: "Project in Electrical and Computer Engineering (PIC2), Instituto Superior Técnico, June 2025",
    pt: "Projeto em Engenharia Eletrotécnica e de Computadores (PIC2), Instituto Superior Técnico, junho de 2025",
    nl: "Project in Electrical and Computer Engineering (PIC2), Instituto Superior Técnico, juni 2025"
  },
  {
    en: "<i class=\"bi bi-file-earmark-pdf\" aria-hidden=\"true\"></i> Read the report",
    pt: "<i class=\"bi bi-file-earmark-pdf\" aria-hidden=\"true\"></i> Ler o relatório",
    nl: "<i class=\"bi bi-file-earmark-pdf\" aria-hidden=\"true\"></i> Lees het rapport"
  },
  {
    en: "<i class=\"bi bi-github\" aria-hidden=\"true\"></i> View the code",
    pt: "<i class=\"bi bi-github\" aria-hidden=\"true\"></i> Ver o código",
    nl: "<i class=\"bi bi-github\" aria-hidden=\"true\"></i> Bekijk de code"
  },
  {
    en: "PDF, 41 pages, 3.7 MB",
    pt: "PDF, 41 páginas, 3,7 MB",
    nl: "Pdf, 41 pagina's, 3,7 MB"
  },
  {
    en: "At Instituto Superior Técnico, the <strong>PIC2</strong> is a capstone-style project that bridges master's coursework and the independent research carried out during the thesis. This report established my benchmarking methodology for GPU-accelerated quantum circuit simulation and the baseline performance and accuracy results that shaped my thesis.",
    pt: "No Instituto Superior Técnico, o <strong>PIC2</strong> é um projeto de síntese que faz a ponte entre as unidades curriculares do mestrado e a investigação independente da tese. Este relatório estabeleceu a minha metodologia de benchmarking para a simulação de circuitos quânticos acelerada por GPU e os resultados de referência de desempenho e precisão que moldaram a tese.",
    nl: "Aan het Instituto Superior Técnico is de <strong>PIC2</strong> een afsluitend project dat de vakken van de master verbindt met het zelfstandige onderzoek van de scriptie. In dit rapport legde ik mijn benchmarkmethode voor GPU-versnelde simulatie van kwantumcircuits vast, met de eerste prestatie- en nauwkeurigheidsresultaten waarop mijn scriptie voortbouwde."
  },
  {
    en: "What's inside",
    pt: "O que inclui",
    nl: "Wat erin staat"
  },
  {
    en: "Reproducible benchmarking setup",
    pt: "Configuração de benchmarking reprodutível",
    nl: "Reproduceerbare benchmarkopzet"
  },
  {
    en: "Circuit workloads, input states, shot selection, and evaluation workflow",
    pt: "Cargas de circuitos, estados de entrada, escolha de shots e fluxo de avaliação",
    nl: "Circuitworkloads, begintoestanden, keuze van shots en evaluatieworkflow"
  },
  {
    en: "Simulator + backend comparison",
    pt: "Comparação de simuladores e backends",
    nl: "Vergelijking van simulatoren + backends"
  },
  {
    en: "CPU vs GPU execution across modern toolchains (e.g., Qiskit Aer / CUDA-Q) with scaling analysis",
    pt: "Execução em CPU face a GPU com ferramentas atuais (por exemplo, Qiskit Aer / CUDA-Q), com análise de escalabilidade",
    nl: "Uitvoering op CPU versus GPU met moderne toolchains (bijv. Qiskit Aer / CUDA-Q), inclusief schaalanalyse"
  },
  {
    en: "Performance + correctness metrics",
    pt: "Métricas de desempenho e correção",
    nl: "Prestatie- en correctheidsmetrieken"
  },
  {
    en: "Runtime together with fidelity and distance-based errors (e.g., Frobenius norm, L2)",
    pt: "Tempo de execução, juntamente com a fidelidade e erros baseados em distâncias (por exemplo, norma de Frobenius, L2)",
    nl: "Looptijd samen met fidelity en afstandsgebaseerde fouten (bijv. Frobeniusnorm, L2)"
  },
  {
    en: "Noise experiments",
    pt: "Experiências com ruído",
    nl: "Experimenten met ruis"
  },
  {
    en: "Standard noise channels to quantify accuracy degradation and runtime impact under realistic conditions",
    pt: "Canais de ruído padrão para quantificar a perda de precisão e o impacto no tempo de execução em condições realistas",
    nl: "Standaard ruiskanalen om verlies aan nauwkeurigheid en de invloed op de looptijd onder realistische omstandigheden te meten"
  },
  {
    en: "How it informed my thesis",
    pt: "Como contribuiu para a tese",
    nl: "Wat het betekende voor mijn scriptie"
  },
  {
    en: "PIC2 laid the foundation for my thesis by defining a reproducible benchmarking methodology (workloads, metrics, and experimental workflow) and producing baseline CPU/GPU results for both ideal and noisy runs. The thesis then extended this work to six backends and three circuit families, with multi-node CPU runs on up to 64 nodes and multi-GPU runs on up to 16 A100 GPUs.",
    pt: "O PIC2 lançou as bases da minha tese, ao definir uma metodologia de benchmarking reprodutível (cargas, métricas e fluxo experimental) e ao produzir resultados de referência em CPU e GPU, com e sem ruído. A tese alargou depois este trabalho a seis backends e três famílias de circuitos, com execuções multi-nó em CPU até 64 nós e multi-GPU até 16 GPUs A100.",
    nl: "PIC2 legde de basis voor mijn scriptie met een reproduceerbare benchmarkmethode (workloads, metrieken en experimentele workflow) en de eerste CPU/GPU-resultaten voor zowel ideale runs als runs met ruis. De scriptie breidde dit werk daarna uit naar zes backends en drie circuitfamilies, met multi-node CPU-runs tot 64 nodes en multi-GPU-runs tot 16 A100-GPU's."
  },
  {
    en: "<i class=\"bi bi-chevron-right\" aria-hidden=\"true\"></i> Preview the report on this page",
    pt: "<i class=\"bi bi-chevron-right\" aria-hidden=\"true\"></i> Pré-visualizar o relatório nesta página",
    nl: "<i class=\"bi bi-chevron-right\" aria-hidden=\"true\"></i> Bekijk het rapport op deze pagina"
  },
  {
    en: "If the preview doesn’t load, <a href=\"assets/pic/PIC2___Accelerating_Quantum_Circuit_Simulation_with_NVIDIA_GPUs_and_tools_editing.pdf\" target=\"_blank\" rel=\"noopener\">open the PDF in a new tab</a>.",
    pt: "Se a pré-visualização não carregar, <a href=\"assets/pic/PIC2___Accelerating_Quantum_Circuit_Simulation_with_NVIDIA_GPUs_and_tools_editing.pdf\" target=\"_blank\" rel=\"noopener\">abra o PDF num novo separador</a>.",
    nl: "Laadt het voorbeeld niet? <a href=\"assets/pic/PIC2___Accelerating_Quantum_Circuit_Simulation_with_NVIDIA_GPUs_and_tools_editing.pdf\" target=\"_blank\" rel=\"noopener\">Open de pdf in een nieuw tabblad</a>."
  },
  {
    en: "Designed by <a href=\"https://bootstrapmade.com/\" target=\"_blank\" rel=\"noopener\">BootstrapMade</a>",
    pt: "Design de <a href=\"https://bootstrapmade.com/\" target=\"_blank\" rel=\"noopener\">BootstrapMade</a>",
    nl: "Ontwerp door <a href=\"https://bootstrapmade.com/\" target=\"_blank\" rel=\"noopener\">BootstrapMade</a>"
  },
  {
    en: "PIC2 report preview (PDF)",
    pt: "Pré-visualização do relatório PIC2 (PDF)",
    nl: "Voorbeeld van het PIC2-rapport (pdf)"
  },
  {
    en: "Master's thesis | Madalena Barros",
    pt: "Tese de mestrado | Madalena Barros",
    nl: "Masterscriptie | Madalena Barros"
  }
]);
