
function addToCart() {
  const password = localStorage.getItem('password');

  if (password) {
      window.location.href = '../deilvery/delivery.html';
  } else {
      window.location.href = '../index.html'; 
  }
}

function goToDelivery() {
  const password = localStorage.getItem('password');

  if (password) {
    window.location.href = '../deilvery/delivery.html';
} else {
    window.location.href = '../index.html'; 
}
}

  function checkLoginStatus() {
    const password = localStorage.getItem('password');
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