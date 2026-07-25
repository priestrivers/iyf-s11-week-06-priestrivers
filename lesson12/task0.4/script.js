let allUsers = [];

async function loadUsers() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    allUsers = await response.json();

    displayUsers(allUsers);

}

function displayUsers(users) {

    const container = document.getElementById("users");

    container.innerHTML = "";

    users.forEach(user => {

        container.innerHTML += `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <hr>
        `;

    });

}

document.getElementById("search").addEventListener("input", function () {

    const search = this.value.toLowerCase();

    const filtered = allUsers.filter(user =>
        user.name.toLowerCase().includes(search)
    );

    displayUsers(filtered);

});

loadUsers();