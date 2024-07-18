const questions = [
  "O que me faz feliz é:",
  "Essa é a minha essência e onde me sinto melhor:",
  "Estarei num bom caminho se:",
  "Eu gostaria que os outros me vissem como:",
  "Assim que eu lido com a rejeição:",
  "Assim que eu lido com os obstáculos e objeções:",
  "No processo de vendas eu gosto (lembre-se que todos somos vendedores de ideias, mesmo sem atuar no cargo de vendas):",
  "No processo de vendas eu não gosto: ",
  "Assim que eu trabalho em equipe:",
  "Assim que eu me sinto recebendo analises do lider:",
  "Para mim um bom líder necessita prioritariamente de:",
  "Assim que eu costumo me sentir fazendo parte de uma equipe:",
  "Assim que eu me sinto com a colaboração dos meus colegas:",
  "Qual das qualidades abaixo tem mais haver contigo?",
  "O que gosta de fazer nos dias de folga?",
  "Qual é o seu talento secreto?",
  "Para mim, a pior sensação é de:",
  "Me considero uma pessoa:",
  "Para mim, num trabalho é importante:",
  "Detesto que as pessoas me vejam:",
  "Como você reage quando algum colega de cargo igual ou inferior te pede ajuda?",
  "Como você reage quando seu líder/gestor lhe pede para fazer algo ou te dá uma ordem/instrução?",
  "O que você gosta ou gostaria de fazer se pudesse diariamente depois do seu expediente no trabalho, e finais de semana?",
  "O que você gosta ou gostaria de fazer se pudesse nas férias?",
  "O que você espera do seu líder/gestor?",
  "Como você lida com conflitos?",
  "Quando você está com um grupo de amigos numa pizzaria (ou outro tipo de restaurante), como você reage na decisão do pedido?",
  "Quando você está numa confraternização ou festa focada na diversão, qual é seu comportamento?",
  "Como você lida com as metas?",
  "Como você lida com as regras da empresa?",
];

