import Image from "next/image";

const images = [
  "/assets/images/plats/plat1.png",
  "/assets/images/plats/plat2.jpg",
  "/assets/images/plats/plat3.jpg",
  "/assets/images/plats/plat4.jpg",
  "/assets/images/plats/plat5.jpg",
  "/assets/images/plats/plat6.jpg",
  "/assets/images/plats/plat7.jpg",
  "/assets/images/plats/plat8.jpg",
  "/assets/images/plats/plat9.jpg",
  "/assets/images/plats/plat10.jpg",
  "/assets/images/plats/plat11.jpg",
  "/assets/images/plats/plat12.jpg",
  "/assets/images/plats/plat13.jpg",
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
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
