const modal = document.getElementById("subscribe-modal");
const close = document.querySelector(".modal__close_times");
const key = "modal-key";

if (!localStorage.getItem(key) && localStorage.getItem(key) != "true") {
    modal.classList.add("modal_active");
}

close.onclick = () => {
    modal.classList.remove("modal_active");
    localStorage.setItem(key, "true");
}