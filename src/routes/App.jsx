import Namer from "../Namer";
import Navbar from "../Navbar";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.2 }}
    >
      <Navbar />
      <Namer />
    </motion.div>
  );
}

export default App;
