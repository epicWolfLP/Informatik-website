document.getElementById("inputField").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let input = this.value.trim().toLowerCase();

        if (input === "party") {
            document.body.classList.add("party-mode");
        }

        this.value = "";
    }
});