const alternatives = [
  /*Q1*/[
    /*T1*/ "Ter tudo organizado e em ordem antes de me divertir para que não haja preocupações",
    /*T2*/ "Ver as pessoas que eu gosto felizes, principalmente se eu estiver participando.",
    /*T3*/ "Ser o campeão de tudo que participo.",
    /*T4*/ "Ser reconhecido por ser único, exclusivo ou diferente em algo.",
    /*T5*/ "Ser autossuficiente para tudo.",
    /*T6*/ "Tudo que foi planejado acontecer sem nenhum imprevisto.",
    /*T7*/ "Poder fazer coisas novas e experimentar novas experiencias.",
    /*T8*/ "Estar no comando das coisas.",
    /*T9*/ "Estar em paz comigo mesmo e com os outros.",
  ],

  /*Q2*/[
    /*T1*/ "Ser justo, bom e equilibrado com todos a minha volta.",
    /*T2*/ "Ajudar as pessoas e sendo reconhecido por isso.",
    /*T3*/ "Buscar incansavelmente a vitória e ao sucesso.",
    /*T4*/ "Encontrar ou criar artes e coisas belíssimas inimagináveis.",
    /*T5*/ "Buscar o máximo de conhecimento possível para resolver as minhas demandas.",
    /*T6*/ "Criar plano B para tudo o que eu identificar como problema.",
    /*T7*/ "Colocar em prática várias ideias novas e criar soluções positivas.",
    /*T8*/ "Proteger os mais fracos que estão sob minha responsabilidade.",
    /*T9*/ "Manter a as coisas pacificas e sem problemas.",
  ],

  /*Q3*/[
    /*T1*/ "Fizer o que é certo.",
    /*T2*/ "For amado pelos outros e estiver perto deles.",
    /*T3*/ "For bem sucedido e respeitado pelos outros.",
    /*T4*/ "Permanecer fiel a mim mesmo e minhas ideias.",
    /*T5*/ "Conseguir dominar algo através do conhecimento.",
    /*T6*/ "Eu fizer o que se espera que faça.",
    /*T7*/ "Eu obtiver o que preciso.",
    /*T8*/ "For forte e conseguir dominar as situações.",
    /*T9*/ "As pessoas que me rodeiam também estiverem.",
  ],

  /*Q4*/[
    /*T1*/ "Uma pessoa justa, íntegra e incorruptível.",
    /*T2*/ "Um facilitador para chegar nas coisas que quer realizar.",
    /*T3*/ "Um vitorioso bem sucedido.",
    /*T4*/ "Único.",
    /*T5*/ "Especialista nos assuntos que trabalhos ou estudo.",
    /*T6*/ "Referência em segurança.",
    /*T7*/ "A pessoa mais criativa em superar desafios.",
    /*T8*/ "A pessoa mais forte.",
    /*T9*/ "Uma pessoa de boa.",
  ],

  /*Q5*/[
    /*T1*/ "Fico com uma imensa raiva interna me cobrando onde foi que falhei.",
    /*T2*/ "Me irrito pela ingratidão e me excluo até melhorar meu humor.",
    /*T3*/ "Rejeição me da mais força para bater as minhas metas pessoais.",
    /*T4*/ "Rejeição é consumida como combustível para ideias mais fortes e criativas.",
    /*T5*/ "Não me faz sentir nada demais a rejeição.",
    /*T6*/ "Fico ansioso me questionando sobre onde eu falhei e no que eu tinha que ter feito para que isso não acontecesse.",
    /*T7*/ "Procuro desviar logo o pensamento da tristeza para algo de positivo.",
    /*T8*/ "Me recuo para um local protegido para que eu possa sofrer em silêncio e possa retornar mais forte do que antes.",
    /*T9*/ "Me pergunto porque isso aconteceu e se não tem como revertermos isso.",
  ],

  /*Q6*/[
    /*T1*/ "Sigo todas as regras e resolvo pelo caminho correto, sem jeitinhos, por mais difícil que seja.",
    /*T2*/ "Dou meu jeito evitando pedir ajuda mesmo que eu não saiba como realizar a tarefa.",
    /*T3*/ "Estudo, pesquiso e faço minha parte para ultrapassar os obstáculos, eles fazem parte do caminho pra vitória.",
    /*T4*/ "Procuro ajuda para passar pela situação caso eu não tenha conseguido desenvolver nenhuma estratégia extraordinária para vencer o obstáculo.",
    /*T5*/ "Estudo profundamente cada obstáculo para poder descobrir as falhas dele e o superar.",
    /*T6*/ "Crio planos e compartilho com as pessoas que se relacionam comigo. Se for algo que eu precise decidir sozinho, faço vários planos de reserva.",
    /*T7*/ "São oportunidades de pensar em soluções novas para atender a demanda ou atingir a meta.",
    /*T8*/ "Derroto cada obstáculo como uma fração da meta. Desafios e obstáculos só me deixam mais forte.",
    /*T9*/ "Obstáculos grandes demais podem me desanimar, mas com paciência tudo se resolve.",
  ],

  /*Q7*/[
    /*T1*/ "De ser juiz ou arbitrar as fases da venda, sempre trazendo os benefícios e vantagens para o cliente comprar o produto certo.",
    /*T2*/ "De ser a pessoa que ajudou o cliente chegar na conclusão que ele precisa.",
    /*T3*/ "De ouvir muito para poder dar muita informação dos produtos ou serviços que vão atender esse cliente e convence-lo que ele precisa disso agora mesmo.",
    /*T4*/ "De entender o objetivo e a demanda do cliente para lhe apresentar a melhor e mais exclusiva opção possível.",
    /*T5*/ "De ter em mãos os manuais e memoriais descritivos necessários para suprir minhas dúvidas quando eu não tiver o conhecimento para atender o cliente.",
    /*T6*/ "De explicar tudo o máximo possível e de ter todas as respostas para as perguntas que me fizerem.",
    /*T7*/ "De encantar o cliente, fazer ele sonhar vivendo com o produto/serviço e até mesmo de mostrar pra ele como a vida dele daqui pra frente vai ser sem o produto/serviço",
    /*T8*/ "De comandar todas as etapas da venda até o fechamento.",
    /*T9*/ "Gosto de atender as necessidades do cliente, sem mais nem menos.",
  ],

  /*Q8*/[
    /*T1*/ "Que outras pessoas fiquem interrompendo meus métodos ou se metendo na minha negociação, a não seja que eu tenha solicitado a presença do gerente ou gestor para essa finalidade.",
    /*T2*/ "Que o cliente saia da negociação insatisfeito comigo ou com a empresa.",
    /*T3*/ "Que o cliente fique inventando desculpas sem fundamentos só para trocar de assunto.",
    /*T4*/ "Que as pessoas fiquem se intrometendo enquanto estou criando soluções.",
    /*T5*/ "Que o cliente seja invasivo demais nas questões emocionais, afinal sou um prestador de serviços e não psicólogo.",
    /*T6*/ "De mentiras ou falácias tanto da parte do cliente para comigo quanto dos meus gestores para com os clientes só para fechar a venda",
    /*T7*/ "De que haja muita metodologia e arbitrariedade pra conduzir a venda. O processo tem que ser simples.",
    /*T8*/ "De demora. As coisas tem que fluir rapidamente.",
    /*T9*/ "De que as pessoas fiquem me apressando.",
  ],

  /*Q9*/[
    /*T1*/ "Crio processos e regras para cada pessoa ter certa autonomia de forma geral e saber dos seus limites para não invadir o departamento ou atividade dos demais colegas.",
    /*T2*/ "Procuro estar sempre disponível para ajudar qualquer membro da equipe além das minhas responsabilidades.",
    /*T3*/ "Procuro agradar todos os colegas com minhas boas maneiras e minha obediência perante a liderança.",
    /*T4*/ "Costumo ser cooperativo com o objetivo ou com a necessidade do cliente buscando entregar a melhor qualidade possível, me importando pouco com a opinião de meus colegas.",
    /*T5*/ "Sou o mais quieto e analista da equipe falando com os outros somente se dirigirem a palavra a mim",
    /*T6*/ "Quero ser amigo e conquistar a confiança de todos, sejam dos meus colegas quanto do meu gestor, onde sempre vou estar disponível.",
    /*T7*/ "Tento contagiar os colegas com a minha energia e força de vontade.",
    /*T8*/ "Mostro que eu quem estou no comando das situações relacionadas a mim.",
    /*T9*/ "Estou disponível para ouvir a todos e fazer o que tem que ser feito sem estresse.",
  ],

  /*Q10*/[
    /*T1*/ "Me sinto normal, afinal, é preciso mesmo usar ferramentas para medir resultados e poder tomar atitudes.",
    /*T2*/ "Não me leve a mal, mas eu prefiro lidar com pessoas e não com números e dados.",
    /*T3*/ "Gosto. A analise de dados nos permite a avaliar os indicadores para alcançar as metas baseado em melhorias dos pontos fracos.",
    /*T4*/ "Quanto mais indicadores, mais janelas para eu observar o que pode ser criado como soluções.",
    /*T5*/ "Somente através da analise de dados podemos mensurar racionalmente os números.",
    /*T6*/ "Me da ansiedade saber que posso ser julgado devido a estatísticas. Mas é interessante para julgar o desempenho dos outros.",
    /*T7*/ "É ótimo para poder dar ideia de novas possibilidades e maneiras de fazer diferente baseado em dados coletados.",
    /*T8*/ "Excelente. Com analise de dados é possível traçar várias estratégias.",
    /*T9*/ "Interessante como podemos mensurar tantas coisas apenas com ocorrências do passado.",
  ],

  /*Q11*/[
    /*T1*/ "Cumprir as regras e leis da organização acima das próprias vontades e impulsos.",
    /*T2*/ "Ser a maior referencia na equipe para que todos possam contar com ele.",
    /*T3*/ "Resultado, líder que não demonstra sucesso são líderes fracos",
    /*T4*/ "Respeitar as qualidade e talentos individuais de cada um.",
    /*T5*/ "Passar domínio sobre o mercado.",
    /*T6*/ "Ter conhecimento para sanar todas as minhas dúvidas, necessidades e questionamentos.",
    /*T7*/ "De definir e seguir os objetivos principais para que a equipe tenha um direcionamento.",
    /*T8*/ "Usar o poder de forma adequada.",
    /*T9*/ "De entender o jeito de cada um.",
  ],
  /*Q12*/[
    /*T1*/ "Faço o meu trabalho sem questionar as regras e fico indignado quando quem descumpre passa impune.",
    /*T2*/ "Me sinto acolhido pelos meus colegas que estou sempre disposto a ajudar.",
    /*T3*/ "Me sinto amarrado. Normalmente eu tendo a ter melhores resultados sozinho.",
    /*T4*/ "Me sinto a ovelha negra da equipe. Porque costumo apontar caminhos contrários da decisão da maioria que não analisa as coisas profundamente antes de agir",
    /*T5*/ "Não sinto nada diferente, apenas observo o comportamento de cada um e faço a minha parte em silêncio.",
    /*T6*/ "Tenho muita dificuldade em confiar nas pessoas, então me esforço para que elas confiem em mim e a partir disso posso ir desenvolvendo confiança com quem confia em mim.",
    /*T7*/ "A equipe é minha parceira! Me sinto tranquilo por ter pessoas próximas para me ajudar ou para mim ajudar porque ninguém faz as coisas sozinho.",
    /*T8*/ "Protejo os meus aliados e me defendo dos demais. Coopero com o necessário para a liderança ou meus protegidos.",
    /*T9*/ "Me sinto amarrado. Normalmente eu tendo a ter melhores resultados sozinho.",
  ],
  /*Q13*/[
    /*T1*/ "Fico grato, pois somente com a colaboração de todos é que o objetivo final é alcançado.",
    /*T2*/ "Fico orgulhoso dos meus colegas reconhecerem me ajudando ao colaborar comigo.",
    /*T3*/ "Não estou acostumado com a colaboração dos meus colegas, mas quando colaboram sinto uma boa parceria.",
    /*T4*/ "Me sinto bem quando eles colaboram sem atrapalhar as minhas criações e costumo os ajudar apenas quando me é solicitado.",
    /*T5*/ "Gosto que os meus colegas não se intrometam nas minhas atividades para que eu possa resolver uma a uma, se eu precisar de algo de alguém eu mesmo solicito.",
    /*T6*/ "Me sinto feliz, grato pela confiança conquistada e me esforço para não perder essa confiança.",
    /*T7*/ "Me sinto um máximo! Pois é gratificante quando as pessoas fazem o que pedimos para nos ajudar.",
    /*T8*/ "Se me ajudou é porque me respeita. Se me respeita tem o meu respeito.",
    /*T9*/ "Quando um colega me ajuda, sinto paz e alivio por não precisar passar por aquela situação sozinho.",
  ],
  /*Q14*/[
    /*T1*/ "Ser organizado e saber organizar os processos.",
    /*T2*/ "Ser simpático e estar disposto a ajudar qualquer pessoa que procure por mim.",
    /*T3*/ "Ser dedicado a cumprir todas as minhas metas custe o que custar.",
    /*T4*/ "Ser excêntrico e individualista na execução das atividades, planos e metas.",
    /*T5*/ "Ser analítico e observador em relação a todos os detalhes, especialmente aos detalhes teóricos.",
    /*T6*/ "Ser fiel e convicto nas decisões da liderança até o fim. Afinal, a palavra do líder é a meta.",
    /*T7*/ "Ser inovador nos processos existentes e nas ideias para processos interligados.",
    /*T8*/ "Ser focado a superar todas as adversidades vindas de alguma maneira estratégica.",
    /*T9*/ "Manter a tranquilidade no ambiente sem causar maiores estragos que o estresse natural já causa.",
  ],
  /*Q15*/[
    /*T1*/ "Primeiro terminar todos os meus deveres e responsabilidades de casa, se sobrar tempo dou andamento nos meus hobbies.",
    /*T2*/ "Gosto de visitar meus amigos queridos ou receber meus amigos na minha casa para algum jantar ou outra forma de confraternização.",
    /*T3*/ "Gosto de planejar e estudar o que precisa ser feito para bater as minhas metas, costumo trabalhar mesmo nas folgas.",
    /*T4*/ "Gosto de me isolar e fazer as coisas que mais gosto e que não tenho possibilidade de fazer no dia-a-dia como meus maiores hobbies.",
    /*T5*/ "Me aperfeiçoar mais no meu mercado e também aproveito para fazer meus hobbies sozinho.",
    /*T6*/ "Gosto de colocar em dia tudo o que está atrasado e em sequência descansar fazendo atividades leves que não precisem de muito planejamento.",
    /*T7*/ "Gosto de fazer de tudo um pouco, menos ficar em casa. Se alguém me convidar pra algo eu vou, as vezes até pra coisas que eu nunca fiz na vida.",
    /*T8*/ "Gosto de descansar e fazer as coisas que ninguém pode me ver fazendo no dia a dia como ver TV, passear com pets e etc.",
    /*T9*/ "Gosto de ficar em paz, tranquilo fazendo minhas coisas sem a pressão da rotina.",
  ],
  /*Q16*/[
    /*T1*/ "Consigo criar funis, fluxogramas e demais ferramentas de regras para desenhar um processo do início ao fim em qualquer área que eu adquira experiência prática.",
    /*T2*/ "Me comunico muito bem e conquisto as pessoas para pensar da forma que eu penso, sempre me colocando a disposição para ajudar cada um a chegar onde precisa.",
    /*T3*/ "Através da minha diplomacia e politicagem faço contatos com as pessoas mais influentes dos lugares.",
    /*T4*/ "Consigo sentir o clima dos ambientes e das pessoas e usar essa “energia” para criar soluções ou projetos novos, principalmente sensações pesadas para a maioria das pessoas como dor e tristeza.",
    /*T5*/ "Descubro facilmente todas as falhas dos projetos antes de coloca-las em execução para evitar desgastes e desperdícios.",
    /*T6*/ "Descobrir falsidades e mentiras pois tenho talento de identificar as expressões das pessoas conforme o tempo de convívio.",
    /*T7*/ "Encontrar soluções positivas para as coisas, ou inovações positivas.",
    /*T8*/ "Controlar as coisas de forma natural, apenas me impondo.",
    /*T9*/ "Consigo intermediar situações de conflitos com dialogo e entendendo as partes envolvidas sem tomar partido.",
  ],
  /*Q17*/[
    /*T1*/ "Não estar fazendo a coisa certa.",
    /*T2*/ "Humilhação.",
    /*T3*/ "Ser um João Ninguém no futuro.",
    /*T4*/ "Ser comum, trivial, normal.",
    /*T5*/ "Ter que lidar com a intolerância burra.",
    /*T6*/ "Ter a impressão que me vão atacar a qualquer momento ou de que me vão culpar.",
    /*T7*/ "Estar preso e condicionado.",
    /*T8*/ "Ter que me submeter a vontade dos outros.",
    /*T9*/ "Não ter tranquilidade para nada. ",
  ],
  /*Q18*/[
    /*T1*/ "Cumpridora de seus deveres, honesta e disciplinada",
    /*T2*/ "Com muita vontade e determinação.",
    /*T3*/ "Ambiciosa, diplomata, competente e determinada a fazer sucesso.",
    /*T4*/ "Sensível, criativa, que reconhece os valores humanos.",
    /*T5*/ "Séria, tranquila, ponderada e na minha.",
    /*T6*/ "Leal, colaboradora, que gosta de participar do grupo.",
    /*T7*/ "Alegre, jovial, entusiasta, criativa.",
    /*T8*/ "Bondosa, justa, realizadora, direta e objetiva.",
    /*T9*/ "Pacífica, compreensiva, mediadora e tranquila.",
  ],
  /*Q19*/[
    /*T1*/ "Cada um assumir sua responsabilidade.",
    /*T2*/ "Haver uma boa integração entre as pessoas.",
    /*T3*/ "Foco nos resultados.",
    /*T4*/ "Valorização das diferenças individuais.",
    /*T5*/ "Respeito às opiniões alheias.",
    /*T6*/ "Poder confiar nos outros.",
    /*T7*/ "Liberdade para inovar.",
    /*T8*/ "Uma liderança forte.",
    /*T9*/ "Não nos concentrarmos nos conflitos.",
  ],
  /*Q20*/[
    /*T1*/ "Como negligente e irresponsável.",
    /*T2*/ "Sendo repreendido ou recriminado.",
    /*T3*/ "Falhando, pois primo pela imagem de competente.",
    /*T4*/ "Como uma pessoa comum e normal.",
    /*T5*/ "Em situação onde tenho que expor meus sentimentos.",
    /*T6*/ "Com desconfiança.",
    /*T7*/ "Como chato.",
    /*T8*/ "Como fraco e sem importância.",
    /*T9*/ "Como bobo e ingênuo.",
  ],
  /*Q21*/[
    /*T1*/ "Primeiro eu dou prioridade as minhas próprias atividades e em seguida o ajudo.",
    /*T2*/ "Interrompo o que estou fazendo e vou ajudar o colega, se ele me pediu ajuda é porque somente eu posso ajuda-lo.",
    /*T3*/ "Se for um colega aliado eu ajudo, se for um colega rival eu diplomaticamente vou levando a coisa com jeito para ele pedir ajuda pra outra pessoa.",
    /*T4*/ "Só ajudo quem eu gosto ou que gosta de mim. Os demais eu ajudo se possível ou se for das competências do meu cargo.",
    /*T5*/ "Se não for impactar nas minhas atividades, ajudo, se for eu peço para ele ter paciência.",
    /*T6*/ "Procuro ajudar, pois se a pessoa está me pedindo ajuda é porque ela confia em mim. Se for atrapalhar meu trabalho eu termino o meu antes de ajudar.",
    /*T7*/ "Se for rápido eu ajudo na hora, se não for rápido eu explico pra ele o que eu faria e fico a disposição pra ele me chamar quando eu desocupar.",
    /*T8*/ "Se for algum de meus aliados ou protegidos eu ajudo na hora. Se não for ajudo quando der",
    /*T9*/ "Quando ajudo um colega, é porque ele confiou em mim e nas minhas capacidades para que eu pudesse o ajuda-lo",
  ],
  /*Q22*/[
    /*T1*/ "Acato sem questionar, a não ser que eu esteja fazendo algo que tenha prazo curto e explico para ele reaver sua decisão.",
    /*T2*/ "Imediatamente vou seguir sua instrução.",
    /*T3*/ "Se meu líder for um exemplo de resultado pra mim, eu sigo as ordens pois é um caminho para ganhar mais credibilidade com ele.",
    /*T4*/ "Procuro dialogar para expor outras demandas que estou responsável que na minha visão são mais prioritárias, se houverem.",
    /*T5*/ "Recebo as ordens dele e coloco na minha lista de ponderação de prioridades.",
    /*T6*/ "Se o meu gestor pediu é porque o nível de confiança em mim é alto para realizar, então logo já inicio a atividade designada.",
    /*T7*/ "Procuro dialogar com ele para definirmos os prazos.",
    /*T8*/ "Se a liderança tiver me conquistado, realizo na hora. Senão até posso realizar, mas apenas respeitando a hierarquia.",
    /*T9*/ "Quando um líder me delega, é porque ele confiou em mim e nas minhas capacidades para que eu pudesse o ajuda-lo",
  ],
  /*Q23*/[
    /*T1*/ "Gostaria de aproveitar mais a vida, pois meus deveres e responsabilidades consomem muito do meu tempo livre.",
    /*T2*/ "Visitar as pessoas que faz tempo que não visito.",
    /*T3*/ "Gostaria de ser eu mesmo sem máscaras sociais e fazer as coisas que gosto.",
    /*T4*/ "Meu segundo trabalho que ainda não posso viver financeiramente dele (escrita, música e outras formas de arte).",
    /*T5*/ "Estudar e praticar as minhas atividades favoritas que envolvem algum tipo de estudo ou analise.",
    /*T6*/ "Ficar com a família ou com meus amigos para conversar.",
    /*T7*/ "Experimentar coisas novas com meus amigos para aprender mais sobre eles.",
    /*T8*/ "Ficar de bobeira, aproveitando as coisas que não tenho tempo de aproveitar na correria.",
    /*T9*/ "Gosto de atividades físicas como esportes e atividades mentais como jogos.",
  ],
  /*Q24*/[
    /*T1*/ "Visitar todos os meus familiares e mentores que não moram mais próximo de mim e que me ensinaram muita coisa produtiva.",
    /*T2*/ "iajar para lugares com bastante pessoas para conhecer, como praias e demais locais turísticos em contato com a natureza.",
    /*T3*/ "Só tiro férias quando estou me considerando bem sucedido. Férias rotineiras é perda de tempo e acabo usando esse tempo para trabalhar em outro projeto para complementar renda.",
    /*T4*/ "Criar o máximo possível de acordo com as minhas inspirações. As vezes até viajar para buscar inspiração nos meus projetos pessoais.",
    /*T5*/ "Gosto de ponderar meus resultados passados com os atuais e buscar me aperfeiçoar nas áreas em que o trabalho tem privado meu tempo de me aperfeiçoar.",
    /*T6*/ "Viajar para onde meus amigos ou parentes me contaram que foi muito bom. E para isso eu conto com as instruções deles para ter a experiência mais parecida possível.",
    /*T7*/ "Viajar para lugares diferentes dos que já fui para ampliar minhas memórias como viajante.",
    /*T8*/ "Aproveitar o máximo possível o tempo disponível para descansar, afinal, sem descanso não da para ficar mais forte.",
    /*T9*/ "Gosto de me isolar da vida urbana, indo para fazendas, cidades menores conhecer as trilhas e outras atividades em contato com a natureza.",
  ],
  /*Q25*/[
    /*T1*/ "Espero que ele seja exemplo de cumprimento das leis, missão, visão e valores da empresa.",
    /*T2*/ "Espero que ele possa contar com a minha ajuda sempre que precisar dos meus serviços.",
    /*T3*/ "Espero que ele leve a equipe para resultados positivos com base em números.",
    /*T4*/ "Espero que ele respeite as minhas habilidades únicas e me dê a liberdade que preciso para criar.",
    /*T5*/ "Que ele tenha todas as competências necessárias para desempenhar sua função.",
    /*T6*/ "Que ele seja justo para com todos os colegas na hora das cobranças e que seja cordial na hora das comemorações.",
    /*T7*/ "Que ele tenha todas as competências necessárias para desempenhar sua função.",
    /*T8*/ "Que ele seja mais forte do que eu.",
    /*T9*/ "Espero que ele entenda as necessidades de cada um.",
  ],
  /*Q26*/[
    /*T1*/ "O certo está certo e o errado deve cumprir a punição designada. Se for eu o gestor, analisarei a situação como um juiz.",
    /*T2*/ "Costumo tomar partido apoiando o lado de meus aliados.",
    /*T3*/ "Sou diplomático, se tiver conflito comigo tento resolver diplomaticamente, se for conflito entre dois colegas faço a parte de boa praça mas não me envolvo.",
    /*T4*/ "Gosto de ver o circo pegar fogo, mas se o conflito atrapalhar meu trabalho procuro resolver com quem tem autonomia para decidir.",
    /*T5*/ "Não gosto de conflitos, para mim é perda de tempo.",
    /*T6*/ "Tento defender quem confia e gosta de mim, se não for o caso eu só observo para ver o comportamento dos envolvidos.",
    /*T7*/ "Sempre dou um jeito de escapulir de conflito, principalmente se for algo que pode me atrasar.",
    /*T8*/ "Gosto de conflitos. Geralmente as pessoas dizem que eu causo conflitos, mas eu não penso assim, só estou defendendo algum ponto de vista.",
    /*T9*/ "Sou excelente em resolver qualquer tipo de conflito. Embora eu não goste de conflitos, eles vivem batendo na minha porta para que eu possa resolver.",
  ],
  /*Q27*/[
    /*T1*/ "Se não tiver nenhum aniversariante ou líder para dar a preferencia de escolha, dou minha opinião imediatamente.",
    /*T2*/ "Quero agradar a maioria do grupo caso não dê para agradar todos, então sugiro dividir a pizza em vários sabores por exemplo.",
    /*T3*/ "Quero sempre causar uma boa impressão, então presto atenção em quem compõe o grupo para me posicionar melhor na decisão do pedido.",
    /*T4*/ "Exponho logo minha ideia e o porquê deveríamos optar por ela.",
    /*T5*/ "Eu? Ir numa pizzaria com um grupo de amigos? Dificilmente, só se eu estiver indo para agradar alguém como meu cônjuge (ou namorado(a)).",
    /*T6*/ "Sugiro as opções que eu gosto ou que alguém que eu confio foi no lugar me falou que é bom.",
    /*T7*/ "Se não tiver nenhum aniversariante ou líder para dar a preferencia de escolha, dou minha opinião imediatamente.",
    /*T8*/ "Peço o que eu gosto e espero que os demais apreciem tanto quanto eu.",
    /*T9*/ "Deixo os mais interessados pedirem. Normalmente eu gosto da maioria das coisas então o que vier está bom.",
  ],
  /*Q28*/[
    /*T1*/ "Festa de empresa pra mim é uma extensão do trabalho. Faço minha parte mantendo a postura, evito bebidas alcóolicas demais e procuro ir embora cedo.",
    /*T2*/ "Aproveito para me divertir com as pessoas que mais me fazem bem.",
    /*T3*/ "Só fico na festa enquanto meus gestores estão. Quando eles forem embora eu pego o caminho de casa também.",
    /*T4*/ "Depende da minha intimidade com as pessoas que estão participando da festa. Cada nível de intimidade comigo tem um nível de reação minha de fria para quente.",
    /*T5*/ "Não costumo ir em festas que não sejam obrigatórias e sou o primeiro a ir embora quando está liberado.",
    /*T6*/ "Aproveito para me divertir, principalmente se meus gestores não estiverem por perto. Se estiverem mantenho a minha postura de lealdade seguindo os mesmos passos que eles.",
    /*T7*/ "Procuro me divertir o máximo possível dentro do que minhas responsabilidades permitirem.",
    /*T8*/ "Não gosto de festejar junto da empresa, pois tento diferenciar o nível de relacionamento pessoal e profissional. Mas em festas com meus amigos me divirto.",
    /*T9*/ "Brinco e participo das coisas mais leves se for uma confraternização da empresa. Se for uma resenha de amigos, as pessoas costumam se surpreender com o tanto que eu sou ativo fisicamente nas festas.",
  ],
  /*Q29*/[
    /*T1*/ "Destrincho minha meta fazendo planejamento de como posso chegar nela com metas menores.",
    /*T2*/ "Meta é desafiador, mas sem meta não tem como saber o quanto sou importante pra empresa.",
    /*T3*/ "Eu bato meta, respiro meta, vivo a meta. Sem meta a vida não tem resultado nenhum.",
    /*T4*/ "Acredito que a meta é apenas um indicador de resultado. E não é um dos mais profundos a ponto de medir realmente o progresso, mas reconheço que é o mais fácil.",
    /*T5*/ "Estudo metodicamente como posso atingi-la e coloco meus planos em ação quando estiverem prontos.",
    /*T6*/ "Metas me geram ansiedade, mas se for uma meta que eu consigo atingir sozinho ou com ajuda de meu gestor, eu enfrento e faço o que for possível movendo montanhas para entregar.",
    /*T7*/ "Meta é desafio, e eu gosto de desafio. Me dê metas e prazos e deixe eu criar para atingir.",
    /*T8*/ "Eu vivo pelos desafios. Mato um leão por dia.",
    /*T9*/ "Meta é o objetivo que precisamos atingir. Embora eu me assuste com ela, com paciência e sabedoria nós vamos aprendendo a lidar com ela.",
  ],
  /*Q30*/[
    /*T1*/ "As regras da empresa pra mim são leis que todos devem cumprir e pagar as consequências do descumprimento.",
    /*T2*/ "Procuro seguir as regras que meus gestores dão exemplo.",
    /*T3*/ "Sempre dou um jeito de usar as regras a meu favor.",
    /*T4*/ "Sigo as regras a não ser que para atender a necessidade de um cliente seja preciso quebrar uma ou outra regrinha leve.",
    /*T5*/ "Regras são regras. Só observo se todos estão a segui-las assim como eu.",
    /*T6*/ "Temo desrespeitar as regras e ser punido por isso. O melhor é seguir as regras e dar exemplo de que elas funcionam para evitar problemas.",
    /*T7*/ "Posso quebrar regras desde que não prejudique ninguém quando tem regras demais.",
    /*T8*/ "As regras são limitadores de ordem e poder. Sem elas as coisas seriam caóticas.",
    /*T9*/ "Sem as regras não haveria paz, porque “cada um” ia tentar remar pro lado que mais lhe interessa.",
  ],
];

