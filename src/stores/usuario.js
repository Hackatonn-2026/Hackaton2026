import { reactive } from 'vue'

const state = reactive({
  usuario: JSON.parse(localStorage.getItem('usuario')) || null,
  tipoUsuario: localStorage.getItem('tipoUsuario') || null
})

export function useUsuarioStore() {

  function login(usuario, tipoUsuario) {
    state.usuario = usuario
    state.tipoUsuario = tipoUsuario

    localStorage.setItem('usuario', JSON.stringify(usuario))
    localStorage.setItem('tipoUsuario', tipoUsuario)
  }

  function autenticar(email, senha) {

    const emailDigitado = email.trim().toLowerCase()

    // Pega todos os usuários cadastrados
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    // Também verifica o usuário antigo, caso exista
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario'))

    let usuarioEncontrado = null

    // Procura entre todos os usuários cadastrados
    if (usuarios.length > 0) {
      usuarioEncontrado = usuarios.find(usuario => {
        return (
          usuario.email?.toLowerCase() === emailDigitado &&
          usuario.senha === senha
        )
      })
    }

    // Caso exista apenas um usuário salvo no formato antigo
    if (!usuarioEncontrado && usuarioSalvo) {
      const emailConfere =
        usuarioSalvo.email?.toLowerCase() === emailDigitado

      const senhaConfere =
        usuarioSalvo.senha === senha

      if (emailConfere && senhaConfere) {
        usuarioEncontrado = usuarioSalvo
      }
    }

    // Se encontrou o usuário
    if (usuarioEncontrado) {

      // Descobre o tipo de usuário
      const tipoUsuario =
        usuarioEncontrado.tipoUsuario ||
        usuarioEncontrado.tipo ||
        localStorage.getItem('tipoUsuario') ||
        'cliente'

      // Cria a sessão do usuário que acabou de entrar
      login(usuarioEncontrado, tipoUsuario)

      return true
    }

    // E-mail ou senha incorretos
    return false
  }

  function logout() {
    state.usuario = null
    state.tipoUsuario = null

    localStorage.removeItem('usuario')
    localStorage.removeItem('tipoUsuario')
  }

  return {
    state,
    login,
    autenticar,
    logout
  }
}