import { Box } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Box minH={"100vh"}>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
