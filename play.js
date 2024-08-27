let checkBtn = document.querySelector(".check-btn");
let tokenInput = document.querySelector("input.token-box");

checkBtn.addEventListener('click', () => {
    let tokenGerado = localStorage.getItem('token'); // recupera o token do localStorage
    let tokenDigitado = tokenInput.value;
    if (tokenGerado === tokenDigitado) {
        alert("Token correto!");
        window.location.href = 'index.html'; // redireciona para memorize.html
    } else {
        alert("Token incorreto. Tente novamente!");
    }
});
