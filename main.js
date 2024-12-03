$(document).ready(function() {
  const endpoint = "https://api.github.com/users/vo-n";
  const name = document.querySelector('#name');
  const username = document.querySelector('#username');
  const avatar = document.querySelector('#avatar');
  const repositories = document.querySelector('#repositories');
  const followers = document.querySelector('#followers');
  const following = document.querySelector('#following');
  const link = document.querySelector('#link');

  fetch(endpoint)
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            name.innerText = json.name;
            username.innerText = `@${json.login}`;
            avatar.src = json.avatar_url;
            following.innerText = json.following;
            followers.innerText = json.followers;
            repositories.innerText = json.public_repos;
            link.href = json.html_url;
        })
        .catch(function(erro) {
            alert("Um erro inesperado aconteceu no carregamento, tente novamente mais tarde.");
  })
})