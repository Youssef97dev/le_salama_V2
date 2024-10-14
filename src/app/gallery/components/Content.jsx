import Image from "next/image";

const images = [
  "/assets/images/menu-gallery/menu-gallery-19.jpg",
  "/assets/images/menu-gallery/menu-gallery-20.jpg",
  "/assets/images/gallery/salama1.jpg",
  "/assets/images/gallery/salama2.jpg",
  "/assets/images/gallery/salama3.jpg",
  "/assets/images/gallery/salama4.jpg",
  "/assets/images/gallery/salama5.jpg",
  "/assets/images/gallery/salama6.jpg",
  "/assets/images/gallery/salama7.jpg",
  "/assets/images/menu-gallery/menu-gallery-12.jpg",
  "/assets/images/menu-gallery/menu-gallery-23.jpg",
  "/assets/images/menu-gallery/menu-gallery-13.jpg",
  "/assets/images/menu-gallery/menu-gallery-14.jpg",
  "/assets/images/menu-gallery/menu-gallery-15.jpg",
  "/assets/images/menu-gallery/menu-gallery-16.jpg",
  "/assets/images/menu-gallery/menu-gallery-17.jpg",
  "/assets/images/gallery/salama8.jpg",
  "/assets/images/gallery/salama9.jpg",
  "/assets/images/gallery/salama10.jpg",
  "/assets/images/gallery/salama11.jpg",
  "/assets/images/menu-gallery/menu-gallery-6.jpg",
  "/assets/images/menu-gallery/menu-gallery-7.jpg",
  "/assets/images/gallery/salama12.jpg",
  "/assets/images/gallery/salama13.jpg",
  "/assets/images/gallery/salama14.jpg",
  "/assets/images/gallery/salama15.jpg",
  "/assets/images/gallery/salama16.jpg",
  "/assets/images/gallery/salama17.jpg",
  "/assets/images/gallery/salama18.jpg",
  "/assets/images/gallery/salama19.jpg",
  "/assets/images/menu-gallery/menu-gallery-24.jpg",
  "/assets/images/menu-gallery/menu-gallery-1.jpg",
  "/assets/images/menu-gallery/menu-gallery-2.jpg",
  "/assets/images/menu-gallery/menu-gallery-3.jpg",
  "/assets/images/gallery/salama20.jpg",
  "/assets/images/gallery/salama21.jpg",
  "/assets/images/gallery/salama22.jpg",
  "/assets/images/gallery/salama23.jpg",
  "/assets/images/gallery/salama24.jpg",
  "/assets/images/menu-gallery/menu-gallery-8.jpg",
  "/assets/images/menu-gallery/menu-gallery-18.jpg",
  "/assets/images/gallery/salama25.jpg",
  "/assets/images/gallery/salama26.jpg",
  "/assets/images/gallery/salama27.jpg",
  "/assets/images/menu-gallery/menu-gallery-21.jpg",
  "/assets/images/menu-gallery/menu-gallery-22.jpg",
  "/assets/images/menu-gallery/menu-gallery-9.jpg",
  "/assets/images/menu-gallery/menu-gallery-10.jpg",
  "/assets/images/menu-gallery/menu-gallery-11.jpg",
  "/assets/images/gallery/salama28.jpg",
  "/assets/images/gallery/salama29.jpg",
  "/assets/images/gallery/salama30.jpg",
  "/assets/images/menu-gallery/menu-gallery-4.jpg",
  "/assets/images/menu-gallery/menu-gallery-5.jpg",
  // Add paths to your images here
];

const Content = () => {
  return (
    <div className="container mx-auto py-5 px-4">
      <div className="masonry">
        {images.map((src, index) => (
          <div
            key={index}
            className="masonry-item relative shadow-lg hover:scale-105 transition-all ease-linear overflow-hidden"
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

export default Content;
