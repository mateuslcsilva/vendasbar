var div1 = document.querySelector('#div1')
var div2 = document.querySelector('#div2')
var div3 = document.querySelector('#div3')
var div4 = document.querySelector('#div4')
var dropDownDiv = document.querySelector('#dropDownDiv')
var mesa
var mesaAcrescentar
var mesaAlterar
var mesaFechar
var dropDownItem = []

class cadastroPedido {
    constructor(numMesa) {
        this.numMesa = numMesa
        this.pedido = []
    }
}

var mesas = []

var somaMesa = 0
function selectMesa() {
    var mesasProcurar
    mesa = document.querySelector('#mesa').value
    mesas.forEach((mesas, index) => {
        if (mesas.numMesa == mesa) {
            mesasProcurar = 1
        }
    })
    if (mesasProcurar != 1) {
        somaMesa++
        let mesa1 = new cadastroPedido(mesa)
        mesas.push(mesa1)
        document.querySelector('#visualizacao').innerHTML = 'Mesa: ' + mesa + '<br>'
        /*let p = document.createElement('p')
        p.setAttribute('class', 'dropdown-item')
        p.setAttribute('onclick', 'mesaAlterarPedido()')
        p.setAttribute('id', mesa)
        p.innerHTML = mesa
        dropDownItem.splice(Number(mesa), 0, 'a')
        document.querySelector('#dropDownDiv').appendChild(p)*/
        mesa == 1 ? document.querySelector('#dropDownItem1').style.display = 'block' : {}
        mesa == 2 ? document.querySelector('#dropDownItem2').style.display = 'block' : {}
        mesa == 3 ? document.querySelector('#dropDownItem3').style.display = 'block' : {}
        mesa == 4 ? document.querySelector('#dropDownItem4').style.display = 'block' : {}
        mesa == 5 ? document.querySelector('#dropDownItem5').style.display = 'block' : {}
        mesa == 6 ? document.querySelector('#dropDownItem6').style.display = 'block' : {}
        mesa == 7 ? document.querySelector('#dropDownItem7').style.display = 'block' : {}
        mesa == 8 ? document.querySelector('#dropDownItem8').style.display = 'block' : {}
        mesa == 9 ? document.querySelector('#dropDownItem9').style.display = 'block' : {}
        mesa == 10 ? document.querySelector('#dropDownItem10').style.display = 'block' : {}
        mesa == 11 ? document.querySelector('#dropDownItem11').style.display = 'block' : {}
        mesa == 12 ? document.querySelector('#dropDownItem12').style.display = 'block' : {}
        mesa == 13 ? document.querySelector('#dropDownItem13').style.display = 'block' : {}
        mesa == 14 ? document.querySelector('#dropDownItem14').style.display = 'block' : {}
        mesa == 15 ? document.querySelector('#dropDownItem15').style.display = 'block' : {}
        if (mesa) {
            document.querySelector('#btnmesa').setAttribute('disabled', '')
            document.querySelector('#btnlimpar').removeAttribute('disabled', '')
            document.querySelector('#btnAcrescentar').removeAttribute('disabled', '')
        }
    } else {
        alert('Mesa já cadastrada! Feche a conta antes de usá-la de novo.')
    }


}
function acrescPedido() {
    let pedido1 = document.querySelector('#pedido').value + '<br>'
    if (pedido1 != '<br>') {
        mesas[somaMesa - 1].pedido.push(pedido1)
        document.querySelector('#pedido').value = ''
        document.querySelector('#visualizacao').innerHTML += pedido1
        document.querySelector('#pedidoRegistrado').innerHTML = '<br>Ok, pedido registrado'
    }
}


