// update on the html
const bestPrice =document.getElementById('best-price')
const extraMemory = document.getElementById('extra-memory');
const extraStorage =document.getElementById('extra-storage')
const deliveryCharge = document.getElementById('delivery-charge');


const totalPrice = document.getElementById('total-price')
const promoInput = document.getElementById('promo-input')
const applyButton = document.getElementById('apply-button')
const grandTotal = document.getElementById('grand-total');


function updateTotal(){
    // update on the html
    const productPrice = parseInt(bestPrice.innerText);
    const extraMemoryCost = parseInt(extraMemory.innerText);
    const extraStorageCost = parseInt(extraStorage.innerText);
    const deliveryChargeTotal = parseInt(deliveryCharge.innerText);
  // update total
    const totalValue = productPrice + extraMemoryCost + extraStorageCost + deliveryChargeTotal;
    totalPrice.innerText = totalValue;
    // calculate grand total
    grandTotal.innerText = totalValue;
}

// promo code use
function promoCodeUse(percentage){
    const promoInputValue = promoInput.value;
    const errorShow =document.getElementById('error-show');
    if(promoInputValue == 'stevekaku'){
        const discountPrice = totalPrice.innerText / 100 * percentage;
        grandTotal.innerText = totalPrice.innerText - discountPrice;
        errorShow.style.display='none';
    }
    // error throw
    else {
        errorShow.style.display='block';
    }
}

// handle memory upgrade events
document.getElementById('memory-8gb').addEventListener('click',function(){
    extraMemory.innerText ='0';
    updateTotal();
});
document.getElementById('memory-16gb').addEventListener('click',function(){
    extraMemory.innerText ='180';
    updateTotal();
});


//handle storage upgrade events
document.getElementById('storage-256gb').addEventListener('click',function(){
    extraStorage.innerText ='0';
    updateTotal();
});
document.getElementById('storage-512gb').addEventListener('click',function(){
    extraStorage.innerText ='100';
    updateTotal();
});
document.getElementById('storage-1tb').addEventListener('click',function(){
    extraStorage.innerText ='180';
    updateTotal();
});


//handle delivery cost events
document.getElementById('free-delivery').addEventListener('click',function(){
    deliveryCharge.innerText = '0';
    updateTotal();
});
document.getElementById('fast-delivery').addEventListener('click',function(){
    deliveryCharge.innerText = '20';
    updateTotal();
});


//handle promo code use events
document.getElementById('apply-button').addEventListener('click',function(){
    promoCodeUse(20);
    promoInput.value='';
});

