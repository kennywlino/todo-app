import { Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ToDo from './Components/ToDo/ToDo';
import SettingsForm from "./Components/SettingsForm/SettingsForm";
import Auth from './Components/Auth';

const App = () => {
  
  return (
    <>
    <Header />
      <Auth capability="read">
      <Routes>
        <Route exact path="/" element={<ToDo />} />
        <Route path="/settings" element={<SettingsForm />} />
      </Routes>
      </Auth>
    <Footer />
    </>
    );
}

export default App;
