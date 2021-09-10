const url = "https://netology-slow-rest.herokuapp.com/poll.php";

let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.onload = () => {
    if (xhr.status === 200) {
       console.log(JSON.parse(xhr.response));
    }
}