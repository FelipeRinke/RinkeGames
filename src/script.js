/* =========================================
   1. DADOS DAS NOTíCIAS (BANCO DE DADOS COMPLETO)
   ========================================= */
const noticiasDB = [
    // --- PáGINA 1 ---
    {
        id: 1,
        titulo: "Análise: O novo controle DualSense Edge vale o investimento?",
        categoria: "Hardware",
        imagem: "img/controle_edge.jpg",

        texto: ` 
        <p>Você não precisa do controle DualSense Edge da Sony para PlayStation 5. Por <strong>US$ 199</strong>, é uma compra de luxo em todos os sentidos. Mas há uma boa chance de você querer um mesmo assim — dois anos após o lançamento, este controle de nível profissional ainda é um forte concorrente para a melhor maneira de jogar no console que conquistou o mundo.</p>
        <p>A Sony sabe que se trata de um periférico caro e, por isso, faz com que tudo no Edge se destaque. É uma vitrine desde o primeiro momento em que você abre a embalagem: uma <strong>tampa robusta</strong> que se abre como uma caixa de música, revelando um <strong>estojo de transporte</strong> perolado impressionante (também disponível em preto). Nele, encontra-se o próprio controle e uma série de componentes para personalizá-lo:</p>
        <ul style="list-style-type: circle; padding-left: 20px;">
            <li>Quatro cabeças de analógico alternativas.
                <ul style="list-style-type: circle;">
                    <li>Duas com tampas arredondadas.</li>
                    <li>Duas com analógicos mais longos.</li>
                    <li>Um com alavancas.</li>
                    <li>O outro com interruptores semicirculares.</li>
                     <li>Um cabo USB-A para USB-C trançado de <strong>3 metros</strong> de comprimento.</li>
            <li>Um <strong>sistema de travamento especial</strong> para evitar que o cabo seja puxado do controle durante o jogo.</li>
        <hr>
        <p align="center"><strong>Quer saber se o DualSense Edge realmente entrega a performance Pro que promete?</strong> Deixe seu comentário!</p>
        `

    },
    {
        id: 2,
        titulo: "BLAST Rivals Fall 2025: Brasil está garantido na final de mais um torneio internacional",
        categoria: "Hardware",
        imagem: "img/fallen-snowzin-cs2-furia-pain.jpg",

        // USANDO CRASES (Template Literal) PARA HTML DENTRO DO TEXTO
        texto: `
        <strong>Desempenho dos times brasileiros</strong>

        <p>No Grupo B, a FURIA terminou invicta com duas vitórias: sobre a própria paiN (2 a 1) e contra a Vitality (2 a 1), ficando em primeiro lugar. A paiN precisou passar pela repescagem após perder para a FURIA na estreia, mas derrotou a TYLOO (2 a 1) e avançou como terceira colocada.</p>

        <p>As equipes chegam com moral após vencerem nas quartas de final. A paiN atropelou a Passion UA por 2 a 0, enquanto a FURIA venceu a Vitality por 2 a 1, mostrando força em séries acirradas. O grande destaque foi a performance do jogador <strong>"ArT"</strong>, que teve um K/D impressionante.</p>

        <p>O vencedor do duelo entre paiN e FURIA enfrentará na final Team Vitality ou Team Falcons. A decisão está marcada para domingo (16), também às 5h e vale US$ 125 mil, cerca de <strong>R$ 660 mil</strong> em conversão direta.</p>
    `
    },
    {
        id: 3,
        titulo: "Setup Gamer: Como montar sua estação ideal em 2025",
        categoria: "Hardware",
        imagem: "img/setup.jpg",
        texto: `

        <p>O ano é 2025, e o universo dos jogos evoluiu mais rápido do que nunca. Em 2025, é criar um lugar para imersão e performance em sua estação. Se você está montando ou pensando em dar um upgrade em sua estação de batalha, segue o guia!</p>

        <strong>#1 - O Coração do Setup: O PC Gamer</strong>
        <p>Não economize para ter o máximo de desempenho na placa de vídeo e no armazenamento.</p>
        <ul style="list-style-type: circle;">
        <li><strong>Placa de Vídeo (GPU):</strong> Procure pelas últimas gerações da NVIDIA GeForce RTX ou AMD Radeon RX. O foco deve ser em GPUs com grande VRAM (12GB ou mais).</li>
        <li><strong>Processador (CPU):</strong> O cérebro da operação. Modelos de ponta da Intel Core i7/i9 ou AMD Ryzen 7/9 (série 7000 ou posterior) garantem que a GPU não fique "esperando" os dados.</li>
        <li><strong>Memória RAM:</strong> 32GB DDR5 tornou-se o novo padrão de ouro para setups High-End em 2025.</li>
        <li><strong>Armazenamento (SSD):</strong> Um SSD NVMe M.2 Gen4 (ou Gen5) de 2TB é essencial para tempos de carregamento instantâneos.</li>
        <li><strong>Refrigeração:</strong> Um bom Water Cooler (AIO) é altamente recomendado para CPUs de alto desempenho.</li>
        </ul>
        <hr>
        <strong>#2 - A Imagem: Monitor e Qualidade Visual</strong>
        <p>Não economize para ter o máximo de desempenho na placa de vídeo e no armazenamento.</p>
        <ul style="list-style-type: circle;">
        <li><strong>Resolução e Taxa de Atualização:</strong> Imersão: 4K (UHD) ou 1440p (2K) com 120Hz a 144Hz e Competitivo: 1440p com 240Hz+.</li>
        <li><strong>Tecnologia:</strong> Procure por painéis OLED/Mini-LED (para cores e contraste) e suporte a G-Sync ou FreeSync para eliminar screen tearing.</li>
        <hr>
        <strong>#3 - Periféricos e Ergonomia</strong>
        <p>Sua interface com o jogo e seu conforto.</p>
        <ul style="list-style-type: circle;">
        <li><strong>Cadeira e Mesa:</strong> Cadeira ergonômica com ajuste lombar e mesas com ajuste de altura (standing desks).</li>
        <li><strong>Teclado:</strong> Mecânico com switches Lineares (rápido e macio) é a escolha dos Pro Players.</li>
        <li><strong>Mouse:</strong> Modelos ultraleves (abaixo de 70g) e conexão Wireless de baixa latência (abaixo de 1ms).</li>
        <li><strong>Audio:</strong> Essencial com Ýudio Espacial 7.1 ou tecnologias como Dolby Atmos para localização precisa.</li>
        </ul>
        `
    },
    {
        id: 4,
        titulo: "Review: Nova geração de consoles entrega experiência premium",
        categoria: "Reviews",
        imagem: "img/nova_geração.png",
        texto: `
        <p>O mercado de consoles em 2025 está mais forte e mais segmentado do que nunca. Com a chegada de modelos aprimorados, como o PlayStation 5 Pro, e o já consolidado Xbox Series X, o jogador que busca o máximo em performance e imersão está sendo servido com uma verdadeira experiência premium. A competição elevou o nível, focando em poder gráfico bruto, velocidade de carregamento e ecossistemas robustos.</p>
        <hr>
        <p><strong>O Poder Bruto: PS5 Pro vs. Xbox Series X</strong></p>
        <p>Ambos os consoles premium da Sony e Microsoft oferecem suporte a resolução 4K e até 120 FPS em jogos compatíveis, garantindo imagens nítidas e jogabilidade fluida.</p>
        <hr>
        <p><strong>PlayStation 5 Pro</strong></p>
        <p>O PS5 Pro se sobressai em poder de processamento gráfico, alcançando até 16.7 Teraflops. Sua renderização é até 45% mais rápida, com melhorias substanciais no Ray Tracing. Ele utiliza upscaling por IA (PSSR) para aprimoramento em 4K. A memória RAM é de 16 GB GDDR6, com largura de banda aumentada em 28%, e o armazenamento interno é um SSD de 2TB. A sensação tátil do PS5 Pro é de um produto mais premium.</p>
        <hr>
        <p><strong>Xbox Series X</strong></p>
        <p>O Xbox Series X, por sua vez, mantém-se como um benchmark de performance. Ele conta com uma GPU de 12 Teraflops, com suporte a Ray Tracing e capacidade para 4K a 120 FPS. Assim como o PS5 Pro, ele possui 16 GB GDDR6 de memória RAM, mas com velocidade de 560 GB/s. O armazenamento é um SSD de 1TB, expansível via cartão proprietário. O Xbox Series X é elogiado por ser um dos consoles mais frios de todas as gerações, mesmo rodando jogos em 4K, e oferece uma sensação de densidade e qualidade superior nos materiais.</p>
        <hr>
        <p><strong>Conclusão: O Investimento Vale a Pena?</strong></p>
        <p>Para o jogador que busca a melhor experiência visual, os tempos de carregamento quase instantâneos do SSD e a estabilidade de performance em 4K e Ray Tracing, o investimento na nova geração premium é justificado.
        
        A escolha final se resume a preferência de ecossistema: jogos exclusivos e imersão tátil (PS5 Pro) ou melhor custo-benefício de biblioteca via Game Pass (Xbox Series X).
        <br>
        <br>
        <strong>O que mais te atrai na nova geração de consoles: o poder gráfico ou o serviço de assinatura?</strong></p>
        <br>


        `
    },
    {
        id: 5,
        titulo: "PC Gamer: Os melhores componentes para jogar em 4K",
        categoria: "Hardware",
        imagem: "img/setup.png",
        texto: `
        <h1>PC Gamer 4K: Os Melhores Componentes para Desempenho Máximo</h1>
        <p>Jogar em resolução <strong>4K (Ultra HD)</strong> exige o máximo de qualquer máquina. Para garantir taxas de quadros fluidas, texturas nítidas e aproveitar recursos como Ray Tracing no nível máximo, é essencial escolher os componentes mais poderosos disponíveis em 2025. Este é o guia definitivo para montar seu PC focado em 4K.</p>
        <hr>
        <h3>1. O Motor Gráfico: A Placa de Vídeo (GPU)</h3>
        <p>A GPU é, de longe, o componente mais importante para jogos em 4K. Em resoluções altas, a maior parte do trabalho recai sobre ela, exigindo uma quantidade massiva de VRAM e poder de processamento.</p>
        <ul style="list-style-type: circle;">
            <li><strong>Necessidade de VRAM:</strong> Para texturas em Ultra 4K e para ativar Ray Tracing, <strong>16GB de VRAM</strong> é o ideal. <strong>12GB</strong> é o mínimo absoluto para setups 4K.</li>
            <li><strong>Modelos de Elite:</strong> Escolha as placas de vídeo de **topo de linha** das últimas gerações (Ex: NVIDIA GeForce RTX 4080/4090 ou AMD Radeon RX 7900 XT/XTX).</li>
            <li><strong>Tecnologias de Upscaling:</strong> Para manter o FPS elevado, garanta que sua GPU suporte tecnologias de *Frame Generation* e *Upscaling* de ponta (como <strong>DLSS 3</strong> da NVIDIA ou <strong>FSR 3</strong> da AMD).</li>
        </ul>
        <hr>
        <h3>2. O Cérebro Rápido: Processador (CPU)</h3>
        <p>Embora a GPU faça o trabalho pesado no 4K, a CPU precisa ser rápida o suficiente para alimentar a placa de vídeo com dados sem atrasos, evitando o temido "gargalo".</p>
        <ul style="list-style-type: circle;">
            <li><strong>Foco no Desempenho de Núcleo Único:</strong> Escolha CPUs que se destacam no desempenho de *single-core*.</li>
            <li><strong>Modelos Recomendados:</strong> Processadores de ponta como o **Intel Core i7/i9** (últimas gerações) ou **AMD Ryzen 7/9** (série 7000 ou posterior).</li>
        </ul>
        <hr>
        <h3>3. Memória e Armazenamento</h3>
        <p>Velocidade é fundamental para reduzir o tempo de carregamento e garantir que os dados cheguem rapidamente à GPU.</p>
        <ul style="list-style-type: circle;">
            <li><strong>Memória RAM:</strong> 32GB DDR5 é o novo padrão para um PC 4K. A frequência deve ser alta (6000MHz+) e a latência (CL) baixa.</li>
            <li><strong>Armazenamento:</strong> Um **SSD NVMe M.2** de última geração (Gen4 ou Gen5) é obrigatório. Recomendamos um modelo de **2TB** para o sistema operacional e jogos principais.</li>
        </ul>
        <hr>
        <h3>4. O Display: Monitor 4K</h3>
        <p>Seu monitor deve ser capaz de exibir toda essa qualidade gráfica.</p>
        <ul style="list-style-type: circle;">
            <li><strong>Resolução e Atualização:</strong> Monitores **4K** com taxa de atualização de **120Hz ou 144Hz**.</li>
            <li><strong>Tecnologia do Painel:</strong> Procure por painéis **OLED** ou **Mini-LED** para obter o melhor contraste, cores vibrantes e pretos verdadeiros.</li>
        </ul>
        <hr>
        <h3>5. O Essencial: Fonte e Refrigeração</h3>
        <p>Componentes de alto desempenho geram mais calor e exigem mais energia.</p>
        <ul style="list-style-type: circle;">
            <li><strong>Fonte de Alimentação (PSU):</strong> Certificação **80 Plus Gold ou Platinum** e potência mínima de **1000W** (ou mais).</li>
            <li><strong>Refrigeração:</strong> Um sistema de **Water Cooler (AIO)** de 280mm ou 360mm é crucial para manter o processador trabalhando em temperaturas ideais.</li>
        </ul>
        <hr>
        <p align="center"><strong>Com a sua lista de componentes em mãos, qual jogo você mal pode esperar para rodar em 4K?</strong></p>
        
        `
    },
    {
        id: 6,
        titulo: "Opinião: A evoluçãoo dos torneios de eSports no Brasil",
        categoria: "Opinião",
        imagem: "img/campeonato.png",
        texto: `
        <h1>A Evolução dos Torneios de eSports no Brasil</h1>

        <p>O cenário de eSports no Brasil não é mais uma promessa, mas uma <strong>realidade consolidada</strong> e em constante crescimento. A jornada, que começou em pequenos eventos e comunidades online, transformou-se em uma indústria milionária, atraindo investimentos globais, patrocínios de grandes marcas e, principalmente, uma audiência apaixonada.</p>
        <hr>
        <div style="padding-left: 20px;">
            <h3>Profissionalização e Estrutura</h3>
            <p>Um dos maiores saltos foi na <strong>profissionalização</strong>. Hoje, os principais torneios brasileiros — notadamente o CBLOL (League of Legends) e a LBFF (Free Fire), mas também em jogos como Rainbow Six e CS2 — são geridos com uma estrutura que se assemelha aos esportes tradicionais:</p>
            <ul style="list-style-type: circle;">
                <li><strong>Ligas de Franquias:</strong> A adoção do sistema de franquias (como no CBLOL) trouxe <strong>estabilidade financeira e previsibilidade</strong> para as equipes, permitindo contratos de longo prazo e maior investimento na infraestrutura dos times (CTs, staff técnico, psicólogos esportivos).</li>
                <li><strong>Transmissão e Produção:</strong> As transmissões elevam o nível a cada ano. Com estúdios dedicados, análises detalhadas (casters e comentaristas especializados) e produção de alta qualidade, a experiência de acompanhar um torneio brasileiro é <strong>imersiva e comparável</strong> às melhores do mundo.</li>
                <li><strong>Calendário Consistente:</strong> O público se acostumou com um calendário de competições anual bem definido, o que fortalece a fidelidade da audiência e permite que os times planejem suas temporadas com foco em picos de desempenho.</li>
            </ul>
        </div>
        <hr>       
        <div style="padding-left: 20px;">
            <h3>Impacto Cultural e Global</h3>
            <p>O eSport brasileiro transcendeu a esfera gamer e se tornou um fenômeno cultural:</p>
            <ul style="list-style-type: circle;">
                <li><strong>Reconhecimento de Talentos:</strong> O Brasil exporta talentos regularmente. Jogadores brasileiros são destaques em equipes internacionais de elite, o que valida a qualidade da formação e da base competitiva nacional.</li>
                <li><strong>Aproximação com o Público:</strong> Eventos presenciais, quando realizados, se tornam <strong>festivais de celebração</strong>. Mesmo durante períodos de competições online, as transmissões mantêm a paixão e o engajamento da torcida, que é uma das mais vibrantes do mundo.</li>
                <li><strong>Inclusão de Novos Títulos:</strong> O cenário não se limita mais aos MOBAs e FPS clássicos. O sucesso massivo de jogos mobile (como Free Fire) e a ascensão de Fighting Games e Battle Royales diversificam o ecossistema e trazem novos públicos.</li>
            </ul>
        </div>
        <hr>
        <div style="padding-left: 20px;">
            <h3>Onde Ainda Podemos Evoluir</h3>
            <p>Apesar dos avanços, o cenário ainda enfrenta desafios:</p>
            <ul style="list-style-type: circle;">
                <li><strong>Investimento na Base:</strong> A transição da cena amadora para a profissional ainda é difícil. Mais investimento em torneios de base e academias seria fundamental para aumentar o fluxo de novos talentos.</li>
                <li><strong>Apoio Institucional:</strong> O reconhecimento e apoio de órgãos esportivos e governamentais ainda é incipiente em comparação com países que já têm o eSport regulamentado como modalidade esportiva.</li>
                <li><strong>Diversificação de Patrocínios:</strong> Embora grandes marcas tenham entrado (telecomunicações, bancos), a diversificação em setores como saúde e educação ainda pode ser explorada para dar mais credibilidade ao esporte eletrônico.</li>
            </ul>
        </div>
        <hr>
        <p>Em resumo, o Brasil se estabeleceu como uma <strong>potência de eSports</strong>. A paixão da torcida e a solidez das ligas atuais pavimentam o caminho para que o país continue sendo um polo de inovação e grandes conquistas no cenário global.</p>
        <p align="center"><strong>Qual você considera o maior torneio de eSports do Brasil atualmente?</strong></p>
        `
    },

    // --- P�GINA 2 ---
    {
        id: 7,
        titulo: "O futuro da Realidade Virtual: Novos headsets chegam em 2025",
        categoria: "Hardware",
        imagem: "img/vr.png",
        texto: `
        <p>O ano de 2025 marca um ponto de inflexão na indústria de Realidade Virtual (VR). Longe de ser apenas um nicho para jogos, a tecnologia está finalmente se consolidando como uma plataforma robusta para trabalho, comunicação e entretenimento. A nova safra de headsets que chega ao mercado não apenas melhora a experiência atual, mas a redefine, focando em resolução, campo de visão e, crucially, na integração com a Realidade Mista (MR).</p>
        <hr>
        <div style="padding-left: 20px;">
            <h3>Resolução e Fidelidade Visual</h3>
            <p>O maior obstáculo para a imersão completa na VR sempre foi a baixa fidelidade visual. Os headsets de 2025 buscam resolver isso eliminando o "efeito tela de porta" (screen door effect), adotando resoluções altíssimas e novas tecnologias de lentes:</p>
            <ul style="list-style-type: circle;">
                <li><strong>Displays Micro-OLED:</strong> Esta tecnologia substitui os painéis LCD tradicionais, oferecendo pixels mais densos, pretos profundos (contraste infinito) e maior brilho. O resultado é uma imagem que se aproxima da clareza da retina humana.</li>
                <li><strong>Lentes Pancake:</strong> Headsets mais recentes estão migrando para lentes Pancake, que dobram a luz várias vezes. Isso permite que os dispositivos sejam significativamente <strong>mais finos e leves</strong>, melhorando o conforto para longas sessões de uso.</li>
                <li><strong>Rastreamento Ocular (Eye-Tracking):</strong> Essencial para a otimização de performance. O rastreamento ocular permite que o sistema use a renderização foveated, onde apenas a área do display que o usuário está olhando ativamente é renderizada em resolução máxima, economizando poder de processamento.</li>
            </ul>
        </div>
        <hr>
        <div style="padding-left: 20px;">
            <h3>Realidade Mista (MR) e Interação</h3>
            <p>A linha entre VR e MR está se apagando. A Realidade Mista é vista como o futuro, combinando o mundo digital com o ambiente físico do usuário. Os novos headsets fazem isso com tecnologia de pass-through de cor de alta qualidade:</p>
            <ul style="list-style-type: circle;">
                <li><strong>Pass-Through de Alta Fidelidade:</strong> Sensores avançados e câmeras de alta resolução capturam o ambiente real em cores vivas e o exibem dentro do headset com latência mínima. Isso permite que o usuário veja seus arredores, interaja com objetos físicos (como digitar em um teclado real) e coloque elementos digitais de forma convincente em seu espaço.</li>
                <li><strong>Integração com o Trabalho:</strong> A MR transforma o escritório. Usuários podem criar múltiplas telas virtuais gigantescas ao redor de sua mesa real, aumentando a produtividade e eliminando a necessidade de monitores físicos.</li>
                <li><strong>Rastreamento Mão/Corpo:</strong> Os controles tradicionais dão lugar a um rastreamento manual mais preciso, permitindo que as interações sejam mais intuitivas, usando gestos naturais para manipular objetos virtuais.</li>
            </ul>
        </div>
        <hr>
        <div style="padding-left: 20px;">
            <h3>Conforto e Acessibilidade</h3>
            <p>Para se tornar mainstream, a VR precisa ser confortável e acessível. Os modelos de 2025 priorizam a ergonomia e a redução do peso:</p>
            <ul style="list-style-type: circle;">
                <li><strong>Design Leve:</strong> Graças às lentes Pancake e baterias mais compactas, o peso total dos headsets está diminuindo, reduzindo a tensão no pescoço.</li>
                <li><strong>Baterias Otimizadas:</strong> Embora a busca por maior duração da bateria continue, há um foco em otimizar o consumo de energia para sessões de trabalho ou jogo mais longas sem interrupção.</li>
                <li><strong>Conexão Sem Fio Aprimorada:</strong> O Wi-Fi 6E e 7 está se tornando o padrão, garantindo que a transmissão de dados de PCs potentes para headsets wireless (sem fio) seja feita com latência quase nula.</li>
            </ul>
        <hr>
        <p>A próxima geração de headsets de Realidade Virtual e Mista está prestes a cumprir a promessa de uma computação espacial verdadeiramente imersiva. Com clareza visual, conforto e a capacidade de misturar o digital e o físico, 2025 será o ano em que a VR sairá do quarto do gamer para o escritório e a sala de estar.</p>
        <p align="center"><strong>Qual recurso de Realidade Virtual (VR) ou Mista (MR) você está mais ansioso para experimentar?</strong></p>
        `
    },
    {
        id: 8,
        titulo: "Review: \"Lost in Code\" é a surpresa indie do ano",
        categoria: "Reviews",
        imagem: "img/lostcode.png",
        texto: `
        <p>Com a indústria dominada por grandes títulos AAA, o charme e a criatividade de um jogo independente como <strong>"Lost in Code"</strong> chegam como uma lufada de ar fresco. O título, desenvolvido por um criador solo, tem gerado burburinho na comunidade indie por sua premissa única e execução visual surpreendente.</p>
        <hr>
        <div style="padding-left: 20px;">
            <h3>A Preceito Única: Preso em um Arquivo Corrompido</h3>
            <p>A narrativa central de "Lost in Code" coloca o jogador em um <strong>arquivo de jogo corrompido</strong>, um conceito que imediatamente prende a atenção. A aventura se desenrola explorando <strong>seis mundos caóticos</strong>, cada um com seus desafios próprios, enquanto o jogador tenta desvendar o mistério por trás de um vírus que está consumindo o mundo digital.</p>
            <ul style="list-style-type: circle;">
                <li><strong>Exploração de Mundos Híbridos:</strong> A promessa de misturar ambientes 2D e 3D, saltando entre diferentes realidades, sugere uma jogabilidade variada e um design de nível inteligente que quebra as convenções de gênero.</li>
                <li><strong>Foco em Quebra-Cabeças:</strong> O elemento central do jogo envolve a resolução de quebra-cabeças e o combate contra chefes, um balanço que promete testar tanto o raciocínio quanto os reflexos do jogador.</li>
            </ul>
        </div>
        <hr>
        <div style="padding-left: 20px;">
            <h3>Estilo Visual e Atmosfera</h3>
            <p>O estilo estético de "Lost in Code" – especialmente a proposta de um título focado em elementos de programação e glitches – é um ponto forte. Se executado com sucesso, o jogo entrega uma atmosfera que é ao mesmo tempo <strong>surreal e retro</strong>, com potencial para ser bastante <strong>assustadora (Creepy)</strong>, dependendo da versão.</p>
            <ul style="list-style-type: circle;">
                <li><strong>Estética de Corrupção:</strong> A forma como a corrupção do arquivo é visualmente representada é crucial. O uso de temas como o estilo ASCII e uma estética de **Novela Visual/Roguelike** pode dar ao jogo uma identidade visual única no meio indie.</li>
            </ul>
        </div>
        <hr>
        <div style="padding-left: 20px;">
            <h3>Veredito Parcial: O Potencial de um Sonho Solo</h3>
            <p>Embora o desenvolvimento solo possa ser um desafio (como em outros projetos indie), "Lost in Code" demonstra uma paixão e um conceito que o diferenciam. É um jogo construído sobre a premissa de desvendar segredos e mistérios, e a comunidade tem acompanhado a jornada do desenvolvedor com entusiasmo, o que é um bom presságio para seu lançamento completo.</p>
            <p>Se a execução do design de níveis e a história do vilão corresponderem à promessa da premissa, "Lost in Code" tem tudo para ser a surpresa indie do ano, oferecendo uma experiência profunda e cativante que vai além de um simples jogo de plataforma.</p>
        </div>
        <hr>
        <p align="center"><strong>Qual é o jogo indie com a premissa mais criativa que você jogou recentemente?</strong></p>
        `
    },
    {
        id: 9,
        titulo: "Free Fire: Mundial quebra recorde de audiência",
        categoria: "eSports",
        imagem: "img/freefire.png",
        texto: `
        <p>O cenário competitivo de Free Fire solidificou sua posição como um fenômeno global, especialmente no Brasil. O último Mundial (Free Fire World Series - FFWS) não apenas consagrou uma nova equipe campeã, mas também <strong>quebrou recordes de audiência</strong>, demonstrando a força e o alcance massivo do título mobile.</p>
        <hr>
        <div style="padding-left: 20px;">
            <h3>O Fenômeno da Audiência Global</h3>
            <p>O sucesso do Free Fire World Series é inegável, atingindo picos que rivalizam com as maiores competições de eSports do mundo. A FFWS de 2021, por exemplo, atingiu a marca histórica de <strong>5.4 milhões de espectadores simultâneos</strong>, um feito notável que reforça a paixão e o engajamento da comunidade.</p>
            <ul style="list-style-type: circle;">
                <li><strong>FFWS 2021 (Singapura):</strong> Foi o evento de maior sucesso, com o pico de audiência atingindo os impressionantes 5.4 milhões de espectadores. O campeonato, realizado em Singapura, foi o mais assistido de todos os tempos, excluindo as plataformas chinesas.</li>
                <li><strong>Apoio Brasileiro:</strong> O Brasil é uma peça central nesse recorde, com uma base de fãs fervorosa que impulsiona os números de visualização. A vitória de equipes brasileiras em mundiais anteriores sempre gera um pico de interesse.</li>
            </ul>
        </div>
        <hr>
        <div style="padding-left: 20px;">
            <h3>A Força do Mobile no eSports</h3>
            <p>O Free Fire é o principal expoente de como os jogos mobile se tornaram uma força dominante nos eSports. Sua popularidade massiva em mercados emergentes e a acessibilidade do jogo são fatores-chave:</p>
            <ul style="list-style-type: circle;">
                <li><strong>Acessibilidade:</strong> O Free Fire é um jogo de Battle Royale altamente otimizado para celulares, permitindo que milhões de pessoas em todo o mundo participem, tanto jogando quanto assistindo.</li>
                <li><strong>Comunidade Vibrante:</strong> A comunidade é conhecida por seu engajamento, com mais de 100 milhões de usuários ativos diários em 2021. Isso garante que a base de espectadores seja vasta e leal.</li>
            </ul>
        </div>
        <hr>
        <div style="padding-left: 20px;">
            <h3>O Próximo Capítulo</h3>
            <p>A Garena, desenvolvedora do jogo, continua a investir na estrutura dos seus campeonatos, garantindo que o ciclo de crescimento da audiência se mantenha. Com prêmios milionários e uma disputa acirrada entre as regiões, o Mundial de Free Fire está solidificado no calendário dos grandes eventos globais de eSports.</p>
        </div>
        <hr>
        <p align="center"><strong>Qual momento da última FFWS mais te emocionou?</strong></p>
        `
    },
    {
        id: 10,
        titulo: "Por que jogos retrô estão mais caros do que nunca?",
        categoria: "Opinião",
        imagem: "img/retro.jpg",
        texto: `
        <p>O mercado de jogos retrô e colecionáveis atingiu níveis de preços inéditos nos últimos anos. O que antes era um passatempo de nicho se transformou em um setor de investimento, com títulos clássicos para sistemas como Nintendo 64, SNES e Mega Drive atingindo valores exorbitantes. Este aumento tem múltiplas causas, desde a nostalgia até a especulação financeira.</p>
        <hr>
        <div style="padding-left: 20px;">
            <h3>1. A Geração Nostalgia Tem Poder de Compra</h3>
            <p>O principal motor do aumento de preços é demográfico. Os jovens que cresceram jogando NES e SNES nos anos 80 e 90 agora são adultos, muitos deles com carreiras consolidadas e <strong>poder aquisitivo</strong> para buscar as memórias de sua infância.</p>
            <ul style="list-style-type: circle;">
                <li><strong>Fator Nostalgia:</strong> O desejo de possuir a "cápsula do tempo" da juventude é um impulso emocional forte que impulsiona a demanda por itens raros ou em perfeito estado.</li>
            </ul>
        </div>
        <hr>

        <div style="padding-left: 20px;">
            <h3>2. Escassez e Foco em Itens "Selados"</h3>
            <p>A oferta de jogos clássicos é finita, mas a demanda só cresce. Além disso, o foco do mercado se voltou para a <strong>qualidade (condição)</strong> e não apenas para a raridade:</p>
            <ul style="list-style-type: circle;">
                <li><strong>Certificação e Gradação:</strong> Empresas de avaliação como Wata Games e VGA impulsionaram a especulação ao certificar e classificar (gradear) a condição de jogos selados. Uma cópia "selada" e com alta nota de um título popular pode valer centenas de milhares de dólares.</li>
                <li><strong>Itens de Investimento:</strong> Os jogos certificados passaram a ser vistos como um <strong>ativo de investimento</strong> (semelhante a quadrinhos ou cartões esportivos), atraindo especuladores em busca de lucro, o que eleva artificialmente os preços no topo do mercado.</li>
            </ul>
        </div>
        <hr>
        <div style="padding-left: 20px;">
            <h3>3. Fim da Desorganização do Mercado</h3>
            <p>Com o crescimento de plataformas de vendas online (eBay, grupos de colecionadores) e o surgimento de <strong>leilões de alto perfil</strong>, a precificação dos jogos se tornou muito mais transparente e alta:</p>
            <ul style="list-style-type: circle;">
                <li><strong>Aumento da Visibilidade:</strong> Leilões que vendem um único cartucho por milhões de dólares atraem a atenção da mídia e estabelecem novos "tetos de preço" que, subsequentemente, elevam os valores de mercado para cópias não seladas.</li>
                <li><strong>Falta de Novas Cópias:</strong> Diferente de outros colecionáveis, jogos antigos não são mais fabricados, garantindo que o número de cópias disponíveis para venda continue a diminuir à medida que mais colecionadores fecham suas coleções.</li>
            </ul>
        </div>
        <hr>
        <p>Em suma, a conjunção de nostalgia de uma geração com renda disponível, a escassez natural de itens antigos e a entrada de especuladores focados em itens selados transformou o mercado retrô. Para o colecionador casual, a alternativa pode ser buscar jogos avulsos (sem caixa/manual) ou recorrer à emulação e aos relançamentos digitais.</p>
        <p align="center"><strong>Qual é o jogo retrô mais caro que você tem em sua coleção?</strong></p>
        `
    },
    {
        id: 11,
        titulo: "Placas de Captura: Qual escolher para começar suas lives?",
        categoria: "Hardware",
        imagem: "img/live.png",
        texto: `
        <p>Para streamers que desejam transmitir o conteúdo de consoles (PS5, Xbox Series X/S, Nintendo Switch) ou configurar um PC dual-setup (um para jogar, outro para transmitir), a <strong>Placa de Captura</strong> é um componente essencial. Ela funciona como uma ponte, pegando o sinal de vídeo de sua fonte (console/PC de jogo) e enviando-o limpo e pronto para o software de streaming (OBS Studio, Streamlabs) no seu PC de transmissão.</p>
        <p>Escolher o modelo certo depende do seu setup atual e da qualidade de imagem que você deseja entregar.</p>
        <hr>
        <div style="padding-left: 20px;">
            <h3>Interna vs. Externa: Qual o seu Setup?</h3>
            <p>As placas de captura se dividem em dois tipos principais:</p>
            <ul style="list-style-type: circle;">
                <li><strong>Placa Externa (USB):</strong> Ideal para quem usa um laptop para fazer stream ou para quem quer flexibilidade. Elas se conectam via USB 3.0 ou USB-C. São fáceis de instalar e transportar.</li>
                <li><strong>Placa Interna (PCIe):</strong> Oferece melhor desempenho, latência mínima e maior estabilidade, pois se conecta diretamente à placa-mãe (slot PCIe) do PC de streaming. São indicadas para setups high-end e para quem busca a menor latência possível.</li>
            </ul>
        </div>
        <hr>
        <div style="padding-left: 20px;">
            <h3>As Especificações Chave para o Streaming Moderno</h3>
            <p>Seja qual for o tipo, as placas de captura mais modernas devem atender a alguns padrões essenciais para um stream de qualidade em 2025:</p>
            <ul style="list-style-type: circle;">
                <li><strong>Resolução de Saída:</strong> O mínimo hoje é <strong>1080p a 60 FPS</strong>. Se você quer entregar qualidade premium, procure por modelos que suportem a saída <strong>4K a 30 FPS</strong> ou <strong>1440p a 60 FPS</strong>.</li>
                <li><strong>Pass-Through (Saída para TV):</strong> Essa função é vital. Ela permite que a placa envie o vídeo para o PC (para streaming) E, simultaneamente, para a sua TV ou monitor (para você jogar). O Pass-Through deve suportar a mesma qualidade que o console entrega (ex: <strong>4K a 60 FPS ou 120 FPS</strong>), para que sua experiência de jogo não seja comprometida.</li>
                <li><strong>Latência Baixa:</strong> Para placas externas, a latência de captura deve ser a menor possível, evitando atraso entre o console e o que aparece no seu stream.</li>
            </ul>
        </div>
        <hr>
        <div style="padding-left: 20px;">
            <h3>Modelos Populares para Iniciantes e Profissionais</h3>
            <p>O mercado é dominado por duas grandes marcas, Elgato e AverMedia, com modelos que atendem a diferentes orçamentos:</p>
            <ul style="list-style-type: circle;">
                <li><strong>Para Iniciantes (Bom Custo-Benefício):</strong> Placas USB menores que entregam 1080p 60 FPS com Pass-Through básico. É suficiente para começar e crescer no Twitch/YouTube.</li>
                <li><strong>Para Profissionais (Alto Desempenho):</strong> Modelos PCIe ou USB-C de ponta que oferecem <strong>4K 60 FPS Pass-Through</strong> e latência zero. Ideais para quem joga em monitores 144Hz ou 120Hz e quer que o stream mantenha a qualidade.</li>
            </ul>
        </div>
        <hr>
        <p>Para o streamer iniciante, comece focando no 1080p 60 FPS. À medida que seu canal cresce, você pode investir em modelos mais robustos que garantam o Pass-Through em alta qualidade, essencial para a sua experiência de jogo.</p>
        <p align="center"><strong>Você prefere placas internas ou externas para o seu setup de streaming?</strong></p>
        `
    },
    {
        id: 12,
        titulo: "Review: Final Fantasy XVI traz ação frenética e visual épico",
        categoria: "Reviews",
        imagem: "img/FFXY_Destaque.jpg",
        texto: `
        <p>O lançamento de <strong>Final Fantasy XVI (FFXVI)</strong> para o PlayStation 5 (PS5) marcou um ponto de viragem na icônica franquia da Square Enix. O título se distancia das raízes tradicionais de RPGs baseados em turnos para abraçar totalmente o combate em tempo real e focado na ação, entregando uma experiência que é tão cinematográfica quanto brutal. O resultado é um jogo que equilibra uma narrativa grandiosa com uma jogabilidade frenética.</p>
        <hr>
        <div style="padding-left: 20px;">
            <h3>Combate: Foco na Ação Hack-and-Slash</h3>
            <p>A mudança mais notável em FFXVI é a ênfase no combate hack-and-slash, mais próximo de jogos como Devil May Cry do que dos Final Fantasy clássicos. O sistema é ágil e profundo:</p>
            <ul style="list-style-type: circle;">
                <li>O protagonista, Clive Rosfield, possui um vasto arsenal de habilidades que ele adquire ao absorver os poderes dos Eikons (as invocações tradicionais da série).</li>
                <li>O sistema de combate permite que os jogadores encadeiem combos complexos e utilizem os poderes dos Eikons em trocas rápidas, mantendo a ação fluida e visualmente explosiva.</li>
                <li>Apesar da natureza focada em ação, o jogo inclui anéis de suporte que permitem aos jogadores com menos experiência em ação realizar combos complexos e esquivas com o apertar de um único botão, tornando o jogo acessível a todos.</li>
            </ul>
        </div>
        <hr>
        <div style="padding-left: 20px;">
            <h3>Visual Épico e Performance</h3>
            <p>FFXVI foi construído para aproveitar totalmente o hardware do PS5, resultando em visuais de tirar o fôlego, especialmente durante as batalhas épicas entre os Eikons:</p>
            <ul style="list-style-type: circle;">
                <li>As batalhas de Eikon, que colocam Clive contra as invocações gigantescas, são espetáculos cinematográficos, com uma escala impressionante e cutscenes que se integram perfeitamente à jogabilidade.</li>
                <li>O mundo de Valisthea, embora nem sempre aberto para exploração livre, é visualmente rico, cheio de paisagens detalhadas e ruínas fantásticas.</li>
                <li>O jogo oferece modos de desempenho e qualidade: o <strong>Modo Qualidade</strong> foca na resolução em 4K, enquanto o <strong>Modo Desempenho</strong> prioriza os 60 quadros por segundo (FPS), embora possa apresentar quedas de frame em momentos mais intensos.</li>
            </ul>
        </div>
        <hr>
        <div style="padding-left: 20px;">
            <h3>Narrativa Madura e Intensa</h3>
            <p>A história de FFXVI se aprofunda em temas mais adultos e sombrios, como política, destino e vingança. A trama é intensificada por um elenco de personagens complexos e bem desenvolvidos:</p>
            <ul style="list-style-type: circle;">
                <li>O enredo é mais maduro, tratando de temas como guerra e escravidão.</li>
                <li>A história é profundamente engajante, com reviravoltas emocionais e desenvolvimento sólido do personagem principal.</li>
            </ul>
        </div>
        <hr>
        <p>Final Fantasy XVI é uma ousada e bem-sucedida reinvenção da franquia. A Square Enix sacrificou a tradição de turnos em favor de uma ação implacável e cinematográfica que se encaixa perfeitamente na potência do PS5. É um título indispensável para quem busca uma aventura épica com um combate intenso.</p>
        <p align="center"><strong>Qual o seu Eikon favorito no sistema de combate de FFXVI?</strong></p>
        `
    },


];

