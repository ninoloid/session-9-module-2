import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/userReducer";

export default function UserList() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Center>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>NAME</Th>
              <Th>EMAIL</Th>
              <Th>PASSWORD</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((row, index) => (
              <Tr key={index}>
                <Td>{row.name}</Td>
                <Td>{row.email}</Td>
                <Td>{row.password}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
}
