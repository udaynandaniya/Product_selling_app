
function checkLoginStatus() {
    const password = localStorage.getItem('password');
    const textchanger = document.getElementById('textchanger');

    if (password) {
        textchanger.innerHTML = 'Logout';
        textchanger.onclick = function() {

            localStorage.removeItem('username');
            localStorage.removeItem('password');
            localStorage.removeItem('email');
            window.location.href = '../index.html'; 
        };
    } else {
        textchanger.innerHTML = 'Login';
        textchanger.onclick = function() {
            window.location.href = '../index.html'; 
        };
    }
}

checkLoginStatus();





window.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block');

    const username = localStorage.getItem('username');
    

    if(username){
      const demolement = document.getElementById('demo');
      document.getElementById("demo").innerHTML = `Welcome ${username}`;
    }
    else
    {
      document.getElementById("demo").innerHTML = `Welcome`;

    }
  
    blocks.forEach((block, index) => {
      setTimeout(() => {
        block.classList.add('show');
      }, index * 200); 
    });

    window.addEventListener('beforeunload', () => {
        blocks.forEach((block, index) => {
            setTimeout(() => {
                block.classList.remove('show');
            }, index * 200); 
        });
    });
});


function goToDelivery() {
  const password = localStorage.getItem('password');

  if  (password !== null && password.trim() !== '') {
      window.location.href = '../deilvery/delivery.html';
  } else {
      window.location.href = '../index.html';
  }
}

function signup(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Redirect to profile page to complete details
        window.location.href = "../profile/profile.html";
    } else {
        alert("Please enter username, email, and password.");
    }
}