/* =========================================
   2. LÓGICA DA PÁGINA DE NOTÍCIA (noticia.html)
   ========================================= */
const newsTitleElement = document.getElementById('news-title');

if (newsTitleElement) {
    // Código para carregar os dados na página de detalhe
    const params = new URLSearchParams(window.location.search);
    const newsId = parseInt(params.get('id'));

    const noticia = noticiasDB.find(item => item.id === newsId);

    // 3. Preenche a tela
    if (noticia) {
        document.getElementById('news-category').innerText = noticia.categoria;
        document.getElementById('news-title').innerText = noticia.titulo;
        document.getElementById('news-img').src = noticia.imagem;

        // CORREÇÃO PARA INTERPRETAR HTML E QUEBRAS DE LINHA
        document.getElementById('news-body').innerHTML = noticia.texto.replace(/\n/g, '<br>');

        document.title = `${noticia.titulo} - RINKE NEWS`;
    } else {
        // Se o ID não existir no banco
        document.getElementById('news-title').innerText = "Notícia não encontrada";
        document.getElementById('news-body').innerHTML = "<p>O ID solicitado não existe no banco de dados.</p>";
    }
}

/* =========================================
   3. LÓGICA DO MENU MOBILE & PAGINAÇÃO (HOME)
   ========================================= */

