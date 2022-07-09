import "./App.css";
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import RouterPage from "./routes/RouterPage";

function App() {
  return (
    <>
      <NavBar />
      <RouterPage />
      <Footer />
    </>
  );
}

export default App;
