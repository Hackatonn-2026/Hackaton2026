<template>
  <main class="suporte">
    <section class="hero">
      <div class="hero-content">
        <h1>Como podemos ajudar?</h1>
        <p>
          Encontre respostas para suas dúvidas ou entre em contato conosco.
        </p>
      </div>
    </section>

    <section class="contatos">
      <div class="contato-card">
        <span class="contato-icone">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </span>
        <h3>E-mail</h3>
        <p>suporte@cirolancers.com.br</p>
      </div>

      <div class="contato-card">
        <span class="contato-icone">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        <h3>Telefone</h3>
        <p>0800 777 1234</p>
      </div>

      <div class="contato-card">
        <span class="contato-icone">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
          </svg>
        </span>
        <h3>Horário de Atendimento</h3>
        <p>Segunda a sexta, das 9h às 18h</p>
      </div>
    </section>

    <section id="central-de-ajuda" class="suporte-section">
      <h2>Central de Ajuda</h2>
      <p>
        Encontre respostas rápidas para as dúvidas mais comuns sobre a
        plataforma. Se não encontrar o que procura, fale com a gente por
        e-mail ou telefone.
      </p>
      <ul class="lista-ajuda">
        <li>Como criar uma conta na plataforma</li>
        <li>Como contratar um freelancer</li>
        <li>Como me cadastrar como freelancer</li>
        <li>Como acompanhar o status de um serviço</li>
      </ul>
    </section>

    <section id="faq" class="suporte-section">
      <h2>Perguntas Frequentes</h2>

      <div class="faq-item" v-for="(item, index) in perguntas" :key="index">
        <button class="faq-pergunta" @click="alternar(index)">
          {{ item.pergunta }}
          <span>{{ abertaIndex === index ? '−' : '+' }}</span>
        </button>
        <p v-if="abertaIndex === index" class="faq-resposta">
          {{ item.resposta }}
        </p>
      </div>
    </section>

    <section id="termos-de-uso" class="suporte-section">
      <h2>Termos de Uso</h2>
      <p class="suporte-data">Última atualização: agosto de 2026</p>

      <h3>1. Aceitação dos termos</h3>
      <p>
        Ao acessar ou usar a plataforma Ciro Lancers, você concorda em
        cumprir estes Termos de Uso. Caso não concorde com algum ponto,
        pedimos que não utilize os nossos serviços.
      </p>

      <h3>2. Cadastro e conta</h3>
      <p>
        Para contratar ou oferecer serviços, é necessário criar uma conta
        com informações verdadeiras e atualizadas. Você é responsável por
        manter a confidencialidade da sua senha e por todas as atividades
        realizadas na sua conta.
      </p>

      <h3>3. Uso da plataforma</h3>
      <p>
        O Ciro Lancers conecta clientes a freelancers autônomos, mas não é
        parte nos contratos firmados entre eles. Cabe a cada usuário
        avaliar a qualidade e a idoneidade do serviço contratado.
      </p>

      <h3>4. Pagamentos</h3>
      <p>
        Os pagamentos realizados através da plataforma passam por um
        sistema de pagamento protegido, que retém o valor até a conclusão
        do serviço, garantindo mais segurança para as duas partes.
      </p>

      <h3>5. Conduta do usuário</h3>
      <p>
        É proibido usar a plataforma para fins ilícitos, fraudulentos ou
        que violem direitos de terceiros. Contas que descumprirem estas
        regras poderão ser suspensas ou encerradas.
      </p>

      <h3>6. Alterações nos termos</h3>
      <p>
        Estes termos podem ser atualizados periodicamente. Recomendamos
        que você revise esta página de tempos em tempos.
      </p>
    </section>

    <section id="politica-de-privacidade" class="suporte-section">
      <h2>Política de Privacidade</h2>
      <p>
        Saiba como seus dados são tratados e protegidos ao utilizar a
        plataforma Ciro Lancers.
      </p>

      <h3>1. Dados coletados</h3>
      <p>
        Coletamos informações fornecidas no cadastro (nome, e-mail,
        telefone) e dados de uso da plataforma, como histórico de
        contratações e mensagens trocadas entre clientes e freelancers.
      </p>

      <h3>2. Uso dos dados</h3>
      <p>
        Utilizamos seus dados para viabilizar a conexão entre clientes e
        freelancers, melhorar a experiência de uso e enviar comunicações
        relevantes sobre sua conta.
      </p>

      <h3>3. Compartilhamento</h3>
      <p>
        Não vendemos seus dados pessoais. Compartilhamos apenas as
        informações necessárias para a execução do serviço contratado e
        com parceiros que ajudam a operar a plataforma, como meios de
        pagamento.
      </p>

      <h3>4. Seus direitos</h3>
      <p>
        Você pode solicitar a qualquer momento a atualização ou exclusão
        dos seus dados, entrando em contato pelo e-mail
        suporte@cirolancers.com.br.
      </p>
    </section>

    <section class="denuncia">
      <h2>Denunciar Problema ou Comportamento Inadequado</h2>
      <p>
        Se você identificou algum problema, fraude ou comportamento
        inadequado na plataforma, por favor nos informe imediatamente.
      </p>
      <button class="botao-denuncia">Fazer Denúncia</button>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const abertaIndex = ref(null)

