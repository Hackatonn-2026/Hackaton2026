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

    if (!state.usuario) {

      return false

    }

    const emailConfere =
      state.usuario.email?.toLowerCase() === email.trim().toLowerCase()

    const senhaConfere =
      state.usuario.senha === senha

    if (emailConfere && senhaConfere) {

      // reidrata a sessão (redundante se já estava, mas garante o localStorage)
      login(state.usuario, state.tipoUsuario)

      return true

    }

    return false

  }
  function logout() {

    state.usuario = null
    state.tipoUsuario = null
    localStorage.removeItem('usuario')
    localStorage.removeItem('tipoUsuario')
  }

  return { state, login, autenticar, logout }

}