import { Box } from '@chakra-ui/react';
import Nav from '../components/Nav';
import Button from '../components/Button';
import Form from '../components/Form';

// Add color changer

const Home = () => {
  return (
    <Box>
      <Nav />
      <Box display="flex" justifyContent="center" mt="5rem">
        <Button buttonColor="green.300" text="Add Task" />
      </Box>
      <Box>
        <Form />
      </Box>
    </Box>
  );
};

export default Home;
