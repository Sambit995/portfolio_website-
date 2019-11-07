import React from 'react';
import Image1 from '../../../src/components/website/image/ICPMS.jpg';
import Image2 from '../../../src/components/website/image/Ion_Chromatograph.JPG';
import Image3 from '../../../src/components/website/image/CHNS.jpg';
import Image4 from '../../../src/components/website/image/CO2_Coulometer.JPG';
import Image6 from '../../../src/components/website/image/AAS.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = () => {

    return (
        <>
            <Carousel className="carousel" autoPlay showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src={Image1} alt="ICPMS" />
                </div>
                <div>
                    <img src={Image2} alt="CHNS" />
                </div>
                <div>
                    <img src={Image3} alt="CO2 Coulometer" />
                </div>
                <div>
                    <img src={Image4} alt="Auto Tritator" />
                </div>
                <div>
                    <img src={Image6} alt="spiti Valley" />
                </div>
            </Carousel >
        </>
    )

};

export default ImageCarousel;
