import { FaSun, FaMoon } from 'react-icons/fa';
import {
  Box,
  IconButton,
  useColorMode,
  Flex,
  Heading,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from '@chakra-ui/react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const NavThemeChanger = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justify="space-between" alignItems="center" borderBottom="1px">
      <Box ml="2rem">
        <Button buttonColor="blue.500" text="Share"></Button>
      </Box>
      <Spacer />
      <Box>
        <Heading ml="5rem">Family Planner</Heading>
      </Box>
      <Spacer />
      <Box p="2rem" textAlign="right" py={4}>
        <Menu>
        <MenuButton>
          <Avatar mr="1rem" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <IconButton
                icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                onClick={toggleColorMode}
                variant="ghost"
              />
          </MenuItem>
          <MenuItem>
            <Link to="/login">Logout</Link>
          </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default NavThemeChanger;
