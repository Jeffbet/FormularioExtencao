function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var cpf = document.getElementById("cpf").value;
  var phone = document.getElementById("phone").value;
  var pedido = document.getElementById("pedido").value;
  var produto = document.getElementById("produto").value;
  var cor = document.getElementById("cor").value;
  var peça = document.getElementById("peça").value;
  var tipoProduto = document.getElementById("tipoProduto").value;
  var detalhes = document.getElementById("detalhes").value;
  var attachments = document.getElementById("attachments").files;

  // Verifica se todos os campos obrigatórios estão preenchidos
  if (!name || !email || !cpf || !pedido || !produto || !cor || !peça || !tipoProduto || !detalhes) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
  }

  var params = {
      name: name,
      email: email,
      cpf: cpf,
      phone: phone,
      pedido: pedido,
      produto: produto,
      cor: cor,
      peça: peça,
      tipoProduto: tipoProduto,
      detalhes: detalhes,
      attachments: attachments
  };
//aqui estão as apis para envio
  const serviceID = "service_20rl9zg";
  const templateID = "template_4i6r0gs";

  emailjs.send(serviceID, templateID, params)
      .then(res => {
          
          document.getElementById("contactForm").reset();

          console.log(res);
          alert("Formulário enviado com sucesso! Aguarde até 24 horas para uma resposta!");
      })
      .catch(err => console.error("Erro ao enviar e-mail:", err));
}
