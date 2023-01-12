import { Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ToDo from './Components/ToDo/ToDo';
import SettingsForm from "./Components/SettingsForm/SettingsForm";

const App = () => {
  
  return (
    <>
    <Header />
      <Routes>
        <Route exact path="/" element={<ToDo />} />
        <Route path="/settings" element={<SettingsForm />} />
      </Routes>
    <Footer />
    </>
    );
}

export default App;
