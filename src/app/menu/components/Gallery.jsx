import Image from "next/image";

const images = [
  "/assets/images/plats/plat1.jpg",
  "/assets/images/plats/plat13.jpg",
  "/assets/images/plats/plat9.jpg",
  "/assets/images/plats/plat10.jpg",
  "/assets/images/plats/plat11.jpg",
  "/assets/images/salama_23.jpg",
  "/assets/images/plats/plat16.jpg",
  "/assets/images/plats/plat6.jpg",
  "/assets/images/salama_22.jpg",

  "/assets/images/plats/plat8.jpg",
  "/assets/images/plats/plat4.jpg",
  "/assets/images/plats/plat5.jpg",
  "/assets/images/plats/plat12.jpg",
  "/assets/images/salama_24.jpg",
  "/assets/images/salama_25.jpg",
  "/assets/images/salama_26.jpg",
  "/assets/images/plats/plat14.jpg",
  "/assets/images/salama_15.jpg",
  "/assets/images/lesalama_10.jpg",
  "/assets/images/lesalama_9.jpg",
  "/assets/images/lesalama_7.jpg",
  "/assets/images/plats/plat15.jpg",

  // Add paths to your images here
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="masonry">
        {images.map((src, index) => (
          <div
            key={index}
            className="masonry-item relative shadow-lg hover:shadow-xl hover:scale-105 transition-all ease-linear overflow-hidden"
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              layout="responsive"
              width={300}
              height={300}
              className="rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
