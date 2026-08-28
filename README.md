CiroLancers

Marketplace de serviços freelance, feito em Vue 3 + Vite como projeto de hackathon.

Tema e objetivo

Conectar clientes e profissionais autônomos de Joinville (SC), dando mais segurança e valorização ao prestador de serviço (sem "uberização") e mais confiança ao cliente (avaliações, pagamento protegido).

Funcionalidades planejadas
Cadastro e login (cliente e freelancer)
Recuperação de senha
Busca e filtro de profissionais por categoria
Perfil público do freelancer (portfólio, avaliações, serviços)
Edição de perfil
Solicitação de serviço (contratação)
Painel do cliente e painel do freelancer
Pagamento
Notificações
Páginas institucionais (Sobre, Como Funciona, Suporte)
Funcionalidades desenvolvidas

Quase tudo da lista acima foi implementado e está funcional: cadastro/login, busca, perfil, contratação, painéis de cliente e freelancer, notificações e as páginas institucionais.

A página de Pagamento não foi finalizada — ficou só o título, sem formulário ou lógica.

Vale lembrar que o projeto é só front-end: não tem backend, os dados (usuários, contratações, sessão) ficam salvos no localStorage do navegador.

Dificuldades encontradas

Pelo histórico de commits do repositório dá pra ver que o time enfrentou bastante conflito de merge entre branches (várias mensagens tipo "arrumei os conflitos"), precisou reverter algumas mudanças que quebraram partes já prontas, e boa parte do trabalho ficou concentrada nos últimos dias antes da entrega — o que é comum em hackathon, mas deixou menos tempo para fechar o pagamento.

Divisão das atividades
Integrante	Frente principal
Carlos Miguel de Oliveira Dados de profissionais, perfil do freelancer, home
Eloisa Muller	Login/cadastro, edição de perfil, painéis e solicitação de serviço
Guilherme Bloemer Santos	Rotas, perfil do freelancer, home, login, integração geral
Nicolas Martins Paiva	Home, categorias, filtros, header
Valentina Damas	Header, busca, notificações, Sobre e perfil público

9/10

Justificativa

Faltou alguns recursos, como a aba de favoritos.
