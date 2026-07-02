import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />
      <Home />
    </>
  );
};

export default App;