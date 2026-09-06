async function addUser() {

    const name = document.getElementById("name").value;

    if (!name) {
        alert("Please enter a name");
        return;
    }

    const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name
        })
    });

    const data = await response.json();

    document.getElementById("result").textContent = data.message;

    document.getElementById("name").value = "";
}


async function getUsers() {

    const response = await fetch("http://localhost:5000/api/users");

    const users = await response.json();

    const userList = document.getElementById("userList");

    userList.innerHTML = "";

    users.forEach(user => {

        const li = document.createElement("li");

        li.textContent = user.id + " - " + user.name;

        userList.appendChild(li);
    });
}