function contar() {
    var inicio = document.getElementById('txtInicio')
    var fim = window.document.getElementById('txtFim')
    var passo = document.getElementById('txtPasso')
    var res = document.querySelector('div#res')
    

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Preencha os dados')
    }   else {
        res.innerHTML = ''
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo invalido, Considerando passo 1')
            p = 1
        }
        
        if (i < f) {
            while (i < f){
                i = i + p        
                res.innerHTML += `&#x1F449;${i}`
            }
        }   else {
            while (i > f){
                i = i - p        
                res.innerHTML += `&#x1F449;${i}`
            }
        }
    }


}