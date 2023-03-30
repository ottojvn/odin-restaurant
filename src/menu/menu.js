import Linguine from "./img/linguine.jpg";
import Risoto from "./img/risoto.jpg";
import Steak from "./img/steak.jpg";
import Ratatouille from "./img/ratatouille.jpg";

const menu = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const foods = [
    {
      name: "Ratatouille",
      id: "ratatouille",
      description:
        "Nosso prato da casa é a famosa ratatouille, criada pelo nosso talentoso chef Remy. Essa iguaria francesa é feita com uma variedade de legumes frescos, cuidadosamente selecionados e preparados para garantir o sabor e a textura perfeitos. Cada camada de vegetais é disposta com maestria, criando uma apresentação visualmente deslumbrante. O prato é finalizado com uma deliciosa mistura de ervas e temperos, que realçam ainda mais os sabores naturais dos ingredientes. A ratatouille do chef Remy é um prato que não pode ser encontrado em nenhum outro lugar, e é um verdadeiro deleite para os amantes da culinária francesa.",
      image: Ratatouille,
    },
    {
      name: "Linguine com frutos do mar",
      id: "linguine-frutos-do-mar",
      description:
        "Um prato de massa feito com linguine fresco, servido com molho de tomate caseiro, camarão, lula e mariscos. Os frutos do mar são salteados com alho e azeite, e depois adicionados ao molho de tomate, criando uma combinação de sabores deliciosa. O prato é finalizado com uma pitada de pimenta do reino e ervas frescas.",
      image: Linguine,
    },
    {
      name: "Risoto de cogumelos",
      id: "risoto-camaroes",
      description:
        "Um prato vegetariano com um arroz cremoso feito com cogumelos shiitake, champignon e funghi secchi. Os cogumelos são refogados com cebola, alho e vinho branco, e depois adicionados ao arroz, que é cozido lentamente em caldo de legumes até ficar al dente. O risoto é finalizado com manteiga e queijo parmesão ralado.",
      image: Risoto,
    },
    {
      name: "Steak au Poivre",
      id: "steak-au-poivre",
      description:
        "Um prato clássico da culinária francesa, feito com filé mignon grelhado e coberto com molho de pimenta. O molho é feito com creme de leite, conhaque, caldo de carne e pimenta verde em grãos. O filé mignon é temperado com sal e pimenta do reino, e grelhado até ficar no ponto desejado. O prato é servido com batatas sauté e legumes frescos.",
      image: Steak,
    },
  ];

  const menuSection = document.createElement("section");
  menuSection.id = "menu";
  main.appendChild(menuSection);

  const menuHeader = document.createElement("h2");
  menuHeader.textContent = "Nossos pratos";
  menuSection.appendChild(menuHeader);

  const menuIntro = document.createElement("p");
  menuIntro.textContent =
    "Nosso menu é composto por pratos elaborados com ingredientes frescos e de alta qualidade, e cada prato é preparado com a atenção aos detalhes que só os verdadeiros amantes da culinária conseguem proporcionar. Estamos ansiosos para recebê-lo em nosso restaurante e compartilhar a nossa paixão pela boa comida e pelo serviço de qualidade.";
  menuSection.appendChild(menuIntro);

  const menuDiv = document.createElement("div");
  menuDiv.id = "menu-itens";
  menuSection.appendChild(menuDiv);

  foods.forEach((food) => {
    const div = document.createElement("div");
    div.classList.add("food-div");
    div.id = food.id;
    menuSection.appendChild(div);

    const foodName = document.createElement("h3");
    foodName.textContent = food.name;
    div.appendChild(foodName);

    const foodDesc = document.createElement("p");
    foodDesc.textContent = food.description;
    div.appendChild(foodDesc);

    const foodImage = document.createElement("img");
    foodImage.src = food.image;
    div.appendChild(foodImage);
  });
};

export default menu;
