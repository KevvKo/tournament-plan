import './App.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ParticipantContext from './context/ParticipantContext';

// Components
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TournamentPlanView from './views/tournamentPlan/tournamentPlanView';
import ParticipantsView from './views/participants/participantsView';

function App() {

  const [value, setValue] = React.useState(0);
  const [ participants, setParticipants ] = useState(
    [
        'Eisenhüttenstädter Räuber',
        'Berliner Kojoten',
        'Jenenser Flaschen',
        'Erfurter Assis',
        'Eisenhüttenstädter Räuber',
        'Berliner Kojoten',
        'Jenenser Flaschen',
        'Erfurter Assis',
        'Eisenhüttenstädter Räuber',
        'Berliner Kojoten',
        'Jenenser Flaschen',
        'Erfurter Assis',
        'Eisenhüttenstädter Räuber',
        'Berliner Kojoten',
        'Jenenser Flaschen',
        'Erfurter Assis',
    ]
  )
  
  const defaultValues = {
    participants: participants,
    setParticipants: setParticipants
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <ParticipantContext.Provider value={defaultValues}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Teilnehmer" {...a11yProps(0)} />
              <Tab label="Turnierplan" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ParticipantsView />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TournamentPlanView />
          </TabPanel>
        </Box>
      </ParticipantContext.Provider>
    </div>
  );
}

export default App;


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
