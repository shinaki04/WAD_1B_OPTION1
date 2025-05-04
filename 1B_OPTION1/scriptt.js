function registerUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value; 
    let city = document.getElementById("city").value;

    if (name === "" || email === "" || password === "" || city === "") {
        alert("Please fill in all fields.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email, city });
    localStorage.setItem("users", JSON.stringify(users));

    alert("User registered successfully!");
    document.getElementById("registrationForm").reset();
}

function displayUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let tableBody = document.getElementById("usersTableBody");

    if (!tableBody) return; 

    tableBody.innerHTML = "";

    users.forEach((user, index) => {
        let row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.city}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Delete</button></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers(); 
}

function clearData() {
    localStorage.removeItem("users");
    alert("User data cleared!");
    displayUsers(); 
}


window.onload = function () {
    displayUsers();
};
