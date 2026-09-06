// Estrutura: [palavra, tradução, exemplo, tradução do exemplo]
const THEMES = [
  { id: 'quotidiano', it: 'Vita quotidiana', pt: 'Dia a dia' },
  { id: 'scuola',     it: 'Scuola',          pt: 'Escola' },
  { id: 'cucina',     it: 'Cucina',          pt: 'Cozinha' },
  { id: 'cibo',       it: 'Cibo',            pt: 'Comida' },
  { id: 'gergo',      it: 'Gergo',           pt: 'Gíria' },
  { id: 'benessere',  it: 'Benessere',       pt: 'Bem-estar' },
  { id: 'lavoro',     it: 'Lavoro',          pt: 'Trabalho' },
  { id: 'natura',     it: 'Natura',          pt: 'Natureza' },
  { id: 'cultura',    it: 'Cultura',         pt: 'Cultura' },
  { id: 'famiglia',   it: 'Famiglia',        pt: 'Família' }
];

const VOCAB = {
  italiano: {
    label: 'Italiano',
    quotidiano: [
      ['svegliarsi', 'acordar', 'Mi sveglio sempre alle sette del mattino.', 'Eu sempre acordo às sete da manhã.'],
      ['la spesa', 'as compras de mercado', 'Faccio la spesa il sabato mattina.', 'Faço as compras no sábado de manhã.'],
      ['sbrigarsi', 'apressar-se', 'Sbrigati, il treno parte tra dieci minuti!', 'Se apressa, o trem sai em dez minutos!'],
      ['il quotidiano', 'o cotidiano', 'Nel quotidiano ci sono piccole gioie.', 'No cotidiano existem pequenas alegrias.'],
      ['riposarsi', 'descansar', 'La domenica mi riposo e leggo.', 'No domingo eu descanso e leio.']
    ],
    scuola: [
      ['la lezione', 'a aula', 'La lezione di storia comincia alle nove.', 'A aula de história começa às nove.'],
      ['il compito', 'a tarefa', 'Devo finire il compito prima di cena.', 'Preciso terminar a tarefa antes do jantar.'],
      ['la laurea', 'o diploma de graduação', 'Ha preso la laurea in giurisprudenza.', 'Ele se formou em direito.'],
      ['lo zaino', 'a mochila', 'Lo zaino è pieno di libri.', 'A mochila está cheia de livros.'],
      ['il voto', 'a nota', 'Ho preso un bel voto all\'esame.', 'Tirei uma boa nota na prova.']
    ],
    cucina: [
      ['la padella', 'a frigideira', 'Scalda la padella prima di cuocere.', 'Esquente a frigideira antes de cozinhar.'],
      ['mescolare', 'mexer, misturar', 'Mescola lentamente per due minuti.', 'Mexa devagar por dois minutos.'],
      ['la ricetta', 'a receita', 'Questa ricetta era di mia nonna.', 'Esta receita era da minha avó.'],
      ['assaggiare', 'provar, experimentar', 'Vuoi assaggiare il sugo?', 'Quer provar o molho?'],
      ['il coltello', 'a faca', 'Il coltello non taglia più bene.', 'A faca não corta mais bem.']
    ],
    cibo: [
      ['saporito', 'saboroso', 'Il risotto è molto saporito.', 'O risoto está muito saboroso.'],
      ['il pane', 'o pão', 'Compro il pane fresco ogni mattina.', 'Compro pão fresco toda manhã.'],
      ['il dolce', 'a sobremesa, o doce', 'Alla fine c\'è sempre un dolce.', 'No fim sempre tem uma sobremesa.'],
      ['il formaggio', 'o queijo', 'Questo formaggio viene dalla montagna.', 'Este queijo vem da montanha.'],
      ['abbondante', 'farto, abundante', 'Il pranzo della domenica è abbondante.', 'O almoço de domingo é farto.']
    ],
    gergo: [
      ['boh', 'sei lá', 'Boh, non ne ho idea.', 'Sei lá, não faço ideia.'],
      ['magari', 'quem dera; talvez', 'Magari fosse così semplice!', 'Quem dera fosse tão simples!'],
      ['che figata', 'que massa', 'Che figata questo posto!', 'Que massa esse lugar!'],
      ['in bocca al lupo', 'boa sorte', 'In bocca al lupo per l\'esame!', 'Boa sorte na prova!'],
      ['sono fuso', 'estou exausto', 'Oggi sono proprio fuso.', 'Hoje estou realmente exausto.']
    ],
    benessere: [
      ['respirare', 'respirar', 'Respira piano e conta fino a dieci.', 'Respire devagar e conte até dez.'],
      ['la passeggiata', 'a caminhada', 'Una passeggiata la sera fa bene.', 'Uma caminhada à noite faz bem.'],
      ['rilassarsi', 'relaxar', 'Mi rilasso ascoltando musica.', 'Eu relaxo ouvindo música.'],
      ['il sonno', 'o sono', 'Il sonno è il miglior rimedio.', 'O sono é o melhor remédio.'],
      ['l\'equilibrio', 'o equilíbrio', 'Cerco l\'equilibrio tra lavoro e riposo.', 'Busco o equilíbrio entre trabalho e descanso.']
    ],
    lavoro: [
      ['la riunione', 'a reunião', 'La riunione è stata rinviata a domani.', 'A reunião foi adiada para amanhã.'],
      ['la scadenza', 'o prazo', 'La scadenza è venerdì prossimo.', 'O prazo é sexta que vem.'],
      ['il collega', 'o colega', 'Un collega mi ha dato una mano.', 'Um colega me deu uma mão.'],
      ['lo stipendio', 'o salário', 'Lo stipendio arriva a fine mese.', 'O salário chega no fim do mês.'],
      ['impegnativo', 'exigente, trabalhoso', 'È stato un progetto impegnativo.', 'Foi um projeto exigente.']
    ],
    natura: [
      ['il tramonto', 'o pôr do sol', 'Il tramonto sul mare è indimenticabile.', 'O pôr do sol no mar é inesquecível.'],
      ['la pioggia', 'a chuva', 'La pioggia ha rinfrescato l\'aria.', 'A chuva refrescou o ar.'],
      ['l\'albero', 'a árvore', 'Sotto quell\'albero c\'è ombra.', 'Debaixo daquela árvore tem sombra.'],
      ['la rugiada', 'o orvalho', 'L\'erba è coperta di rugiada.', 'A grama está coberta de orvalho.'],
      ['il sentiero', 'a trilha', 'Il sentiero sale fino alla cima.', 'A trilha sobe até o topo.']
    ],
    cultura: [
      ['il capolavoro', 'a obra-prima', 'Questo quadro è un capolavoro.', 'Este quadro é uma obra-prima.'],
      ['la mostra', 'a exposição', 'La mostra chiude domenica.', 'A exposição fecha domingo.'],
      ['il romanzo', 'o romance', 'Sto leggendo un romanzo italiano.', 'Estou lendo um romance italiano.'],
      ['la piazza', 'a praça', 'Ci vediamo in piazza alle otto.', 'A gente se vê na praça às oito.'],
      ['sfumato', 'sutil, matizado', 'Ha un significato sfumato.', 'Tem um sentido sutil.']
    ],
    famiglia: [
      ['i parenti', 'os parentes', 'A Natale arrivano tutti i parenti.', 'No Natal chegam todos os parentes.'],
      ['volersi bene', 'gostar um do outro', 'In famiglia ci vogliamo bene.', 'Na família a gente se quer bem.'],
      ['il nonno', 'o avô', 'Mio nonno raccontava storie di guerra.', 'Meu avô contava histórias de guerra.'],
      ['la cugina', 'a prima', 'Mia cugina abita a Bologna.', 'Minha prima mora em Bolonha.'],
      ['affiatato', 'unido, entrosado', 'Siamo una famiglia affiatata.', 'Somos uma família unida.']
    ]
  },

  español: {
    label: 'Español',
    quotidiano: [
      ['madrugar', 'acordar cedo', 'Madrugo para caminar antes del trabajo.', 'Acordo cedo para caminhar antes do trabalho.'],
      ['los recados', 'as tarefas do dia', 'Tengo que hacer unos recados esta tarde.', 'Tenho que resolver umas coisas hoje à tarde.']
    ],
    scuola: [
      ['el aula', 'a sala de aula', 'El aula estaba llena de estudiantes.', 'A sala estava cheia de estudantes.'],
      ['la beca', 'a bolsa de estudos', 'Consiguió una beca para estudiar fuera.', 'Ele conseguiu uma bolsa para estudar fora.']
    ],
    cucina: [
      ['sofreír', 'refogar', 'Sofríe la cebolla hasta que esté dorada.', 'Refogue a cebola até dourar.'],
      ['la sartén', 'a frigideira', 'La sartén todavía está caliente.', 'A frigideira ainda está quente.']
    ],
    cibo: [
      ['sabroso', 'saboroso', 'El guiso quedó muy sabroso.', 'O ensopado ficou muito saboroso.'],
      ['la merienda', 'o lanche da tarde', 'La merienda es a las cinco.', 'O lanche é às cinco.']
    ],
    gergo: [
      ['qué guay', 'que legal', '¡Qué guay tu chaqueta!', 'Que legal a sua jaqueta!'],
      ['vale', 'beleza, ok', 'Vale, nos vemos mañana.', 'Beleza, a gente se vê amanhã.']
    ],
    benessere: [
      ['descansar', 'descansar', 'Necesito descansar el fin de semana.', 'Preciso descansar no fim de semana.'],
      ['el paseo', 'o passeio', 'Damos un paseo después de cenar.', 'Damos um passeio depois do jantar.']
    ],
    lavoro: [
      ['la reunión', 'a reunião', 'La reunión se alargó una hora.', 'A reunião se estendeu por uma hora.'],
      ['el plazo', 'o prazo', 'El plazo vence el viernes.', 'O prazo vence na sexta.']
    ],
    natura: [
      ['el atardecer', 'o entardecer', 'El atardecer pinta el cielo de naranja.', 'O entardecer pinta o céu de laranja.'],
      ['la lluvia', 'a chuva', 'La lluvia no paró en toda la noche.', 'A chuva não parou a noite toda.']
    ],
    cultura: [
      ['la obra maestra', 'a obra-prima', 'Es la obra maestra del museo.', 'É a obra-prima do museu.'],
      ['el cuadro', 'o quadro', 'Ese cuadro tiene doscientos años.', 'Esse quadro tem duzentos anos.']
    ],
    famiglia: [
      ['los parientes', 'os parentes', 'Vinieron parientes de todo el país.', 'Vieram parentes do país inteiro.'],
      ['el cariño', 'o carinho', 'Lo dijo con mucho cariño.', 'Ele disse com muito carinho.']
    ]
  },

  english: {
    label: 'English',
    quotidiano: [
      ['to run errands', 'resolver tarefas do dia', 'I need to run errands before noon.', 'Preciso resolver umas coisas antes do meio-dia.'],
      ['commute', 'o trajeto até o trabalho', 'My commute takes forty minutes.', 'Meu trajeto até o trabalho leva quarenta minutos.']
    ],
    scuola: [
      ['assignment', 'o trabalho, a tarefa', 'The assignment is due on Monday.', 'O trabalho tem que ser entregue na segunda.'],
      ['grade', 'a nota', 'She got the highest grade in class.', 'Ela tirou a maior nota da turma.']
    ],
    cucina: [
      ['to simmer', 'cozinhar em fogo baixo', 'Let the sauce simmer for ten minutes.', 'Deixe o molho em fogo baixo por dez minutos.'],
      ['skillet', 'a frigideira', 'Heat the skillet over medium heat.', 'Aqueça a frigideira em fogo médio.']
    ],
    cibo: [
      ['savory', 'salgado, saboroso', 'I prefer savory food to sweets.', 'Prefiro comida salgada a doces.'],
      ['leftovers', 'as sobras', 'We had leftovers for lunch.', 'Almoçamos as sobras.']
    ],
    gergo: [
      ['no worries', 'tranquilo, sem problema', 'No worries, take your time.', 'Tranquilo, sem pressa.'],
      ['to hang out', 'passar um tempo junto', 'We hung out at the park all afternoon.', 'Ficamos no parque a tarde toda.']
    ],
    benessere: [
      ['to unwind', 'desanuviar, relaxar', 'I read to unwind before bed.', 'Eu leio para relaxar antes de dormir.'],
      ['mindful', 'atento, consciente', 'Try to be mindful of your breathing.', 'Tente ficar atento à sua respiração.']
    ],
    lavoro: [
      ['deadline', 'o prazo final', 'The deadline was moved to Friday.', 'O prazo foi adiado para sexta.'],
      ['coworker', 'o colega de trabalho', 'A coworker covered my shift.', 'Um colega cobriu meu turno.']
    ],
    natura: [
      ['dusk', 'o anoitecer', 'The birds go quiet at dusk.', 'Os pássaros silenciam ao anoitecer.'],
      ['drizzle', 'a garoa', 'A light drizzle fell all morning.', 'Uma garoa fina caiu a manhã toda.']
    ],
    cultura: [
      ['masterpiece', 'a obra-prima', 'The novel is considered a masterpiece.', 'O romance é considerado uma obra-prima.'],
      ['exhibit', 'a exposição', 'The exhibit runs until March.', 'A exposição vai até março.']
    ],
    famiglia: [
      ['relatives', 'os parentes', 'Relatives came from out of town.', 'Parentes vieram de fora da cidade.'],
      ['sibling', 'o irmão ou a irmã', 'Do you have any siblings?', 'Você tem irmãos?']
    ]
  },

  français: {
    label: 'Français',
    quotidiano: [
      ['se réveiller', 'acordar', 'Je me réveille avant le lever du soleil.', 'Eu acordo antes do nascer do sol.'],
      ['les courses', 'as compras', 'Je fais les courses le samedi.', 'Faço as compras no sábado.']
    ],
    scuola: [
      ['le cours', 'a aula', 'Le cours commence à huit heures.', 'A aula começa às oito.'],
      ['le devoir', 'o dever de casa', 'J\'ai fini mon devoir hier soir.', 'Terminei meu dever ontem à noite.']
    ],
    cucina: [
      ['mijoter', 'cozinhar em fogo brando', 'Laisse mijoter pendant une heure.', 'Deixe cozinhando em fogo brando por uma hora.'],
      ['la poêle', 'a frigideira', 'La poêle est trop chaude.', 'A frigideira está quente demais.']
    ],
    cibo: [
      ['savoureux', 'saboroso', 'Ce plat est vraiment savoureux.', 'Este prato é realmente saboroso.'],
      ['le goûter', 'o lanche da tarde', 'Les enfants prennent le goûter à quatre heures.', 'As crianças lancham às quatro.']
    ],
    gergo: [
      ['c\'est chouette', 'que legal', 'C\'est chouette, ton appartement!', 'Que legal o seu apartamento!'],
      ['bof', 'sei lá, mais ou menos', 'Bof, ça ne m\'intéresse pas trop.', 'Sei lá, não me interessa muito.']
    ],
    benessere: [
      ['se détendre', 'relaxar', 'Je me détends en écoutant de la musique.', 'Eu relaxo ouvindo música.'],
      ['la promenade', 'o passeio a pé', 'Une promenade au bord du fleuve.', 'Um passeio à beira do rio.']
    ],
    lavoro: [
      ['la réunion', 'a reunião', 'La réunion dure deux heures.', 'A reunião dura duas horas.'],
      ['l\'échéance', 'o prazo', 'L\'échéance approche rapidement.', 'O prazo está chegando rápido.']
    ],
    natura: [
      ['le crépuscule', 'o crepúsculo', 'Le crépuscule tombe sur la vallée.', 'O crepúsculo cai sobre o vale.'],
      ['la pluie', 'a chuva', 'La pluie a duré toute la nuit.', 'A chuva durou a noite toda.']
    ],
    cultura: [
      ['le chef-d\'œuvre', 'a obra-prima', 'Ce tableau est son chef-d\'œuvre.', 'Este quadro é a obra-prima dele.'],
      ['l\'exposition', 'a exposição', 'L\'exposition ferme dimanche.', 'A exposição fecha domingo.']
    ],
    famiglia: [
      ['les proches', 'os entes queridos', 'Il est entouré de ses proches.', 'Ele está rodeado dos entes queridos.'],
      ['le frère', 'o irmão', 'Mon frère habite à Lyon.', 'Meu irmão mora em Lyon.']
    ]
  },

  português: {
    label: 'Português culto',
    quotidiano: [
      ['a lida', 'a rotina de trabalho diário', 'Depois da lida, sentava-se à varanda.', 'Sentido: o trabalho cotidiano, a labuta.'],
      ['alvorecer', 'o raiar do dia', 'Partimos ao alvorecer.', 'Sentido: o momento em que o dia começa a clarear.']
    ],
    scuola: [
      ['propedêutico', 'introdutório, preparatório', 'O curso propedêutico antecede a especialização.', 'Sentido: que prepara o terreno para um estudo maior.'],
      ['erudição', 'saber vasto e aprofundado', 'Impressionava pela erudição discreta.', 'Sentido: conhecimento amplo adquirido pelo estudo.']
    ],
    cucina: [
      ['refogar', 'fritar levemente em gordura', 'Refogue o alho antes de juntar o arroz.', 'Sentido: dourar em pouca gordura antes de cozinhar.'],
      ['o alguidar', 'vasilha larga de barro', 'Amassava o pão num alguidar de barro.', 'Sentido: bacia larga usada na cozinha tradicional.']
    ],
    cibo: [
      ['lauto', 'farto, abundante', 'Serviram um lauto banquete.', 'Sentido: refeição generosa e bem servida.'],
      ['a iguaria', 'comida fina e saborosa', 'A sobremesa era uma iguaria da região.', 'Sentido: prato especial, muitas vezes raro.']
    ],
    gergo: [
      ['dar zebra', 'dar errado', 'O plano deu zebra no último minuto.', 'Sentido: resultado inesperado e ruim.'],
      ['de bobeira', 'à toa, sem fazer nada', 'Fiquei de bobeira o domingo inteiro.', 'Sentido: ocioso, sem compromisso.']
    ],
    benessere: [
      ['a quietude', 'silêncio tranquilo', 'A quietude da manhã acalma.', 'Sentido: estado de calma e silêncio.'],
      ['o sossego', 'paz, ausência de perturbação', 'Procuro sossego no fim do dia.', 'Sentido: tranquilidade, descanso do espírito.']
    ],
    lavoro: [
      ['a alçada', 'competência, âmbito de decisão', 'O caso não é da minha alçada.', 'Sentido: limite daquilo que compete a alguém decidir.'],
      ['a diligência', 'cuidado e zelo na execução', 'Tratou do assunto com diligência.', 'Sentido: empenho atento no cumprimento de um dever.']
    ],
    natura: [
      ['o sereno', 'umidade fria da noite', 'Não fique no sereno sem agasalho.', 'Sentido: o ar úmido que cai à noite.'],
      ['o crepúsculo', 'a luz entre o dia e a noite', 'O crepúsculo durou poucos minutos.', 'Sentido: claridade difusa do amanhecer ou anoitecer.']
    ],
    cultura: [
      ['o primor', 'perfeição no acabamento', 'A encadernação era um primor.', 'Sentido: excelência no cuidado e no detalhe.'],
      ['a fruição', 'o gozo sereno de algo', 'A fruição da música exige silêncio.', 'Sentido: prazer atento e demorado.']
    ],
    famiglia: [
      ['a estirpe', 'a linhagem, a ascendência', 'Vinha de estirpe de professores.', 'Sentido: origem familiar, linhagem.'],
      ['o desvelo', 'cuidado afetuoso e atento', 'Criou os netos com desvelo.', 'Sentido: dedicação carinhosa a alguém.']
    ]
  }
};
