import { reactive } from 'vue'

const usuarioSalvo = JSON.parse(localStorage.getItem('usuario')) || null
const contasSalvas = JSON.parse(localStorage.getItem('contas')) || []

if (usuarioSalvo && !contasSalvas.some(conta => conta.email === usuarioSalvo.email)) {
  contasSalvas.push(usuarioSalvo)
  localStorage.setItem('contas', JSON.stringify(contasSalvas))
}

const state = reactive({
  usuario: usuarioSalvo,
  tipoUsuario: localStorage.getItem('tipoUsuario') || usuarioSalvo?.tipo || null
})

export function useUsuarioStore() {

  function login(usuario, tipoUsuario) {

    state.usuario = usuario
    state.tipoUsuario = tipoUsuario

    const contas = JSON.parse(localStorage.getItem('contas')) || []
    const indiceConta = contas.findIndex(
      conta => conta.email?.toLowerCase() === usuario.email?.toLowerCase()
    )

    if (indiceConta >= 0) {
      contas[indiceConta] = usuario
    } else {
      contas.push(usuario)
    }

    localStorage.setItem('contas', JSON.stringify(contas))
    localStorage.setItem('usuario', JSON.stringify(usuario))
    localStorage.setItem('tipoUsuario', tipoUsuario)

  }

  function autenticar(email, senha) {

    const contas = JSON.parse(localStorage.getItem('contas')) || []
    const conta = contas.find(usuario => {
      const emailConfere =
        usuario.email?.toLowerCase() === email.trim().toLowerCase()
      return emailConfere && usuario.senha === senha
    })

    if (!conta) {
      return false

    }

    login(conta, conta.tipo || localStorage.getItem('tipoUsuario'))
    return true

  }
  function logout() {

    state.usuario = null
    state.tipoUsuario = null
    localStorage.removeItem('usuario')
    localStorage.removeItem('tipoUsuario')
  }

  return { state, login, autenticar, logout }

}
