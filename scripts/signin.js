window.onload = function () {
    const signinsubmit = document.querySelector("#SignInSubmit");
    signinsubmit.addEventListener("click", signin);
    const signupsubmit = document.querySelector("#SignUpSubmit");
    signupsubmit.addEventListener("click", signup);
}

async function signin() {
    const email = String(document.querySelector("#SignInEmail").value);
    console.log(email)
    const apiurl = "https://nodeclubapi.uw.r.appspot.com/user/email/";
    try {
        const response = await fetch(apiurl, {
            body: JSON.stringify({email: email})
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json()
        console.log(json)
    } catch (err) {
        console.error(err.message);
    }
}

async function signup() {
    console.log("signup");
}