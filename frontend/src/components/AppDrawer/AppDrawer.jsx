
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function AppDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [peopleAnchorEl, setPeopleAnchorEl] = useState(null);
    const openPeopleMenu = Boolean(peopleAnchorEl);
    const [publicationsAnchorEl, setPublicationsAnchorEl] = useState(null);
    const openPublicationsMenu = Boolean(publicationsAnchorEl);

    const peopleHandleClick = (event) => {
        setPeopleAnchorEl(event.currentTarget);
    };
    const peopleMenuHandleClose = () => {
        setPeopleAnchorEl(null);
        setOpenDrawer(false)
    };
    const publicationsHandleClick = (event) =>{
        setPublicationsAnchorEl(event.currentTarget);
    }
    const publicationMenuHandleClose = () => {
        setPublicationsAnchorEl(null);
        setOpenDrawer(false);
    }

    return (
        <React.Fragment>
            <Menu anchorEl={peopleAnchorEl} open={openPeopleMenu} onClose={peopleMenuHandleClose} MenuListProps={{'aria-labelledby': 'people-button'}}>
                <MenuItem onClick={peopleMenuHandleClose}>Faculties</MenuItem>
                <MenuItem onClick={peopleMenuHandleClose}>Graduates</MenuItem>
                <MenuItem onClick={peopleMenuHandleClose}>Undergraduates</MenuItem>
            </Menu>
            <Menu anchorEl={publicationsAnchorEl} open={openPublicationsMenu} onClose={publicationMenuHandleClose} MenuListProps={{'aria-labelledby': 'publications-button'}}>
                <MenuItem onClick={publicationMenuHandleClose}>Books</MenuItem>
                <MenuItem onClick={publicationMenuHandleClose}>Journals</MenuItem>
                <MenuItem onClick={publicationMenuHandleClose}>Conferences</MenuItem>
            </Menu>

            <Drawer sx={{ marginLeft: 'auto' }} open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List sx={{ background: '#dce3da' }}>
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>About</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton id="people-button" onClick={peopleHandleClick}>
                        <ListItemIcon>
                            <ListItemText >People</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton id="publications-button" onClick={publicationsHandleClick}>
                        <ListItemIcon>
                            <ListItemText>Publications</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Research Facilities</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>Admin Login</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}