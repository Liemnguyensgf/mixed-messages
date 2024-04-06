let messages = document.getElementById('messages');
let author = document.getElementById('author-name');
let button = document.getElementById('changeMessages')


const displayMessage = () => {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
        messages.textContent = `${data['content']}`
        author.textContent = `Author: ${data['author']}`
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
        messages.textContent = "Sorry, couldn't fetch a new message"
    })
}

button.addEventListener('click',displayMessage)