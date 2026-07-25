async function loadUsers() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    const container = document.getElementById("users");

    users.forEach(user => {

        container.innerHTML += `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <hr>
        `;

    });

}

loadUsers();