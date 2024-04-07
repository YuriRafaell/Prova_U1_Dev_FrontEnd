document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/submit', {
        method: 'POST',
        body: formData
    })

    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = data.message;
    })

    .catch(erorr => console.error('Error:', error));
});