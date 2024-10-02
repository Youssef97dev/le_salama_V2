import Image from "next/image";

const images = [
  "/assets/images/gallery/salama1.jpg",
  "/assets/images/gallery/salama2.jpg",
  "/assets/images/gallery/salama3.jpg",
  "/assets/images/gallery/salama4.jpg",
  "/assets/images/gallery/salama5.jpg",
  "/assets/images/gallery/salama6.jpg",
  "/assets/images/gallery/salama7.jpg",
  "/assets/images/gallery/salama8.jpg",
  "/assets/images/gallery/salama9.jpg",
  "/assets/images/gallery/salama10.jpg",
  "/assets/images/gallery/salama11.jpg",
  "/assets/images/gallery/salama12.jpg",
  "/assets/images/gallery/salama13.jpg",
  "/assets/images/gallery/salama14.jpg",
  "/assets/images/gallery/salama15.jpg",
  "/assets/images/gallery/salama16.jpg",
  "/assets/images/gallery/salama17.jpg",
  "/assets/images/gallery/salama18.jpg",
  "/assets/images/gallery/salama19.jpg",
  "/assets/images/gallery/salama20.jpg",
  "/assets/images/gallery/salama21.jpg",
  "/assets/images/gallery/salama22.jpg",
  "/assets/images/gallery/salama23.jpg",
  "/assets/images/gallery/salama24.jpg",
  "/assets/images/gallery/salama25.jpg",
  "/assets/images/gallery/salama26.jpg",
  "/assets/images/gallery/salama27.jpg",
  "/assets/images/gallery/salama28.jpg",
  "/assets/images/gallery/salama29.jpg",
  "/assets/images/gallery/salama30.jpg",
  "/assets/images/gallery/salama31.jpg",
  "/assets/images/gallery/salama32.jpg",
  "/assets/images/gallery/salama33.jpg",
  "/assets/images/gallery/salama34.jpg",
  "/assets/images/gallery/salama35.jpg",
  "/assets/images/gallery/salama36.jpg",
  "/assets/images/gallery/salama37.jpg",
  "/assets/images/gallery/salama38.jpg",
  "/assets/images/gallery/salama39.jpg",
  "/assets/images/gallery/salama40.jpg",
  // Add paths to your images here
];

const Content = () => {
  return (
    <div className="container mx-auto py-5 px-4">
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

export default Content;
