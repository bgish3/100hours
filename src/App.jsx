import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home"

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box>
      <div>
    </div>
      </Box>
    </ChakraProvider>
  );
};



export default App;
