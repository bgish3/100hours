import {
  Link,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  Heading,
} from '@chakra-ui/react';
import Nav from '../components/Nav';

const Login = () => {
  return (
    <Box>
      <Nav />
      <Flex
        minHeight="90vh"
        width="full"
        align="center"
        justifyContent="center"
      >
        <Box
          borderWidth={1}
          px={4}
          width="full"
          maxWidth="500px"
          borderRadius={4}
          textAlign="center"
          boxShadow="lg"
        >
          <Box p={4}>
            <LoginHeader />
            <LoginForm />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

const LoginHeader = () => {
  return (
    <Box pt="2.5rem" textAlign="center">
      <Heading>Sign In to Your Account</Heading>
    </Box>
  );
};

const LoginForm = () => {
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email address" />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
          <Box>
            <Link color={'teal.300'}>Forgot your password?</Link>
          </Box>
        </Stack>

        <Button fontWeight="bold" color={'teal.300'} width="full" mt={4}>
          Sign In
        </Button>
        <Box textAlign="center" pt="2rem">
          <div>
            Don't have an account?{' '}
            <Link fontWeight="bold" color={'teal.300'}>
              Signup
            </Link>
          </div>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