function limpar() {
    document.querySelector('#mesa').value = ''
    document.querySelector('#btnmesa').removeAttribute('disabled', '')
    document.querySelector('#visualizacao').innerHTML = ''
    document.querySelector('#pedidoRegistrado').innerHTML = ''
    mesa = 999999
}
function limparAcrescentar() {
    document.querySelector('#mesaAcrescentar').value = ''
    document.querySelector('#btnmesaAcrescentar').removeAttribute('disabled', '')
    document.querySelector('#btnLimparAcrescentar').setAttribute('disabled', '')
    document.querySelector('#btnPedidoAcrescentar').setAttribute('disabled', '')
    document.querySelector('#visualizacaoAcrescentar').innerHTML = ''
    document.querySelector('#pedidoRegistrado').innerHTML = ''
    document.querySelector('#pedidoAcrescentarTxt').innerHTML = ''
    mesaAcrescentar = 999999
}

function seletorMenu(div) {
    div1.style.display = 'none'
    div2.style.display = 'none'
    div3.style.display = 'none'
    div4.style.display = 'none'
    div == 'div1' ? div1.style.display = 'block' : {}
    div == 'div2' ? div2.style.display = 'block' : {}
    div == 'div3' ? div3.style.display = 'block' : {}
    div == 'div4' ? div4.style.display = 'block' : {}
}


function buscarMesa() {
    let num = document.querySelector('#mesaAcrescentar').value
    mesas.forEach((mesas, index) => {
        if (mesas.numMesa == num) {
            mesaAcrescentar = index
        }
    })
    if (mesas[mesaAcrescentar].numMesa != undefined) {
        document.querySelector('#btnmesaAcrescentar').setAttribute('disabled', '')
        document.querySelector('#btnLimparAcrescentar').removeAttribute('disabled', '')
        document.querySelector('#btnPedidoAcrescentar').removeAttribute('disabled', '')
        document.querySelector('#visualizacaoAcrescentar').innerHTML = 'Mesa: ' + mesas[mesaAcrescentar].numMesa + '<br>' + mesas[mesaAcrescentar].pedido.join('')
    } else {
        alert('selecione mesa')
    }
}

function acrescPedido2() {
    let pedidoAcrescentado = document.querySelector('#pedidoAcrescentar').value
    if (pedidoAcrescentado.length > 5) {
        mesas[mesaAcrescentar].pedido.push(pedidoAcrescentado + '<br>')
        document.querySelector('#visualizacaoAcrescentar').innerHTML = 'Mesa: ' + mesas[mesaAcrescentar].numMesa + '<br>' + mesas[mesaAcrescentar].pedido.join('')
        document.querySelector('#pedidoAcrescentarTxt').innerHTML = 'OK, pedido acrescentado'
        document.querySelector('#pedidoAcrescentar').value = ''
    }
}

function mesaAlterarPedido(num) {
    mesas.forEach((mesas, index) => {
        if (mesas.numMesa == num) {
            mesaAlterar = index
        }
    })
    document.querySelector('#btnAlterarNumMesa').removeAttribute('disabled', '')
    document.querySelector('#btnCancelarPedido').removeAttribute('disabled', '')
    document.querySelector('#btnCancelarComanda').removeAttribute('disabled', '')
    document.querySelector('#visualizacaoAlterar').innerHTML = 'Mesa: ' + mesas[mesaAlterar].numMesa + '<br>' + mesas[mesaAlterar].pedido.join('')
}

