import {

    Heading,
    useColorModeValue,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Cart = () => {
    const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
    return (
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={6}
        align="flex-start"
        bg={bgColor}
      >
        <VStack alignItems="flex-start" spacing={3}>
          <Heading size="2xl">Your cart</Heading>   
        </VStack>

      
      </VStack>
    );
  };
  
  export default Cart;


