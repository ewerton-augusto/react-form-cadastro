export function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, msg: "CPF deve ter 11 dígitos." };
  } else {
    return { valido: true, msg: "" };
  }
}

export function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, msg: "Senha deve ter 4-72 dígitos." };
  } else {
    return { valido: true, msg: "" };
  }
}
