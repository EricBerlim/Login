const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login__submit');

    if (submitButton) { /*Se o botão existe...*/
        submitButton.addEventListener('click', (event) => { /*Event recebe função Callback*/
            event.preventDefault();

            fetch('https://reqgres.in/api/login', { /*Fetch faz solicitação de rede*/
                method: 'POST', /*POST para proteger os dados*/
                headers: { /*Tipo de arquivo que será enviado*/
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value
                })
            }).then((response) => { /*Passa uma função Callback após sucesso do Fetch*/
                return response.json();
            }).then((data) => {
                console.log(data);
            })
        })
    }
}

window.onload = init;