document.addEventListener("DOMContentLoaded", function() {
    // Método POST
    function adicionar(e) {
        e.preventDefault();

        const data = new FormData(e.target);

        const nome = data.get('name');
        const email = data.get('email');
        const username = data.get('user');
        const dataNascimento = data.get('date');

        console.log("enviando dados...");

        fetch("http://localhost:3000/nomes", {
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                email: email,
                username: username,
                dataNascimento: dataNascimento
            }),

            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        })
            .then((res) => res.json())
            .then((jsonData) => {
                console.log(jsonData);
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.error('Erro ao enviar os dados', error)
            });
    }

    document.getElementById("form").addEventListener("submit", adicionar);

    // Método GET
    fetch("http://localhost:3000/nomes")
        .then(res => res.json())
        .then(dados => {
            var users = dados.map(use => "<div><p> Nome: " + use.nome + "<br>Email: " + use.email + "<br>Username: " + use.username + "</p><a onclick=apagar('" + use.id + "')>Apagar</a></div>").join('');
            document.getElementById("contas-list").innerHTML = users;
        })
        .catch(erro => console.error(erro));
});



/*
//Método DELETE
function apagar(id) {
    console.log("Apagado" + id)
    fetch("http://localhost:3000/nomes/" + id, {
        "method": "DELETE"
    }).
        then(res => res.json()).
        then(dados => console.log(dados))
}
*/