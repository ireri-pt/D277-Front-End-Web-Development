document.addEventListener('DOMContentLoaded', function () {
    var email1 = document.getElementById('email');
    var email2 = document.getElementById('emailConfirm');

    function checkEmail() {
        function isEmpty(x) {
            return x.value === '';
        }

        var message = document.getElementById('emailMessage');

        if (email1.value == email2.value) {
            message.style.display='inline';
            message.innerHTML = 'Email matches!';

            if (isEmpty(email1) && isEmpty(email2)) {
                message.style.display='none';
            }
        }
            
        else {
            message.style.display='inline';
            message.innerHTML = 'Email fields do not match, please enter the correct email address in both fields.';
        }

    }

    email1.addEventListener('change', checkEmail);
    email2.addEventListener('change', checkEmail);
} );