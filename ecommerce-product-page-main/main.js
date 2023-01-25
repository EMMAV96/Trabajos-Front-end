 //Cambio de Cnatidad de Articulos Ingresado por el Usuario.
 
 let minusBtn = document.querySelector('.input__minus');

 let plusBtn = document.querySelector('.input__plus');
 
let userInput = document.querySelector('.input__number');

 let userInputNumber = 0;

 plusBtn.addEventListener('click' , ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
 })

 minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    userInput.value = userInputNumber;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    console.log(userInputNumber);
 })

 //Agregar el Total de Productos al Carrito cuando se presiona el boton ADD TO CART.

 const  addToCardBtn = document.querySelector('.details__button');

 let cartNotification = document.querySelector('.header__cart--notification');

 let lastValue = parseInt(cartNotification.innerText);

 addToCardBtn.addEventListener('click', ()=>{

    
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue; 
    cartNotification.getElementsByClassName.display = 'block';
    drawProductIconModal();
    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`;
    
 })

 //Mostrar el detalle con el carrito

 const cartIconBtn = document.querySelector('.header__cart'); 

 const cartModal = document.querySelector('.card-modal'); 

let priceModal = document.querySelector('.card-modal__price');

const productContainer = document.querySelector('.card-modal__checkout-container')

 cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle ('show');

  if (lastValue == 0){
      drawProductIconModal();
  }  
    

    //priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`;
 })

//Borrar el contenido del carrito.

const deleteProductBtn = document.querySelector('.card-modal__delete')


deleteProductBtn.addEventListener('click', ()=>{
   productContainer.innerHTML= '<p class="cart-empy">No hay productos seleccionados</p>';
   lastValue = 0;
   cartNotification.innerText = lastValue;
})

// funciones 

function drawProductIconModal(){
   productContainer.innerHTML = `
    <div class="card-modal__checkout-container">
      <div class="card-modal__details-container">
         <img class="card-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
         <div>
         <p class="card-modal__product">Autumn Limited Edition...</p>
         <p class="card-modal__price">$125 x3 <span>$375.00</span></p>
         </div>
         <img class="card-modal__delete" src="./images/icon-delete.svg" alt="delete">
      </div>
      <button class="card-modal__checkount">checkout</button>
  </div>`
}