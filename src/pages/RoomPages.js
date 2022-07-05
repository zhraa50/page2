import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import React from "react";

 import {
    Flex,
      Image,
      Stack,
      Button,
      VStack,
      Heading,
      useDisclosure,
      AlertDialog,
      AlertDialogFooter,
      AlertDialogHeader,
      AlertDialogContent,
      AlertDialogOverlay
  
    } from "@chakra-ui/react";

    
  const RoomPages = () => {

    const [startDate, setStartDate] = useState(new Date());
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()


    return (
      <Flex justify="center" align="center">
        <Stack width="320px" boxShadow="md" borderRadius="xl">

        <Image src="https://as2.ftcdn.net/v2/jpg/02/13/72/67/1000_F_213726700_LEkcVEc8jahkQYHEskYvfeOY8Tu68vwJ.jpg" alt="" />
          <Stack p="2">
          
            <VStack align="flex-start">
              <Heading fontSize="lg">RozeCaffe</Heading>
              <Heading fontSize="lg">price :</Heading>
              <Heading fontSize="lg">capcity :</Heading>


        
           <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
      justify = "center"
      align="center"
      
    />
      
     
     <Button colorScheme='red' onClick={onOpen}>
      Booking
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Booked
            </AlertDialogHeader>

      

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
           
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

            </VStack>
          </Stack>
        </Stack>
      </Flex>
    );
  };
  
  export default RoomPages;