// Object to store points for each group
let groupPoints = {
  T1: [],
  T2: [],
  T3: [],
  T4: [],
  T5: [],
  T6: [],
  T7: [],
  T8: [],
  T9: [],
};

const QUESTIONS_THRESHOLD = 3; // Number of questions to check
const SCORE_THRESHOLD = 0; // Minimum score threshold

// Current question index
let currentQuestionIndex = 0;
let unansweredQuestions = 0;
let timerInterval;

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to display next question and alternatives
function displayQuestion() {
  if (typeof questions === "undefined" || typeof alternatives === "undefined") {
    console.error("Questions or alternatives are not defined.");
    return;
  }

  document.getElementById("question").textContent =
    questions[currentQuestionIndex];

  // Create an array of alternatives with their respective groups
  const fixedAlternatives = alternatives[currentQuestionIndex].map(
    (alt, index) => ({
      text: alt,
      group: `T${index + 1}`,
    })
  );

  // Shuffle the array of alternatives
  const shuffledAlternatives = shuffleArray(fixedAlternatives);

  // Generate the HTML for the shuffled buttons
  let buttonsHTML = "";
  for (let i = 0; i < shuffledAlternatives.length; i++) {
    buttonsHTML += `<button class="button" onclick="selectAlternative('${shuffledAlternatives[i].group}')">${shuffledAlternatives[i].text}</button>`;
  }
  document.getElementById("options").innerHTML = buttonsHTML;
  startTimer();
}

