var changePasswordButton = document.body.getElementsByClassName('change-password')[0];
var createPassword = document.body.getElementsByClassName('l-create-password')[0];

if (document.addEventListener){
    changePasswordButton.addEventListener('click', displayCreatePassword);
} else if (document.attachEvent){
    changePasswordButton.attachEvent('onclick', displayCreatePassword);
} else {
    changePasswordButton.onclick = displayCreatePassword;
}


function displayCreatePassword(e){
    var profileInfo = document.getElementsByClassName('l-profile-info')[0];
    var target = e.target;

    if(createPassword.classList.contains('is-hidden')){
        createPassword.classList.remove('is-hidden');
        changePasswordButton.parentNode.appendChild(createPassword);
        changePasswordButton.style.display = 'none';
    } else {
        createPassword.classList.add('is-hidden');
    }


    if(typeof e.stopPropagation === 'function'){
        e.stopPropagation();
    }
    if(typeof  e.cancelBubble !== 'undefined'){
        e.cancelBubble = true;
    }

    if(typeof e.preventDefault === 'function'){
        e.preventDefault();
    }
    if(typeof  e.returnValue !== 'undefined') {
        e.returnValue = false;
    }

}
