import React from 'react';
import ProfileImage from '../../../src/components/website/image/IMG_2565.JPG';
import '../portfolio/main.css';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PublicationsImageCarousel from '../website/publicationsImageCarousel';

const Home = () => {

    return (
        <>
            <div className="site-content">
                <div className="mdl-grid site-max-width">
                    <div className="card mb-3" style={{ maxWidth: "97.5%", margin: '0% 1%' }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={ProfileImage} className="card-img" alt="Gyana" style={{ height: '250px' }} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body" style={{ padding: '1.55rem' }}>
                                    <h5 className="card-title"><i>Dr. Gyana Ranjan Tripathy</i></h5>
                                    <p className="card-text default-text-header noSpaceFirst">Assistant Professor</p>
                                    <a style={{ textDecoration: 'none', color: 'darkslategrey', cursor: 'pointer' }} href="https://www.google.com/maps/dir/18.5011468,73.9242248/iiser+pune/@18.5257419,73.7954673,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2bf178755c7b1:0xd0e6d0861972dfca!2m2!1d73.8076288!2d18.547456">
                                        <p className="card-text default-text-header noSpaceFirst" >Department of Earth and Climate Science</p>
                                        <p className="card-text default-text-header noSpaceFirst">Indian Institute of Science Education and Research (IISER)</p>
                                        <p className="card-text default-text-header noSpaceFirst">Dr. Homi Bhabha Road, Pune 411008, India</p>
                                    </a>
                                    <p></p>

                                    <p className="card-text default-text-header noSpaceSecond"> <a style={{ textDecoration: 'none', color: 'darkslategrey', cursor: 'pointer' }} href="mailto:grtripathy@iiserpune.ac.in">Email: grtripathy@iiserpune.ac.in</a></p>
                                    <p className="card-text default-text-header noSpaceSecond"> <a style={{ textDecoration: 'none', color: 'darkslategrey', cursor: 'pointer' }} href="tel:+91 20 2590 8275">Phone: +91 20 2590 8275</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <br></br>
                            <h6 style={{ textAlign: 'center' }} > Research Interests</h6>
                            <p className="text-justify default-text">My research mainly focuses on understanding and quantifying low-temperature aquatic geochemical processes, which includes chemical weathering patterns of river basins from India, Re-Os geochronology of ancient marine organic-rich sediments, and tracing sediment provenances of marine sediments in kiloyear timescales.  Towards this, I frequently rely on abundance and distribution of radiogenic isotopes (<sup>87</sup>Sr/<sup>86</sup>Sr, <sup>187</sup>Os/<sup>188</sup>Os and ε<sub>Nd</sub>) and trace elements of geological samples. My current research project aims at assessing role of ion-exchange processes and submarine groundwater discharge in regulating trace elemental inventory of coastal lagoon (Chilika lagoon, India) and large river systems from the tropical region. <Link to="/research"><a className="text-decoration-none">Click here for more details.</a></Link></p>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <br></br>
                            <h6 style={{ textAlign: 'center' }} > Latest Research </h6>
                            <PublicationsImageCarousel />
                        </Grid>
                    </Grid>

                    {/* <div className="site-content">
                        <div className="mdl-grid site-max-width">
                            <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
                                <div className="mdl-grid site-copy">
                                    <p className="text-justify default-text">My research mainly focuses on understanding and quantifying low-temperature aquatic geochemical processes, which includes chemical weathering patterns of river basins from India, Re-Os geochronology of ancient marine organic-rich sediments, and tracing sediment provenances of marine sediments in kiloyear timescales.  Towards this, I frequently rely on abundance and distribution of radiogenic isotopes (<sup>87</sup>Sr/<sup>86</sup>Sr, <sup>187</sup>Os/<sup>188</sup>Os and ε<sub>Nd</sub>) and trace elements of geological samples. My current research project aims at assessing role of ion-exchange processes and submarine groundwater discharge in regulating trace elemental inventory of coastal lagoon (Chilika lagoon, India) and large river systems from the tropical region. <Link to="/research"><a className="text-decoration-none">Click here for more details.</a></Link></p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Home;