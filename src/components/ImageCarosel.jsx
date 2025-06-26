import { useState } from "react";
import reunited from '../assets/Reunited.jpg';
import bellastone from '../assets/BellaStone.jpg';
import echobaby from '../assets/EchoBaby.jpg';
import kaylalove from '../assets/KaylaLove.jpg';
import kayla from '../assets/Kayla.jpg';
import june from '../assets/June.jpg';
import echo3 from '../assets/Echo3.jpg';
import atticus from '../assets/Atticus.jpg'


function ImageCarousel() {
    const images = [
        [reunited, "Welcome Home from College"],
        [bellastone, "Bella Stone, Professional Singer"],
        [echobaby, "Echo"],
        [kaylalove, "Welcome back from Kayla"],
        [kayla, "Kayla enjoying the deck"],
        [june, "Junebug looking regal"],
        [echo3, "Morning cuddles with Echo"],
        [atticus, "Atticus (Atta-kitty-cat-icus Feta Cheese Finch)"],
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
                className='w-60 sm:w-70 border-4 border-pink-xtra-dark rounded-lg max-w-full mx-auto'
            />
            <p className="regular-text text-center relational mt-2">{images[currentIndex][1]}</p>

            <div className="">
                <button onClick={goToPrevious} className="bg-pink-dark border-2 border-pink-xtra-dark rounded-full w-16 m-4">◀</button>
                <button onClick={goToNext} className="bg-pink-dark border-2 border-pink-xtra-dark rounded-full w-16 m-4">▶</button>
            </div>
        </div>
    );
}

export default ImageCarousel;