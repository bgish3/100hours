import { Box } from '@chakra-ui/react';
import Nav from '../components/Nav';
import Button from '../components/Button';
import Form from '../components/Form';

//Add color changer

const Home = () => {
  return (
    <Box>
      <Nav />
      <Box display="flex" justifyContent="center" mt="5rem">
        <Button buttonColor="green.300" text="Add Task" />
      </Box>
      <Box
        width="15rem"
        border="1px solid white"
        p="2rem"
        borderRadius="10px"
        h="30rem"
      >
        <Form />
      </Box>
    </Box>
  );
};

export default Home;
