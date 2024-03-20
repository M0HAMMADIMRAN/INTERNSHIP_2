function validateForm() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const errorMessage = document.getElementById('error-message');

    if (password.value !== confirmPassword.value) {
        password.classList.add('invalid');
        confirmPassword.classList.add('invalid');
        errorMessage.innerText = 'Passwords do not match';
        errorMessage.style.display = 'block';
        setTimeout(() => {
            password.classList.remove('invalid');
            confirmPassword.classList.remove('invalid');
            errorMessage.style.display = 'none';
        }, 3000);
        return false;
    }

    return true;
}
