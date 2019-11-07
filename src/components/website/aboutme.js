import React from 'react';
import '../portfolio/main.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

const AboutMe = () => {

    return (
        <>
            {/* Education details import_contacts*/}
            <div className="site-content">
                <div className="mdl-grid site-max-width">
                    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
                        <div className="mdl-card__title">
                            <h1 className="mdl-card__title-text">Education</h1>
                        </div>
                        <div className="mdl-grid site-copy">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>import_contacts</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Ph. D. (Isotope Geochemistry) : Physical Research Laboratory, India;  Mohanlal Sukhadia University, India" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>import_contacts</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="M. Sc. (Physics): Berhampur University, Odisha, India" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>import_contacts</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="B. Sc. (Physics Honors): Berhampur University, Odisha, India" />
                            </ListItem>
                        </div>
                    </div>
                </div>
            </div>
            {/* Experience Details  */}
            <div className="site-content">
                <div className="mdl-grid site-max-width">
                    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
                        <div className="mdl-card__title">
                            <h1 className="mdl-card__title-text">Experience</h1>
                        </div>
                        <div className="mdl-grid site-copy">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>timelapse</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Dec., 2014- Present: Assistant Professor (Indian Institute of Science Education and Research, Pune, India)" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>timelapse</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Apr., 2014- Dec., 2014 : Assistant Professor (National Institute of Technology, Rourkela, India)" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>timelapse</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Apr., 2012-Mar., 2014: Post-Doctoral Fellow (Colorado State University, USA)" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>timelapse</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Nov., 2011- Apr., 2013: Scientist Fellow (CSIR-National Institute of Oceanography, Goa, India)" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>timelapse</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Jan., 2011- Oct., 2011: Post-Doctoral Fellow (Physical Research Laboratory, Ahmedabad, India)" />
                            </ListItem>
                        </div>
                    </div>
                </div>
            </div>

            {/* Awards Details  */}
            <div className="site-content">
                <div className="mdl-grid site-max-width">
                    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
                        <div className="mdl-card__title">
                            <h1 className="mdl-card__title-text">Awards and Recognition</h1>
                        </div>
                        <div className="mdl-grid site-copy">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>stars</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="DST-SERB Early Career Research Award, 2017" />
                            </ListItem>

                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>stars</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="INSA Young Scientist Award, 2015" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>stars</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Young Associate, Indian Academy of Sciences, 2015" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>stars</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="DST-INSPIRE Faculty Award, Earth and Atmospheric Sciences, 2013" />
                            </ListItem>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AboutMe;