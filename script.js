const signInForm = document.getElementById('signin-form');

signInForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = signInForm.username.value;
    const password = signInForm.password.value;
    
    // Check for default username and password
    if (username === 'Admin' && password === '0000') {
        // Redirect to the new page with the "Hello World" message
        window.location.href = 'calculator/hello.html';
    } else {
        console.log('Invalid username or password');
        // You can display an error message to the user here
    }
});
