function joinRP() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const character = document.getElementById("character").value;
    const message = document.getElementById("message");

    if (!name || !age || !character) {
        message.textContent = "Please fill out all the fields.";
        return;
    }

    message.textContent =
        `Welcome, ${name}! You chose ${character}. 🚓`;

}