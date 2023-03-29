
// -----------------------------------------JUEGO NUMEROS ALEATORIOS------------------------------------------------------------
 /*let numeroMaquina = Math.floor(Math.random() * (10 - 1)) +1
 console.log(numeroMaquina)

 let numUser = parseInt(prompt("ingrese un numero del 1 al 10"))

 let vida = 3;

 while(numeroMaquina !== numUser && vida > 1){
     vida--;

     if(numUser < numeroMaquina){
         console.log("es mas alto")
     }else{
         console.log("es mas bajo")
     }

     numUser = parseInt(prompt("vuelve a intentarlo, tus vidas: " + vida))
 }

 if(numeroMaquina===numUser){
     console.log("ganaste")
 }else{
     console.log("perdiste, el numero era " + numeroMaquina)
 }*/
 
// ---------------------------------------------------CARRITO DE COMPRAS V0------------------------------------------------------
  /*const frutas = []
  const fruta = prompt("Agregue una fruta al carrito de compras")

  frutas.push(fruta)

  while(confirm("Desea agregar otra fruta al carrito?")){
      const fruta = prompt("Agregue otra fruta al carrito")
      frutas.push(fruta)
  }
  console.log('Ustede compró: ')
  frutas.forEach((fruta, index) => (
      console.log(`${index + 1}: ${fruta}`)
  ))*/
 
// -------------------------------------------------COLOR PICKER-----------------------------------------------------------------

const color = document.getElementById("inputColor")
const boton = document.getElementById("boton")
const textoHexa = document.getElementById("textoHexa")
const cardColor = document.getElementById("cardColor")

boton.addEventListener("click", () =>{
  cardColor.style.backgroundColor = inputColor.value;
  textoHexa.textContent = inputColor.value;
  navigator.clipboard                                   //COPIA CODIGO HEXADECIMAL EN EL PORTAPAPELES
        .writeText(inputColor.value)
        .then(() => console.log("texto copiado"))
        .catch((e) => console.log(e));
})

//---------------------------------------------------CARRITO V1-------------------------------------------------------------------
/*const car = document.querySelector("#car")
const template = document.querySelector("#template")
const fragment = document.createDocumentFragment()
const btneButtons = document.querySelectorAll(".card .btn")

const objecCar = {}

const addCar = (e) =>{
  console.log(e.target.dataset.fruta)

  const Product ={
    Tittle: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    num: 1,
  }

  if(objecCar.hasOwnProperty(Product.id)){
    Product.num = objecCar[Product.id].num +1
  }

  objecCar[Product.Tittle] = Product
  
  paintcar()
}

const paintcar = (Product) =>{
  car.textContent = ""

  Object.values(objecCar).forEach((item) => {
    const clone = template.content.firstElementChild.cloneNode(true)
    clone.querySelector(".lead").textContent = item.Tittle
    clone.querySelector(".rounded-pill").textContent = item.num
    fragment.appendChild(clone)

  })

  car.appendChild(fragment)
}

btneButtons.forEach((btn) => { 
  btn.addEventListener("click", addCar)
});*/
