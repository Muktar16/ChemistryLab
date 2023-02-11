import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Faculties from '../../components/Faculties/Faculties';
import Graduates from '../../components/Graduates/Graduates';
import UnderGraduates from '../../components/UnderGraduate/UnderGraduate';

export default function People() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList centered onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Faculties" value="1" />
            <Tab label="Graduates" value="2" />
            <Tab label="Under-Graduates" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><Faculties></Faculties></TabPanel>
        <TabPanel value="2"><Graduates></Graduates></TabPanel>
        <TabPanel value="3"><UnderGraduates></UnderGraduates></TabPanel>
      </TabContext>
    </Box>
  );
}