function alterarNumMesa() {
    document.querySelector('#visualizacaoAlterar').innerHTML = 'Mesa: ' + mesas[mesaAlterar].numMesa + '<br>' + mesas[mesaAlterar].pedido.join('')
    //document.querySelector('#visualizacaoAlterar').innerHTML += '<br>OK, número da mesa alterado!!'
    document.querySelector('#divAlterarNumMesa').style.display = 'block'
}
function novoNumMesaFunc() {
    var novoNumMesa = document.querySelector('#novoNumMesa').value
    var varMesas = mesas
    var verificacao
    varMesas.forEach((varMesas, index) => {
        if (varMesas.numMesa == novoNumMesa) {
            verificacao = varMesas.numMesa
        }

    })
    if (verificacao != novoNumMesa) {
        mesas[mesaAlterar].numMesa == 1 ? document.querySelector('#dropDownItem1').style.display = 'none' : {}
        mesas[mesaAlterar].numMesa == 2 ? document.querySelector('#dropDownItem2').style.display = 'none' : {}
        mesas[mesaAlterar].numMesa == 3 ? document.querySelector('#dropDownItem3').style.display = 'none' : {}
        mesas[mesaAlterar].numMesa == 4 ? document.querySelector('#dropDownItem4').style.display = 'none' : {}
        mesas[mesaAlterar].numMesa == 5 ? document.querySelector('#dropDownItem5').style.display = 'none' : {}


        mesas[mesaAlterar].numMesa = novoNumMesa
        document.querySelector('#visualizacaoAlterar').innerHTML = 'Mesa: ' + mesas[mesaAlterar].numMesa + '<br>' + mesas[mesaAlterar].pedido.join('') + '<br>OK, número da mesa alterado!!'
        document.querySelector('#divAlterarNumMesa').style.display = 'none'


        novoNumMesa == 1 ? document.querySelector('#dropDownItem1').style.display = 'block' : {}
        novoNumMesa == 2 ? document.querySelector('#dropDownItem2').style.display = 'block' : {}
        novoNumMesa == 3 ? document.querySelector('#dropDownItem3').style.display = 'block' : {}
        novoNumMesa == 4 ? document.querySelector('#dropDownItem4').style.display = 'block' : {}
        novoNumMesa == 5 ? document.querySelector('#dropDownItem5').style.display = 'block' : {}
        mesaAlterar = 999999
    } else {
        alert('Mesa já cadastrada em outra comanda!')
    }
}

function cancelarComanda() {

    var con = confirm('Tem certeza que deseja cancelar a comanda? Todas as informações serão perdidas!!')
    if (con == true) {

        mesas[mesaAlterar].numMesa == 1 ? document.querySelector('#dropDownItem1').style.display = 'none' : {}
        mesas[mesaAlterar].numMesa == 2 ? document.querySelector('#dropDownItem2').style.display = 'none' : {}
        mesas[mesaAlterar].numMesa == 3 ? document.querySelector('#dropDownItem3').style.display = 'none' : {}
        mesas[mesaAlterar].numMesa == 4 ? document.querySelector('#dropDownItem4').style.display = 'none' : {}
        mesas[mesaAlterar].numMesa == 5 ? document.querySelector('#dropDownItem5').style.display = 'none' : {}
        mesas.splice(mesaAlterar, 1)
        somaMesa--

        document.querySelector('#visualizacaoAlterar').innerHTML = ''
    }
}

function cancelarPedido(){
    document.querySelector('#divCalcelarItem').style.display = 'block'
    if(mesas[mesaAlterar].pedido[0]?.length) {
        document.querySelector('#checkbox1div').style.display = 'block' 
        document.querySelector('#checkbox1txt').innerHTML = mesas[mesaAlterar].pedido[0]
    }
    if(mesas[mesaAlterar].pedido[1]?.length) {
        document.querySelector('#checkbox2div').style.display = 'block' 
        document.querySelector('#checkbox2txt').innerHTML = mesas[mesaAlterar].pedido[1]
    }
    if(mesas[mesaAlterar].pedido[2]?.length) {
        document.querySelector('#checkbox3div').style.display = 'block' 
        document.querySelector('#checkbox3txt').innerHTML = mesas[mesaAlterar].pedido[2]
    }
    if(mesas[mesaAlterar].pedido[3]?.length) {
        document.querySelector('#checkbox4div').style.display = 'block' 
        document.querySelector('#checkbox4txt').innerHTML = mesas[mesaAlterar].pedido[3]
    }
    if(mesas[mesaAlterar].pedido[4]?.length) {
        document.querySelector('#checkbox5div').style.display = 'block' 
        document.querySelector('#checkbox5txt').innerHTML = mesas[mesaAlterar].pedido[4]
    }
    if(mesas[mesaAlterar].pedido[5]?.length) {
        document.querySelector('#checkbox6div').style.display = 'block' 
        document.querySelector('#checkbox6txt').innerHTML = mesas[mesaAlterar].pedido[5]
    }
    if(mesas[mesaAlterar].pedido[6]?.length) {
        document.querySelector('#checkbox7div').style.display = 'block' 
        document.querySelector('#checkbox7txt').innerHTML = mesas[mesaAlterar].pedido[6]
    }
    if(mesas[mesaAlterar].pedido[7]?.length) {
        document.querySelector('#checkbox8div').style.display = 'block' 
        document.querySelector('#checkbox8txt').innerHTML = mesas[mesaAlterar].pedido[7]
    }
    if(mesas[mesaAlterar].pedido[8]?.length) {
        document.querySelector('#checkbox9div').style.display = 'block' 
        document.querySelector('#checkbox9txt').innerHTML = mesas[mesaAlterar].pedido[8]
    }
    if(mesas[mesaAlterar].pedido[9]?.length) {
        document.querySelector('#checkbox10div').style.display = 'block' 
        document.querySelector('#checkbox10txt').innerHTML = mesas[mesaAlterar].pedido[9]
    }
    if(mesas[mesaAlterar].pedido[10]?.length) {
        document.querySelector('#checkbox11div').style.display = 'block' 
        document.querySelector('#checkbox11txt').innerHTML = mesas[mesaAlterar].pedido[10]
    }
}

