import { v4 as uuidv4 } from "uuid";

function usersData() {
  return [
    {
      name: "Sahar",
      username: "saharsdr",
      password: "123",
      phone: "09168982421",
      id: uuidv4(),
    },
    {
      name: "Sahar1",
      username: "saharsdr1",
      password: "123",
      phone: "091689824211",
      id: uuidv4(),
    },
    {
      name: "Sahar2",
      username: "saharsdr2",
      password: "123",
      phone: "091689824212",
      id: uuidv4(),
    },
    {
      name: "Sahar3",
      username: "saharsdr3",
      password: "123",
      phone: "091689824213",
      id: uuidv4(),
    },
    {
      name: "Sahar4",
      username: "saharsdr4",
      password: "123",
      phone: "091689824214",
      id: uuidv4(),
    },
  ];
}

export default usersData;
