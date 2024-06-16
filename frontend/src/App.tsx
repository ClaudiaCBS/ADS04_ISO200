import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Rotas } from "./routes/routes";
import NavBar from "./components/navbar";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Rotas></Rotas>
      </Router>
    </AuthProvider>
  );
}

export default App;
