const car = document.querySelector("#car")
const footer = document.querySelector("#footer")
const template = document.querySelector("#template")
const templateFooter = document.querySelector("#templateFooter")
const fragment = document.createDocumentFragment()

document.addEventListener("click", (e)=>{
  // console.log(e.target.dataset["fruta"])

  if(e.target.dataset["fruta"]){
    addCar(e)
  }
  // console.log(e.target.matches(".list-group-item .btn-success"))
  if(e.target.matches(".list-group-item .btn-success")){
    btnIncrease(e)
  }

  // console.log(e.target.matches(".list-group-item .btn-danger"))
  if(e.target.matches(".container .list-group-item .btn-danger")){
    btnDelete(e)
  }
})

let carObject = []

const addCar = (e) =>{
  // console.log(e.target.dataset.fruta)

  const Product ={
    Tittle: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    num: 1,
    price: parseInt(e.target.dataset.price),
  }
  // console.log(Product)

  const index = carObject.findIndex((item)=> item.id === Product.id)

  if(index === -1){
    carObject.push(Product)
  }else {
    carObject[index].num++;
    // carObject[index].price = carObject[index].num * Product.price;
  }
  // console.log(carObject)
  paintcar()
}


const paintcar = () =>{
  car.textContent = ""

  carObject.forEach((item) => {
    const clone = template.content.cloneNode(true)
    clone.querySelector(".text-white .lead").textContent = item.Tittle
    clone.querySelector(".rounded-pill").textContent = item.num
    clone.querySelector("div .price span").textContent = item.price * item.num
    clone.querySelector(".btn-success").dataset.id = item.id
    clone.querySelector(".btn-danger").dataset.id = item.id

    fragment.appendChild(clone)
  })
  car.appendChild(fragment)

  paintFooter()
}
const paintFooter = () =>{
  footer.textContent= ""
  const total = carObject.reduce(
    (acc, current) => acc + current.num * current.price, 0
  )
  const clone = templateFooter.content.cloneNode(true)
  clone.querySelector(".card .lead span").textContent = total
  footer.appendChild(clone)
  if(total === 0){
    footer.textContent= ""
  }
}

const btnIncrease = (e) =>{
  carObject = carObject.map((item) => {
    if(item.id === e.target.dataset.id){
      item.num++
    }
    return item
  })

  paintcar()
}

const btnDelete = (e) =>{
  // console.log("me diste click", e.target.dataset.id);
  carObject = carObject.filter((item) => {
    if (item.id === e.target.dataset.id) {
      if (item.num > 0) {
          item.num--; 
          if (item.num === 0) return;
          return item;
      }
      } else {
      return item;
    } 
  });

  paintcar();
}
