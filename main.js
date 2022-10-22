let dados = {
    nome: "matheus",
    age: "17",
}
axios.post('https://webhook.site/f7b2a0e2-0d29-4d76-bc69-98e11163ee8f', dados)
    
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });