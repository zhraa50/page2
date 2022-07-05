import {
    Flex,
      Image,
      Stack,
    
      Button,
      Link,
      VStack,
      Heading
      
      
    } from "@chakra-ui/react";
  const RoomPage = () => {
    return (
      <Flex justify="center" align="center">
        <Stack width="320px" boxShadow="md" borderRadius="xl">

        <Image src="https://as2.ftcdn.net/v2/jpg/02/13/72/67/1000_F_213726700_LEkcVEc8jahkQYHEskYvfeOY8Tu68vwJ.jpg" alt="" />
          <Stack p="2">
          
            <VStack align="flex-start">
              <Heading fontSize="lg">RozeCaffe</Heading>
           
            
              <Button alignSelf="flex-end" size="sm" as={Link} to="/room">
            booking          
           </Button>
            </VStack>
          </Stack>
        </Stack>
      </Flex>
    );
  };
  
  export default RoomPage;