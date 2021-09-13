const editor = document.getElementById("editor");
const key = "editor_value";
const text = localStorage.getItem(key);

if (text) {
  editor.value = text;
}

window.addEventListener('beforeunload', (event) => {
    localStorage.setItem(key, editor.value);
});