<template>
  <div class="solicitacao-page">
    <header class="header">
      <div class="brand">
        <span class="brand-logo">ai</span>
        <span class="brand-name">CiroLancers</span>
      </div>
      <button class="btn-voltar" @click="voltar">← Voltar</button>
    </header>
    <main class="solicitacao-container">
      <section class="formulario">
        <div class="freelancer-selecionado">
          <div class="foto-freelancer">
            <img v-if="freelancer.fotoPerfil" :src="freelancer.fotoPerfil" alt="Foto do freelancer" />
            <span v-else>{{ primeiraLetra }}</span>
          </div>
          <div>
            <p class="contratando">Você está contratando</p>
            <h2>{{ freelancer.nome || 'Freelancer selecionado' }}</h2>
            <p class="profissao">{{ freelancer.profissao || 'Profissional' }}</p>
          </div>
        </div>

        <section class="card">
          <div class="card-header">
            <div class="icone">◎</div>
            <div>
              <h2>1. Sobre o serviço</h2>
              <p>Conte-nos o que você precisa</p>
            </div>
          </div>
          <div class="campo">
            <label>Categoria de serviço:</label>
            <select v-model="form.categoria">
              <option value="Pintura">Pintura</option>
              <option value="Elétrica">Elétrica</option>
              <option value="Encanamento">Encanamento</option>
              <option value="Jardinagem">Jardinagem</option>
              <option value="Limpeza">Limpeza</option>
              <option value="Manutenção">Manutenção</option>
              <option value="Design">Design</option>
              <option value="Programação">Programação</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div class="campo">
            <label>Título do serviço:</label>
            <input v-model="form.titulo" type="text" placeholder="Ex.: Pintar quarto." />
          </div>
          <div class="campo">
            <label>Descrição detalhada:</label>
            <textarea v-model="form.descricao" placeholder="Dê mais detalhes sobre o serviço que você precisa..."></textarea>
          </div>
        </section>

        <section class="card">
          <div class="card-header">
            <div class="icone">⌖</div>
            <div>
              <h2>2. Local e data</h2>
              <p>Onde e quando o serviço será realizado.</p>
            </div>
          </div>
          <div class="linha">
            <div class="campo">
              <label>CEP:</label>
              <input v-model="form.cep" type="text" placeholder="Digite seu CEP" />
            </div>
            <div class="campo">
              <label>Bairro:</label>
              <input v-model="form.bairro" type="text" placeholder="Ex.: Comasa" />
            </div>
          </div>
          <div class="campo">
            <label>Endereço:</label>
            <input v-model="form.endereco" type="text" placeholder="Digite o endereço" />
          </div>
          <div class="linha tres">
            <div class="campo">
              <label>Cidade:</label>
              <input v-model="form.cidade" type="text" placeholder="Ex.: Joinville" />
            </div>
            <div class="campo">
              <label>Data:</label>
              <input v-model="form.data" type="date" />
            </div>
            <div class="campo periodo">
              <label>Período:</label>
              <select v-model="form.periodo">
                <option>Manhã</option>
                <option>Tarde</option>
                <option>Noite</option>
              </select>
            </div>
          </div>
        </section>

        <section class="card">
          <div class="card-header">
            <div class="icone">$</div>
            <div>
              <h2>3. Orçamento</h2>
              <p>Informe seu orçamento estimado</p>
            </div>
          </div>
          <div class="orcamento-linha">
            <div class="campo">
              <label>Orçamento estimado (R$):</label>
              <input v-model="form.orcamento" type="text" placeholder="Ex.: R$500,00" />
            </div>
            <label class="negociavel">
              <span>
                Negociável
                <small>Preço discutível</small>
              </span>
              <input v-model="form.negociavel" type="checkbox" />
            </label>
          </div>
        </section>
      </section>

      <aside class="resumo">
        <div class="resumo-header">
          <span class="resumo-icone">▢</span>
          <h2>Resumo da solicitação</h2>
        </div>
        <div class="linha-resumo"></div>
        <div class="resumo-freelancer">
          <strong>Freelancer</strong>
          <span>{{ freelancer.nome || 'Não informado' }}</span>
          <small>{{ freelancer.profissao || '' }}</small>
        </div>
        <div class="resumo-item">
          <strong>Categoria</strong>
          <span>🖌️ {{ form.categoria }}</span>
        </div>
        <div class="resumo-item">
          <strong>Título</strong>
          <span :class="{ vazio: !form.titulo }">{{ form.titulo || 'Não informado' }}</span>
        </div>
        <div class="resumo-item">
          <strong>Data desejada</strong>
          <span :class="{ vazio: !form.data }">{{ dataFormatada }}</span>
        </div>
        <div class="resumo-item">
          <strong>Orçamento</strong>
          <span :class="{ vazio: !form.orcamento }">{{ form.orcamento || 'Não informado' }}</span>
        </div>
        <div class="protegido">
          <div class="escudo">🛡️</div>
          <div>
            <strong>Serviço protegido</strong>
            <p>Seu pagamento só será liberado após a conclusão do serviço e a sua aprovação.</p>
          </div>
        </div>
        <div class="como-funciona">
          <h3>Como funciona?</h3>
          <div class="passo">
            <span class="passo-icone">✉</span>
            <div>
              <strong>1. Envie sua solicitação</strong>
              <p>Descreva o serviço que precisa</p>
            </div>
          </div>
          <div class="passo">
            <span class="passo-icone">▱</span>
            <div>
              <strong>2. Receba propostas</strong>
              <p>O freelancer receberá sua solicitação</p>
            </div>
          </div>
          <div class="passo">
            <span class="passo-icone">◎</span>
            <div>
              <strong>3. Escolha o melhor</strong>
              <p>Compare perfis, avaliações e preços</p>
            </div>
          </div>
          <div class="passo">
            <span class="passo-icone">▭</span>
            <div>
              <strong>4. Aprove e pague</strong>
              <p>O pagamento é liberado após o serviço</p>
            </div>
          </div>
        </div>
        <button class="btn-publicar" @click="publicarSolicitacao">➤ Publicar solicitação</button>
        <p class="seguranca">Publicação 100% segura!</p>
      </aside>
    </main>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUsuarioStore } from '@/stores/usuario'

