const myForm = document.querySelector("form");

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let data = new FormData(myForm);
    data = Object.fromEntries(data);

    // const name = myForm.querySelector("input[name='name']").value;
    // const phone = myForm.querySelector("input[name='phone']").value;
    // const email = myForm.querySelector("input[name='email']").value;
    // const profession = myForm.querySelector("input[name='profession']").value;
    // const employment = myForm.querySelector("select[name='employment']").value;

    // console.log(name, phone, email, profession, employment);
    // console.log(data);

    myForm.querySelector("input[name='name']").value = "";
    myForm.querySelector("input[name='surname']").value = "";
    myForm.querySelector("input[name='phone']").value = "";
    myForm.querySelector("input[name='email']").value = "";
    myForm.querySelector("input[name='profession']").value = "";
    myForm.querySelector("select[name='employment']").value = "";

    data = JSON.stringify(data);
});
