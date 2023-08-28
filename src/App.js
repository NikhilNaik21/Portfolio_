import './App.css';
 import Profile from './PortfolioContainer/Home/Profile/Profile';
 import Index from '../src/PortfolioContainer/About/Index'
import { ChakraProvider } from '@chakra-ui/react';
import Projects from './PortfolioContainer/Projects/Project'

function App() {
  return (
    <div className="App ">
       <Profile></Profile>

       <ChakraProvider>

         <Index></Index>
         <Projects></Projects>
        </ChakraProvider>
     
    </div>
  );
}

export default App;
