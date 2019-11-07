import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
    Typography
} from '@material-ui/core/';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Rakesh from '../website/image/Rakesh_Photo.jpg';
import Anupam from '../website/image/Anupam_Photo.jpeg';
import Achuth from '../website/image/Achyuth_Photo.jpeg';
import Anirban from '../website/image/Anirban.JPG';
import Danish from '../website/image/Danish.JPG';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1)
    },
    rootCard: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    card: {
        height: '450px'
    }
}))

const People = () => {
    const classes = useStyles()

    return (
        <>
            <div className="site-content">
                <div className="mdl-grid site-max-width">
                    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
                        <div className="mdl-card__title">
                            <h1 className="mdl-card__title-text">Ph. D. Students</h1>
                        </div>
                        <div className="mdl-grid site-copy">
                            <div className={classes.root}>
                                <Grid
                                    container
                                    spacing={2}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                >

                                    <Grid item xs={12} sm={4}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Anirban"
                                                    height="200"
                                                    image={Anirban}
                                                    title="Anirban"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Mr. Anirban Mandal </Typography>
                                                    <Typography variant="body2" component="p">
                                                        <p>Ph.D. joining: 2015</p>
                                                        <p>Research: Geochemical and isotopic studies of the Permian-Triassic shales: Implications to past marine redox state.</p>
                                                        <p>Education: M.Sc. Earth Science  (IISER, Kolkata)</p>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Danish"
                                                    height="200"
                                                    image={Danish}
                                                    title="Danish"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="h6">
                                                        Mr. Mohd Danish </Typography>
                                                    <Typography variant="body2" component="p" style={{ lineHeight: '0px' }}>
                                                        <p>Ph.D. joining: 2016</p>
                                                        <p>Research: Biogeochemical cycling of trace elements in tropical coastal lagoon: A case study from Chilika, India.</p>
                                                        <p>Education: M.Sc. Geology  (AMU, Aligarh)</p>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Anupam"
                                                    height="200"
                                                    image={Anupam}
                                                    title="Anupam"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Mr. Anupam Samanta </Typography>
                                                    <Typography variant="body2" component="p">
                                                        <p>Ph.D. joining: 2016</p>
                                                        <p>Research: Climate and weathering linkage at seasonal to kilo-year timescales: Evidence from water and sediment chemistry.</p>
                                                        <p>Education: M.Sc. Geology  (Jadavpur university, Kolkata)</p>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Achuth"
                                                    height="200"
                                                    image={Achuth}
                                                    title="Achuth"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="h6">
                                                        Mr. Achyuth Venugopal </Typography>
                                                    <Typography variant="body2" component="p" style={{ lineHeight: '0px' }}>
                                                        <p>Ph.D. joining: 2019</p>
                                                        <p>Research: Tracing sediment provenance of Bay of Bengal.</p>
                                                        <p>Education:  M.Sc. Earth Science (Pondicherry university, Puducherry)</p>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>

                                    <Grid item xs={12} sm={4}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    alt="Rakesh"
                                                    height="200"
                                                    image={Rakesh}
                                                    title="Rakesh"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="h6">
                                                        Mr. Rakesh Kumar Rout </Typography>
                                                    <Typography variant="body2" component="p" style={{ lineHeight: '0px' }}>
                                                        <p>Ph.D. joining: 2019</p>
                                                        <p>Research: Chemical weatering pattern of eastern ghat rivers.</p>
                                                        <p>Education: M.Sc. Geology (BHU, Varanasi)</p>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-content">
                <div className="mdl-grid site-max-width">
                    <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
                        <div className="mdl-card__title">
                            <h1 className="mdl-card__title-text">Past members</h1>
                        </div>
                        <div className="mdl-grid site-copy">
                            <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Icon color="primary" style={{ fontSize: 30 }}>person</Icon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Aswin Pradeep"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    IISER, Pune.</Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>

                            <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Icon color="primary" style={{ fontSize: 30 }}>person</Icon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Ayush Nagar"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    IISER, Pune.</Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>

                            <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Icon color="primary" style={{ fontSize: 30 }}>person</Icon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Preeti Kumari"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    IISER, Pune.</Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>

                            <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Icon color="primary" style={{ fontSize: 30 }}>person</Icon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Sourosree L."
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    SPPU, Pune.</Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>

                            <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Icon color="primary" style={{ fontSize: 30 }}>person</Icon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Himadri Saini"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    SPPU, Pune.</Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>

                            <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Icon color="primary" style={{ fontSize: 30 }}>person</Icon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Rajni D."
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    SPPU, Pune.</Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>

                            <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Icon color="primary" style={{ fontSize: 30 }}>person</Icon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Smruti Mishra"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Rayagada College, Odisha.</Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>


                            <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Icon color="primary" style={{ fontSize: 30 }}>person</Icon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Anushka Chattopadhyaya"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    NIT Rourkela, Odisha.</Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>

                            <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Icon color="primary" style={{ fontSize: 30 }}>person</Icon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Lipsita Mishra"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Reveshaw College, Odisha.</Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>

                            <List className={classes.root}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Icon color="primary" style={{ fontSize: 30 }}>person</Icon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Sourish Roy"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    ISM Dhanbad.</Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default People;