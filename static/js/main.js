document.addEventListener("DOMContentLoaded", () => {
    getSecrets().then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
        alert(err);
    });
});

async function getSecrets() {
    const response = await fetch("../../config.json");

    if(!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
    }

    return await response.json();
}