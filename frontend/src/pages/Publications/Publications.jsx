import './Publications.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Books from '../../components/Books/Books';
import Journals from '../../components/Journals/Journals';
import Conferences from '../../components/Conferences/Conferences';


export default function Publications() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList centered onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Books" value="1" />
            <Tab label="Journals" value="2" />
            <Tab label="Conferences" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Books></Books></TabPanel>
        <TabPanel value="2"><Journals></Journals></TabPanel>
        <TabPanel value="3"><Conferences></Conferences></TabPanel>
      </TabContext>
    </Box>
  );
}