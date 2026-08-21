export const profissionais = [
  {
    id: 1,
    categoria: 'Desenvolvimento de Sites',
    nome: 'Carlos Silva',
    cargo: 'Desenvolvedor Full Stack',
    foto: '/images/carlos-silva.jpg',
    nota: 4.9,
    totalAvaliacoes: 127,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 256,
    servicos: [
      { titulo: 'Desenvolvimento de Website', precoMin: 3000, precoMax: 8000, prazo: '2-4 semanas' },
      { titulo: 'Sistema Web Personalizado', precoMin: 5000, precoMax: 15000, prazo: '1-3 meses' },
      { titulo: 'Consultoria Técnica', precoMin: 150, precoMax: 150, prazo: 'Por hora' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Rodrigo Nunes', nota: 5, comentario: 'Excelente desenvolvimento e suporte.', data: '12/08/2026' },
      { id: 2, autor: 'Patrícia Lima', nota: 5, comentario: 'Entregou exatamente o que foi solicitado.', data: '28/07/2026' },
      { id: 3, autor: 'Marcelo Tavares', nota: 4, comentario: 'Ótimo trabalho e boa comunicação.', data: '03/06/2026' },
    ],
  },

  // 2 - DESIGN GRÁFICO
  {
    id: 2,
    categoria: 'Design Gráfico',
    nome: 'Fernanda Lima',
    cargo: 'Designer Gráfica',
    foto: '/images/fernanda-lima.jpg',
    nota: 4.8,
    totalAvaliacoes: 89,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 142,
    servicos: [
      { titulo: 'Identidade Visual', precoMin: 1500, precoMax: 5000, prazo: '1-3 semanas' },
      { titulo: 'Criação de Logotipo', precoMin: 500, precoMax: 1800, prazo: '3-7 dias' },
      { titulo: 'Artes para Redes Sociais', precoMin: 100, precoMax: 500, prazo: '1-3 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Rodrigo Nunes', nota: 5, comentario: 'Excelente trabalho!', data: '12/06/2026' },
      { id: 2, autor: 'Patrícia', nota: 5, comentario: 'Muito atenciosa e criativa.', data: '28/05/2026' },
      { id: 3, autor: 'Marcelo Tavares', nota: 4, comentario: 'Ótimo resultado final.', data: '03/04/2026' },
    ],
  },

  // 3 - ELÉTRICA
  {
    id: 3,
    categoria: 'Elétrica',
    nome: 'Rafael Mendes',
    cargo: 'Eletricista Residencial e Comercial',
    foto: '/images/rafael-mendes.jpg',
    nota: 4.7,
    totalAvaliacoes: 63,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 98,
    servicos: [
      { titulo: 'Instalação Elétrica Residencial', precoMin: 800, precoMax: 3500, prazo: '2-7 dias' },
      { titulo: 'Manutenção Elétrica', precoMin: 150, precoMax: 600, prazo: '1-2 dias' },
      { titulo: 'Instalação de Iluminação', precoMin: 300, precoMax: 1500, prazo: '1-3 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Vanessa Ribeiro', nota: 5, comentario: 'Serviço muito bem feito.', data: '19/07/2026' },
      { id: 2, autor: 'Diego Santos', nota: 4, comentario: 'Bom trabalho e preço justo.', data: '30/06/2026' },
      { id: 3, autor: 'Isabela Martins', nota: 5, comentario: 'Resolveu o problema rapidamente.', data: '14/05/2026' },
    ],
  },

  // 4 - INFORMÁTICA
  {
    id: 4,
    categoria: 'Informática',
    nome: 'Juliana Costa',
    cargo: 'Técnica em Informática',
    foto: '/images/juliana-costa.jpg',
    nota: 5.0,
    totalAvaliacoes: 41,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 76,
    servicos: [
      { titulo: 'Formatação de Computador', precoMin: 100, precoMax: 250, prazo: '1-2 dias' },
      { titulo: 'Manutenção de Computador', precoMin: 150, precoMax: 500, prazo: '1-3 dias' },
      { titulo: 'Configuração de Rede', precoMin: 200, precoMax: 800, prazo: '1-2 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'André Cardoso', nota: 5, comentario: 'Resolveu tudo muito rápido.', data: '05/08/2026' },
      { id: 2, autor: 'Beatriz Fonseca', nota: 5, comentario: 'Excelente atendimento.', data: '22/07/2026' },
      { id: 3, autor: 'Lucas Pereira', nota: 5, comentario: 'Muito competente.', data: '09/06/2026' },
    ],
  },

  // 5 - JARDINAGEM
  {
    id: 5,
    categoria: 'Jardinagem',
    nome: 'Bruno Almeida',
    cargo: 'Jardineiro Profissional',
    foto: '/images/bruno-almeida.jpg',
    nota: 4.6,
    totalAvaliacoes: 52,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 87,
    servicos: [
      { titulo: 'Manutenção de Jardim', precoMin: 150, precoMax: 600, prazo: '1-2 dias' },
      { titulo: 'Paisagismo', precoMin: 800, precoMax: 4000, prazo: '1-3 semanas' },
      { titulo: 'Poda de Plantas e Árvores', precoMin: 100, precoMax: 500, prazo: '1 dia' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Gabriela Duarte', nota: 4, comentario: 'Jardim ficou muito bonito.', data: '11/05/2026' },
      { id: 2, autor: 'Felipe Araújo', nota: 5, comentario: 'Muito competente.', data: '27/06/2026' },
      { id: 3, autor: 'Renata Oliveira', nota: 4, comentario: 'Bom profissional.', data: '11/05/2026' },
    ],
  },

  // 6 - FOTOGRAFIA
  {
    id: 6,
    categoria: 'Fotografia',
    nome: 'Camila Rocha',
    cargo: 'Fotógrafa Profissional',
    foto: '/images/camila-rocha.jpg',
    nota: 4.8,
    totalAvaliacoes: 110,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 203,
    servicos: [
      { titulo: 'Ensaio Fotográfico', precoMin: 500, precoMax: 1500, prazo: '1 semana' },
      { titulo: 'Fotografia de Eventos', precoMin: 800, precoMax: 3000, prazo: 'A combinar' },
      { titulo: 'Fotografia de Produtos', precoMin: 300, precoMax: 1200, prazo: '2-5 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Tiago Correia', nota: 5, comentario: 'Fotos maravilhosas.', data: '01/08/2026' },
      { id: 2, autor: 'Aline Barros', nota: 5, comentario: 'Muito profissional.', data: '18/06/2026' },
      { id: 3, autor: 'Eduardo Lopes', nota: 4, comentario: 'Bom trabalho e ótima edição.', data: '22/05/2026' },
    ],
  },

  // 7 - AULAS PARTICULARES
  {
    id: 7,
    categoria: 'Aulas Particulares',
    nome: 'Thiago Barbosa',
    cargo: 'Professor Particular',
    foto: '/images/thiago-barbosa.jpg',
    nota: 4.8,
    totalAvaliacoes: 34,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 145,
    servicos: [
      { titulo: 'Aula de Matemática', precoMin: 50, precoMax: 80, prazo: 'Por hora' },
      { titulo: 'Aula de Física', precoMin: 55, precoMax: 90, prazo: 'Por hora' },
      { titulo: 'Reforço Escolar', precoMin: 45, precoMax: 70, prazo: 'Por hora' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Camila Vieira', nota: 5, comentario: 'Explica muito bem.', data: '09/07/2026' },
      { id: 2, autor: 'Rodrigo Farias', nota: 5, comentario: 'Melhorei muito minhas notas.', data: '25/06/2026' },
      { id: 3, autor: 'Larissa Prado', nota: 4, comentario: 'Ótimo professor.', data: '30/05/2026' },
    ],
  },

  // 8 - PINTURA
  {
    id: 8,
    categoria: 'Pintura',
    nome: 'Larissa Ferreira',
    cargo: 'Pintora Residencial e Comercial',
    foto: '/images/larissa-ferreira.jpg',
    nota: 4.8,
    totalAvaliacoes: 58,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 91,
    servicos: [
      { titulo: 'Pintura Residencial', precoMin: 800, precoMax: 4000, prazo: '3-7 dias' },
      { titulo: 'Pintura Comercial', precoMin: 1500, precoMax: 8000, prazo: '1-3 semanas' },
      { titulo: 'Pintura Decorativa', precoMin: 300, precoMax: 2000, prazo: '1-5 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Henrique Souza', nota: 5, comentario: 'Acabamento excelente.', data: '14/08/2026' },
      { id: 2, autor: 'Natália Ramos', nota: 4, comentario: 'Serviço ficou muito bom.', data: '02/07/2026' },
      { id: 3, autor: 'Pedro Henrique', nota: 5, comentario: 'Trabalho rápido e caprichado.', data: '19/05/2026' },
    ],
  },

  // 9 - MECÂNICA
  {
    id: 9,
    categoria: 'Mecânica',
    nome: 'Gustavo Pinheiro',
    cargo: 'Mecânico Automotivo',
    foto: '/images/gustavo-pinheiro.jpg',
    nota: 4.8,
    totalAvaliacoes: 47,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 168,
    servicos: [
      { titulo: 'Manutenção Preventiva', precoMin: 250, precoMax: 800, prazo: '1-2 dias' },
      { titulo: 'Diagnóstico Automotivo', precoMin: 100, precoMax: 300, prazo: '1-2 horas' },
      { titulo: 'Reparo de Motor', precoMin: 1000, precoMax: 5000, prazo: '3-10 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Sofia Martins', nota: 5, comentario: 'Excelente mecânico.', data: '20/07/2026' },
      { id: 2, autor: 'Caio Ribeiro', nota: 4, comentario: 'Bom trabalho.', data: '10/06/2026' },
      { id: 3, autor: 'Débora Silveira', nota: 5, comentario: 'Muito profissional.', data: '25/05/2026' },
    ],
  },

  // 10 - MARKETING DIGITAL
  {
    id: 10,
    categoria: 'Marketing Digital',
    nome: 'Mariana Duarte',
    cargo: 'Especialista em Marketing Digital',
    foto: '/images/mariana-duarte.jpg',
    nota: 4.8,
    totalAvaliacoes: 39,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 125,
    servicos: [
      { titulo: 'Gestão de Redes Sociais', precoMin: 1200, precoMax: 2500, prazo: 'Por mês' },
      { titulo: 'Campanha de Google Ads', precoMin: 2000, precoMax: 5000, prazo: 'Mensal' },
      { titulo: 'Auditoria de SEO', precoMin: 800, precoMax: 1800, prazo: '1 semana' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Otávio Freitas', nota: 5, comentario: 'Excelente estratégia.', data: '03/08/2026' },
      { id: 2, autor: 'Bianca Teixeira', nota: 5, comentario: 'Resultados muito bons.', data: '15/06/2026' },
      { id: 3, autor: 'Rafael Costa', nota: 4, comentario: 'Bom serviço.', data: '28/04/2026' },
    ],
  },

  // 11 - TRADUÇÃO
  {
    id: 11,
    categoria: 'Tradução',
    nome: 'Pedro Martins',
    cargo: 'Tradutor Profissional',
    foto: '/images/pedro-martins.jpg',
    nota: 4.9,
    totalAvaliacoes: 72,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 184,
    servicos: [
      { titulo: 'Tradução de Documentos', precoMin: 150, precoMax: 600, prazo: '3-5 dias' },
      { titulo: 'Tradução de Sites', precoMin: 500, precoMax: 2000, prazo: '1-2 semanas' },
      { titulo: 'Interpretação', precoMin: 200, precoMax: 300, prazo: 'Por hora' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Ana Souza', nota: 5, comentario: 'Tradução perfeita.', data: '05/08/2026' },
      { id: 2, autor: 'Lucas Melo', nota: 5, comentario: 'Muito preciso.', data: '21/07/2026' },
      { id: 3, autor: 'Marcos Silva', nota: 4, comentario: 'Bom profissional.', data: '10/06/2026' },
    ],
  },

  // 12 - EDIÇÃO DE VÍDEO
  {
    id: 12,
    categoria: 'Edição de Vídeo',
    nome: 'André Cardoso',
    cargo: 'Editor de Vídeo',
    foto: '/images/andre-cardoso.jpg',
    nota: 4.7,
    totalAvaliacoes: 86,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 154,
    servicos: [
      { titulo: 'Edição para YouTube', precoMin: 300, precoMax: 1000, prazo: '2-5 dias' },
      { titulo: 'Vídeo para Redes Sociais', precoMin: 150, precoMax: 600, prazo: '1-3 dias' },
      { titulo: 'Vídeo Publicitário', precoMin: 800, precoMax: 3500, prazo: '1-2 semanas' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Beatriz Fonseca', nota: 5, comentario: 'Edição excelente.', data: '01/08/2026' },
      { id: 2, autor: 'Lucas Pereira', nota: 4, comentario: 'Gostei bastante do resultado.', data: '20/07/2026' },
      { id: 3, autor: 'Felipe Souza', nota: 5, comentario: 'Muito criativo.', data: '12/06/2026' },
    ],
  },

  // 13 - REDAÇÃO
  {
    id: 13,
    categoria: 'Redação',
    nome: 'Aline Barros',
    cargo: 'Redatora e Copywriter',
    foto: '/images/aline-barros.jpg',
    nota: 4.9,
    totalAvaliacoes: 94,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 218,
    servicos: [
      { titulo: 'Copy para Landing Page', precoMin: 600, precoMax: 1500, prazo: '3-5 dias' },
      { titulo: 'Conteúdo para Blog', precoMin: 250, precoMax: 500, prazo: 'Por artigo' },
      { titulo: 'Revisão de Textos', precoMin: 90, precoMax: 200, prazo: 'Por hora' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Tiago Correia', nota: 5, comentario: 'Textos excelentes.', data: '01/08/2026' },
      { id: 2, autor: 'Eduardo Lopes', nota: 5, comentario: 'Escrita muito profissional.', data: '18/06/2026' },
      { id: 3, autor: 'Renata Oliveira', nota: 4, comentario: 'Atendeu muito bem aos ajustes.', data: '22/05/2026' },
    ],
  },

  // 14 - CONSULTORIA
  {
    id: 14,
    categoria: 'Consultoria',
    nome: 'Felipe Araújo',
    cargo: 'Consultor Empresarial',
    foto: '/images/felipe-araujo.jpg',
    nota: 4.6,
    totalAvaliacoes: 31,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 67,
    servicos: [
      { titulo: 'Consultoria Empresarial', precoMin: 300, precoMax: 600, prazo: 'Por hora' },
      { titulo: 'Planejamento Estratégico', precoMin: 1500, precoMax: 5000, prazo: '2-4 semanas' },
      { titulo: 'Análise Financeira', precoMin: 800, precoMax: 2500, prazo: '1-2 semanas' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Gabriela Duarte', nota: 5, comentario: 'Ótimas orientações.', data: '10/08/2026' },
      { id: 2, autor: 'Bruno Lima', nota: 4, comentario: 'Consultoria muito útil.', data: '22/07/2026' },
      { id: 3, autor: 'Carla Mendes', nota: 4, comentario: 'Bom profissional.', data: '15/06/2026' },
    ],
  },

  // 15 - LIMPEZA
  {
    id: 15,
    categoria: 'Limpeza',
    nome: 'Renata Oliveira',
    cargo: 'Profissional de Limpeza',
    foto: '/images/renata-oliveira.jpg',
    nota: 4.9,
    totalAvaliacoes: 118,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 302,
    servicos: [
      { titulo: 'Limpeza Residencial', precoMin: 120, precoMax: 350, prazo: 'Por diária' },
      { titulo: 'Limpeza Comercial', precoMin: 300, precoMax: 1200, prazo: 'A combinar' },
      { titulo: 'Limpeza Pós-Obra', precoMin: 500, precoMax: 2500, prazo: '1-3 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Mariana Costa', nota: 5, comentario: 'Casa ficou impecável.', data: '08/08/2026' },
      { id: 2, autor: 'João Pedro', nota: 5, comentario: 'Muito caprichosa.', data: '25/07/2026' },
      { id: 3, autor: 'Ana Clara', nota: 4, comentario: 'Bom serviço.', data: '10/06/2026' },
    ],
  },

  // 16 - MÚSICA
  {
    id: 16,
    categoria: 'Música',
    nome: 'Lucas Pereira',
    cargo: 'Produtor Musical',
    foto: '/images/lucas-pereira.jpg',
    nota: 4.8,
    totalAvaliacoes: 44,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 83,
    servicos: [
      { titulo: 'Produção Musical', precoMin: 500, precoMax: 2000, prazo: '1-3 semanas' },
      { titulo: 'Mixagem', precoMin: 300, precoMax: 1000, prazo: '3-7 dias' },
      { titulo: 'Masterização', precoMin: 150, precoMax: 500, prazo: '1-3 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Pedro Henrique', nota: 5, comentario: 'Resultado profissional.', data: '12/08/2026' },
      { id: 2, autor: 'Sofia Martins', nota: 5, comentario: 'Muito talentoso.', data: '01/07/2026' },
      { id: 3, autor: 'Caio Ribeiro', nota: 4, comentario: 'Gostei bastante do resultado.', data: '20/05/2026' },
    ],
  },

  // SEGUNDA VOLTA

  {
    id: 17,
    categoria: 'Desenvolvimento de Sites',
    nome: 'Diego Santos',
    cargo: 'Desenvolvedor Front-end',
    foto: '/images/diego-santos.jpg',
    nota: 4.5,
    totalAvaliacoes: 48,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 91,
    servicos: [
      { titulo: 'Landing Page', precoMin: 800, precoMax: 2500, prazo: '1-2 semanas' },
      { titulo: 'Site Institucional', precoMin: 1800, precoMax: 5000, prazo: '2-4 semanas' },
      { titulo: 'Manutenção de Site', precoMin: 100, precoMax: 200, prazo: 'Por hora' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Marcos', nota: 5, comentario: 'Site muito bonito.', data: '02/08/2026' },
      { id: 2, autor: 'Ana', nota: 4, comentario: 'Bom trabalho.', data: '15/07/2026' },
      { id: 3, autor: 'João', nota: 4, comentario: 'Entrega dentro do prazo.', data: '20/06/2026' },
    ],
  },

  {
    id: 18,
    categoria: 'Design Gráfico',
    nome: 'Marina Souza',
    cargo: 'Designer Gráfica e Branding',
    foto: '/images/marina-souza.jpg',
    nota: 4.6,
    totalAvaliacoes: 56,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 104,
    servicos: [
      { titulo: 'Logotipo', precoMin: 400, precoMax: 1500, prazo: '3-7 dias' },
      { titulo: 'Manual de Marca', precoMin: 1200, precoMax: 3500, prazo: '1-3 semanas' },
      { titulo: 'Material Gráfico', precoMin: 150, precoMax: 600, prazo: '2-5 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Lucas', nota: 5, comentario: 'Criatividade excelente.', data: '05/08/2026' },
      { id: 2, autor: 'Bruna', nota: 4, comentario: 'Gostei muito.', data: '12/07/2026' },
      { id: 3, autor: 'Rafael', nota: 4, comentario: 'Bom atendimento.', data: '03/06/2026' },
    ],
  },

  {
    id: 19,
    categoria: 'Elétrica',
    nome: 'Marcelo Tavares',
    cargo: 'Eletricista Predial',
    foto: '/images/marcelo-tavares.jpg',
    nota: 4.4,
    totalAvaliacoes: 37,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 72,
    servicos: [
      { titulo: 'Instalação Predial', precoMin: 1000, precoMax: 5000, prazo: '3-10 dias' },
      { titulo: 'Troca de Fiação', precoMin: 500, precoMax: 3000, prazo: '2-7 dias' },
      { titulo: 'Instalação de Tomadas', precoMin: 100, precoMax: 500, prazo: '1 dia' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Carlos', nota: 5, comentario: 'Excelente serviço.', data: '07/08/2026' },
      { id: 2, autor: 'Fernanda', nota: 4, comentario: 'Bom profissional.', data: '18/07/2026' },
      { id: 3, autor: 'Pedro', nota: 4, comentario: 'Serviço bem feito.', data: '09/06/2026' },
    ],
  },

  {
    id: 20,
    categoria: 'Informática',
    nome: 'Vinícius Rocha',
    cargo: 'Técnico de Informática',
    foto: '/images/vinicius-rocha.jpg',
    nota: 4.3,
    totalAvaliacoes: 29,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 64,
    servicos: [
      { titulo: 'Limpeza de Computador', precoMin: 80, precoMax: 180, prazo: '1 dia' },
      { titulo: 'Instalação de Programas', precoMin: 80, precoMax: 250, prazo: '1 dia' },
      { titulo: 'Suporte Técnico', precoMin: 100, precoMax: 180, prazo: 'Por hora' },
    ],
    avaliacoes: [
      { id: 1, autor: 'André', nota: 4, comentario: 'Resolveu meu problema.', data: '04/08/2026' },
      { id: 2, autor: 'Julia', nota: 5, comentario: 'Muito rápido.', data: '19/07/2026' },
      { id: 3, autor: 'Marcos', nota: 4, comentario: 'Bom atendimento.', data: '05/06/2026' },
    ],
  },

  {
    id: 21,
    categoria: 'Jardinagem',
    nome: 'Eduardo Lopes',
    cargo: 'Paisagista',
    foto: '/images/eduardo-lopes.jpg',
    nota: 4.9,
    totalAvaliacoes: 71,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 119,
    servicos: [
      { titulo: 'Projeto de Paisagismo', precoMin: 1000, precoMax: 5000, prazo: '2-4 semanas' },
      { titulo: 'Manutenção de Jardins', precoMin: 150, precoMax: 500, prazo: 'Por visita' },
      { titulo: 'Plantio e Replantio', precoMin: 200, precoMax: 1000, prazo: '1-3 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Carla', nota: 5, comentario: 'Jardim incrível.', data: '10/08/2026' },
      { id: 2, autor: 'Bruno', nota: 5, comentario: 'Muito profissional.', data: '20/07/2026' },
      { id: 3, autor: 'Sofia', nota: 4, comentario: 'Ótimo resultado.', data: '14/06/2026' },
    ],
  },

  {
    id: 22,
    categoria: 'Fotografia',
    nome: 'Natália Ramos',
    cargo: 'Fotógrafa de Eventos',
    foto: '/images/natalia-ramos.jpg',
    nota: 4.5,
    totalAvaliacoes: 62,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 113,
    servicos: [
      { titulo: 'Fotografia de Casamento', precoMin: 1500, precoMax: 5000, prazo: 'A combinar' },
      { titulo: 'Aniversários e Eventos', precoMin: 600, precoMax: 2000, prazo: 'A combinar' },
      { titulo: 'Edição de Fotos', precoMin: 50, precoMax: 300, prazo: 'Por foto/lote' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Juliana', nota: 5, comentario: 'Fotos lindas.', data: '06/08/2026' },
      { id: 2, autor: 'Renato', nota: 4, comentario: 'Bom trabalho.', data: '18/07/2026' },
      { id: 3, autor: 'Camila', nota: 4, comentario: 'Boa fotógrafa.', data: '22/06/2026' },
    ],
  },

  {
    id: 23,
    categoria: 'Aulas Particulares',
    nome: 'Patrícia Mendes',
    cargo: 'Professora de Idiomas',
    foto: '/images/patricia-mendes.jpg',
    nota: 4.7,
    totalAvaliacoes: 81,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 198,
    servicos: [
      { titulo: 'Aula de Inglês', precoMin: 50, precoMax: 90, prazo: 'Por hora' },
      { titulo: 'Aula de Espanhol', precoMin: 45, precoMax: 80, prazo: 'Por hora' },
      { titulo: 'Conversação', precoMin: 40, precoMax: 70, prazo: 'Por hora' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Lucas', nota: 5, comentario: 'Excelente professora.', data: '09/08/2026' },
      { id: 2, autor: 'Mariana', nota: 5, comentario: 'Aprendi muito.', data: '21/07/2026' },
      { id: 3, autor: 'Pedro', nota: 4, comentario: 'Muito boa.', data: '15/06/2026' },
    ],
  },

  {
    id: 24,
    categoria: 'Pintura',
    nome: 'Roberto Silva',
    cargo: 'Pintor Residencial',
    foto: '/images/roberto-silva.jpg',
    nota: 4.2,
    totalAvaliacoes: 35,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 83,
    servicos: [
      { titulo: 'Pintura Interna', precoMin: 700, precoMax: 3000, prazo: '2-6 dias' },
      { titulo: 'Pintura Externa', precoMin: 1000, precoMax: 5000, prazo: '3-10 dias' },
      { titulo: 'Textura e Acabamento', precoMin: 500, precoMax: 2500, prazo: '2-5 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Ana', nota: 4, comentario: 'Bom trabalho.', data: '05/08/2026' },
      { id: 2, autor: 'Carlos', nota: 5, comentario: 'Acabamento muito bom.', data: '20/07/2026' },
      { id: 3, autor: 'João', nota: 4, comentario: 'Serviço correto.', data: '02/06/2026' },
    ],
  },

  {
    id: 25,
    categoria: 'Mecânica',
    nome: 'Henrique Souza',
    cargo: 'Mecânico Automotivo',
    foto: '/images/henrique-souza.jpg',
    nota: 4.9,
    totalAvaliacoes: 96,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 241,
    servicos: [
      { titulo: 'Troca de Óleo e Filtros', precoMin: 100, precoMax: 350, prazo: '1 hora' },
      { titulo: 'Freios e Suspensão', precoMin: 300, precoMax: 2000, prazo: '1-3 dias' },
      { titulo: 'Diagnóstico Eletrônico', precoMin: 120, precoMax: 300, prazo: '1-2 horas' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Rafael', nota: 5, comentario: 'Excelente mecânico.', data: '11/08/2026' },
      { id: 2, autor: 'Bruno', nota: 5, comentario: 'Muito competente.', data: '23/07/2026' },
      { id: 3, autor: 'Lucas', nota: 5, comentario: 'Recomendo muito.', data: '15/06/2026' },
    ],
  },

  {
    id: 26,
    categoria: 'Marketing Digital',
    nome: 'Beatriz Fonseca',
    cargo: 'Social Media',
    foto: '/images/beatriz-fonseca.jpg',
    nota: 4.4,
    totalAvaliacoes: 53,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 102,
    servicos: [
      { titulo: 'Gestão de Instagram', precoMin: 800, precoMax: 1800, prazo: 'Por mês' },
      { titulo: 'Criação de Conteúdo', precoMin: 500, precoMax: 1500, prazo: 'Por mês' },
      { titulo: 'Planejamento de Conteúdo', precoMin: 300, precoMax: 800, prazo: '1 semana' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Carlos', nota: 5, comentario: 'Conteúdo excelente.', data: '09/08/2026' },
      { id: 2, autor: 'Marina', nota: 4, comentario: 'Boa profissional.', data: '17/07/2026' },
      { id: 3, autor: 'Diego', nota: 4, comentario: 'Gostei do resultado.', data: '03/06/2026' },
    ],
  },

  {
    id: 27,
    categoria: 'Tradução',
    nome: 'Isabela Martins',
    cargo: 'Tradutora Inglês-Português',
    foto: '/images/isabela-martins.jpg',
    nota: 4.6,
    totalAvaliacoes: 45,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 96,
    servicos: [
      { titulo: 'Tradução Acadêmica', precoMin: 200, precoMax: 800, prazo: '3-7 dias' },
      { titulo: 'Tradução Técnica', precoMin: 250, precoMax: 1000, prazo: '3-7 dias' },
      { titulo: 'Revisão de Tradução', precoMin: 100, precoMax: 400, prazo: '2-4 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Marcos', nota: 5, comentario: 'Muito precisa.', data: '04/08/2026' },
      { id: 2, autor: 'Ana', nota: 4, comentario: 'Bom serviço.', data: '18/07/2026' },
      { id: 3, autor: 'Julia', nota: 5, comentario: 'Excelente tradução.', data: '10/06/2026' },
    ],
  },

  {
    id: 28,
    categoria: 'Edição de Vídeo',
    nome: 'Caio Ribeiro',
    cargo: 'Editor e Motion Designer',
    foto: '/images/caio-ribeiro.jpg',
    nota: 4.9,
    totalAvaliacoes: 67,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 129,
    servicos: [
      { titulo: 'Motion Graphics', precoMin: 500, precoMax: 2500, prazo: '3-10 dias' },
      { titulo: 'Edição para YouTube', precoMin: 250, precoMax: 900, prazo: '2-5 dias' },
      { titulo: 'Reels e Shorts', precoMin: 100, precoMax: 400, prazo: '1-3 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Felipe', nota: 5, comentario: 'Edição incrível.', data: '08/08/2026' },
      { id: 2, autor: 'Renata', nota: 5, comentario: 'Muito criativo.', data: '22/07/2026' },
      { id: 3, autor: 'Lucas', nota: 4, comentario: 'Ótimo resultado.', data: '11/06/2026' },
    ],
  },

  {
    id: 29,
    categoria: 'Redação',
    nome: 'Gabriela Duarte',
    cargo: 'Redatora SEO',
    foto: '/images/gabriela-duarte.jpg',
    nota: 4.7,
    totalAvaliacoes: 61,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 167,
    servicos: [
      { titulo: 'Artigo SEO', precoMin: 200, precoMax: 500, prazo: '2-4 dias' },
      { titulo: 'Texto para Site', precoMin: 400, precoMax: 1200, prazo: '3-7 dias' },
      { titulo: 'Descrição de Produtos', precoMin: 100, precoMax: 400, prazo: '1-3 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Pedro', nota: 5, comentario: 'Textos excelentes.', data: '07/08/2026' },
      { id: 2, autor: 'Mariana', nota: 4, comentario: 'Bom trabalho.', data: '19/07/2026' },
      { id: 3, autor: 'João', nota: 5, comentario: 'Muito profissional.', data: '05/06/2026' },
    ],
  },

  {
    id: 30,
    categoria: 'Consultoria',
    nome: 'Rodrigo Farias',
    cargo: 'Consultor de Tecnologia',
    foto: '/images/rodrigo-farias.jpg',
    nota: 4.8,
    totalAvaliacoes: 42,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 78,
    servicos: [
      { titulo: 'Consultoria em Tecnologia', precoMin: 180, precoMax: 300, prazo: 'Por hora' },
      { titulo: 'Análise de Sistemas', precoMin: 1000, precoMax: 4000, prazo: '1-3 semanas' },
      { titulo: 'Planejamento de Projeto', precoMin: 800, precoMax: 2500, prazo: '1-2 semanas' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Carlos', nota: 5, comentario: 'Excelente consultor.', data: '06/08/2026' },
      { id: 2, autor: 'Bruno', nota: 5, comentario: 'Explica muito bem.', data: '20/07/2026' },
      { id: 3, autor: 'Fernanda', nota: 4, comentario: 'Muito competente.', data: '08/06/2026' },
    ],
  },

  {
    id: 31,
    categoria: 'Limpeza',
    nome: 'Sofia Martins',
    cargo: 'Especialista em Limpeza',
    foto: '/images/sofia-martins.jpg',
    nota: 4.5,
    totalAvaliacoes: 74,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 184,
    servicos: [
      { titulo: 'Limpeza Residencial', precoMin: 100, precoMax: 300, prazo: 'Por diária' },
      { titulo: 'Limpeza de Escritório', precoMin: 250, precoMax: 900, prazo: 'A combinar' },
      { titulo: 'Limpeza Profunda', precoMin: 300, precoMax: 1000, prazo: '1-2 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Carla', nota: 5, comentario: 'Muito caprichosa.', data: '04/08/2026' },
      { id: 2, autor: 'João', nota: 4, comentario: 'Bom trabalho.', data: '16/07/2026' },
      { id: 3, autor: 'Marcos', nota: 4, comentario: 'Serviço de qualidade.', data: '01/06/2026' },
    ],
  },

  {
    id: 32,
    categoria: 'Música',
    nome: 'Mateus Oliveira',
    cargo: 'Músico e Professor de Música',
    foto: '/images/mateus-oliveira.jpg',
    nota: 4.6,
    totalAvaliacoes: 38,
    localizacao: 'Joinville, SC',
    projetosConcluidos: 76,
    servicos: [
      { titulo: 'Aula de Violão', precoMin: 50, precoMax: 90, prazo: 'Por hora' },
      { titulo: 'Gravação Musical', precoMin: 300, precoMax: 1500, prazo: '1-2 semanas' },
      { titulo: 'Arranjo Musical', precoMin: 200, precoMax: 800, prazo: '3-7 dias' },
    ],
    avaliacoes: [
      { id: 1, autor: 'Lucas', nota: 5, comentario: 'Excelente músico.', data: '03/08/2026' },
      { id: 2, autor: 'Ana', nota: 4, comentario: 'Ótimo professor.', data: '17/07/2026' },
      { id: 3, autor: 'Pedro', nota: 4, comentario: 'Muito talentoso.', data: '09/06/2026' },
    ],
  }
]