// Javascript for sign in page

const signinsubmit = document.querySelector("#SignInSubmit");
signinsubmit.addEventListener("click", signin);
const signupsubmit = document.querySelector("#SignUpSubmit");
signupsubmit.addEventListener("click", signup);


async function signin() {
    // get email and put it into url
    const email = String(document.querySelector("#SignInEmail").value);
    const apiurl = `https://nodeclubapi.uw.r.appspot.com/user/email?email=${email}`;

    if (validateEmail(email)) {
        try {
            const response = await fetch(apiurl);
            console.log(response.status);
            // check to see if the email exists
            if (!response.ok) {
                if (response.status === 404) {
                    document.querySelector("#errors").textContent = `Email: ${email} not found`;
                } else {
                    throw new Error(`Response status: ${response.status}`);
                }
            }
            const json = await response.json();
            console.log(json[0].username);
            console.log(json[0].email);
            // store user information in sessionStorage, redirect to home page
            sessionStorage.setItem("username", json[0].username);
            sessionStorage.setItem("email", json[0].email);
            window.location.assign("../index.html");

            
        } catch (err) {
            console.error(err.message);
        }
    } else {
        const errors = document.querySelector("#errors");
        errors.textContent = "Not a valid email";
    }
}

async function signup() {
    const username = String(document.querySelector("#username").value);
    const email = String(document.querySelector("#SignUpEmail").value);
    console.log(`Username: ${username}, email: ${email}`)

    if (validateEmail(email)) {
        const apiurl = `https://nodeclubapi.uw.r.appspot.com/user/new`;
        try {
            const response = await fetch(apiurl, {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    username: username,
                })
            });
            console.log(`Status: ${response.status} \n Message: ${response.statusMessage}`);
            if (!response.ok) {
                if (response.status === 400) {
                    const errors = document.querySelector("#errors");
                    errors.textContent = response.statusMessage;
                } else {
                    throw new Error(`Response status: ${response.status}`);
                }
                
            }
            const json = await response.json();
            console.log(json);

        } catch (err) {
            console.error(err.message);
        }
    } else {
        const errors = document.querySelector("#errors");
        errors.textContent = "Not a valid email";
    }

    
}

// uses regex to make sure email format is correct
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}