const router = useRouter()
const usuarioStore = useUsuarioStore()

const freelancer = reactive({
  id: '',
  nome: '',
  profissao: '',
  cidade: '',
  descricao: '',
  anosExperiencia: '',
  categorias: [],
  fotoPerfil: null,
  email: ''
})

const form = reactive({
  categoria: 'Pintura',
  titulo: '',
  descricao: '',
  cep: '',
  bairro: '',
  endereco: '',
  cidade: '',
  data: '',
  periodo: 'Manhã',
  orcamento: '',
  negociavel: true
})

onMounted(() => {
  const dados = localStorage.getItem('freelancerSelecionado')
  if (!dados) {
    alert('Nenhum freelancer foi selecionado.')
    router.back()
    return
  }
  const dadosFreelancer = JSON.parse(dados)
  Object.assign(freelancer, dadosFreelancer)
})

const primeiraLetra = computed(() => {
  if (!freelancer.nome) {
    return '?'
  }
  return freelancer.nome.charAt(0).toUpperCase()
})

const dataFormatada = computed(() => {
  if (!form.data) {
    return 'Não informado'
  }
  const partes = form.data.split('-')
  if (partes.length !== 3) {
    return form.data
  }
  return `${partes[2]}/${partes[1]}/${partes[0]}`
})

function voltar() {
  router.back()
}

