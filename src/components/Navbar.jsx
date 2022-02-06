import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@material-ui/core';
import { Cancel, Mail, Notifications, Search} from '@material-ui/icons';
import React, { useState } from 'react'
import useStyles from "../styles";

export const Navbar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({ open });
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
                Olori Asabi
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
               Asabi
            </Typography>
            <div className={classes.search}>
                <Search/>
                <InputBase placeholder="Search..." className={classes.input} />
                <Cancel className={classes.cancel} onClick={() => setOpen(false)}/>
            </div>
            <div className={classes.icons}>
            <Search className={classes.searchButton} onClick={()=>setOpen(true)}/>
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail/>
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications/>
            </Badge>
            <Avatar alt="Olori Asabi" src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/PROGRAM/ProjectImages/olori%20copy.jpeg" />
            </div>
            </Toolbar>
        </AppBar>
    )
}
