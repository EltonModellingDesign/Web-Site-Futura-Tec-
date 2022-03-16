const slide = document.querySelector('#slide')
const text = document.querySelector('#textão')
const point1 = document.querySelector('#p1')
const point2 = document.querySelector('#p2')
const point3 = document.querySelector('#p3')
const nextbutton = document.querySelector('#next')
const pontos = document.querySelector('#pontinhos')



let index = 3

console.log(index)

let pass = setInterval(function (){if (index == 7){index = 3}
else(index +=2)
console.log(index)
pontos.childNodes[index].click()},3000)

function nextbuttonItem (){
    clearInterval(pass)

    if (index == 7){index = 3}
    else(index +=2)
    console.log(index)
    pontos.childNodes[index].click()
          
    }

/*let pass = setInterval(function (){if (point2.style.background == 'yellow') {pontos.childNodes[7].click() }
else if (point3.style.background == 'yellow'){pontos.childNodes[3].click()}
else(pontos.childNodes[5].click())},3000)

function nextbuttonItem (){

    clearInterval(pass)

        if (point2.style.background == 'yellow') {pontos.childNodes[7].click() }
        else if (point3.style.background == 'yellow'){pontos.childNodes[3].click()}
        else(pontos.childNodes[5].click())       
    }*/

    nextbutton.addEventListener('click',nextbuttonItem)


function ponto1(){
    index = 3
    clearInterval(pass)
    text.innerHTML = 'Melhor site de tecnologia do Brasil'
    slide.style.backgroundImage= "url('conteudo/Seções/TNT\ Texture.jpg')"
    point1.style.background = 'yellow'

    point2.style.background = '#FFFCC6'
    point3.style.background = '#FFFCC6'
    console.log('funfou')
}

point1.addEventListener('click',ponto1)

function ponto2(){
    index = 5
    clearInterval(pass)
    text.innerHTML = 'Veja Cursos Profissionalizantes Gratuitos'
    slide.style.background= 'rgb(45, 98, 168)'
    point2.style.background = 'yellow'

    point1.style.background = '#FFFCC6'
    point3.style.background = '#FFFCC6'
    console.log('funfou')
}

point2.addEventListener('click',ponto2)

function ponto3(){
    index = 7
    clearInterval(pass)
    text.innerHTML = 'Conheça eventos especiais de tecnologia'
    slide.style.background= 'black'
    point3.style.background = 'yellow'
    console.log('funfou')

    point2.style.background = '#FFFCC6'
    point1.style.background = '#FFFCC6'
}

point3.addEventListener('click',ponto3)