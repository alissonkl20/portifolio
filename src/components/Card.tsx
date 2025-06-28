
function Card() {
  const cards = [
    {
      id: 1,
      title: "Experience",
      description: "Crafting an effortless journey with user-first.",
      imageUrl: "https://i.pinimg.com/736x/2b/74/7b/2b747b71b782a8833f2b3ad9b0e37cd1.jpg",
      hoverColor: "group-hover:text-orange-500"
    },
    {
      id: 2,
      title: "Interaction",
      description: "Our platform is designed for simplicity and ease.",
      imageUrl: "https://i.pinimg.com/564x/3c/c2/6c/3cc26c0140c2f0dc70d8aa48416c41dc.jpg",
      hoverColor: "group-hover:text-indigo-400"
    },
    {
      id: 3,
      title: "Design",
      description: "Our design philosophy centers around the user.",
      imageUrl: "https://i.pinimg.com/564x/fa/4f/cf/fa4fcfd2db636f98eb0f2b5aecce0c28.jpg",
      hoverColor: "group-hover:text-cyan-400"
    },

     {
      id: 4,
      title: "huff",
      description: "Our design philosophy centers around the user.",
      imageUrl: "https://www.filhao.com.br/noticia/adicionais/90-62-criando-arte-com-inteligencia-artificial-midjourney-e-outras.png",
      hoverColor: "group-hover:text-cyan-400"
    }
  ];

  return (
    <section className="min-h-screen w-full bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="flex flex-col justify-center items-center min-h-screen py-16">
        <ul className="grid grid-cols- md:grid-cols-4 gap-6 w-full m-auto px-6">
          {cards.map((card) => (
            <li key={card.id}>
              <div className="mx-auto shadow-xl bg-cover bg-center min-h-[28rem] h-full relative border-8 border-black dark:border-neutral-800 transform duration-500 hover:-translate-y-6 group rounded-xl"
                style={{ backgroundImage: `url(${card.imageUrl})` }}
              >
                <div className="bg-black/70 dark:bg-neutral-900/80 relative h-full min-h-[28rem] flex flex-col justify-end group-hover:bg-opacity-60 transition-all duration-300 rounded-xl">
                  <div className="p-8">
                    <h2 className={`text-white dark:text-neutral-100 mt-2 text-xl mb-5 transform translate-y-10 uppercase group-hover:translate-y-0 duration-300 font-bold ${card.hoverColor}`}>
                      {String(card.id).padStart(2, "0")}⏤ {card.title}
                    </h2>
                    <p className="opacity-0 text-white dark:text-neutral-200 text-lg group-hover:opacity-90 transform duration-500">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Card;