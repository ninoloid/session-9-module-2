import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Form, Field, ErrorMessage } from "formik";

export default function RegisterForm() {
  return (
    <FormControl
      maxW="400px"
      mx="auto"
      mt="4"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="blue.100"
    >
      <Form>
        <Field name="name" autoComplete="off">
          {({ field }) => (
            <FormControl mb="4">
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                {...field}
                id="name"
                placeholder="Enter your name"
                type="text"
                bg="white"
              />
            </FormControl>
          )}
        </Field>
        <ErrorMessage component="div" name="name" style={{ color: "red" }} />

        <Field name="email" autoComplete="off">
          {({ field }) => (
            <FormControl mb="4">
              <FormLabel htmlFor="email">Name</FormLabel>
              <Input
                {...field}
                id="email"
                placeholder="Enter your email"
                type="email"
                bg="white"
              />
            </FormControl>
          )}
        </Field>
        <ErrorMessage component="div" name="email" style={{ color: "red" }} />

        <Field name="password" autoComplete="off">
          {({ field }) => (
            <FormControl mb="4">
              <FormLabel htmlFor="password">Name</FormLabel>
              <Input
                {...field}
                id="password"
                placeholder="Enter your password"
                type="password"
                bg="white"
              />
            </FormControl>
          )}
        </Field>
        <ErrorMessage
          component="div"
          name="password"
          style={{ color: "red" }}
        />

        <Button colorScheme="teal" type="submit" width="100%">
          Register
        </Button>
      </Form>
    </FormControl>
  );
}
