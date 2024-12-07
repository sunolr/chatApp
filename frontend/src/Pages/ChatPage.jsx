import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
//import { useState } from "react";
////import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";

const Chatpage = () => {
  //const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {/*user && <Chatbox />*/}
      </Box>
    </div>
  );
};

export default Chatpage;
