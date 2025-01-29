// Javascript for account page. Adds request to delete account if delete button is pressed.


const button = document.querySelector("#delete");
button.addEventListener("click", deleteAccount);

async function deleteAccount() {

    try {
        const apiurl = "https://nodeclubapi.uw.r.appspot.com/user/delete"
        await fetch(apiurl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: sessionStorage.email,
                username: sessionStorage.username
            })
        });
    } catch (err) {
        console.error(error.message);
    }



    sessionStorage.removeItem("email");
    sessionStorage.removeItem("username");
}