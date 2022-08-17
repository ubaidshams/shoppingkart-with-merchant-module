import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Menu from "./Menu";
import { Button } from "@mui/material";
import styles from "./home.module.css";
import { PlusOne } from "@material-ui/icons";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Outlet } from "react-router-dom";

import Auth from "../../components/navbar/Auth"

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: prop => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  background: "white",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          display: "flex",
          alignItems: " ",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }), color: "#172337" }}
            >
              <MenuIcon />
            </IconButton>
            Merchant Home
          </Typography>
          <Menu />
          <Button color="inherit">Login</Button>  
          <Auth />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#172337",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "auto",
          }}
        >
          <AccountCircleIcon sx={{ color: "white" }} />
          <Typography sx={{ color: "white" }}>UserName</Typography>
          <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ width: "100%" }} />
        {/* BEGIN :: SideBar Navigation links */}
        <List sx={{ padding: 0 }}>
          {[
            {
              head: "PRODUCT",
              sub: [
                { name: "Add Product", path: "/add-product" },
                {
                  name: "View All Product",
                  path: "/view-products",
                },
              ],
            },
            {
              head: "ACCOUNT",
              sub: ["edit profile", "view profile", "logout"],
            },
          ].map((item, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={{
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#172337", color: "white" }}
              >
                <ListItem key={item.head} disablePadding >
                  {/* <ListItemButton sx={{ padding: 0 , background:"red"}}> */}
                    {/* <ListItemIcon sx={{ color: "white" }}>
                      {index % 2 === 0 ? <InboxIcon /> : <PlusOne />}
                    </ListItemIcon> */}
                    <ListItemText primary={item.head} />
                  {/* </ListItemButton> */}
                </ListItem>
              </AccordionSummary>
              <AccordionDetails sx={{ background: "#172337", color: "white" }}>
                {item.sub.map((value, index) => (
                  <ListItem key={index} disablePadding>
                    <Link
                      to={`${value.path}`}
                      style={{
                        color: "inherit",
                        textDecoration: "inherit",
                        paddingLeft: "18%",
                      }}
                    >
                    <ListItemText primary={value.name} />
                      
                    </Link>
                  </ListItem>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </List>
        {/* END :: SideBar Navigation links */}

      </Drawer>

      <Main open={open} style={{marginTop:"70px"}}>
        {/* <DrawerHeader /> */}
        <Outlet />
      </Main>
    </Box>
  );
}