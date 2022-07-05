import {
  Flex,
    Image,
    Stack,
    Text,
    Button,
    Link
    
  } from "@chakra-ui/react";
  
  const PostPage = () => {
    return (

        <Flex justify="center" align="center">

        <Stack width="320px" boxShadow="md" borderRadius="xl">
          <Image src="https://img.freepik.com/free-vector/realistic-coffee-background-with-drawings_79603-607.jpg?t=st=1656983798~exp=1656984398~hmac=ae8a840cb32f8602e5376dc9128cabefb354b1f5ac96e28fb3b303ee4eee5d3c&w=900" alt="" />
          <Stack p="2">  
          <Text>
           Details
          </Text>
          <Text>
          Details
          </Text>

          
              <Button alignSelf="flex-end" size="sm" as={Link} to="/room">
BookRoom              </Button>
         
        </Stack>
        </Stack>
        </Flex>
     
    );
  };
  
  export default PostPage;