function alternar(index) {
  abertaIndex.value = abertaIndex.value === index ? null : index
}

const perguntas = [
  {
    pergunta: 'Quais são as formas de pagamento aceitas?',
    resposta:
      'Aceitamos cartão de crédito, débito, Pix e boleto bancário para pagamento dos serviços contratados.',
  },
  {
    pergunta: 'Como funciona o pagamento protegido?',
    resposta:
      'O valor pago fica retido pela plataforma até a confirmação de que o serviço foi entregue, e só então é liberado ao freelancer.',
  },
  {
    pergunta: 'Posso pedir reembolso?',
    resposta:
      'Sim. Caso o serviço não seja entregue conforme combinado, você pode solicitar reembolso pelo e-mail de suporte em até 7 dias.',
  },
  {
    pergunta: 'Como me cadastro como freelancer?',
    resposta:
      'Clique em "Cadastrar" no topo da página, selecione a opção de freelancer e preencha seus dados e categorias de serviço.',
  },
]
</script>

<style scoped>
.suporte {
  width: 100%;
  background: #fff;
}

/* HERO — mesmo padrão do hero da Home */
.hero {
  padding: 70px 8% 40px;
  text-align: center;
}

.hero h1 {
  font-size: 48px;
  color: #1f2937;
  margin-bottom: 20px;
}

.hero p {
  max-width: 700px;
  margin: auto;
  color: #6b7280;
  font-size: 18px;
  line-height: 1.6;
}

/* CARDS DE CONTATO — mesmo estilo dos cards de categoria da Home */
.contatos {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 0 8% 60px;
}

.contato-card {
  flex: 1;
  min-width: 220px;
  max-width: 320px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 28px;
  text-align: center;
}

.contato-icone {
  width: 44px;
  height: 44px;
  margin: 0 auto 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #eff6ff;
  color: #2563eb;
}

.contato-icone svg {
  width: 22px;
  height: 22px;
}

.contato-card h3 {
  color: #1f2937;
  font-size: 16px;
  margin-bottom: 6px;
}

.contato-card p {
  color: #6b7280;
  font-size: 14px;
}

/* SEÇÕES DE CONTEÚDO */
.suporte-section {
  scroll-margin-top: 90px;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 8%;
  border-bottom: 1px solid #e5e7eb;
}

.suporte-section h2 {
  color: #2563eb;
  font-size: 26px;
  margin-bottom: 16px;
}

.suporte-section h3 {
  color: #1f2937;
  margin-top: 18px;
  margin-bottom: 6px;
  font-size: 15px;
}

.suporte-section p {
  color: #6b7280;
  line-height: 1.6;
}

.suporte-data {
  color: #9ca3af;
  font-size: 13px;
  margin-bottom: 16px;
}

.lista-ajuda {
  padding-left: 20px;
  line-height: 1.8;
  color: #6b7280;
}

.faq-item {
  border-bottom: 1px solid #e5e7eb;
  padding: 12px 0;
}

.faq-pergunta {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px 0;
  color: #1f2937;
}

.faq-resposta {
  margin-top: 8px;
  color: #6b7280;
  font-size: 14px;
}

.denuncia {
  max-width: 900px;
  margin: 40px auto 60px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 12px;
  padding: 28px 8%;
}

.denuncia h2 {
  color: #b91c1c;
  font-size: 20px;
  margin-bottom: 8px;
}

.denuncia p {
  color: #7f1d1d;
}

.botao-denuncia {
  border: none;
  background: #dc2626;
  color: #fff;
  font-size: 15px;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 12px;
}

.botao-denuncia:hover {
  background: #b91c1c;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 34px;
  }
}
</style>
