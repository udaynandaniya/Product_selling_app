


function login(event) {
 event.preventDefault();

    const email = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;

    if (email && password) {
        document.body.classList.add('fade-out');




       localStorage.setItem('email', email);


       localStorage.setItem('password', password);


        setTimeout(() => {
            window.location.href = "./home/home.html";
        }, 500);
    } else {
        alert("Please enter email and password.");
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

        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = "./home/home.html";
        }, 500);
    } else {
        alert("Please enter username, email, and password.");
    }
}


function sendResetLink(event) {
    event.preventDefault();

    const email = document.getElementById('resetEmail').value;

    if (email) {
        alert(`A reset link has been sent to ${email}`);
    } else {
        alert("Please enter your email address.");
    }
}

const handleSignup = () => {

    localStorage.clear();

    alert('Signup successful! Please complete your profile.');
    window.location.href = './profile/profile.html';
};
