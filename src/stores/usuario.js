import { reactive } from 'vue'

const usuarioSalvo = JSON.parse(localStorage.getItem('usuario')) || null
const contasSalvas = JSON.parse(localStorage.getItem('contas')) || []
const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || []

if (usuarioSalvo && !contasSalvas.some(conta => conta.email === usuarioSalvo.email)) {
  contasSalvas.push(usuarioSalvo)
  localStorage.setItem('contas', JSON.stringify(contasSalvas))
}

const state = reactive({
  usuario: usuarioSalvo,
  tipoUsuario: localStorage.getItem('tipoUsuario') || usuarioSalvo?.tipo || null
})

function getUsuarios() {
  return JSON.parse(localStorage.getItem('usuarios')) || usuariosSalvos
}

function salvarUsuarios(usuarios) {
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

function gerarId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
}

export function useUsuarioStore() {
  function login(usuario, tipoUsuario) {
    state.usuario = usuario
    state.tipoUsuario = tipoUsuario

    const contas = JSON.parse(localStorage.getItem('contas')) || []
    const indiceConta = contas.findIndex(conta => conta.email?.toLowerCase() === usuario.email?.toLowerCase())
    if (indiceConta >= 0) contas[indiceConta] = usuario
    else contas.push(usuario)
    localStorage.setItem('contas', JSON.stringify(contas))
    localStorage.setItem('usuario', JSON.stringify(usuario))
    localStorage.setItem('tipoUsuario', tipoUsuario)

    const usuarios = getUsuarios()
    const indiceUsuario = usuarios.findIndex(item => item.email?.toLowerCase() === usuario.email?.toLowerCase())
    if (indiceUsuario >= 0) usuarios[indiceUsuario] = usuario
    else usuarios.push(usuario)
    salvarUsuarios(usuarios)
  }

  function cadastrar(usuario, tipoUsuario) {
    const usuarios = getUsuarios()
    if (usuarios.some(item => item.email?.toLowerCase() === usuario.email.trim().toLowerCase())) {
      throw new Error('Já existe uma conta com esse e-mail')
    }
    const novoUsuario = { ...usuario, tipo: tipoUsuario, id: gerarId() }
    usuarios.push(novoUsuario)
    salvarUsuarios(usuarios)
    login(novoUsuario, tipoUsuario)
  }

  function autenticar(email, senha) {
    const contas = [...getUsuarios(), ...(JSON.parse(localStorage.getItem('contas')) || [])]
    const conta = contas.find(usuario => (
      usuario.email?.toLowerCase() === email.trim().toLowerCase() && usuario.senha === senha
    ))
    if (!conta) return false
    login(conta, conta.tipo || localStorage.getItem('tipoUsuario'))
    return true
  }

  function adicionarContratacao(profissional) {
    if (!state.usuario) return false
    const profissionaisEmEspera = state.usuario.profissionaisEmEspera || []
    const jaAdicionado = profissionaisEmEspera.some(item => item.id === profissional.id)
    if (!jaAdicionado) {
      state.usuario.profissionaisEmEspera = [...profissionaisEmEspera, {
        id: profissional.id,
        nome: profissional.name,
        profissao: profissional.title,
        fotoPerfil: profissional.avatar,
        avaliacao: profissional.rating,
        localizacao: profissional.location,
        dataContratacao: new Date().toISOString()
      }]
    }
    login(state.usuario, state.tipoUsuario)
    return !jaAdicionado
  }

  function atualizarPerfil(dadosNovos) {
    if (!state.usuario) throw new Error('Nenhum usuário logado')
    const usuarioAtualizado = { ...state.usuario, ...dadosNovos }
    login(usuarioAtualizado, state.tipoUsuario)
    return usuarioAtualizado
  }

  function contratar(dadosSolicitacao) {
    if (!state.usuario) throw new Error('Você precisa estar logado para solicitar um serviço')
    const contratacoes = state.usuario.contratacoes || []
    const novaContratacao = { ...dadosSolicitacao, dataContratacao: new Date().toISOString() }
    const usuarioAtualizado = { ...state.usuario, contratacoes: [...contratacoes, novaContratacao] }
    login(usuarioAtualizado, state.tipoUsuario)
    return novaContratacao
  }

  function buscarPorId(id) {
    return getUsuarios().find(usuario => usuario.id === id) || null
  }

  function logout() {
    state.usuario = null
    state.tipoUsuario = null
    localStorage.removeItem('usuario')
    localStorage.removeItem('tipoUsuario')
  }

  return { state, cadastrar, login, autenticar, adicionarContratacao, logout, atualizarPerfil, contratar, buscarPorId }
}
