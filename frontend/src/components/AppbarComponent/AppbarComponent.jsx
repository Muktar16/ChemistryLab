import React from "react";
import "./AppbarComponent.css"
import { AppBar, useTheme, useMediaQuery, Toolbar, Button, Avatar, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import AppDrawer from "../AppDrawer/AppDrawer";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TabContext, TabPanel } from "@mui/lab";
import Home from "../Home/Home";
import About from "../About/About";
import ResearchFacility from "../ResearchFacility/ResearchFacility";


export default function AppbarComponent() {

    const [value, setValue] = useState("1");
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    const [peopleAnchorEl, setPeopleAnchorEl] = useState(null);
    const [publicationsAnchorEl, setPublicationsAnchorEl] = useState(null);
    const openPeopleMenu = Boolean(peopleAnchorEl);
    const openPublicationsMenu = Boolean(publicationsAnchorEl);
    const [peopleButtonValue,setPeopleButtonValue] = useState(null);

    const peopleHandleClick = (event) => {
        setPeopleAnchorEl(event.currentTarget);
    };
    const publicationsHandleClick = (event) => {
        setPublicationsAnchorEl(event.currentTarget);
    }
    const peopleMenuHandleClose = (value) => {
        setPeopleButtonValue(value)
        setPeopleAnchorEl(null);
    };
    const publicationMenuHandleClose = () => {
        setPublicationsAnchorEl(null);
    }


    return (
        <React.Fragment>
            <TabContext value={value} >
                <Menu anchorEl={peopleAnchorEl} open={openPeopleMenu} onClose={peopleMenuHandleClose} MenuListProps={{ 'aria-labelledby': 'people-button' }}>
                    <MenuItem onClick={()=>peopleMenuHandleClose("3")}>Faculties</MenuItem>
                    <MenuItem onClick={peopleMenuHandleClose}>Graduates</MenuItem>
                    <MenuItem onClick={peopleMenuHandleClose}>Undergraduates</MenuItem>
                </Menu>
                <Menu anchorEl={publicationsAnchorEl} open={openPublicationsMenu} onClose={publicationMenuHandleClose} MenuListProps={{ 'aria-labelledby': 'publications-button' }}>
                    <MenuItem onClick={publicationMenuHandleClose}>Books</MenuItem>
                    <MenuItem onClick={publicationMenuHandleClose}>Journals</MenuItem>
                    <MenuItem onClick={publicationMenuHandleClose}>Conferences</MenuItem>
                </Menu>

                <AppBar position="sticky" sx={{ background: '#457f8c' ,zIndex:1 }}>
                    <Toolbar variant="dense" sx={{ height: '115px' }}>
                        <Avatar sx={{ height: '95px', width: '75px' }} alt="Logo" src="/logo_du.png" variant="rounded" />
                        <h1 className="logo-text">Chemistry<span>Lab</span><br />
                            <p className="logo-description">Natural Product Research Group</p>
                        </h1>
                        {isMatch ? (<AppDrawer></AppDrawer>) : (<>
                            <Tabs textColor="#2b2727" sx={{ paddingLeft: '40px', }} value={value} indicatorColor="secondary"
                                onChange={(e, value) => { setValue(value); console.log("event", e) }}>
                                <Tab label="HOME" value="1"/>
                                <Tab label="ABOUT US" value="2"/>
                                <Tab label="People"  id="people-button" onClick={peopleHandleClick} value={peopleButtonValue}/>
                                <Tab label="PUBLICATIONS" value="4" id="publications-button" onClick={publicationsHandleClick} />
                                <Tab label="RESEARCH FACILITIES" value="6" />
                            </Tabs>
                            <Button sx={{ marginLeft: 'auto ' }} variant="contained">Admin Login</Button>
                        </>)}
                    </Toolbar>
                </AppBar>
                <TabPanel value="1"><Home></Home></TabPanel>
                <TabPanel value="2"><About></About></TabPanel>
                <TabPanel value="3"><ResearchFacility/></TabPanel>
                <TabPanel value="4"><ResearchFacility/></TabPanel>
                <TabPanel value="5"><ResearchFacility/></TabPanel>
                <TabPanel value="6"><ResearchFacility/></TabPanel>
            </TabContext>
        </React.Fragment>
    );
}


