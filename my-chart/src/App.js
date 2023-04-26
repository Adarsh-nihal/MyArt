import logo from './logo.svg';
import './App.css';
import { Box, Text } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer';
import Nav from './Nav';

function App() {
  return (
    <Box>
      {/* <Navbar />
      <AllRoutes />
      <Footer/> */}
      <Nav/>
    </Box>
  );
}

export default App;
