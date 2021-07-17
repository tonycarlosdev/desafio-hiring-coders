const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData);

  let content = document.getElementById('content');

  let carregando = `<p>carregando...</p>`

  let pronto = `Parabéns! ${nome}, PROMOÇÃO chegando em breve!`

  content.innerHTML = carregando
  

  setTimeout(() => {
    content.innerHTML = pronto;
    alert('Cadastrado com sucesso!')
  },1000)
  
})