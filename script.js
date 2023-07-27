 var nameError = document.getElementById('name-Error');
    var emailError = document.getElementById('email-error');
    var submitError = document.getElementById('submit-error'); // Add this line

    function validateName() {
        var name = document.getElementById('your-name').value;
        if (name.length === 0) {
            nameError.innerHTML = 'Name required';
            return false;
        }
        if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
            nameError.innerHTML = 'Enter your full name';
            return false;
        }
        nameError.innerHTML = ''; // Clear any previous error messages
        return true;
    }

    function validateEmail() {
        var email = document.getElementById('your-email').value;
        if (email.length === 0) {
            emailError.innerHTML = 'Enter valid email';
            return false;
        }
        if (!email.match(/^[a-zA-Z0-9._%+-]+@(gmail\.com|icloud\.com|outlook\.com)$/)) {
            emailError.innerHTML = 'Your email is invalid';
            return false;
        }
        emailError.innerHTML = ''; // Clear any previous error messages
        return true;
    }

    function validateForm() {
        // Clear any previous error messages
        nameError.innerHTML = '';
        emailError.innerHTML = '';
        submitError.innerHTML = '';

        if (!validateName() || !validateEmail()) {
            submitError.innerHTML = 'Enter correct credentials';
            return false;
        }
        return true;
    }