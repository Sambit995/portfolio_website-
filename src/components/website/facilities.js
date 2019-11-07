import React from 'react';
import ImageCarousel from '../website/imageCarousel';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {
    Grid
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    },
    rootCard: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}))

const Facilities = () => {
    const classes = useStyles()

    const text = <p>CO<sub>2</sub> Coulometer</p>;
    return (
        <>
            <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >

                    <Grid item xs={12} sm={4}>
                        <div className="site-content">
                            <div className="mdl-grid site-max-width">
                                <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp facilities">
                                    <div className="mdl-card__title">
                                        <h1 className="mdl-card__title-text">Facilities</h1>
                                    </div>
                                    <div className="mdl-grid site-copy">
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <Icon color="primary" style={{ fontSize: 30 }}>beenhere</Icon>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Quadrupole-ICP MS" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <Icon color="primary" style={{ fontSize: 30 }}>beenhere</Icon>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Ion Chromatograph" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <Icon color="primary" style={{ fontSize: 30 }}>beenhere</Icon>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="CHNS/O-Analyzer" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <Icon color="primary" style={{ fontSize: 30 }}>beenhere</Icon>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <Icon color="primary" style={{ fontSize: 30 }}>beenhere</Icon>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Graphite Furnace-AAS" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <Icon color="primary" style={{ fontSize: 30 }}>beenhere</Icon>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Auto-Titrator" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <Icon color="primary" style={{ fontSize: 30 }}>beenhere</Icon>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Microwave Digestion unit" />
                                        </ListItem>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <div className="site-content">
                            <div className="mdl-grid site-max-width">
                                <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp facilities">
                                    <div className="mdl-grid site-copy">
                                        <ImageCarousel />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )

}

export default Facilities;