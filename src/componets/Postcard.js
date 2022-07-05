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
          <Image src="https://img.freepik.com/free-photo/coffee-beans-with-props-making-coffee_1220-4536.jpg?t=st=1657036199~exp=1657036799~hmac=03b5f2e924a0703924432572a145adc8099798b441e86463e7168445ed3f8969&w=900" alt="image" />
          <Stack p="2">
           
            <VStack align="flex-start">
              <Heading fontSize="lg">CaffeRoz</Heading>
          
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