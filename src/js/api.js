let users = [];

// Function for get data from server

const getData = () => {
    fetch('https://demo.sibers.com/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            localStorage.setItem("users", JSON.stringify(data));
            users = JSON.parse(localStorage.getItem("users") || "[]");
            for (let i = 0; i< users.length; i++) {
                localStorage.setItem(`${i}`, JSON.stringify(users[i]));
            }
        });
}

// call getData() to create localStorage if its empty

if (localStorage) {

}
else {
    getData();
}