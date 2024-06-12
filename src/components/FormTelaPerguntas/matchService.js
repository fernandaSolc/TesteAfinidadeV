const monitores = [
  {
    monitor_id: 1,
    name: 'Gustavo Felippe',
    hobbies: ['Jogando videogames'],
    personality: 'Calmo(a) e reservado(a)',
    technology_interest: 'Soluções para o nosso dia a dia.',
    known_for: 'Ser adaptável',
    favorite_subject: 'Interface e Introdução à Programação Web',
    turno: 'manha',
    image: '../img/monitores/gu.svg',
  },
  {
    monitor_id: 2,
    name: 'Fernanda Sabrina',
    hobbies: ['Relaxando em casa com um bom livro, filmes ou séries'],
    personality: 'Energético(a) e extrovertido(a)',
    technology_interest:
      'A capacidade de criar experiências visuais e interativas inovadoras.',
    known_for: 'Ser perspicaz',
    favorite_subject: 'Sistema Operacional Linux',
    turno: 'manha',
    image: '../img/monitores/fernanda.svg',
  },
  {
    monitor_id: 3,
    name: 'Larissa Felipe',
    hobbies: ['Relaxando em casa com um bom livro, filmes ou séries'],
    personality: 'Organizado(a) e metódico(a).',
    technology_interest:
      'Internet e a forma como as coisas podem ser armazenadas na nuvem.',
    known_for: 'Ser analítico',
    favorite_subject: 'Interface e Introdução à Programação Web',
    turno: 'manha',
    image: '../img/monitores/lari.svg',
  },
  {
    monitor_id: 4,
    name: 'Gabriel Mauro',
    hobbies: ['Jogando videogames.'],
    personality: 'Energético(a) e extrovertido(a)',
    technology_interest: 'Produtos e invenções tecnológicas.',
    known_for: 'Ser adaptável',
    favorite_subject: 'Linguagem Python',
    turno: 'tarde',
    image: '../img/monitores/gabrielMauro.svg',
  },
  {
    monitor_id: 5,
    name: 'Emannuel Costa',
    hobbies: ['Jogando videogames.'],
    personality: 'Calmo(a) e reservado(a).',
    technology_interest: 'Produtos e invenções tecnológicas.',
    known_for: 'Ser analítico',
    favorite_subject: 'Linguagem Python',
    turno: 'manha',
    image: '../img/monitores/mannel.svg',
  },
  {
    monitor_id: 6,
    name: 'João Vitor',
    hobbies: ['Jogando videogames.'],
    personality: 'Aventureiro(a) e ousado(a).',
    technology_interest:
      'A capacidade de criar experiências visuais e interativas inovadoras.',
    known_for: 'Ser adaptável',
    favorite_subject: 'Interface e Introdução à Programação Web',
    turno: 'manha',
    image: '../img/monitores/joao.svg',
  },
  {
    monitor_id: 7,
    name: 'Eduardo Coelho',
    hobbies: ['Jogando videogames.'],
    personality: 'Calmo(a) e reservado(a).',
    technology_interest: 'Produtos e invenções tecnológicas.',
    known_for: 'Ser adaptável',
    favorite_subject: 'Interface e Introdução à Programação Web',
    turno: 'tarde',
    image: '../img/monitores/eduardo.svg',
  },
  {
    monitor_id: 8,
    name: 'Lucca Fernandes',
    hobbies: ['Praticando esportes ou atividades físicas.'],
    personality: 'Energético(a) e extrovertido(a).',
    technology_interest: 'Soluções para o nosso dia a dia.',
    known_for: 'Ser adaptável',
    favorite_subject: 'Interface e Introdução à Programação Web',
    turno: 'tarde',
    image: '../img/monitores/lucca.svg',
  },
  {
    monitor_id: 9,
    name: 'Felipe Campos',
    hobbies: ['Jogando videogames.'],
    personality: 'Calmo(a) e reservado(a).',
    technology_interest:
      'A capacidade de criar experiências visuais e interativas.',
    known_for: 'Ser analítico',
    favorite_subject: 'Linguagem Python',
    turno: 'tarde',
    image: '../img/monitores/felipe.svg',
  },
];

export function findBestMatch(aluno) {
  let bestMatch = null;
  let highestScore = -1; // Usar -1 para garantir que sempre haverá um match válido

  monitores.forEach((monitor) => {
    let score = 0;

    // Comparar turno preferido
    if (monitor.turno !== aluno.turno) {
      console.log(
        `Desconsiderando monitor ${monitor.name} por turno incompatível.`
      );
      return; // Ignorar monitores do turno errado
    }

    console.log(
      `Comparando aluno.turno: ${aluno.turno} com monitor.turno: ${monitor.turno}`
    );

    // Comparar hobbies
    aluno.hobbies.forEach((hobby) => {
      if (monitor.hobbies.includes(hobby)) {
        score += 1;
      }
    });

    // Comparar personalidade
    if (monitor.personality === aluno.personality) {
      score += 1;
    }

    // Comparar interesse em tecnologia
    if (monitor.technology_interest === aluno.technology_interest) {
      score += 1;
    }

    // Comparar característica no trabalho ou escola
    if (monitor.known_for === aluno.known_for) {
      score += 1;
    }

    // Comparar disciplina favorita
    if (monitor.favorite_subject === aluno.favorite_subject) {
      score += 1;
    }

    console.log(`Monitor: ${monitor.name}, Score: ${score}`);

    // Atualizar melhor match
    if (score > highestScore) {
      highestScore = score;
      bestMatch = monitor;
    }
  });

  console.log(`Melhor match: ${bestMatch.name}`);
  return bestMatch;
}
