import Remy from "./img/remy.jpg";
import Colette from "./img/colette.jpg";
import Lalo from "./img/lalo.webp";
import Horst from "./img/horst.png";
import Larousse from "./img/larousse.webp";
import Pompidou from "./img/pompidou.jpg";

const chefs = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const chefs = [
    {
      name: "Remy",
      desc: "Remy é um rato muito inteligente e habilidoso, que tem um talento inato para a culinária. Apesar de ser um rato, ele é um verdadeiro chef, que usa sua inteligência e astúcia para criar pratos deliciosos e criativos. Remy é um exemplo de como a paixão e a determinação podem superar qualquer obstáculo, e sua história inspira muitas pessoas a seguir seus sonhos.",
      img: Remy,
    },
    {
      name: "Colette",
      desc: "Colette é uma chef talentosa e dedicada, que trabalha incansavelmente para se aperfeiçoar na arte da culinária francesa. Ela é muito rigorosa com sua equipe, mas isso se deve ao seu compromisso com a excelência. Além de ser uma excelente chef, Colette é uma ótima mentora para os jovens cozinheiros, e sempre incentiva sua equipe a buscar o melhor de si mesmos.",
      img: Colette,
    },
    {
      name: "Lalo",
      desc: "Lalo é um chef simpático e alegre, que sempre tem um sorriso no rosto e um bom conselho para dar. Ele é conhecido por sua culinária autêntica e saborosa, que reflete sua personalidade calorosa e acolhedora. Lalo é um mestre em fazer pratos simples, porém deliciosos, e é muito querido por seus clientes e colegas de trabalho.",
      img: Lalo,
    },
    {
      name: "Horst",
      desc: "Horst é um chef renomado, que já trabalhou nos melhores restaurantes de Paris e ganhou diversos prêmios por sua culinária sofisticada e elegante.Ele é um perfeccionista exigente, que não aceita menos do que a perfeição em seus pratos.Horst é conhecido por sua personalidade intensa e competitiva, mas seu talento inegável o torna um chef admirado por muitos.",
      img: Horst,
    },
    {
      name: "Larousse",
      desc: "Larousse é um chef experiente, que já trabalhou em diversas cozinhas ao redor do mundo. Ele é um mestre em diversas culinárias, desde a culinária clássica francesa até a culinária asiática contemporânea. Larousse é uma pessoa tranquila e reflexiva, que valoriza a criatividade e a inovação em sua culinária.",
      img: Larousse,
    },
    {
      name: "Pompidou",
      desc: "Pompidou é um chef que se dedica a fazer pratos tradicionais franceses, com um toque pessoal. Ele é um grande apreciador da culinária francesa clássica, e usa sua criatividade para transformar pratos simples em obras de arte gastronômicas. Pompidou é um chef amável e generoso, que valoriza a tradição e o sabor em sua culinária.",
      img: Pompidou,
    },
  ];

  const section = document.createElement("section");
  section.id = "chefs";
  main.appendChild(section);

  const header = document.createElement("h2");
  header.textContent = "Nossos chefs";
  section.appendChild(header);

  const intro = document.createElement("p");
  intro.textContent = "Cada chef traz consigo uma história única e um conjunto de habilidades culinárias distintas que contribuem para a excelência do Gusteau. Deixe-se levar pela riqueza de sabores e aromas que esses talentosos chefs trazem para a mesa.";
  section.appendChild(intro);

  chefs.forEach((c) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.id = c.name.toLowerCase();
    section.appendChild(div);

    const chefImg = document.createElement("img");
    chefImg.src = c.img;
    chefImg.width = "500px";
    chefImg.height = "500px";
    div.appendChild(chefImg);

    const textDiv = document.createElement("div");
    div.appendChild(textDiv);

    const chefName = document.createElement("h3");
    chefName.textContent = c.name;
    textDiv.appendChild(chefName);

    const chefDesc = document.createElement("p");
    chefDesc.textContent = c.desc;
    textDiv.appendChild(chefDesc);

  });
};

export default chefs;
