const baseUrl = "https://jsonplaceholder.typicode.com";
const listEl = document.createElement('ul');
const getUsers = async () => {
    const response = await fetch(`${baseUrl}/users`);
    const albums = await response.json();
    return albums;
}

const userList = getUsers().then((value) => {
    value.map((album) => {
        let titleText = "";
        let bodyText = "";    
        const titleEl = document.createElement("li");    
        const bodyEl = document.createElement("p");    
        titleText += album.name;    
        bodyText += album.email;    
        titleEl.innerHTML = titleText;    
        bodyEl.innerHTML = bodyText;    
        titleEl.appendChild(bodyEl);    
        listEl.appendChild(titleEl);
    })

    document.getElementById("demo").appendChild(listEl)
})
