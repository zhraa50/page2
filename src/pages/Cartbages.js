import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Cart from "../componets/Cart";





const CartPage = () => {
  return (
    <div>
      {" "}
      <Container maxW="container.xl" p="10">
        <Flex
          h={{ base: "auto", md: "100vh" }}
          py={[0, 10, 20]}
          direction={{
            base: "column-reverse",
            md: "row",
          }}

        >
     
          <Cart />
        </Flex>
      </Container>
    </div>
  );
};

export default CartPage;





