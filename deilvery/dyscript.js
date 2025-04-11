

const basePrice = 199;  
const fastDeliveryCharge = 100;  



const username = localStorage.getItem('username');
const email = localStorage.getItem('email');

if (username) {
    const datalist = document.getElementById('usernameList');
    
    const option = document.createElement('option');
    option.value = username;  
    
    datalist.appendChild(option);

}
if (email) {
    const datalist = document.getElementById('emaillist');
    
    const option = document.createElement('option');
    option.value = email;  
    
    datalist.appendChild(option);

}



function togglePaymentOptions() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const upiDetails = document.getElementById('upiDetails');
    upiDetails.style.display = (paymentMethod === 'upi') ? 'block' : 'none';
}

function updatePriceAndTime() {
    const quantity = parseInt(document.getElementById('quantity').value) || 0;
    const fastDelivery = document.getElementById('fastDelivery').checked;
    
    let price = quantity * basePrice;
    if (fastDelivery) {
        price += fastDeliveryCharge;
    }
    document.getElementById('price').innerText = price;

    if (quantity > 0) {
        const deliveryDateElement = document.getElementById('deliveryDate');
        const currentDate = new Date();

        let deliveryDays = fastDelivery ? 2 : 5;
        currentDate.setDate(currentDate.getDate() + deliveryDays);

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString(undefined, options);
        deliveryDateElement.innerText = formattedDate;
    }
}



function submitOrder() {
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const email = document.getElementById('email').value.trim();
    const paymentMethod = document.getElementById('paymentMethod').value;
    const quantity = document.getElementById('quantity').value;

    let valid = true;

    // Clear previous error messages
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('addressError').style.display = 'none';
    document.getElementById('phoneError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';

    // Name validation
    if (!name) {
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }

    // Address validation
    if (!address) {
        document.getElementById('addressError').style.display = 'block';
        valid = false;
    }

    // Phone number validation (10 digits and not starting with 0)
    const phoneRegex = /^[1-9]\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    // If the form is valid, redirect to the order confirmation page
    if (valid) {
        window.location.href = '../order/order.html';
    }
}



function checkLoginStatus() {
    

    const textchanger = document.getElementById('textchanger');
  
    if (password) {
      textchanger.textContent = 'Logout';
    } else {
      textchanger.textContent = 'Login';
    }
  
    textchanger.onclick = function() {
        window.location.href = '../index.html'; 
    };
  }
  
  checkLoginStatus();






