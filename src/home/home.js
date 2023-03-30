const home = () => {
  let main = document.querySelector("main");

  if (!main) {
    main = document.createElement("main");
    document.querySelector("#content").appendChild(main);
  }

  main.innerHTML = "";

  const sections = [
    {
      id: "info",
      header: "Sobre o restaurante",
      content: [
        "Bem-vindo ao restaurante do Gusteau, um local incrível que oferece a culinária francesa mais autêntica e deliciosa que você pode imaginar. Localizado no coração de Paris, este restaurante é um verdadeiro tesouro para os amantes da comida de alta qualidade e da experiência gastronômica excepcional.",
        "Com uma atmosfera elegante e aconchegante, o restaurante do Gusteau oferece uma experiência de jantar requintada, onde cada prato é um verdadeiro deleite para os sentidos. Desde o primeiro curso até a sobremesa, você será levado em uma viagem culinária que irá satisfazer seu paladar e sua imaginação. O menu é cuidadosamente elaborado para atender às expectativas dos paladares mais exigentes, utilizando os ingredientes mais frescos e sazonais, combinados com as técnicas de cozimento mais avançadas.",
        "O restaurante do Gusteau é um lugar perfeito para qualquer ocasião, seja uma refeição romântica a dois, um jantar de negócios ou uma celebração especial com amigos e familiares. O serviço impecável e atencioso irá garantir que sua experiência gastronômica seja inesquecível. Então, venha e desfrute de uma noite incrível de comida deliciosa, atmosfera sofisticada e serviço excepcional no restaurante do Gusteau.",
      ],
    },
    {
      id: "address",
      header: "Localização",
      content: [
        "Rue Auguste Gusteau",
        "A localização do Restaurante Gusteau em Paris é simplesmente encantadora. Localizado na Rue Auguste Gusteau, uma rua charmosa com belos edifícios históricos e arquitetura clássica, o restaurante é um verdadeiro ponto de destaque na região.",
        "Paris, conhecida como a cidade das luzes, é um dos destinos turísticos mais populares do mundo, e o Restaurante Gusteau certamente é um dos motivos pelos quais muitas pessoas visitam a cidade. Com uma culinária de excelência e um ambiente acolhedor e elegante, o Restaurante Gusteau oferece aos seus clientes uma experiência gastronômica inesquecível em um dos lugares mais charmosos e belos de Paris.",
      ],
    },
  ];

  sections.forEach((s) => {
    const section = document.createElement("section");
    section.id = s.id;
    main.appendChild(section);

    const header = document.createElement("h2");
    header.textContent = s.header;
    section.appendChild(header);

    const content = document.createElement("div");
    content.id = `${s.id}-content`;
    section.appendChild(content);

    s.content.forEach((p) => {
      const pNode = document.createElement("p");
      pNode.textContent = p;
      content.appendChild(pNode);
    });
  });
};

export default home;
