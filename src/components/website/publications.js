import React from 'react';
import '../portfolio/main.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

const Publications = () => {

    return (
        <>
            {/* Research phd students details */}
            <div className="site-content">
                <div className="mdl-grid site-max-width">
                    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
                        <div className="mdl-card__title">
                            <h1 className="mdl-card__title-text">Publications &nbsp; <span style={{ fontSize: '13px', marginTop: '8px' }} > ( $Student Author )</span></h1>
                        </div>
                        <div className="mdl-grid site-copy">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='https://www.sciencedirect.com/science/article/pii/S0304420318302780'>
                                    <ListItemText style={{ cursor: 'pointer' }} primary="Mohd Danish$, Gyana Ranjan Tripathy,  Rajani Panchang, Naveen Gandhi and Satya Prakash (2019) Dissolved boron in a brackish-water lagoon system (Chilika lagoon, India): Spatial distribution and coastal behavior. Marine Chemistry,  214, 103663, 1-13." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018GC008047'>
                                    <ListItemText primary="Anupam Samanta$, Gyana Ranjan Tripathy,  Ritima Das (2019) Temporal variations in water chemistry of the (lower) Brahmaputra river: implications to seasonality in mineral weathering. Geochemistry Geophysics Geosystems, 20, 2769-2785." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='https://link.springer.com/article/10.1007/s10874-019-9387-6'>
                                    <ListItemText primary="Gyana Ranjan Tripathy, Smruti Mishra, Mohd Danish and Kirpa Ram (2019) Elevated barium concentrations in rain water from east-coast of India: role of regional lithology. Journal of Atmospheric Chemistry, 76, 59-72." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='https://www.sciencedirect.com/science/article/pii/S0031018217310878'>
                                    <ListItemText primary="Gyana Ranjan Tripathy, Judith Hannah and Holly Stein (2018) Refining the Jurassic-Cretaceous boundary: Re-Os geochronology and depositional environmeet of Upper Jurassic shales from the Norwegian Sea. Palaeogeography Palaeoclimatology Palaeoecology, 503, 13-25." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://www.mdpi.com/2075-1729/7/4/51'>
                                    <ListItemText primary="Manesh Joshi, Anupam Samanta, Gyana Ranjan Tripathy and Sudha Rajamani (2017) Formation and Stability of Prebiotically Relevant Vesicular Systems in Terrestrial Geothermal Environments. Life, 7, 51, 1-14." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://www.sciencedirect.com/science/article/pii/S0012821X15006056'>
                                    <ListItemText primary="Gyana Ranjan Tripathy, Judith Hannah, Holly Stein, Nicholas Geboy and Leslie Ruppert (2015) Radiometric dating of marine-influenced coal using Re-Os geochronology. Earth and Planetary Science Letters, 432, 13-23." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://www.sciencedirect.com/science/article/pii/S0009254115300097'>
                                    <ListItemText primary="Gyana Ranjan Tripathy, and Singh S. K.  (2015) Re-Os depositional age for black shales from the Kaimur Group, Upper Vindhyan, India. Chemical Geology, 413, 63-72." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://www.sciencedirect.com/science/article/pii/S0166516215000063'>
                                    <ListItemText primary="Nicholas Geboy, Gyana Ranjan Tripathy, L F Ruppert, C F Eble, B M Blake, Judith Hannah and Holly Stein (2015) Re-Os age for Lower-Middle Pennsylvanian Boundary and Comparison with associated Palynoflora. International Journal of Coal Geology, 140, 23-30." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://www.sciencedirect.com/science/article/pii/S0166516215000063'>
                                    <ListItemText primary="Gyana Ranjan Tripathy, Judith Hannah, Holly Stein and Gang Yang (2014) Re-Os age and depositional environment for black shales from the Cambrian-Ordovician boundary, Green Point, western Newfoundland. Geochemistry Geophysics Geosystems , 15, 1021-1037." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://www.sciencedirect.com/science/article/pii/S0031018213001867'>
                                    <ListItemText primary="Gyana Ranjan Tripathy, Sunil Kumar Singh and V Ramaswamy (2014) Major and trace element geochemistry of Bay of Bengal sediments: Implications to Provenances and their controlling factors. Palaeogeography Palaeoclimatology Palaeoecology, 397, 20-30." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://www.sciencedirect.com/science/article/pii/S0375674214000983'>
                                    <ListItemText primary="Gyana Ranjan Tripathy and Anirban Das (2014) Modeling geochemical datasets for source apportionment: Comparison of least square regression and inversion approaches. Journal of Geochemical Exploration, 144, 144-153." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://www.sciencedirect.com/science/article/pii/S0009254113002714'>
                                    <ListItemText primary="Gyana Ranjan Tripathy, Sunil Kumar Singh and Harsh Bhu (2013) Re-Os isotopes and major and trace elemental geochemistry of carbonaceous shales, Aravalli Supergroup, India: Impact of post-depositional processes. Chemical Geology, 354, 93-106." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://insaindia.org/journals/Proceedings/Vol78_2012_3_Art06_299_311.pdf'>
                                    <ListItemText primary="S Krishnaswami and Gyana Ranjan Tripathy (2012) Chemical and Physical erosion of river basins of India: Links to climate and tectonics. Proceedings of the Indian National Science Academy, 78 (3), 299-311." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://insaindia.org/journals/Proceedings/Vol78_2012_3_Art06_299_311.pdf'>
                                    <ListItemText primary="Gyana Ranjan Tripathy, Singh S. K. and Krishnaswami S (2011).  Sr and Nd isotopes as tracers of Chemical and Physical erosion. In “Handbook of Environemental isotope Geochemistry”, Ed. M. Baskaran, pp. 521-552, Springer-Verlag Berlin Heidelberg." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://www.terrapub.co.jp/journals/GJ/abstract/4503/45030175.html'>
                                    <ListItemText primary="Gyana Ranjan Tripathy, Singh S.K., Bhushan R. and Ramaswamy V (2011). Sr-Nd isotope signatures of Bay of Bengal Sediments: Impact of Climate on Erosion. Geochemical Journal 45, 175-186." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://onlinelibrary.wiley.com/doi/10.1029/2009GC002862/full'>
                                    <ListItemText primary="Gyana Ranjan Tripathy, and Singh S. K. (2010). Chemical Erosion Rates of the Ganga headwater basin: Reassessment based on inversion of dissolved major ions, Sr and 87Sr/86Sr.Geochemistry Geophysics Geosystems, 11, Q03013, DOI: 10.1029/2009GC002862." />
                                </a>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>menu_book</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <a style={{ color: 'black' }} href='http://onlinelibrary.wiley.com/doi/10.1002/hyp.7572/abstract'>
                                    <ListItemText primary="Gyana Ranjan Tripathy, Goswami V., Singh S. K. and Chakrapani G. J. (2010) Temporal variations in Sr and 87Sr/86Sr of the Ganga headwaters:  Estimates of dissolved Sr flux to the mainstream. Hydrological Processes 24, 1159-1171. DOI: 10.1002/hyp.7572." />
                                </a>
                            </ListItem>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Publications;