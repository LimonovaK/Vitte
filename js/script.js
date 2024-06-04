const tg = window.Telegram.WebApp;
const myForm = document.querySelector("form");

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let data = new FormData(myForm);
    data = Object.fromEntries(data);

    myForm.querySelector("input[name='name']").value = "";
    myForm.querySelector("input[name='surname']").value = "";
    myForm.querySelector("input[name='phone']").value = "";
    myForm.querySelector("input[name='email']").value = "";
    myForm.querySelector("input[name='profession']").value = "";
    myForm.querySelector("select[name='employment']").value = "";

    data = JSON.stringify(data);
    tg.sendData(data)
});
