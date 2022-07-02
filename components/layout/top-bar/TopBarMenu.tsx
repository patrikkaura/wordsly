import { memo } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Tag,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  UnlockIcon,
  SettingsIcon,
  BellIcon,
} from '@chakra-ui/icons';

function TopBarMenu() {
  return (
    <HStack>
      <Box>
        <Tag variant="solid" colorScheme="teal">
          v0.1.0
        </Tag>
      </Box>
      <Box>
        <IconButton
          size="lg"
          aria-label="notification"
          icon={<BellIcon w={5} h={5} />}
          variant="ghost"
          isRound
        />
      </Box>
      <Box>
        <Menu>
          <MenuButton
            isRound
            size="lg"
            as={IconButton}
            aria-label="menu"
            icon={<HamburgerIcon w={5} h={5} />}
            variant="ghost"
          />
          <MenuList>
            <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
            <MenuItem icon={<UnlockIcon />}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </HStack>
  );
}

export default memo(TopBarMenu);
