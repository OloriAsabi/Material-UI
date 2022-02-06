import { Container, Typography } from '@material-ui/core';
import { Bookmark,
       List,
       ExitToApp,
       Home,
       Person,
       PhotoCamera, 
       PlayCircleOutline, 
       Settings, 
       Storefront, 
       TabletMac } from '@material-ui/icons';
import React from 'react'
import useStyles from "../styles";

export const Leftbar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>
               Homepage
            </Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon}/>
                <Typography className={classes.text}>
                Friends
            </Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon}/>
                <Typography className={classes.text}>
              List
            </Typography>
            </div>
            <div className={classes.item}>
                <PhotoCamera className={classes.icon}/>
                <Typography className={classes.text}>
               Camera
            </Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon}/>
                <Typography className={classes.text}>
               Videos
            </Typography>
            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icon}/>
                <Typography className={classes.text}>
               Apps
            </Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon}/>
                <Typography className={classes.text}>
               Collections
            </Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon}/>
                <Typography className={classes.text}>
               Market Place
            </Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon}/>
                <Typography className={classes.text}>
               Settings
            </Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon}/>
                <Typography className={classes.text}>
                Logout
            </Typography>
            </div>
        </Container>
    )
}