function strikeFunc(num){
    if(num == '1'){
        if(document.querySelector('#checkbox1').checked){
            document.querySelector('#checkbox1txt').innerHTML = mesas[mesaAlterar].pedido[0].strike()
        }else{
            document.querySelector('#checkbox1txt').innerHTML = mesas[mesaAlterar].pedido[0]
        }
    }
    if(num == '2'){
        if(document.querySelector('#checkbox2').checked){
            document.querySelector('#checkbox2txt').innerHTML = mesas[mesaAlterar].pedido[1].strike()
        }else{
            document.querySelector('#checkbox2txt').innerHTML = mesas[mesaAlterar].pedido[1]
        }
    }
    if(num == '3'){
        if(document.querySelector('#checkbox3').checked){
            document.querySelector('#checkbox3txt').innerHTML = mesas[mesaAlterar].pedido[2].strike()
        }else{
            document.querySelector('#checkbox3txt').innerHTML = mesas[mesaAlterar].pedido[2]
        }
    }
    if(num == '4'){
        if(document.querySelector('#checkbox4').checked){
            document.querySelector('#checkbox4txt').innerHTML = mesas[mesaAlterar].pedido[3].strike()
        }else{
            document.querySelector('#checkbox4txt').innerHTML = mesas[mesaAlterar].pedido[3]
        }
    }
    if(num == '5'){
        if(document.querySelector('#checkbox5').checked){
            document.querySelector('#checkbox5txt').innerHTML = mesas[mesaAlterar].pedido[4].strike()
        }else{
            document.querySelector('#checkbox5txt').innerHTML = mesas[mesaAlterar].pedido[4]
        }
    }
    if(num == '6'){
        if(document.querySelector('#checkbox6').checked){
            document.querySelector('#checkbox6txt').innerHTML = mesas[mesaAlterar].pedido[5].strike()
        }else{
            document.querySelector('#checkbox6txt').innerHTML = mesas[mesaAlterar].pedido[5]
        }
    }
    if(num == '7'){
        if(document.querySelector('#checkbox7').checked){
            document.querySelector('#checkbox7txt').innerHTML = mesas[mesaAlterar].pedido[6].strike()
        }else{
            document.querySelector('#checkbox7txt').innerHTML = mesas[mesaAlterar].pedido[6]
        }
    }
    if(num == '8'){
        if(document.querySelector('#checkbox8').checked){
            document.querySelector('#checkbox8txt').innerHTML = mesas[mesaAlterar].pedido[7].strike()
        }else{
            document.querySelector('#checkbox8txt').innerHTML = mesas[mesaAlterar].pedido[7]
        }
    }
    if(num == '9'){
        if(document.querySelector('#checkbox9').checked){
            document.querySelector('#checkbox9txt').innerHTML = mesas[mesaAlterar].pedido[8].strike()
        }else{
            document.querySelector('#checkbox9txt').innerHTML = mesas[mesaAlterar].pedido[8]
        }
    }
    if(num == '10'){
        if(document.querySelector('#checkbox10').checked){
            document.querySelector('#checkbox10txt').innerHTML = mesas[mesaAlterar].pedido[9].strike()
        }else{
            document.querySelector('#checkbox10txt').innerHTML = mesas[mesaAlterar].pedido[9]
        }
    }
    if(num == '11'){
        if(document.querySelector('#checkbox11').checked){
            document.querySelector('#checkbox11txt').innerHTML = mesas[mesaAlterar].pedido[10].strike()
        }else{
            document.querySelector('#checkbox11txt').innerHTML = mesas[mesaAlterar].pedido[10]
        }
    }
}

