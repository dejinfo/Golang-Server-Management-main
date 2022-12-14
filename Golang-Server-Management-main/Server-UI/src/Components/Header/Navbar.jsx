import React from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Profile from "./Navtabs/profile";
import Notification from "./Navtabs/notification";
import { useStyles } from "./HeaderStyles";
import Messages from "./Navtabs/Messages";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar({ handleDrawerOpen }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <IconButton color="inherit" onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.logo}>
          {"Server Management"}
        </Typography>
<<<<<<< HEAD
        {/* <Hidden smDown> */}
=======
        <Hidden smDown>
>>>>>>> origin/main
          <Box style={{ display: "flex" }}>
            {/* <Notification /> */}
            {/* <Messages /> */}
            <Profile />
          </Box>
<<<<<<< HEAD
        {/* </Hidden> */}
=======
        </Hidden>
>>>>>>> origin/main
        {/* <Hidden mdUp>
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden> */}
      </Toolbar>
    </AppBar>
  );
}
