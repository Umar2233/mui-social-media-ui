import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'
import Add from './components/Add';
import {DarkTheme} from "./Context"
import { useContext } from 'react';

function App() {

  const {mode} = useContext(DarkTheme)

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme} >
      <Box bgcolor={"background.default"} color={"text.primary"} >
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between' >
          <Sidebar />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
