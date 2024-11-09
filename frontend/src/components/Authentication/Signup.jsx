import React from 'react'

const Signup = () => {
  return (
    <div>
      signup
    </div>
  )
}

export default Signup

/*
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input} from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import React, { useState } from "react";


const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();

  return (
  <VStack spacing='5px'> 
  <FormControl>
    <FormLabel>
      <Input
      placeholder="Enter Your Name"
      onChange={(e) => setName(e.target.value)}
      />
    </FormLabel>
  </FormControl>
  </VStack>
  );
};

export default Signup;
*/