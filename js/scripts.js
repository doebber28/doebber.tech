fetch('https://www.instagram.com/doebber.tech/?__a=1')
  .then(response => response.json())
  .then(data => {
      let followers = data.graphql.user.edge_followed_by.count;
      console.log("Seguidores:", followers);
  })
  .catch(error => console.error("Erro ao puxar seguidores:", error));