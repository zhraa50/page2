import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { Link } from "react-router-dom";
  
  const PostCard = () => {
    return (
      <Flex justify="center" align="center">
        <Stack width="320px" boxShadow="md" borderRadius="xl">

        <Image src="https://img.freepik.com/free-vector/realistic-coffee-background-with-drawings_79603-607.jpg?t=st=1656983798~exp=1656984398~hmac=ae8a840cb32f8602e5376dc9128cabefb354b1f5ac96e28fb3b303ee4eee5d3c&w=900" alt="" />
          <Stack p="2">
          
            <VStack align="flex-start">
              <Heading fontSize="lg">RozeCaffe</Heading>
           
            
              <Button alignSelf="flex-end" size="sm" as={Link} to="/post">
                View Post
              </Button>
            </VStack>
          </Stack>
        </Stack>
      </Flex>
    );
  };
  
  export default PostCard;