// Function to start the countdown timer
function startTimer() {
  let seconds;
  if (currentQuestionIndex >= 4 && currentQuestionIndex <= 7) {
    seconds = 120; // 120 seconds for questions 5, 6, 7, and 8
  } else {
    seconds = 60; // 60 seconds for the rest
  }
  document.getElementById(
    "timer"
  ).textContent = `Tempo Restante: ${seconds} segundos`;
  timerInterval = setInterval(() => {
    seconds--;
    document.getElementById(
      "timer"
    ).textContent = `Tempo Restante: ${seconds} segundos`;
    if (seconds <= 0) {
      clearInterval(timerInterval);
      selectAlternative("");
    }
  }, 1000);
}

// Function to select an alternative and update points
function selectAlternative(group) {
  clearInterval(timerInterval);
  if (group !== "") {
    groupPoints[group].push(
      alternatives[currentQuestionIndex][parseInt(group.substring(1)) - 1]
    );
  } else {
    unansweredQuestions++;
    checkUnansweredQuestions();
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    // Hide the questionnaire and display the result
    document.getElementById("question").classList.add("hidden");
    document.getElementById("options").classList.add("hidden");
    document.getElementById("timer").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
    showMostSelected();
    displayPieChart();
  }
}

// Function to check if the user's score falls below the threshold
function checkScoreThreshold() {
  let totalScore = 0;
  for (let group in groupPoints) {
    totalScore += groupPoints[group].length;
  }
  return totalScore <= SCORE_THRESHOLD;
}

