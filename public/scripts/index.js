const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .close a")


buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
    document.getElementById("search").focus()

})

close.addEventListener("click", () => {
    modal.classList.add("hide")
    document.getElementById("search").value = ""
})