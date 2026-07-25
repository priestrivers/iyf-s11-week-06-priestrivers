function getUserData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: "John" });
        }, 1000);
    });
}

function getUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Post One" },
                { id: 2, title: "Post Two" }
            ]);
        }, 1000);
    });
}

function getPostComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: "Great Post!" },
                { id: 2, text: "Very Helpful" }
            ]);
        }, 1000);
    });
}

getUserData(1)
    .then(user => {
        console.log(user);
        return getUserPosts(user.id);
    })
    .then(posts => {
        console.log(posts);
        return getPostComments(posts[0].id);
    })
    .then(comments => {
        console.log(comments);
    })
    .catch(error => {
        console.log(error);
    });