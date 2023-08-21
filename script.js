const signInForm = document.getElementById('signin-form');

signInForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = signInForm.username.value;
    const password = signInForm.password.value;
    
    // You can add authentication logic here
    // For now, let's just log the entered values
    console.log('Username:', username);
    console.log('Password:', password);
});
