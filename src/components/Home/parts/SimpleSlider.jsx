import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
export const SimpleSlider = () => {

    const slides = [
      {
        url: "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/278606091_1962903400551748_3914007628372481948_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHk2LsX2RvSnCbRDYfreT76f4-1a29FtbV_j7Vrb0W1tes_5onRXAmE7qfS9n1sutQfNm8ZTxxp-9fXIrO459ld&_nc_ohc=i2R5K4_i0ycAX8qKqOl&_nc_ht=scontent.fcor2-1.fna&oh=00_AfDxP46oGL6yy4pJBkvyQ2cUlUEqjKikuwK_y3hAWezcYA&oe=64573FEE",
      },
      {
        url: "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/267841999_1871716519670437_1230774565431220736_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF_FJQcvX7-IckOYRYYozMC663iOUg95pvrreI5SD3mm9GOuFC704WFuKW7AcvbzCzH8yLKD1AFGSJdCzRfsgIk&_nc_ohc=l0nlsLYFprcAX80OVjN&_nc_oc=AQm1cta8yjG60kKsX6Gjwg9iD9Jz-latyLf6owIr0YIWFDjQ8KAqmAufkM-0z44toBM&_nc_ht=scontent.fcor2-1.fna&oh=00_AfC40LEtTNi8Qsbi598zDRHua7VCsMeSWlMwjJ5ljfzLsw&oe=6457F0DD",
      },
      {
        url: "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/315918417_596434335616700_2326786648542878433_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFATiMiY9shI3sJgEXnj9c6ghrjRfqHSzSCGuNF-odLNKMo5Vieyxp_LroRtrobWfHtH73HFXU3zlX4hFt8bKhB&_nc_ohc=fmomZ5oH2MsAX8Wo0GM&_nc_ht=scontent.fcor2-2.fna&oh=00_AfC35axx4csmZ-81FXvRJVx0Ojy1me3H1y51kdiNNznN8A&oe=6458B02A",
      },

      {
        url: "https://www.elliberal.com.ar/fotos/notas/2022/11/15/615940_20221115224336.jpg",
      },
      {
        url: "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/245781239_1825414707633952_7939535286291345886_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFTI-_acEqNZjwJc7r78_9JgVoyjQ_uIuGBWjKND-4i4ZwNLTM7QqbnLOmY3ZtiPJyclKOcdgNCbIG-bHcTClDL&_nc_ohc=9lWf9ohawugAX9HY_TI&_nc_ht=scontent.fcor2-1.fna&oh=00_AfBKDxcsnpSvIgwFZucAjcL8uM7pV4ZPCu_jKC4sXsRXHQ&oe=64585214",
      },

      {
        url: "https://www.ead.edu.ar/wp-content/uploads/2016/07/proyecto-y-construccion-de-obras.jpg",
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
