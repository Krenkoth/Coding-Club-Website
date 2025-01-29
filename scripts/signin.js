// Javascript for sign in page

const signinsubmit = document.querySelector("#SignInSubmit");
signinsubmit.addEventListener("click", signin);
const signupsubmit = document.querySelector("#SignUpSubmit");
signupsubmit.addEventListener("click", signup);


// get email from sign in field and validate it
// find account with api, then store info and redirect home
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

            console.log(json);
            // store user information in sessionStorage, redirect to home page
            sessionStorage.setItem("username", json.username);
            sessionStorage.setItem("email", json.email);
            window.location.assign("../index.html");

            
        } catch (err) {
            console.error(err.message);
        }
    } else {
        const errors = document.querySelector("#errors");
        errors.textContent = "Not a valid email";
    }
}

// gets username and email from fields
// creates user in the database with the api
// then saves info and redirects to the homepage
async function signup() {
    const username = String(document.querySelector("#username").value);
    const email = String(document.querySelector("#SignUpEmail").value);
    console.log(`Username: ${username}, email: ${email}`)

    if (validateEmail(email)) {
        const apiurl = `https://nodeclubapi.uw.r.appspot.com/user/new`;
        try {
            const response = await fetch(apiurl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
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
            // store user information in sessionStorage, redirect to home page
            const json = await response.json();
            sessionStorage.setItem("username", json.username);
            sessionStorage.setItem("email", json.email);
            window.location.assign("../index.html");

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