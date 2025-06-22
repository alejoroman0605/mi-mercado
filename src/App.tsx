import { HashRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
      <Router>
        <Toaster position="bottom-right" reverseOrder={false} />
        <AppRoutes />
      </Router>
  );
}

export default App;