// Function to check if the unanswered questions exceed the threshold
function checkUnansweredQuestions() {
  if (unansweredQuestions >= QUESTIONS_THRESHOLD) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("reminder-popup").style.display = "block";
  }
}

// Function to display the appropriate text based on the most selected and second most selected groups
function showMostSelected() {
  let mostSelected = findMostSelected();
  let resultText = "";

  if (mostSelected.length > 0) {
    resultText += `<br><br>`;
    resultText += `<h3>Seu perfil pode ser</h3>`;
    resultText += `<h1>${getGroupName(mostSelected[0])} e ${getGroupName(
      mostSelected[1])} </h1><br>`;
    resultText += `<h2>Seus Centros do Enegrama</h2>`;
    resultText += getGroupCharacteristics(mostSelected[0]);
    resultText +=`<br>`;
    resultText += getGroupCharacteristics(mostSelected[1]);
    resultText +=`<br>`;
  }
  //comentei pq nao sei se vou usar ainda
  // if (mostSelected.length > 1) {
  //   resultText += `<br><br>`;
  //  resultText += `Seu perfil também pode ser ${getGroupName(mostSelected[1])}<br>`;
  //  resultText += getGroupCharacteristics(mostSelected[1]);
  // }

  document.getElementById("result").innerHTML = resultText;
}

