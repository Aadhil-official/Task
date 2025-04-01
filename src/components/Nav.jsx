import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../assets/carologo.png'
// import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const drawerWidth = 240;
const navItems = ['Home', 'Pages', 'Tracking', 'Services', 'Blog'];

function Nav(props) {

    const [selectedmenu, setSelectedmenu] = React.useState("Home");
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { window } = props;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleMenuClick = (item) => {
        setSelectedmenu(item);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            {/* <Typography variant="h6" sx={{ my: 2 }}> */}
            <img src={logo} />
            {/* </Typography> */}
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: 'white' }} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          > */}
                    <img src={logo} width='40px' height='40px' style={{ marginTop: '10px', marginBottom: '10px', marginRight: 'auto', display: { xs: 'none', sm: 'block' } }} />
                    {/* </Typography> */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <>
                                <div height='25px' width='5px' style={{ position: 'absolute', backgroundColor: 'orange' }}></div>
                                <NavHashLink smooth to={`#${item}`}>
                                    <Button onClick={() => handleMenuClick(item)} key={item} sx={{
                                        color: '#000'
                                    }}>
                                        <span style={{ color: 'orange', display:  selectedmenu === item ? "flex" : "none", marginRight:'2px',marginBottom:'3px' }}>| </span>{item}
                                    </Button>
                                </NavHashLink>
                            </>
                        ))}
                        <Button sx={{ backgroundColor: 'orange', color: '#fff', marginRight: '10px' }}>Get A Quote</Button>
                        <Button sx={{ backgroundColor: '#000', color: '#fff' }}>Sign in</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </div>
    )
}

export default Nav