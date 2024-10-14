import Image from "next/image";

const images = [
  "/assets/images/menu-gallery/menu-gallery-24.jpg",
  "/assets/images/menu-gallery/menu-gallery-1.jpg",
  "/assets/images/menu-gallery/menu-gallery-2.jpg",
  "/assets/images/menu-gallery/menu-gallery-3.jpg",
  "/assets/images/menu-gallery/menu-gallery-4.jpg",
  "/assets/images/menu-gallery/menu-gallery-5.jpg",
  "/assets/images/menu-gallery/menu-gallery-6.jpg",
  "/assets/images/menu-gallery/menu-gallery-7.jpg",
  "/assets/images/menu-gallery/menu-gallery-8.jpg",
  "/assets/images/menu-gallery/menu-gallery-21.jpg",
  "/assets/images/menu-gallery/menu-gallery-22.jpg",
  "/assets/images/menu-gallery/menu-gallery-9.jpg",
  "/assets/images/menu-gallery/menu-gallery-10.jpg",
  "/assets/images/menu-gallery/menu-gallery-11.jpg",
  "/assets/images/menu-gallery/menu-gallery-12.jpg",
  "/assets/images/menu-gallery/menu-gallery-23.jpg",
  "/assets/images/menu-gallery/menu-gallery-13.jpg",
  "/assets/images/menu-gallery/menu-gallery-14.jpg",
  "/assets/images/menu-gallery/menu-gallery-15.jpg",
  "/assets/images/menu-gallery/menu-gallery-16.jpg",
  "/assets/images/menu-gallery/menu-gallery-17.jpg",
  "/assets/images/menu-gallery/menu-gallery-18.jpg",
  "/assets/images/menu-gallery/menu-gallery-19.jpg",
  "/assets/images/menu-gallery/menu-gallery-20.jpg",
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
