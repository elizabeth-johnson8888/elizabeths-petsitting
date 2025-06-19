import { useState } from "react";

function ImageCarousel() {
    const images = [
        ["logo192.png", "Me and Tina"],
        ["logo512.png", "Me and Cora"],
        ["EJ_Emily_Bartell_Photography-22.jpg", "me and other"],
        ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="flex flex-col items-center">
            <h3 className="section-header text-center">Animals and I</h3>
            <img
                src={images[currentIndex][0]}
                alt={`Slide ${currentIndex + 1}`}
                className=""
            />
            <p className="regular-text text-center">{images[currentIndex][1]}</p>

            <div className="">
                <button onClick={goToPrevious} className="bg-pink-dark border-2 border-pink-xtra-dark rounded-full w-16 m-4">◀</button>
                <button onClick={goToNext} className="bg-pink-dark border-2 border-pink-xtra-dark rounded-full w-16 m-4">▶</button>
            </div>
        </div>
    );
}

export default ImageCarousel;