function publicarSolicitacao() {
  if (!form.titulo.trim()) {
    alert('Digite o título do serviço.')
    return
  }

  if (!form.descricao.trim()) {
    alert('Digite a descrição do serviço.')
    return
  }

  if (!form.cidade.trim()) {
    alert('Informe a cidade do serviço.')
    return
  }

  const solicitacoesSalvas = localStorage.getItem('solicitacoes')
  const solicitacoes = solicitacoesSalvas ? JSON.parse(solicitacoesSalvas) : []

  const novaSolicitacao = {
    id: Date.now(),
    freelancerId: freelancer.id || freelancer.email || freelancer.nome,
    freelancerNome: freelancer.nome,
    freelancerEmail: freelancer.email || '',
    freelancerFoto: freelancer.fotoPerfil || null,
    clienteId: usuarioStore.state?.usuario?.id || usuarioStore.state?.usuario?.email || '',
    clienteNome: usuarioStore.state?.usuario?.nome || '',
    clienteEmail: usuarioStore.state?.usuario?.email || '',
    categoria: form.categoria,
    titulo: form.titulo,
    descricao: form.descricao,
    cep: form.cep,
    bairro: form.bairro,
    endereco: form.endereco,
    cidade: form.cidade,
    data: form.data,
    periodo: form.periodo,
    orcamento: form.orcamento,
    negociavel: form.negociavel,
    status: 'pendente',
    criadaEm: new Date().toISOString()
  }

  solicitacoes.push(novaSolicitacao)

  localStorage.setItem('solicitacoes', JSON.stringify(solicitacoes))

  alert(`Solicitação enviada para ${freelancer.nome}!`)

  router.push({
    name: 'dashboard-cliente'
  })
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.solicitacao-page {
  min-height: 100vh;
  background: #f0f2f4;
  padding-bottom: 40px;
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
}

.header {
  height: 72px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6%;
  box-shadow: 0 1px 4px rgba(0,0,0,.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-logo {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #3b5bfd;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
}

.brand-name {
  font-size: 22px;
  font-weight: 800;
  color: #1a1a2e;
}

.btn-voltar {
  border: none;
  background: transparent;
  color: #3b5bfd;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.solicitacao-container {
  max-width: 1100px;
  margin: 30px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 390px;
  gap: 20px;
  align-items: start;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.freelancer-selecionado {
  background: white;
  border: 1px solid #aaa;
  border-radius: 14px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.foto-freelancer {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background: #3b5bfd;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
}

.foto-freelancer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contratando {
  margin: 0 0 3px;
  font-size: 11px;
  color: #777;
}

.freelancer-selecionado h2 {
  margin: 0;
  font-size: 18px;
  color: #1a1a2e;
}

.profissao {
  margin: 3px 0 0;
  font-size: 12px;
  color: #3b5bfd;
}

.card {
  background: white;
  border: 1px solid #aaa;
  border-radius: 14px;
  padding: 20px 22px;
  box-shadow: 0 1px 2px rgba(0,0,0,.08);
}

.card-header {
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
}

.icone {
  width: 28px;
  font-size: 22px;
  text-align: center;
}

.card-header h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 500;
}

.card-header p {
  margin: 4px 0 0;
  font-size: 11px;
  color: #555;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  margin-bottom: 12px;
}

.campo label {
  font-size: 11px;
}

.campo input,
.campo select,
.campo textarea {
  width: 100%;
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 8px 10px;
  font-size: 11px;
  font-family: inherit;
  outline: none;
  background: white;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  border-color: #3b5bfd;
}

.campo textarea {
  height: 70px;
  resize: vertical;
}

.campo select {
  height: 32px;
}

.linha {
  display: flex;
  gap: 8px;
}

.tres {
  gap: 8px;
}

.orcamento-linha {
  display: flex;
  align-items: flex-end;
  gap: 50px;
}

.orcamento-linha .campo {
  max-width: 200px;
  margin-bottom: 0;
}

.negociavel {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  cursor: pointer;
  margin-bottom: 5px;
}

.negociavel span {
  display: flex;
  flex-direction: column;
}

.negociavel small {
  color: #777;
  font-size: 7px;
}

.resumo {
  background: white;
  border: 1px solid #aaa;
  border-radius: 14px;
  padding: 18px;
  min-height: 650px;
  box-shadow: 0 1px 2px rgba(0,0,0,.08);
}

.resumo-header {
  display: flex;
  align-items: center;
  gap: 15px;
}

.resumo-header h2 {
  font-size: 15px;
  font-weight: 500;
  margin: 0;
}

.resumo-icone {
  font-size: 25px;
}

.linha-resumo {
  height: 1px;
  background: #999;
  margin: 10px 0 20px;
}

.resumo-freelancer {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 15px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
}

.resumo-freelancer strong {
  font-size: 10px;
}

.resumo-freelancer span {
  font-size: 11px;
  font-weight: 600;
}

.resumo-freelancer small {
  color: #3b5bfd;
  font-size: 9px;
}

.resumo-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
}

.resumo-item strong {
  font-size: 10px;
  font-weight: 500;
}

.resumo-item span {
  font-size: 10px;
}

.vazio {
  color: #888;
}

.protegido {
  display: flex;
  gap: 10px;
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 10px;
  margin: 25px 0 20px;
}

.escudo {
  font-size: 30px;
}

.protegido strong {
  font-size: 11px;
}

.protegido p {
  margin: 3px 0;
  font-size: 8px;
  line-height: 1.4;
  color: #444;
}

.como-funciona h3 {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 12px;
}

.passo {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.passo-icone {
  width: 22px;
  font-size: 17px;
  text-align: center;
}

.passo strong {
  font-size: 10px;
  font-weight: 500;
}

.passo p {
  margin: 2px 0;
  font-size: 8px;
  color: #555;
}

.btn-publicar {
  width: 180px;
  display: block;
  margin: 28px auto 0;
  padding: 11px;
  border: 1px solid #888;
  border-radius: 4px;
  background: #d5d5d5;
  color: #111;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}

.btn-publicar:hover {
  background: #c5c5c5;
}

.seguranca {
  text-align: center;
  font-size: 9px;
  color: #555;
}

@media (max-width: 850px) {
  .solicitacao-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 550px) {
  .linha {
    flex-direction: column;
  }

  .orcamento-linha {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .orcamento-linha .campo {
    max-width: none;
    width: 100%;
  }
}
</style>