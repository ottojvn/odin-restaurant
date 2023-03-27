import Remy from "./remy.png";
import Ratatouille from "./ratatouille.webp";

const home = () => {
  let main = document.querySelector("main");

  if (!main) {
    main = document.createElement("main");
    document.querySelector("#content").appendChild(main);
  }

  main.innerHTML = "";

  const infoSection = document.createElement("section");
  infoSection.id = "info";
  main.appendChild(infoSection);

  const infoHeader = document.createElement("h2");
  infoHeader.textContent = "Sobre o restaurante";
  infoSection.appendChild(infoHeader);

  const restaurantInfo = new Array(3);
  for (let i = 0; i < restaurantInfo.length; i++) {
    restaurantInfo[i] = document.createElement("p");
    restaurantInfo[i].classList.add("restaurant-info");
    infoSection.appendChild(restaurantInfo[i]);
  }

  restaurantInfo[0].textContent =
    "Bem-vindo ao restaurante do Gusteau, um local incrível que oferece a culinária francesa mais autêntica e deliciosa que você pode imaginar. Localizado no coração de Paris, este restaurante é um verdadeiro tesouro para os amantes da comida de alta qualidade e da experiência gastronômica excepcional.";

  restaurantInfo[1].textContent =
    "Com uma atmosfera elegante e aconchegante, o restaurante do Gusteau oferece uma experiência de jantar requintada, onde cada prato é um verdadeiro deleite para os sentidos. Desde o primeiro curso até a sobremesa, você será levado em uma viagem culinária que irá satisfazer seu paladar e sua imaginação. O menu é cuidadosamente elaborado para atender às expectativas dos paladares mais exigentes, utilizando os ingredientes mais frescos e sazonais, combinados com as técnicas de cozimento mais avançadas.";

  restaurantInfo[2].textContent =
    "O restaurante do Gusteau é um lugar perfeito para qualquer ocasião, seja uma refeição romântica a dois, um jantar de negócios ou uma celebração especial com amigos e familiares. O serviço impecável e atencioso irá garantir que sua experiência gastronômica seja inesquecível. Então, venha e desfrute de uma noite incrível de comida deliciosa, atmosfera sofisticada e serviço excepcional no restaurante do Gusteau.";

  const chefSection = document.createElement("section");
  chefSection.id = "chef";
  main.appendChild(chefSection);

  const chefHeader = document.createElement("h2");
  chefHeader.textContent = "O chef";
  chefSection.appendChild(chefHeader);

  const remyFigure = document.createElement("figure");
  remyFigure.id = "remy";
  chefSection.appendChild(remyFigure);

  const remyImg = document.createElement("img");
  remyImg.src = Remy;
  remyImg.alt =
    "Uma foto de um ratinho Remy do filme Ratatouille segurando uma colher de madeira";
  remyImg.title = "O Chef Remy";
  remyFigure.appendChild(remyImg);

  const remyCaption = document.createElement("figcaption");
  remyCaption.textContent =
    "Remy é um ratinho inteligente e audacioso, conhecido por seu talento culinário. Ele é apaixonado por ingredientes e sabores, e sempre sonhou em um dia se tornar um grande chef de cozinha. Apesar de ter nascido em um ambiente hostil para sua espécie, Remy sempre acreditou em suas habilidades e lutou para superar as adversidades. Com sua inteligência e determinação, ele conseguiu transformar sua paixão em realidade e se tornou uma referência na arte da culinária, encantando a todos com seus pratos deliciosos e criativos.";
  remyFigure.appendChild(remyCaption);

  const ratatouilleSection = document.createElement("section");
  ratatouilleSection.id = "prato-da-casa";
  main.appendChild(ratatouilleSection);

  const ratatouilleHeader = document.createElement("h2");
  ratatouilleHeader.textContent = "O Ratatouille";
  ratatouilleSection.appendChild(ratatouilleHeader);

  const ratatouilleFigure = document.createElement("figure");
  ratatouilleFigure.id = "ratatouille";
  ratatouilleHeader.appendChild(ratatouilleFigure);

  const ratatouilleImg = document.createElement("img");
  ratatouilleImg.src = Ratatouille;
  ratatouilleImg.alt =
    "Uma foto do prato ratatouille, feito com legumes num formato similar a um pequeno bolo";
  ratatouilleImg.title = "O Ratatouille";
  ratatouilleFigure.appendChild(ratatouilleImg);

  const ratatouilleCaption = document.createElement("figcaption");
  ratatouilleFigure.appendChild(ratatouilleCaption);
  const captionParagraphs = new Array(2);
  for (let i = 0; i < captionParagraphs.length; i++) {
    captionParagraphs[i] = document.createElement("p");
    ratatouilleCaption.appendChild(captionParagraphs[i]);
  }
  captionParagraphs[0].textContent =
    "Ratatouille é um prato francês tradicional, preparado com legumes cozidos em um molho de tomate. Os legumes mais comuns utilizados na receita são berinjela, abobrinha, tomate, pimentão e cebola. Os legumes são cortados em fatias finas e dispostos em camadas em uma panela, onde são cozidos lentamente com o molho de tomate. O prato é servido geralmente acompanhado de arroz ou pão.";
  captionParagraphs[1].textContent =
    "A ratatouille é uma receita simples, porém muito saborosa e nutritiva. É uma opção vegetariana saudável e pode ser uma excelente escolha para quem busca uma alimentação equilibrada. Além disso, a combinação de sabores dos legumes com o molho de tomate torna a ratatouille um prato muito versátil, que pode ser adaptado para diferentes ocasiões e paladares.";
};

export default home;
