//document.addEventListener("DOMContentLoaded", function () {

//********************************STOCKAGE***********************************************

    
    const button = document.getElementById('submit');
    console.log(button);


//********************************FONCTION***********************************************
    const change = (event) => {
        // const name = prompt('Votre prémon ?')
        // alert(`Merci ${name} pour votre partage !`);
        button.textContent = ' Merci !';
        button.style.backgroundColor = '#17a2b8';
        event.preventDefault();
        
    }


    function getNameInput () {
        const nameInput = document.getElementById('defaultContactFormName').value;
         alert(`Merci ${nameInput} pour votre partage !`);
    }

    const refresh = () => {
         setTimeout(function() {document.location.reload(true)}, 900); 

    }

//********************************APPEL FONCTION***********************************************
    button.addEventListener('click', change);
    button.addEventListener('click', getNameInput);
    button.addEventListener('click', refresh);






