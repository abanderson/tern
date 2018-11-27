let controls = document.getElementsByClassName("log-control");
let logs = document.getElementsByClassName("log");

for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener("click", () => {
        console.log(`Control ${i} clicked`);

        if (logs[i].classList.contains("log-open")) {
            logs[i].classList.replace("log-open", "log-close");
        } else if (logs[i].classList.contains("log-close")) {
            logs[i].classList.replace("log-close", "log-open");
        } else {
            logs[i].classList.add("log-open");
        }
    });
}