// Function to get the characteristics of the group
function getGroupCharacteristics(group) {
  switch (group) {

    case "T1":
      return `
<div class='ins'>
  <h1>INSTINTIVO</h1>
</div>
<div class='justified-text'>
  <p>Lembre-se que nós estamos com dois centros ativos dos três centros. Logo você pode ser uma pessoa predominantemente INSTINTIVO.</p>

  <h2>Características Gerais</h2>
  <p>Instintivos basicamente usam a ação como mentor de suas vidas. São pessoas determinadas, protetoras, não se deixam controlar facilmente e tendem mais a mandar do que a obedecer.</p>

  <h2>Pontos positivos</h2>
  <p>DINÂMICOS<br>DIRETOS<br>ATIVOS</p>

  <h2>Pontos negativos</h2>
  <p>INTOLERANTES<br>INCONSEQUENTES<br>AGRESSIVOS</p>

  <h2>Motivação básica</h2>
  <p>Os instintivos têm como motivação básica a AUTONOMIA. Portanto, eles buscam agir de forma rápida e independente para poder realizar rapidamente as demandas. Logo, eles detestam submissão e outras formas de controle que os deixem limitados.</p>

  <h2>Habilidades naturais de comunicação</h2>
  <p>Por agirem por instinto, os instintivos podem ter boas habilidades básicas de comunicação de formas mais diretas e objetivas, assim podendo manifestar as suas vontades ou relatar seus feitos.</p>

  <h2>Habilidades naturais em liderança</h2>
  <p>Os instintivos tendem a ser líderes natos uma vez que são excelentes motivadores, mesmo com sua natural falta de paciência conseguem extrair o melhor de cada um quando a ação é a chave. Podem sofrer um pouco inicialmente ao ingressarem no campo estratégico, mas de imediato são excelentes no tático e operacional.</p>

  <h2>Habilidades naturais em gestão</h2>
  <p>Como são rápidos e ativos, podem sofrer um pouco na gestão de pessoas, porém podem ser bons gestores de alguns tipos de recursos uma vez que costumam estar sempre com "a mão na massa", consumindo e gerenciando os recursos das ações.</p>

  <p>Clique aqui no botão para saber mais sobre o seu centro</p>
</div>
`;

    case "T2":
      return `
<div class='emo'>
  <h1>EMOCIONAL</h1>
</div>
<div class='justified-text'>
  <p>Lembre-se que nós estamos com dois centros ativos dos três centros. Logo, você pode ser uma pessoa predominantemente EMOCIONAL.</p>

  <h2>Características Gerais</h2>
  <p>Emocionais basicamente têm as emoções como mentor de suas vidas. São pessoas sociáveis, comunicativas que criam relações com facilidade com o fim de serem notados, apreciados, admirados e queridos por todos com quem se relacionam.</p>

  <h2>Pontos positivos</h2>
  <p>AMIGÁVEIS<br>SOCIAIS<br>COMUNICATIVOS</p>

  <h2>Pontos negativos</h2>
  <p>MANIPULADORES<br>DRAMÁTICOS<br>RANCOROSOS</p>

  <h2>Motivação básica</h2>
  <p>Os emocionais têm como motivação básica a ATENÇÃO. Essa busca de atenção é voltada para eles mesmos de alguma maneira distinta de acordo com o perfil. Os emocionais tendem a buscar conexão com as pessoas para se sentirem confortáveis e avançar nos demais assuntos. Logo, os emocionais odeiam ser ignorados, esquecidos ou tratados com indiferença.</p>

  <h2>Habilidades naturais de comunicação</h2>
  <p>Os emocionais são comunicadores natos, porque sentem conexão com as pessoas e fazem rapport com naturalidade. Eles se preocupam se o ouvinte está prestando atenção e entendendo o que está sendo passado e buscam maneiras de serem bem compreendidos tanto em público quanto em interações um a um. Lembrando que a habilidade de falar em público às vezes pode ser desenvolvida com técnicas e ferramentas de acordo com a timidez de cada indivíduo.</p>

  <h2>Habilidades naturais em vendas</h2>
  <p>Os emocionais podem vender de acordo com a sua afinidade ou aceitação do produto ou serviço, porque transmitem para as pessoas o sentimento delas em utilizar tais produtos/serviços, e essa sinceridade na maioria das vezes será perceptível pelos clientes. Logo, os emocionais têm habilidade natural de transmitir a experiência para o cliente.</p>

  <h2>Habilidades naturais em liderança</h2>
  <p>Os emocionais tendem a ser líderes mais solícitos e amigáveis, buscando ajudar, agradar e recompensar seus liderados.</p>

  <h2>Habilidades naturais em gestão</h2>
  <p>Os emocionais podem ser negligentes com algumas formas de organização, o que pode prejudicar alguns mecanismos de gestão de recursos. Por outro lado, são impressionantes em gestão de pessoas.</p>

  <p>Clique aqui no botão para saber mais sobre o seu centro</p>
</div>
`;

    case "T3":
      return `
      <div class='emo'>
        <h1>EMOCIONAL</h1>
      </div>
      <div class='justified-text'>
        <p>Lembre-se que nós estamos com dois centros ativos dos três centros. Logo, você pode ser uma pessoa predominantemente EMOCIONAL.</p>
      
        <h2>Características Gerais</h2>
        <p>Emocionais basicamente têm as emoções como mentor de suas vidas. São pessoas sociáveis, comunicativas que criam relações com facilidade com o fim de serem notados, apreciados, admirados e queridos por todos com quem se relacionam.</p>
      
        <h2>Pontos positivos</h2>
        <p>AMIGÁVEIS<br>SOCIAIS<br>COMUNICATIVOS</p>
      
        <h2>Pontos negativos</h2>
        <p>MANIPULADORES<br>DRAMÁTICOS<br>RANCOROSOS</p>
      
        <h2>Motivação básica</h2>
        <p>Os emocionais têm como motivação básica a ATENÇÃO. Essa busca de atenção é voltada para eles mesmos de alguma maneira distinta de acordo com o perfil. Os emocionais tendem a buscar conexão com as pessoas para se sentirem confortáveis e avançar nos demais assuntos. Logo, os emocionais odeiam ser ignorados, esquecidos ou tratados com indiferença.</p>
      
        <h2>Habilidades naturais de comunicação</h2>
        <p>Os emocionais são comunicadores natos, porque sentem conexão com as pessoas e fazem rapport com naturalidade. Eles se preocupam se o ouvinte está prestando atenção e entendendo o que está sendo passado e buscam maneiras de serem bem compreendidos tanto em público quanto em interações um a um. Lembrando que a habilidade de falar em público às vezes pode ser desenvolvida com técnicas e ferramentas de acordo com a timidez de cada indivíduo.</p>
      
        <h2>Habilidades naturais em vendas</h2>
        <p>Os emocionais podem vender de acordo com a sua afinidade ou aceitação do produto ou serviço, porque transmitem para as pessoas o sentimento delas em utilizar tais produtos/serviços, e essa sinceridade na maioria das vezes será perceptível pelos clientes. Logo, os emocionais têm habilidade natural de transmitir a experiência para o cliente.</p>
      
        <h2>Habilidades naturais em liderança</h2>
        <p>Os emocionais tendem a ser líderes mais solícitos e amigáveis, buscando ajudar, agradar e recompensar seus liderados.</p>
      
        <h2>Habilidades naturais em gestão</h2>
        <p>Os emocionais podem ser negligentes com algumas formas de organização, o que pode prejudicar alguns mecanismos de gestão de recursos. Por outro lado, são impressionantes em gestão de pessoas.</p>
      
        <p>Clique aqui no botão para saber mais sobre o seu centro</p>
      </div>
      `;

    case "T4":
      return `
      <div class='emo'>
        <h1>EMOCIONAL</h1>
      </div>
      <div class='justified-text'>
        <p>Lembre-se que nós estamos com dois centros ativos dos três centros. Logo, você pode ser uma pessoa predominantemente EMOCIONAL.</p>
      
        <h2>Características Gerais</h2>
        <p>Emocionais basicamente têm as emoções como mentor de suas vidas. São pessoas sociáveis, comunicativas que criam relações com facilidade com o fim de serem notados, apreciados, admirados e queridos por todos com quem se relacionam.</p>
      
        <h2>Pontos positivos</h2>
        <p>AMIGÁVEIS<br>SOCIAIS<br>COMUNICATIVOS</p>
      
        <h2>Pontos negativos</h2>
        <p>MANIPULADORES<br>DRAMÁTICOS<br>RANCOROSOS</p>
      
        <h2>Motivação básica</h2>
        <p>Os emocionais têm como motivação básica a ATENÇÃO. Essa busca de atenção é voltada para eles mesmos de alguma maneira distinta de acordo com o perfil. Os emocionais tendem a buscar conexão com as pessoas para se sentirem confortáveis e avançar nos demais assuntos. Logo, os emocionais odeiam ser ignorados, esquecidos ou tratados com indiferença.</p>
      
        <h2>Habilidades naturais de comunicação</h2>
        <p>Os emocionais são comunicadores natos, porque sentem conexão com as pessoas e fazem rapport com naturalidade. Eles se preocupam se o ouvinte está prestando atenção e entendendo o que está sendo passado e buscam maneiras de serem bem compreendidos tanto em público quanto em interações um a um. Lembrando que a habilidade de falar em público às vezes pode ser desenvolvida com técnicas e ferramentas de acordo com a timidez de cada indivíduo.</p>
      
        <h2>Habilidades naturais em vendas</h2>
        <p>Os emocionais podem vender de acordo com a sua afinidade ou aceitação do produto ou serviço, porque transmitem para as pessoas o sentimento delas em utilizar tais produtos/serviços, e essa sinceridade na maioria das vezes será perceptível pelos clientes. Logo, os emocionais têm habilidade natural de transmitir a experiência para o cliente.</p>
      
        <h2>Habilidades naturais em liderança</h2>
        <p>Os emocionais tendem a ser líderes mais solícitos e amigáveis, buscando ajudar, agradar e recompensar seus liderados.</p>
      
        <h2>Habilidades naturais em gestão</h2>
        <p>Os emocionais podem ser negligentes com algumas formas de organização, o que pode prejudicar alguns mecanismos de gestão de recursos. Por outro lado, são impressionantes em gestão de pessoas.</p>
      
        <p>Clique aqui no botão para saber mais sobre o seu centro</p>
      </div>
      `;

    case "T5":
      return `
<div class='men'>
  <h1>MENTAL</h1>
</div>
<div class='justified-text'>
  <p>Lembre-se que nós estamos com dois centros ativos dos três centros. Logo, você pode ser uma pessoa predominantemente MENTAL.</p>

  <h2>Características Gerais</h2>
  <p>Mentais basicamente usam a razão como mentor de suas vidas. São pessoas planejadoras, dedicam mais tempo em conhecer e calcular consequências no campo teórico do que a executá-las.</p>

  <h2>Pontos positivos</h2>
  <p>ANALISTAS<br>ESTRATEGISTAS<br>PENSATIVOS</p>

  <h2>Pontos negativos</h2>
  <p>FRIOS<br>DISTANTES<br>CALCULISTAS</p>

  <h2>Motivação básica</h2>
  <p>Os mentais têm como motivação básica a SEGURANÇA. Logo, estão sempre buscando mais dados, informações e estatísticas sobre as coisas. Por isso, os mentais podem detestar alguma mudança sem planejamento e ficam constantemente ansiosos para realizar seus planos.</p>

  <h2>Habilidades naturais de comunicação</h2>
  <p>Por natureza, o centro mental armazena bastante informação e tem dificuldade em transmitir seu aprendizado, já que com seu raciocínio rápido conseguem pensar e interpretar as coisas com facilidade. Portanto, podem ser pouco comunicativos e adeptos de uma comunicação mais técnica.</p>

  <h2>Habilidades naturais em liderança</h2>
  <p>Os mentais possuem uma capacidade natural de estratégia, o que lhes pode fornecer certa vantagem em cargos mais elevados em organizações, já que conseguem discriminar fatos e prever cenários. Por sua vez, podem sofrer um pouco na liderança operacional e tática, por envolverem bastante a gestão de pessoas, o que lhes aponta dificuldade na conexão com as pessoas.</p>

  <h2>Habilidades naturais em gestão</h2>
  <p>Os mentais têm certa facilidade com gestão de recursos e de tempo, uma vez que para eles retrabalho e desperdício são praticamente inadmissíveis. Vão usar sua capacidade analítica para mensurar e ponderar medidas e ações, porém podem ter dificuldade com a gestão de pessoas.</p>

  <p>Clique aqui no botão para saber mais sobre o seu centro</p>
</div>
`;

    case "T6":
      return `
      <div class='men'>
        <h1>MENTAL</h1>
      </div>
      <div class='justified-text'>
        <p>Lembre-se que nós estamos com dois centros ativos dos três centros. Logo, você pode ser uma pessoa predominantemente MENTAL.</p>
      
        <h2>Características Gerais</h2>
        <p>Mentais basicamente usam a razão como mentor de suas vidas. São pessoas planejadoras, dedicam mais tempo em conhecer e calcular consequências no campo teórico do que a executá-las.</p>
      
        <h2>Pontos positivos</h2>
        <p>ANALISTAS<br>ESTRATEGISTAS<br>PENSATIVOS</p>
      
        <h2>Pontos negativos</h2>
        <p>FRIOS<br>DISTANTES<br>CALCULISTAS</p>
      
        <h2>Motivação básica</h2>
        <p>Os mentais têm como motivação básica a SEGURANÇA. Logo, estão sempre buscando mais dados, informações e estatísticas sobre as coisas. Por isso, os mentais podem detestar alguma mudança sem planejamento e ficam constantemente ansiosos para realizar seus planos.</p>
      
        <h2>Habilidades naturais de comunicação</h2>
        <p>Por natureza, o centro mental armazena bastante informação e tem dificuldade em transmitir seu aprendizado, já que com seu raciocínio rápido conseguem pensar e interpretar as coisas com facilidade. Portanto, podem ser pouco comunicativos e adeptos de uma comunicação mais técnica.</p>
      
        <h2>Habilidades naturais em liderança</h2>
        <p>Os mentais possuem uma capacidade natural de estratégia, o que lhes pode fornecer certa vantagem em cargos mais elevados em organizações, já que conseguem discriminar fatos e prever cenários. Por sua vez, podem sofrer um pouco na liderança operacional e tática, por envolverem bastante a gestão de pessoas, o que lhes aponta dificuldade na conexão com as pessoas.</p>
      
        <h2>Habilidades naturais em gestão</h2>
        <p>Os mentais têm certa facilidade com gestão de recursos e de tempo, uma vez que para eles retrabalho e desperdício são praticamente inadmissíveis. Vão usar sua capacidade analítica para mensurar e ponderar medidas e ações, porém podem ter dificuldade com a gestão de pessoas.</p>
      
        <p>Clique aqui no botão para saber mais sobre o seu centro</p>
      </div>
      `;

    case "T7":
      return `
      <div class='men'>
        <h1>MENTAL</h1>
      </div>
      <div class='justified-text'>
        <p>Lembre-se que nós estamos com dois centros ativos dos três centros. Logo, você pode ser uma pessoa predominantemente MENTAL.</p>
      
        <h2>Características Gerais</h2>
        <p>Mentais basicamente usam a razão como mentor de suas vidas. São pessoas planejadoras, dedicam mais tempo em conhecer e calcular consequências no campo teórico do que a executá-las.</p>
      
        <h2>Pontos positivos</h2>
        <p>ANALISTAS<br>ESTRATEGISTAS<br>PENSATIVOS</p>
      
        <h2>Pontos negativos</h2>
        <p>FRIOS<br>DISTANTES<br>CALCULISTAS</p>
      
        <h2>Motivação básica</h2>
        <p>Os mentais têm como motivação básica a SEGURANÇA. Logo, estão sempre buscando mais dados, informações e estatísticas sobre as coisas. Por isso, os mentais podem detestar alguma mudança sem planejamento e ficam constantemente ansiosos para realizar seus planos.</p>
      
        <h2>Habilidades naturais de comunicação</h2>
        <p>Por natureza, o centro mental armazena bastante informação e tem dificuldade em transmitir seu aprendizado, já que com seu raciocínio rápido conseguem pensar e interpretar as coisas com facilidade. Portanto, podem ser pouco comunicativos e adeptos de uma comunicação mais técnica.</p>
      
        <h2>Habilidades naturais em liderança</h2>
        <p>Os mentais possuem uma capacidade natural de estratégia, o que lhes pode fornecer certa vantagem em cargos mais elevados em organizações, já que conseguem discriminar fatos e prever cenários. Por sua vez, podem sofrer um pouco na liderança operacional e tática, por envolverem bastante a gestão de pessoas, o que lhes aponta dificuldade na conexão com as pessoas.</p>
      
        <h2>Habilidades naturais em gestão</h2>
        <p>Os mentais têm certa facilidade com gestão de recursos e de tempo, uma vez que para eles retrabalho e desperdício são praticamente inadmissíveis. Vão usar sua capacidade analítica para mensurar e ponderar medidas e ações, porém podem ter dificuldade com a gestão de pessoas.</p>
      
        <p>Clique aqui no botão para saber mais sobre o seu centro</p>
      </div>
      `;

    case "T8":
      return `
<div class='ins'>
  <h1>INSTINTIVO</h1>
</div>
<div class='justified-text'>
  <p>Lembre-se que nós estamos com dois centros ativos dos três centros. Logo você pode ser uma pessoa predominantemente INSTINTIVO.</p>

  <h2>Características Gerais</h2>
  <p>Instintivos basicamente usam a ação como mentor de suas vidas. São pessoas determinadas, protetoras, não se deixam controlar facilmente e tendem mais a mandar do que a obedecer.</p>

  <h2>Pontos positivos</h2>
  <p>DINÂMICOS<br>DIRETOS<br>ATIVOS</p>

  <h2>Pontos negativos</h2>
  <p>INTOLERANTES<br>INCONSEQUENTES<br>AGRESSIVOS</p>

  <h2>Motivação básica</h2>
  <p>Os instintivos têm como motivação básica a AUTONOMIA. Portanto, eles buscam agir de forma rápida e independente para poder realizar rapidamente as demandas. Logo, eles detestam submissão e outras formas de controle que os deixem limitados.</p>

  <h2>Habilidades naturais de comunicação</h2>
  <p>Por agirem por instinto, os instintivos podem ter boas habilidades básicas de comunicação de formas mais diretas e objetivas, assim podendo manifestar as suas vontades ou relatar seus feitos.</p>

  <h2>Habilidades naturais em liderança</h2>
  <p>Os instintivos tendem a ser líderes natos uma vez que são excelentes motivadores, mesmo com sua natural falta de paciência conseguem extrair o melhor de cada um quando a ação é a chave. Podem sofrer um pouco inicialmente ao ingressarem no campo estratégico, mas de imediato são excelentes no tático e operacional.</p>

  <h2>Habilidades naturais em gestão</h2>
  <p>Como são rápidos e ativos, podem sofrer um pouco na gestão de pessoas, porém podem ser bons gestores de alguns tipos de recursos uma vez que costumam estar sempre com "a mão na massa", consumindo e gerenciando os recursos das ações.</p>

  <p>Clique aqui no botão para saber mais sobre o seu centro</p>
</div>
`;

    case "T9":
      return `
<div class='ins'>
  <h1>INSTINTIVO</h1>
</div>
<div class='justified-text'>
  <p>Lembre-se que nós estamos com dois centros ativos dos três centros. Logo você pode ser uma pessoa predominantemente INSTINTIVO.</p>

  <h2>Características Gerais</h2>
  <p>Instintivos basicamente usam a ação como mentor de suas vidas. São pessoas determinadas, protetoras, não se deixam controlar facilmente e tendem mais a mandar do que a obedecer.</p>

  <h2>Pontos positivos</h2>
  <p>DINÂMICOS<br>DIRETOS<br>ATIVOS</p>

  <h2>Pontos negativos</h2>
  <p>INTOLERANTES<br>INCONSEQUENTES<br>AGRESSIVOS</p>

  <h2>Motivação básica</h2>
  <p>Os instintivos têm como motivação básica a AUTONOMIA. Portanto, eles buscam agir de forma rápida e independente para poder realizar rapidamente as demandas. Logo, eles detestam submissão e outras formas de controle que os deixem limitados.</p>

  <h2>Habilidades naturais de comunicação</h2>
  <p>Por agirem por instinto, os instintivos podem ter boas habilidades básicas de comunicação de formas mais diretas e objetivas, assim podendo manifestar as suas vontades ou relatar seus feitos.</p>

  <h2>Habilidades naturais em liderança</h2>
  <p>Os instintivos tendem a ser líderes natos uma vez que são excelentes motivadores, mesmo com sua natural falta de paciência conseguem extrair o melhor de cada um quando a ação é a chave. Podem sofrer um pouco inicialmente ao ingressarem no campo estratégico, mas de imediato são excelentes no tático e operacional.</p>

  <h2>Habilidades naturais em gestão</h2>
  <p>Como são rápidos e ativos, podem sofrer um pouco na gestão de pessoas, porém podem ser bons gestores de alguns tipos de recursos uma vez que costumam estar sempre com "a mão na massa", consumindo e gerenciando os recursos das ações.</p>

  <p>Clique aqui no botão para saber mais sobre o seu centro</p>
</div>
`;

    default:
      return "Características do grupo desconhecido.<br>";
  }
}

