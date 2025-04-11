const priceBox = document.getElementById('price');
const quantitySelect = document.getElementById('quantity');

const defaultPrice = 199;

function submitOrder() {
    const quantity = parseInt(quantitySelect.value);

    if (!isNaN(quantity)) {
        const totalPrice = defaultPrice * quantity;

        priceBox.innerText = totalPrice;
    } else {
        alert("Please select a quantity!");
    }
}
