const editor = document.getElementById("editor");
const key = "editor";
const innerText = localStorage.getItem("length");

if (innerText) {
    for (let i = 0; i < Number(innerText); i++) {
     if (i === 0) editor.value += localStorage.getItem(key+i);
     else editor.value += "\n" + localStorage.getItem(key+i);
    }
}

window.addEventListener('beforeunload', (event) => {
    const arr = editor.value.split("\n");
    localStorage.setItem("length", arr.length);
    for (let i=0; i < arr.length; i++) {
        localStorage.setItem(key+i, arr[i]);
    }
});