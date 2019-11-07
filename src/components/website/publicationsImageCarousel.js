import React from 'react';
import Image1 from '../../../src/components/website/image/Tripathy_EPSL_2015.jpg';
import Image2 from '../../../src/components/website/image/Tripathy_Gcubed_2014.jpg';
import Image3 from '../../../src/components/website/image/Tripathy_Gcubed_2019.jpg';
import Image4 from '../../../src/components/website/image/Tripathy_MarChem_2019.jpg';
import Image6 from '../../../src/components/website/image/Tripathy_Paleo_2014.jpg';
import Image5 from '../../../src/components/website/image/Tripathy_Paleo_2018.jpg';
import Image7 from '../../../src/components/website/image/Tripathy_ChemGeol_2014.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../portfolio/main.css';

const links = {
    '1': 'https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018GC008047'
}

const PublicationsImageCarousel = () => {

    return (
        <>
            <Carousel className="publicationsCarousel" autoPlay showThumbs={false} infiniteLoop={true}>

                <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018GC008047">
                    <div>
                        <img src={Image3} alt="Runoff-Independent weathering in Brahamputra basin" />
                    </div>
                </a>
                <a href="https://www.sciencedirect.com/science/article/pii/S0304420318302780">
                    <div>
                        <img src={Image4} alt="Adsorptive removal of boron in a coastal lagoon" />
                    </div>
                </a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0012821X15006056">
                    <div>
                        <img src={Image1} alt="Re-Os Dating of Coal deposit" />
                    </div>
                </a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0031018213001867">
                    <div>
                        <img src={Image2} alt="Re-Os chronology of Cambrian-Ordovician GSSP" />
                    </div>
                </a>

                <a href="https://www.sciencedirect.com/science/article/pii/S0031018217310878">
                    <div>
                        <img src={Image5} alt="Refining the Jurassic-Cretaceous boundary age" />
                    </div>
                </a>
                <a href="http://www.sciencedirect.com/science/article/pii/S0031018213001867">
                    <div>
                        <img src={Image6} alt="Provenance of Bay of Bengal sediments" />
                    </div>
                </a>
                <div>
                    {/* <a href="http://www.sciencedirect.com/science/article/pii/S0009254115300097"> */}
                    <img src={Image7} alt="Re-Os chronology of upper Vindhyan" />
                </div>
            </Carousel >
        </>
    )

};

export default PublicationsImageCarousel;
