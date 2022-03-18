const maxActiveWidth = 900;

const indexLayout = document.querySelector("#index");
const resultsLayout = document.querySelector("#results");

function isOnActiveWidth() {
    return window.matchMedia(`(max-width: ${maxActiveWidth}px)`).matches;
}

document.addEventListener("click", function(ev) {
    if (!isOnActiveWidth) {
        return;
    }

    if (ev.target.matches("#submit")) {
        ev.preventDefault();
        indexLayout.classList.add("hidden");
        resultsLayout.classList.remove("hidden");
    } else if (ev.target.matches("#back")) {
        ev.preventDefault();
        resultsLayout.classList.add("hidden");
        indexLayout.classList.remove("hidden");
    }
});