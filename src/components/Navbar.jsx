import { Flex, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      bg="teal"
      color="white"
      width="100vw"
      height="50px"
      mb="20px"
    >
      <Box flex="1">
        <Heading as="h1" size="md" paddingLeft="1rem">
          Network Call Practice
        </Heading>
      </Box>

      <Box flex="1" display="flex" justifyContent="center">
        <Box display="inline-block" mx={4}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </Box>
        <Box display="inline-block" mx={4}>
          <Link
            to="/register"
            style={{ color: "white", textDecoration: "none" }}
          >
            Register
          </Link>
        </Box>
        <Box display="inline-block" mx={4}>
          <Link to="/tweets" style={{ color: "white", textDecoration: "none" }}>
            Tweets
          </Link>
        </Box>
        <Box display="inline-block" mx={4}>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Login
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}
