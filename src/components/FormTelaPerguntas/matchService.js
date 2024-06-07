const monitores = [
    {
      monitor_id: 1,
      name: "Gustavo Felippe",
      hobbies: ["Jogando videogames"],
      personality: "Calmo(a) e reservado(a)",
      technology_interest: "Soluções para o nosso dia a dia.",
      known_for: "Ser adaptável",
      favorite_subject: "Interface e Introdução à Programação Web",
      turno: "manha"
    },
    {
      monitor_id: 2,
      name: "Fernanda Sabrina",
      hobbies: ["Relaxando em casa com um bom livro, filmes ou séries"],
      personality: "Energético(a) e extrovertido(a)",
      technology_interest: "A capacidade de criar experiências visuais e interativas inovadoras.",
      known_for: "Ser perspicaz",
      favorite_subject: "Sistema Operacional Linux",
      turno: "manha"
    },
    {
      monitor_id: 3,
      name: "Larissa Felipe",
      hobbies: ["Relaxando em casa com um bom livro, filmes ou séries"],
      personality: "Organizado(a) e metódico(a).",
      technology_interest: "Internet e a forma como as coisas podem ser armazenadas na nuvem.",
      known_for: "Ser analítico",
      favorite_subject: "Interface e Introdução à Programação Web",
      turno: "manha"
    },
    {
      monitor_id: 4,
      name: "Gabriel Moura",
      hobbies: ["Jogando videogames."],
      personality: "Energético(a) e extrovertido(a)",
      technology_interest: "Produtos e invenções tecnológicas.",
      known_for: "Ser adaptável",
      favorite_subject: "Linguagem Python",
      turno: "tarde"
    },
    {
      monitor_id: 5,
      name: "Emannuel Costa",
      hobbies: ["Jogando videogames."],
      personality: "Calmo(a) e reservado(a).",
      technology_interest: "Produtos e invenções tecnológicas.",
      known_for: "Ser analítico",
      favorite_subject: "Linguagem Python",
      turno: "manha"
    },
    {
      monitor_id: 6,
      name: "João Vitor",
      hobbies: ["Jogando videogames."],
      personality: "Aventureiro(a) e ousado(a).",
      technology_interest: "A capacidade de criar experiências visuais e interativas inovadoras.",
      known_for: "Ser adaptável",
      favorite_subject: "Interface e Introdução à Programação Web",
      turno: "manha"
    },
    {
      monitor_id: 7,
      name: "Eduardo Coelho",
      hobbies: ["Jogando videogames."],
      personality: "Calmo(a) e reservado(a).",
      technology_interest: "Produtos e invenções tecnológicas.",
      known_for: "Ser adaptável",
      favorite_subject: "Interface e Introdução à Programação Web",
      turno: "tarde"
    }
  ];
  
  export function findBestMatch(aluno) {
    let bestMatch = null;
    let highestScore = 0;
  
    monitores.forEach(monitor => {
      let score = 0;
  
      // Comparar hobbies
      aluno.hobbies.forEach(hobby => {
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
  
      // Comparar turno preferido
      if (monitor.turno === aluno.turno) {
        score += 1;
      }
  
      // Atualizar melhor match
      if (score > highestScore) {
        highestScore = score;
        bestMatch = monitor;
      }
    });
  
    return bestMatch;
  }
  
  