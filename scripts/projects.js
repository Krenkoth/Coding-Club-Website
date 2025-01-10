window.onload = async function() {
    const data = await retrieveData();
    const json = document.querySelector("#json");
    const body = document.querySelector("#projects");
    for (let i = 0; i < data.length; i++) {
        var obj = data[i];
        // console.log(JSON.stringify(obj));
        const container = document.createElement("div");
        const title = document.createElement("h3");
        title.textContent = obj.title;
        const summary = document.createElement("p");
        summary.textContent = obj.summary;
        container.appendChild(title);
        container.appendChild(summary);
        body.appendChild(container);

    }
}

async function retrieveData() {
    const apiurl = "https://nodeclubapi.uw.r.appspot.com/projects/";
    try {
        const response = await fetch(apiurl);
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error.message)
    }
}

