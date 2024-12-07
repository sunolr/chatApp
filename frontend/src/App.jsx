import "./App.css";
import { Routes, Route } from "react-router-dom"; // Import Routes as well
import { ChakraProvider } from "@chakra-ui/react"; // Add this import
import Homepage from "./Pages/Homepage.jsx";
import ChatPage from "./Pages/ChatPage.jsx";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <ChakraProvider>
      <ChatProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/chats" element={<ChatPage />} />
          </Routes>
        </div>
      </ChatProvider>
    </ChakraProvider>
  );
}

export default App;
