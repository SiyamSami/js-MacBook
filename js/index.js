
// select button
function updateCost(item, number) {
    let cost = document.getElementById(item + '-cost');
    cost.innerText = number;
}

// update total function

function TotalCost() {
    // get elements
    const best = document.getElementById('best-price');
    const memory = document.getElementById('memory-cost');
    const storage = document.getElementById('storage-cost');
    const delivery = document.getElementById('delivery-cost');
    const total = document.getElementById('total-price');
    const footerTotal = document.getElementById('footer-total');

    // set to number from string
    const bestPrice = Number(best.innerText);
    const memoryPrice = Number(memory.innerText);
    const storagePrice = Number(storage.innerText);
    const deliveryPrice = Number(delivery.innerText);
    total.innerText = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    footerTotal.innerText = total.innerText;
}

// memory section

document.getElementById('memory-8gb').addEventListener('click', function () {
    // let memoryCost = document.getElementById('memory-cost');
    // memoryCost.innerText = 0;
    updateCost('memory', 0);
    TotalCost();
})

document.getElementById('memory-16gb').addEventListener('click', function () {
    // let memoryCost = document.getElementById('memory-cost');
    // memoryCost.innerText = 180;
    updateCost('memory', 180);
    TotalCost();
})

// storage section

document.getElementById('256GB-SSD').addEventListener('click', function () {
    // let storageCost = document.getElementById('storage-cost');
    // storageCost.innerText = 0;
    updateCost('storage', 0);
    TotalCost();
})

document.getElementById('512GB-SSD').addEventListener('click', function () {
    // let storageCost = document.getElementById('storage-cost');
    // storageCost.innerText = 100;
    updateCost('storage', 100);
    TotalCost();
})

document.getElementById('1TB SSD').addEventListener('click', function () {
    // let storageCost = document.getElementById('storage-cost');
    // storageCost.innerText = 180;
    updateCost('storage', 180);
    TotalCost();
})

// delivery section

document.getElementById('aug-25').addEventListener('click', function () {
    // let deliveryCost = document.getElementById('delivery-cost');
    // deliveryCost.innerText = 0
    updateCost('delivery', 0);
    TotalCost();
})

document.getElementById('aug-21').addEventListener('click', function () {
    // let deliveryCost = document.getElementById('delivery-cost');
    // deliveryCost.innerText = 20
    updateCost('delivery', 20)
    TotalCost();
})


// promo code Selection

document.getElementById('apply').addEventListener('click', function () {

    const promoCode = document.getElementById('promo-code').value;
    console.log(promoCode);
    if (promoCode == "stevekaku") {
        const footerTotal = document.getElementById('footer-total');
        let footerPrice = Number(footerTotal.innerText);
        footerPrice = footerPrice - (footerPrice * 0.2);
        footerTotal.innerText = footerPrice;

        document.getElementById('promo-code').value = '';
    }

    else {

        document.getElementById('promo-code').value = '';
    }
})