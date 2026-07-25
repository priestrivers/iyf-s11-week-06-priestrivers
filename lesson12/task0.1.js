// Fetch a single user

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Async/Await version

async function getUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUser(1);