const newsGrid = document.querySelector('.news-grid'); // Seletor robusto para a home
const mobileBtn = document.querySelector('.mobile-btn');

// Verifica se estamos na Home (se o grid existe)
if (newsGrid) {
    const navbar = document.querySelector('.navbar');
    const mobileBtnIcon = document.querySelector('.mobile-btn i');

    // Elementos de Paginação e Cards
    const cards = document.querySelectorAll('.news-card');
    const pageBtns = document.querySelectorAll('.page-btn');
    const paginationContainer = document.querySelector('.pagination');
    const itemsPerPage = 6;
    let currentPage = 1;

    // --- FUNÇÕES PRINCIPAIS ---

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        cards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.classList.remove('hide');
                card.style.display = 'flex';

                card.style.animation = 'none';
                card.offsetHeight;
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.classList.add('hide');
                card.style.display = 'none';
            }
        });

        // Atualiza botões
        pageBtns.forEach(btn => btn.classList.remove('active'));
        if (pageBtns[page]) pageBtns[page].classList.add('active');

        currentPage = page;
    }

    // Função auxiliar para voltar ao estado inicial (Página 1)
    function resetSearch() {
        if (paginationContainer) {
            paginationContainer.style.display = 'flex';
        }
        showPage(1);

        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        document.querySelector('.nav-link[data-category="all"]').classList.add('active');
    }

    // --- EVENTOS ---

    // Eventos de clique na paginação
    pageBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (index === 0) { // Seta Esquerda
                if (currentPage > 1) showPage(currentPage - 1);
            } else if (index === pageBtns.length - 1) { // Seta Direita
                // O limite é 3 páginas, mas o array de botões tem 5 (0, 1, 2, 3, 4)
                if (currentPage < 2) showPage(currentPage + 1);
            } else { // Números (1, 2, 3)
                showPage(index);
            }
        });
    });

    // Evento de Toggle do Menu Mobile
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            const isOpen = navbar.classList.contains('active');
            if (isOpen) {
                mobileBtnIcon.classList.remove('fa-bars');
                mobileBtnIcon.classList.add('fa-times');
            } else {
                mobileBtnIcon.classList.remove('fa-times');
                mobileBtnIcon.classList.add('fa-bars');
            }
        });
    }

    /* =========================================
       4. SISTEMA DE FILTRAGEM (NAVBAR)
       ========================================= */

    function showAllCards() {
        const allCards = document.querySelectorAll('.news-card');
        allCards.forEach(card => {
            card.classList.remove('hide');
            card.style.display = 'flex';

            // Resetamos a animação para garantir que apareçam suavemente
            card.style.animation = 'none';
            card.offsetHeight;
            card.style.animation = 'fadeIn 0.5s ease forwards';
        });
    }


    const navLinks = document.querySelectorAll('.nav-link');
    const searchInput = document.getElementById('search-input');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const navbar = document.querySelector('.navbar');
            const mobileBtnIcon = document.querySelector('.mobile-btn i');


            if (navbar && mobileBtnIcon) {
                navbar.classList.remove('active');
                mobileBtnIcon.classList.remove('fa-times');
                mobileBtnIcon.classList.add('fa-bars');
            }

            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');

            const categoryToFilter = link.getAttribute('data-category');
            const allCards = document.querySelectorAll('.news-card');

            // Lógica de Filtragem
            if (categoryToFilter === 'all') {
                resetSearch();
                return;
            }

            showAllCards();

            // Se for uma categoria específica, esconde a paginação
            paginationContainer.style.display = 'none';
            searchInput.value = ''; // Limpa a busca

            allCards.forEach(card => {
                const cardCategory = card.querySelector('.category-text').innerText;

                if (cardCategory.trim().toLowerCase() === categoryToFilter.toLowerCase()) {
                    card.classList.remove('hide');
                    card.style.display = 'flex';
                } else {
                    card.classList.add('hide');
                    card.style.display = 'none';
                }
            });
        });
    });


    /* =========================================
           5. LÓGICA DO NEWSLETTER E BUSCA DESKTOP
           ========================================= */
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterInput = document.getElementById('newsletter-email');
    const newsletterFeedback = document.getElementById('newsletter-feedback');
    const searchBtn = document.getElementById('search-btn');
    const searchBox = document.querySelector('.search-box');


    // Toggle Busca Desktop
    if (searchBtn && searchBox) {
        searchBtn.addEventListener('click', () => {
            searchBox.classList.toggle('active');
            if (searchBox.classList.contains('active')) {
                searchInput.focus();
            } else {
                searchInput.value = '';
                resetSearch();
            }
        });
    }

    // Filtragem por Digitação
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const termo = e.target.value.toLowerCase();
            const allCards = document.querySelectorAll('.news-card');

            if (termo.length > 0) {
                if (paginationContainer) paginationContainer.style.display = 'none';
                document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));

                allCards.forEach(card => {
                    const titulo = card.querySelector('h3').innerText.toLowerCase();
                    if (titulo.includes(termo)) {
                        card.classList.remove('hide');
                        card.style.display = 'flex';
                    } else {
                        card.classList.add('hide');
                        card.style.display = 'none';
                    }
                });
            } else {
                resetSearch();
            }
        });
    }


    // Lógica Newsletter
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterInput.value.trim();
            newsletterFeedback.style.display = 'none';

            if (email === '' || !email.includes('@') || !email.includes('.')) {
                newsletterFeedback.innerText = '⚠️ Por favor, insira um email válido.';
                newsletterFeedback.style.backgroundColor = '#8c3d44';
                newsletterFeedback.style.padding = '5px 10px';
                newsletterFeedback.style.borderRadius = '4px';
                newsletterFeedback.style.display = 'block';
            } else {
                newsletterFeedback.innerText = `✅ E-mail ${email} cadastrado com sucesso!`;
                newsletterFeedback.style.backgroundColor = '#387c3d';
                newsletterFeedback.style.padding = '5px 10px';
                newsletterFeedback.style.borderRadius = '4px';
                newsletterFeedback.style.display = 'block';

                setTimeout(() => {
                    newsletterInput.value = '';
                    newsletterFeedback.style.display = 'none';
                }, 3000);
            }
        });
    }

    // --- INICIALIZAÇÃO GARANTIDA ---
    // ESTE É O BLOCO QUE CORRIGE O BUG: Garante que a Paginação comece escondida.
    showPage(1);
}