import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
<box> caffe </box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={''}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={''}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>cart</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}



              // import {
              //   Avatar,
              //   Button,
              //   Drawer,
              //   DrawerBody,
              //   DrawerCloseButton,
              //   DrawerContent,
              //   DrawerFooter,
              //   DrawerHeader,
              //   DrawerOverlay,
              //   Flex,
              //   IconButton,
              //   Input,
              //   Menu,
              //   MenuButton,
              //   MenuItem,
              //   MenuList,
              //   useDisclosure,
              // } from "@chakra-ui/react";
              // import React from "react";
              // import { FaBars } from "react-icons/fa";
              
              // const NavBar = () => {
              //   const { isOpen, onOpen, onClose } = useDisclosure();
              //   const btnRef = React.useRef();
              //   return (
              //     <>
              //       <Drawer
              //         isOpen={isOpen}
              //         placement="top"
              //         onClose={onClose}
              //         finalFocusRef={btnRef}
              //       >
              //         <DrawerOverlay />
              //         <DrawerContent>
              //           <DrawerCloseButton />
              //           <DrawerHeader>Create your account</DrawerHeader>
              
              //           <DrawerBody>
              //             <Input placeholder="Type here..." />
              //           </DrawerBody>
              
              //           <DrawerFooter>
              //             <Button variant="outline" mr={3} onClick={onClose}>
              //               Cancel
              //             </Button>
              //             <Button colorScheme="blue">Save</Button>
              //           </DrawerFooter>
              //         </DrawerContent>
              //       </Drawer>
              //       <Flex
              //         h="75px"
              //         bg="brand.800"
              //         justify="space-between"
              //         align="center"
              //         px={4}
              //       >
              //         <IconButton
              //           onClick={onOpen}
              //           ref={btnRef}
              //           variant="ghost"
              //           color="white"
              //           _hover={{ bg: "main.400" }}
              //           fontSize="3xl"
              //         >
              //           <FaBars />
              //         </IconButton>
              //         <Menu>
              //           <MenuButton>
              //             <Avatar />
              //           </MenuButton>
              //           <MenuList>
              //             <MenuItem>Profile</MenuItem>
              //             <MenuItem>Setting</MenuItem>
              //             <MenuItem>Cart</MenuItem>
                          
            
            
              //           </MenuList>
              //         </Menu>
            
              //       </Flex>
              //     </>
              //   );
              // };
              
              // export default NavBar;