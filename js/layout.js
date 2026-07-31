document.addEventListener('DOMContentLoaded', async () => {

    const header = document.getElementById("header");
    if (header) {
        const response = await fetch("components/header.html");
        header.innerHTML = await response.text();
    }

    const footer = document.getElementById("footer");
    if (footer) {
        const response = await fetch("components/footer.html");
        footer.innerHTML = await response.text();
    }
})