let inp = document.getElementById("inp");

function generatePassword() {
    let alph = "qwertyuiopasdfghjklzxcvbnm";
    let digit = "1234567890";
    let symbols = "~!@#$%^&*()_+";
    let total = alph + digit + symbols;
    // total = "qwertyuiopasdfghjklzxcvbnm1234567890~!@#$%^&*()_+"

    console.log(total[Math.floor(Math.random() * total.length)]);

    let password = "";
    for (let i = 1; i <= inp.value; i++) {
        password += total[Math.floor(Math.random() * total.length)];
    }
    // console.log(password);
    document.getElementById("result").innerHTML = password;
}