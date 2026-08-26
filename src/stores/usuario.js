import { reactive } from 'vue'

// Sessão atual (quem está logado agora)
const state = reactive({
  usuario: JSON.parse(localStorage.getItem('usuario')) || null,
  tipoUsuario: localStorage.getItem('tipoUsuario') || null
})

// Helpers para a "base de dados" de usuários cadastrados
function getUsuarios() {
  return JSON.parse(localStorage.getItem('usuarios')) || []
}

function salvarUsuarios(lista) {
  localStorage.setItem('usuarios', JSON.stringify(lista))
}

export function useUsuarioStore() {

  // Cadastra um novo usuário na base E já loga com ele
  function cadastrar(usuario, tipoUsuario) {
    const usuarios = getUsuarios()

    const jaExiste = usuarios.some(
      (u) => u.email?.toLowerCase() === usuario.email.trim().toLowerCase()
    )

    if (jaExiste) {
      throw new Error('Já existe uma conta com esse e-mail')
    }

    const novoUsuario = { ...usuario, tipo: tipoUsuario }
    usuarios.push(novoUsuario)
    salvarUsuarios(usuarios)

    login(novoUsuario, tipoUsuario)
  }

  // Define a sessão atual (usuário logado)
  function login(usuario, tipoUsuario) {
    state.usuario = usuario
    state.tipoUsuario = tipoUsuario

    localStorage.setItem('usuario', JSON.stringify(usuario))
    localStorage.setItem('tipoUsuario', tipoUsuario)
  }

  // Confere email/senha contra TODOS os usuários cadastrados
  function autenticar(email, senha) {
    const usuarios = getUsuarios()

    const encontrado = usuarios.find((u) => {
      const emailConfere = u.email?.toLowerCase() === email.trim().toLowerCase()
      const senhaConfere = u.senha === senha
      return emailConfere && senhaConfere
    })

    if (!encontrado) {
      return false
    }

    login(encontrado, encontrado.tipo)
    return true
  }

  function logout() {
    state.usuario = null
    state.tipoUsuario = null
    localStorage.removeItem('usuario')
    localStorage.removeItem('tipoUsuario')
  }

  return { state, cadastrar, login, autenticar, logout }
}