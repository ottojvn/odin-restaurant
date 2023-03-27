const home = () => {
  let main = document.querySelector("main");

  if (!main) {
    main = document.createElement("main");
    document.querySelector("#content").appendChild(main);
  }

  main.innerHTML = "";

  const restaurantInfo = new Array(3);
  for (let i = 0; i < restaurantInfo.length; i++) {
    restaurantInfo[i] = document.createElement("p");
    restaurantInfo[i].classList.add("restaurant-info");
    main.appendChild(restaurantInfo[i]);
  }

  restaurantInfo[0].textContent =
    "Bem-vindo ao restaurante do Gusteau, um local incrível que oferece a culinária francesa mais autêntica e deliciosa que você pode imaginar. Localizado no coração de Paris, este restaurante é um verdadeiro tesouro para os amantes da comida de alta qualidade e da experiência gastronômica excepcional.";

  restaurantInfo[1].textContent =
    "Com uma atmosfera elegante e aconchegante, o restaurante do Gusteau oferece uma experiência de jantar requintada, onde cada prato é um verdadeiro deleite para os sentidos. Desde o primeiro curso até a sobremesa, você será levado em uma viagem culinária que irá satisfazer seu paladar e sua imaginação. O menu é cuidadosamente elaborado para atender às expectativas dos paladares mais exigentes, utilizando os ingredientes mais frescos e sazonais, combinados com as técnicas de cozimento mais avançadas.";

  restaurantInfo[2].textContent =
    "O restaurante do Gusteau é um lugar perfeito para qualquer ocasião, seja uma refeição romântica a dois, um jantar de negócios ou uma celebração especial com amigos e familiares. O serviço impecável e atencioso irá garantir que sua experiência gastronômica seja inesquecível. Então, venha e desfrute de uma noite incrível de comida deliciosa, atmosfera sofisticada e serviço excepcional no restaurante do Gusteau.";
};

export default home;
