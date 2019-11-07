import React from 'react';
import '../portfolio/main.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

const Research = () => {

    return (
        <>
            <div className="site-content">
                <div className="mdl-grid site-max-width">
                    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
                        <div className="mdl-card__title">
                            <h1 className="mdl-card__title-text">Research</h1>
                        </div>
                        <div className="mdl-grid site-copy">
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>youtube_searched_for</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Chemical weathering rates of Indian river basins" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>youtube_searched_for</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Re-Os Geochronology of Black shales" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>youtube_searched_for</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Reconstruction of past marine redox state" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>youtube_searched_for</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Sediment Provenances of river and marine sediments" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Icon color="primary" style={{ fontSize: 30 }}>youtube_searched_for</Icon>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Weathering-Climate-Tectonics Link" />
                            </ListItem>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Research;