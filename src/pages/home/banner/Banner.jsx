import image1 from "../../../assets/images/banner/1.jpg";
import image2 from "../../../assets/images/banner/2.jpg";
import image3 from "../../../assets/images/banner/3.jpg";
import image4 from "../../../assets/images/banner/4.jpg";
import image5 from "../../../assets/images/banner/5.jpg";
import image6 from "../../../assets/images/banner/6.jpg";
import BannerOverly from "../../../components/BannerOverly";

const Banner = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="carousel w-full h-[600px]">
      {images.map((image, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          {/* Image */}
          <img src={image} className="w-full rounded-xl object-cover" />

          {/* Banner Overlay */}
          <BannerOverly />

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            {/* Previous Button */}
            <a
              href={`#slide${
                ((index - 1 + images.length) % images.length) + 1
              }`}
              className="btn btn-circle mr-5"
              aria-label="Previous slide"
            >
              ❮
            </a>

            {/* Next Button */}
            <a
              href={`#slide${((index + 1) % images.length) + 1}`}
              className="btn btn-circle"
              aria-label="Next slide"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;

// import image1 from "../../../assets/images/banner/1.jpg";
// import image2 from "../../../assets/images/banner/2.jpg";
// import image3 from "../../../assets/images/banner/3.jpg";
// import image4 from "../../../assets/images/banner/4.jpg";
// import image5 from "../../../assets/images/banner/5.jpg";
// import image6 from "../../../assets/images/banner/6.jpg";
// import BannerOverly from "../../../components/BannerOverly";

// const Banner = () => {
//   const images = [image1, image2, image3, image4, image5, image6];

//   return (
//     <div className="carousel w-full h-[600px]">
//       <div id="slide1" className="carousel-item relative w-full">
//         <img src={image1} className="w-full rounded-xl object-cover" />
//         <BannerOverly />
//         <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
//           <a href="#slide6" className="btn btn-circle mr-5">
//             ❮
//           </a>
//           <a href="#slide2" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>

//       <div id="slide2" className="carousel-item relative w-full">
//         <img src={image2} className="w-full rounded-xl" />

//         <BannerOverly />

//         <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
//           <a href="#slide1" className="btn btn-circle mr-5">
//             ❮
//           </a>
//           <a href="#slide3" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>

//       <div id="slide3" className="carousel-item relative w-full">
//         <img src={image3} className="w-full rounded-xl" />

//         <BannerOverly />

//         <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
//           <a href="#slide2" className="btn btn-circle mr-5">
//             ❮
//           </a>
//           <a href="#slide4" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>

//       <div id="slide4" className="carousel-item relative w-full">
//         <BannerOverly />

//         <img src={image4} className="w-full rounded-xl" />
//         <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
//           <a href="#slide3" className="btn btn-circle mr-5">
//             ❮
//           </a>
//           <a href="#slide5" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>

//       <div id="slide5" className="carousel-item relative w-full">
//         <img src={image5} className="w-full rounded-xl" />

//         <BannerOverly />

//         <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
//           <a href="#slide4" className="btn btn-circle mr-5">
//             ❮
//           </a>
//           <a href="#slide6" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>

//       <div id="slide6" className="carousel-item relative w-full">
//         <img src={image6} className="w-full rounded-xl" />

//         <BannerOverly />

//         <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
//           <a href="#slide5" className="btn btn-circle mr-5">
//             ❮
//           </a>
//           <a href="#slide1" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
