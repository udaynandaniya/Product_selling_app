document.addEventListener('DOMContentLoaded', () => {
    const profileDetails = document.getElementById('profile-details');
    const profileForm = document.getElementById('profileForm');
    const editButton = document.getElementById('editButton');
    const logoutButton = document.getElementById('logoutButton');
    const cancelButton = document.getElementById('cancelButton');
    const backButton = document.getElementById('backButton'); // New Back button

    // Load stored profile data
    const username = localStorage.getItem('username') || '';
    const email = localStorage.getItem('email') || '';
    const phone = localStorage.getItem('phone') || '';
    const address = localStorage.getItem('address') || '';
    const gender = localStorage.getItem('gender') || '';
    const dob = localStorage.getItem('dob') || '';

    // Check if profile is incomplete
    const isProfileIncomplete = !phone || !address || !gender || !dob;

    const showProfileDetails = () => {
        profileDetails.innerHTML = `
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone || 'Not Provided'}</p>
            <p><strong>Address:</strong> ${address || 'Not Provided'}</p>
            <p><strong>Gender:</strong> ${gender || 'Not Provided'}</p>
            <p><strong>Date of Birth:</strong> ${dob || 'Not Provided'}</p>
        `;
        profileDetails.style.display = 'block';
        profileForm.style.display = 'none';
        editButton.style.display = 'inline-block';
        backButton.style.display = 'inline-block'; // Show the Back button
    };

    const showEditForm = () => {
        document.getElementById('username').value = username;
        document.getElementById('email').value = email;
        document.getElementById('phone').value = phone;
        document.getElementById('address').value = address;
        document.getElementById('gender').value = gender;
        document.getElementById('dob').value = dob;

        profileDetails.style.display = 'none';
        profileForm.style.display = 'block';
        editButton.style.display = 'none';
        backButton.style.display = 'none'; // Hide the Back button while editing
    };

    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const updatedUsername = document.getElementById('username').value.trim();
        const updatedEmail = document.getElementById('email').value.trim();
        const updatedPhone = document.getElementById('phone').value.trim();
        const updatedAddress = document.getElementById('address').value.trim();
        const updatedGender = document.getElementById('gender').value;
        const updatedDob = document.getElementById('dob').value;

        if (updatedUsername && updatedEmail && updatedPhone && updatedAddress && updatedGender && updatedDob) {
            localStorage.setItem('username', updatedUsername);
            localStorage.setItem('email', updatedEmail);
            localStorage.setItem('phone', updatedPhone);
            localStorage.setItem('address', updatedAddress);
            localStorage.setItem('gender', updatedGender);
            localStorage.setItem('dob', updatedDob);

            alert('Profile updated successfully!');
            showProfileDetails(); // Show the profile after saving
        } else {
            alert('Please fill out all fields.');
        }
    });

    editButton.addEventListener('click', showEditForm);

    cancelButton.addEventListener('click', showProfileDetails);

    logoutButton.addEventListener('click', () => {
        localStorage.clear();
        alert('You have been logged out.');
        window.location.href = 'login.html';
    });

    // "Back to Home" button functionality
    backButton.addEventListener('click', () => {
        window.location.href = '../home/home.html'; // Redirect to home page
    });

    if (isProfileIncomplete) {
        showEditForm();
    } else {
        showProfileDetails();
    }
    logoutButton.addEventListener('click', () => {
        localStorage.clear(); // Clear all stored data (user data)
        alert('You have been logged out.');
        window.location.href = '../home/home.html'; // Redirect to the home page after logout
    });
    
});
