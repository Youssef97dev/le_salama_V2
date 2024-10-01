import Image from "next/image";

const content = [
  {
    imageUrl: "/assets/images/salama_27.jpg",
    title: "Découvrez Le Salama",
    className: "",
    text: `Une escapade culinaire envotante Niché au cœur de la vibrante
        Marrakech, Le Salama vous invite à un voyage sensoriel unique où la
        tradition marocaine se marie avec l'élégance d'un sky bar moderne.
        Ce lieu emblématique, reconnu pour son architecture authentique et
        son décor enchanteur, offre une expérience gastronomique
        inoubliable. Au menu, vous découvrirez des mets marocains
        authentiques préparés avec passion et finesse. Chaque plat raconte
        une histoire, celle des épices choisies avec soin et des produits
        locaux de saison, garantissant des saveurs pleines et des arômes
        envoûtants. Que ce soit pour un déjeuner d'affaires, un dîner
        romantique sous les étoiles, ou un cocktail entre amis au sky bar,
        Le Salama promet des moments mémorables.`,
  },
  {
    imageUrl: "/assets/images/salama_18.jpg",
    title: "Le Skybar",
    className: "flex-row-reverse",
    text: `Le sky bar, véritable oasis urbain, vous offre une vue panoramique sur les toits de la ville ocre. Dans une ambiance conviviale et détendue, vous pourrez savourer des cocktails innovants, conçus par nos mixologues, tout en admirant le coucher de soleil qui embrase le ciel de Marrakech.`,
  },
  {
    imageUrl: "/assets/images/lesalama_7.jpg",
    title: "Une expérience authentique",
    className: "",
    text: `Au cœur de Marrakech, le restaurant Le Salama offre une expérience culinaire authentique. Dès l’entrée, les couleurs chatoyantes et les arômes épicés nous plongent dans l’ambiance chaleureuse de la culture marocaine. Les plats traditionnels, tels que le tajine savoureux et le couscous parfumé, sont préparés avec soin, mettant en valeur des ingrédients frais et locaux. Les serveurs accueillants vous guident à travers le menu, et la musique locale crée une atmosphère envoûtante. Une soirée au Salama, c’est bien plus qu’un repas : c’est un voyage sensoriel au cœur du Maroc.`,
  },
];

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-14 py-2 px-3 lg:px-10 lg:py-16  xl:px-72">
      {content.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between items-center gap-10 w-full ${item.className}`}
        >
          <div className="w-full">
            <Image
              src={item.imageUrl}
              alt="le salama 2"
              width={400}
              height={400}
              className="object-cover w-full h-full ml-auto"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <span className="text-3xl font-medium text-primary ">
              {item.title}
            </span>
            <p className="text-gray-700">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
