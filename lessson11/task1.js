// Exercise 1: Synchronous vs Asynchronous

console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

setTimeout(() => console.log("D"), 100);

console.log("E");

// Exercise 2: Callback Pattern

function loadUser(userId, callback) {
    setTimeout(() => {
        const user = {
            id: userId,
            name: "John",
            age: 24
        };

        callback(user);
    }, 1500);
}

loadUser(1, function(user) {
    console.log("User Loaded:", user);
});