function cancelarItensFunc(){
    document.querySelector('#divCalcelarItem').style.display = 'none'


    if(mesas[mesaAlterar].pedido[0]?.length) {
        document.querySelector('#checkbox1div').style.display = 'none' 
        document.querySelector('#checkbox1txt').innerHTML = ''
    }
    if(mesas[mesaAlterar].pedido[1]?.length) {
        document.querySelector('#checkbox2div').style.display = 'none' 
        document.querySelector('#checkbox2txt').innerHTML = ''
    }
    if(mesas[mesaAlterar].pedido[2]?.length) {
        document.querySelector('#checkbox3div').style.display = 'none' 
        document.querySelector('#checkbox3txt').innerHTML = ''
    }
    if(mesas[mesaAlterar].pedido[3]?.length) {
        document.querySelector('#checkbox4div').style.display = 'none' 
        document.querySelector('#checkbox4txt').innerHTML = ''
    }
    if(mesas[mesaAlterar].pedido[4]?.length) {
        document.querySelector('#checkbox5div').style.display = 'none' 
        document.querySelector('#checkbox5txt').innerHTML = ''
    }
    if(mesas[mesaAlterar].pedido[5]?.length) {
        document.querySelector('#checkbox6div').style.display = 'none' 
        document.querySelector('#checkbox6txt').innerHTML = ''
    }
    if(mesas[mesaAlterar].pedido[6]?.length) {
        document.querySelector('#checkbox7div').style.display = 'none' 
        document.querySelector('#checkbox7txt').innerHTML = ''
    }
    if(mesas[mesaAlterar].pedido[7]?.length) {
        document.querySelector('#checkbox8div').style.display = 'none' 
        document.querySelector('#checkbox8txt').innerHTML = ''
    }
    if(mesas[mesaAlterar].pedido[8]?.length) {
        document.querySelector('#checkbox9div').style.display = 'none' 
        document.querySelector('#checkbox9txt').innerHTML = ''
    }
    if(mesas[mesaAlterar].pedido[9]?.length) {
        document.querySelector('#checkbox10div').style.display = 'none' 
        document.querySelector('#checkbox10txt').innerHTML = ''
    }
    if(mesas[mesaAlterar].pedido[10]?.length) {
        document.querySelector('#checkbox11div').style.display = 'none' 
        document.querySelector('#checkbox11txt').innerHTML = ''
    }
    document.querySelector('#checkbox11').checked? mesas[mesaAlterar].pedido.splice(10, 1) : {}
    document.querySelector('#checkbox10').checked? mesas[mesaAlterar].pedido.splice(9, 1) : {}
    document.querySelector('#checkbox9').checked? mesas[mesaAlterar].pedido.splice(8, 1) : {}
    document.querySelector('#checkbox8').checked? mesas[mesaAlterar].pedido.splice(7, 1) : {}
    document.querySelector('#checkbox7').checked? mesas[mesaAlterar].pedido.splice(6, 1) : {}
    document.querySelector('#checkbox6').checked? mesas[mesaAlterar].pedido.splice(5, 1) : {}
    document.querySelector('#checkbox5').checked? mesas[mesaAlterar].pedido.splice(4, 1) : {}
    document.querySelector('#checkbox4').checked? mesas[mesaAlterar].pedido.splice(3, 1) : {}
    document.querySelector('#checkbox3').checked? mesas[mesaAlterar].pedido.splice(2, 1) : {}
    document.querySelector('#checkbox2').checked? mesas[mesaAlterar].pedido.splice(1, 1) : {}
    document.querySelector('#checkbox1').checked? mesas[mesaAlterar].pedido.shift() : {}

    document.querySelector('#visualizacaoAlterar').innerHTML = 'Mesa: ' + mesas[mesaAlterar].numMesa + '<br>' + mesas[mesaAlterar].pedido.join('') + '<br>OK, item cancelado!!'
}

