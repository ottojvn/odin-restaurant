const contact = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = "Entre em contato";
  main.appendChild(h2);

  const p = document.createElement("p");
  p.textContent =
    "Preencha o formulário abaixo para entrar em contato conosco:";
  main.appendChild(p);

  const form = document.createElement("form");
  main.appendChild(form);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Seu nome";
  form.appendChild(nameInput);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Seu e-mail";
  form.appendChild(emailInput);

  const messageInput = document.createElement("textarea");
  messageInput.placeholder = "Sua mensagem";
  form.appendChild(messageInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Enviar";
  form.appendChild(submitButton);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    console.log(`Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`);

    form.reset();
  });
};

export default contact;
