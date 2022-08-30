import { FaSun, FaMoon } from 'react-icons/fa';
import {
  Box,
  IconButton,
  useColorMode,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react';

const NavThemeChanger = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent="space-between" alignItems="center" borderBottom="1px">
      <Spacer />
      <Heading>Family Planner</Heading>
      <Spacer />
      <Box textAlign="right" py={4}>
        <IconButton
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </Box>
    </Flex>
  );
};

export default NavThemeChanger;