function somarTotal(valorpedido) {
    let total = 0
    valorpedido.forEach((valorpedido, index) => {
        valorpedido.substring(0, 2) == '01' ? total += 29.90 : {}
        valorpedido.substring(0, 2) == '02' ? total += 6.50 : {}
        valorpedido.substring(0, 2) == '03' ? total += 12 : {}
        valorpedido.substring(0, 2) == '04' ? total += 29.90 : {}
        valorpedido.substring(0, 2) == '05' ? total += 49.90 : {}
        valorpedido.substring(0, 2) == '06' ? total += 9.90 : {}
        valorpedido.substring(0, 2) == '07' ? total += 12.50 : {}
        valorpedido.substring(0, 2) == '08' ? total += 8 : {}
        valorpedido.substring(0, 2) == '09' ? total += 12.90 : {}
        valorpedido.substring(0, 2) == '10' ? total += 6 : {}
    })
    return total
}

function mesaFechamento() {
    let num = document.querySelector('#mesaFechar').value
    mesas.forEach((mesas, index) => {
        if (mesas.numMesa == num) {
            mesaFechar = index
        }
    })
    if (num.length <= 2) {
        var num1 = mesaFechar
        let total = somarTotal(mesas[num1].pedido)
        document.querySelector('#btnMesaFechar').setAttribute('disabled', '')
        document.querySelector('#btnFechar').removeAttribute('disabled', '')
        document.querySelector('#btnLimparFechar').removeAttribute('disabled', '')
        document.querySelector('#visualizacaoFechar').innerHTML = 'Mesa: ' + mesas[mesaFechar].numMesa + '<br>' + mesas[mesaFechar].pedido.join('')
        document.querySelector('#visualizacaoTotal').innerHTML = 'Total: ' + total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }
}

function fechar() {
    alert('Mesa ' + mesas[mesaFechar].numMesa + ' livre!')
    document.querySelector('#btnMesaFechar').removeAttribute('disabled', '')
    document.querySelector('#btnFechar').setAttribute('disabled', '')
    document.querySelector('#mesaFechar').value = ''
    document.querySelector('#visualizacaoFechar').innerHTML = ''
    document.querySelector('#visualizacaoTotal').innerHTML = ''
    mesas[mesaFechar].numMesa == 1 ? document.querySelector('#dropDownItem1').style.display = 'none' : {}
    mesas[mesaFechar].numMesa == 2 ? document.querySelector('#dropDownItem2').style.display = 'none' : {}
    mesas[mesaFechar].numMesa == 3 ? document.querySelector('#dropDownItem3').style.display = 'none' : {}
    mesas[mesaFechar].numMesa == 4 ? document.querySelector('#dropDownItem4').style.display = 'none' : {}
    mesas[mesaFechar].numMesa == 5 ? document.querySelector('#dropDownItem5').style.display = 'none' : {}

    mesas.splice(mesaFechar, 1)
    mesaFechar = 9999999
    somaMesa--
}

function limparFechar() {
    document.querySelector('#btnMesaFechar').removeAttribute('disabled', '')
    document.querySelector('#btnFechar').setAttribute('disabled', '')
    document.querySelector('#visualizacaoFechar').innerHTML = ''
    document.querySelector('#visualizacaoTotal').innerHTML = ''
    document.querySelector('#mesaFechar').value = ''
    mesaFechar = 999999
}

function dropDown() {
    let btn = document.querySelector('#dropDown')
    if (btn.classList.contains('is-active')) {
        btn.classList.remove('is-active')
    } else {
        btn.classList.add('is-active')
    }
}


