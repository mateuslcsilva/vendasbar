var div1 = document.querySelector('#div1')
var div2 = document.querySelector('#div2')
var div3 = document.querySelector('#div3')
var div4 = document.querySelector('#div4')
var dropDownDiv = document.querySelector('#dropDownDiv')
var strikeNum = 0
var mesa
var mesaAcrescentar
var mesaAlterar
var mesaFechar
var dropDownItem = []

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
        let p = document.createElement('p')
        p.setAttribute('class', 'dropdown-item')
        p.setAttribute('onclick', 'mesaAlterarPedido(this)')
        p.setAttribute('name', mesa)
        p.innerHTML = mesa
        document.querySelector('#dropDownDiv').appendChild(p)
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
        alert('Selecione mesa')
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

function mesaAlterarPedido(element) {
    let num = element.getAttribute('name')
    mesas.forEach((mesas, index) => {
        if (mesas.numMesa == num) {
            mesaAlterar = index
        }
    })
    document.querySelector('#btnAlterarNumMesa').removeAttribute('disabled', '')
    document.querySelector('#btnCancelarPedido').removeAttribute('disabled', '')
    document.querySelector('#btnCancelarComanda').removeAttribute('disabled', '')
    document.querySelector('#visualizacaoAlterar').innerHTML = 'Mesa: ' + mesas[mesaAlterar].numMesa + '<br>' + mesas[mesaAlterar].pedido.join('')
    if (document.querySelector('#divCalcelarItem').children) {
        var remover = []
        remover = document.querySelectorAll('.wrap')
        for (var i = 0; i < remover.length; i++) {
            remover[i].remove()
        }
    }
}

function alterarNumMesa() {
    document.querySelector('#visualizacaoAlterar').innerHTML = 'Mesa: ' + mesas[mesaAlterar].numMesa + '<br>' + mesas[mesaAlterar].pedido.join('')
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
        document.querySelector('#dropDownDiv').children[mesaAlterar].innerHTML = novoNumMesa
        document.querySelector('#dropDownDiv').children[mesaAlterar].setAttribute('name', novoNumMesa)
        mesas[mesaAlterar].numMesa = novoNumMesa
        document.querySelector('#visualizacaoAlterar').innerHTML = 'Mesa: ' + mesas[mesaAlterar].numMesa + '<br>' + mesas[mesaAlterar].pedido.join('') + '<br>OK, número da mesa alterado!!'
        document.querySelector('#divAlterarNumMesa').style.display = 'none'

        document.querySelector('#novoNumMesa').value = ''
        mesaAlterar = 999999
    } else {
        alert('Mesa já cadastrada em outra comanda!')
    }
}

function cancelarComanda() {

    var con = confirm('Tem certeza que deseja cancelar a comanda? Todas as informações serão perdidas!!')
    if (con == true) {

        document.querySelector('#dropDownDiv').children[mesaAlterar].remove()
        mesas.splice(mesaAlterar, 1)
        somaMesa--

        document.querySelector('#visualizacaoAlterar').innerHTML = ''
    }
}

function cancelarPedido() {
    let button = document.querySelector('#btnCancelarItem')
    button.remove()
    document.querySelector('#divCalcelarItem').style.display = 'block'

    for (var i = 0; i < mesas[mesaAlterar].pedido.length; i++) {
        let divWrap = document.createElement('div')
        divWrap.setAttribute('class', 'wrap')

        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('onclick', 'strikeFunc(this)')

        let label = document.createElement('p')
        label.setAttribute('class', 'label')
        label.setAttribute('data-num', 'label')
        label.dataset.dataNum = i
        label.setAttribute('onclick', 'strikeFunc(this)')
        label.innerHTML = mesas[mesaAlterar].pedido[i]

        divWrap.append(checkbox)
        divWrap.append(label)
        document.querySelector('#divCalcelarItem').append(divWrap)
    }


    document.querySelector('#divCalcelarItem').append(button)
    document.querySelector('#btnCancelarPedido').setAttribute('disabled', '')
}

function strikeFunc(element) {
    var strike = element.parentElement
    var textStrike = strike.children[1].innerText
    if (strike.children[0].checked) {
        strike.children[1].innerHTML = strike.children[1].innerHTML.strike()
    } else {
        strike.children[1].innerHTML = textStrike
    }
}

function cancelarItensFunc() {
    document.querySelector('#divCalcelarItem').style.display = 'none'
    for (var i = 0; i < mesas[mesaAlterar].pedido.length; i++) {
        document.querySelector('#divCalcelarItem').children[i].children[0].checked ? mesas[mesaAlterar].pedido.splice(i, 1) : {}
    }
    document.querySelector('#visualizacaoAlterar').innerHTML = 'Mesa: ' + mesas[mesaAlterar].numMesa + '<br>' + mesas[mesaAlterar].pedido.join('') + '<br>OK, item cancelado!!'
    document.querySelector('#btnCancelarPedido').removeAttribute('disabled', '')
    if (document.querySelector('#divCalcelarItem').children) {
        var remover = []
        remover = document.querySelectorAll('.wrap')
        for (var i = 0; i < remover.length; i++) {
            remover[i].remove()
        }
    }
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
    document.querySelector('#dropDownDiv').children[mesaFechar].remove()

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


