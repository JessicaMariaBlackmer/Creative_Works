function openBook(bookId) {
    document.getElementById(bookId).style.display = "block";
}

function closeBook(bookId) {
    document.getElementById(bookId).style.display = "none";
}

//Portfolio About Me Page//

document.querySelector(".dollcover").addEventListener("click", function() {
    this.classList.toggle("hidden");
});

