import { BellIcon, SettingsIcon, UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { memo, useCallback } from "react";

function TopBarMenu() {
  const { data: session, status } = useSession();

  const handleLogout = useCallback(async () => {
    await signOut({ callbackUrl: "/auth/signin", redirect: true });
  }, []);

  return (
    <HStack>
      <Box>
        <Tag variant="solid" colorScheme="teal">
          v0.1.0
        </Tag>
      </Box>
      {status === "authenticated" && (
        <>
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
                icon={
                  <Avatar
                    size="sm"
                    name="user"
                    src={session?.user?.image || ""}
                  >
                    <AvatarBadge bg="green" boxSize="1em" />
                  </Avatar>
                }
                variant="ghost"
              />
              <MenuList>
                <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
                <MenuItem icon={<UnlockIcon />} onClick={handleLogout}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </>
      )}
    </HStack>
  );
}

export default memo(TopBarMenu);
