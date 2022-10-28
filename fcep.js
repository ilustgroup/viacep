function search() {
    const cep = document.getElementById('cep').value
    const logradouro = document.getElementById('logradouro')
    let link = `https://viacep.com.br/ws/${cep}/json/`
    console.log(cep)
    fetch(link)
        .then(T => T.json())
        .then( element => {
            logradouro.value = element.logradouro + ', ' 
            + element.bairro + ', '
            + element.localidade + ' - ' 
            + element.uf 
            logradouro.value = element.logradouro + ', ' 
            + element.bairro + ', ' 
            + element.localidade + ' - ' 
            + element.uf            
        })
}