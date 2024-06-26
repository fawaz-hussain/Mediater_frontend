import React, { useState } from "react";
import "../Components/style.css"
import Logo from "../Assets/Logo_mediater.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link : "#Home",
    },
    {
      text: "Mission",
      icon: <InfoIcon />,
      link: "#Mission",
    },
    {
      text: "Reviews",
      icon: <CommentRoundedIcon />,
      link: "#Reviews",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "#Contact",
    },
  ];
  return (
    <nav id="Home">
      <div className="nav-logo-container">
        <img className="logo_main" src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#Home">Home</a>
        <a href="#Mission">Mission</a>
        <a href="#Vision">Vision</a>
        <a href="#Reviews">Reviews</a>
        <a href="#Contact"><button className="primary-button">Contact Us</button></a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;