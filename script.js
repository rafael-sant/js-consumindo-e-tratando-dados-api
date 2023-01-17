async function buscaEndereco(cep) {
  try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) {
      throw Error("Cep não existente!");
    }
    console.log(consultaCepConvertida);
    return consultaCepConvertida;
  } catch (erro) {
    console.log(erro);
  }
}
