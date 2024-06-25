import React, { useState, useEffect } from 'react';
import backImage from '../hero1.jpg';
import "../componants/Finalpage.css"
import { useLocation } from 'react-router-dom';

export default function Finalpage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const model = params.get('model');

  const [carDetails, setCarDetails] = useState([]);
  const [carImages, setCarImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carResponse = await fetch("/carallinfo");
        if (!carResponse.ok) {
          throw new Error(`Error fetching car data: ${carResponse.status}`);
        }
        const carData = await carResponse.json();
        const filteredDetails = carData.filter(variant => variant.carname === model);
        setCarDetails(filteredDetails);

        const imagesResponse = await fetch("/getAllcars");
        if (!imagesResponse.ok) {
          throw new Error(`Error fetching images data: ${imagesResponse.status}`);
        }
        const imagesData = await imagesResponse.json();
        const carImages = imagesData.find(car => car.model === model)?.images_color || [];
        setCarImages(carImages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [model]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
  };
  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carImages.length) % carImages.length);
  };

  return (
    <>
      <div className='brandsIamge'>
        <img src={backImage} alt="" />
      </div>
      <div className="info">
        <h1>Get all About {model}</h1>
        <div className="carimages my-3">
          {carImages.length > 0 && <img src={carImages[currentImageIndex]} alt="" />}
        </div>
        <div className="netprev">
          <button className='button-33-4 mx-2' onClick={handlePreviousImage}>Prev</button>
          <button className='button-33-4 ' onClick={handleNextImage}>Next</button>
        </div>
        <h2 className='my-2'>All Variants</h2>
        <table className="table1 my-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Variant</th>
              <th scope="col">Additional Features</th>
              <th scope="col">Ex-Showroom Price</th>
            </tr>
          </thead>
          <tbody>
            {carDetails.map((variant, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{variant.name}</td>
                <td>{variant.additionalFeatures.join(', ')}</td>
                <td>{variant.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      <div className="bro">
        <h3>Download Broucher</h3>
  
      </div>
      </div>
    </>
  );
}