// Function to get the name of the group
function getGroupName(group) {
  switch (group) {
    case "T1":
      return "T1 - O ORGANIZADOR";
    case "T2":
      return "T2 - O SERVIDOR";
    case "T3":
      return "T3 - O REALIZADOR";
    case "T4":
      return "T4 - O ROMÂNTICO";
    case "T5":
      return "T5 - O OBSERVADOR";
    case "T6":
      return "T6 - O QUESTIONADOR";
    case "T7":
      return "T7 - O SONHADOR";
    case "T8":
      return "T8 - O CONFRONTADOR";
    case "T9":
      return "T9 - O INTERMEDIADOR";
    default:
      return "Grupo Desconhecido";
  }
}

// Function to find the two most selected groups
function findMostSelected() {
  let sortedGroups = Object.keys(groupPoints).sort(
    (a, b) => groupPoints[b].length - groupPoints[a].length
  );
  return sortedGroups.slice(0, 2);
}

// Function to download the PDF
function downloadPDF(filename) {
  const link = document.createElement("a");
  link.href = filename;
  link.download = filename; // Set the correct file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Function to display the pie chart
function displayPieChart() {
  const ctx = document.getElementById("choicesChart").getContext("2d");
  const data = {
    labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9"],
    datasets: [
      {
        data: Object.values(groupPoints).map((group) => group.length),
        backgroundColor: [
          "rgb(112, 48, 160)",
          "rgb(228, 108, 10)",
          "rgb(0, 112, 192)",
          "rgb(255, 192, 0)",
          "rgb(149, 55, 53)",
          "rgb(148, 138, 84)",
          "rgb(0, 176, 80)",
          "rgb(192, 0, 0)",
          "rgb(0, 0, 0)",
        ],
        borderColor: [
          "rgb(112, 48, 160)",
          "rgb(228, 108, 10)",
          "rgb(0, 112, 192)",
          "rgb(255, 192, 0)",
          "rgb(149, 55, 53)",
          "rgb(148, 138, 84)",
          "rgb(0, 176, 80)",
          "rgb(192, 0, 0)",
          "rgb(0, 0, 0)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const groupLabel = data.labels[tooltipItem.dataIndex];
            const value = data.datasets[0].data[tooltipItem.dataIndex];
            return `${groupLabel}: ${value} escolhas`;
          },
        },
      },
    },
  };

  new Chart(ctx, {
    type: "pie",
    data: data,
    options: options,
  });
}

// Function to reload the page
function reloadPage() {
  location.reload();
}

// Start displaying the first question
document
  .getElementById("start-test-button")
  .addEventListener("click", function () {
    document.getElementById("pre-teste-container").classList.add("hidden");
    document.getElementById("test-container").classList.remove("hidden");
    displayQuestion(); // Exibir primeira pergunta após iniciar o teste
  });
