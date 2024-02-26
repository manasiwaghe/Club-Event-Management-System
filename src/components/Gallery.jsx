import React,{ useState } from "react"
import Navbar from "./Navbar";

export default function Gallery(){
    const [images, setImages] = useState([
        'img1.png',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg',
        'img1.png',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg',
        'img1.png',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg',
        // Add more image URLs as needed
      ]);
      const [selectedImage, setSelectedImage] = useState(null);
    
      const handleImageClick = (image) => {
        setSelectedImage(image);
      };

      const handleOverlayClick = () => {
        setSelectedImage(null);
      };
    
    
      return (
        <>
        <Navbar />
        <div className="flex flex-col justify-center items-center mx-10">
          <h1 className="text-[#F4EBDB] text-center text-3xl pt-5 pb-10 "> Glimpses </h1>
        
          <div className="image-gallery relative">
      <div className="grid grid-cols-3 gap-4 backdrop-filter backdrop-blur-sm">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="cursor-pointer"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-80" onClick={handleOverlayClick}>
          <img src={selectedImage} alt="Selected" className="max-w-full max-h-full rounded-xl" style={{ width: '800px', height: '600px' }} />
        </div>
      )}
    </div>
        
        </div>
        
        </>
      )
}