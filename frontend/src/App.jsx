import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/main-components/ScrollToTop";
import Homepage from "./Pages/Homepage";
import Films from "./Pages/Films";
import Loginpage from "./Pages/Loginpage";
import ContactPage from "./Pages/ContactPage";
import About from "./Pages/About";
import NotFound from "./Pages/Page404";
import MainLayout from "./Layouts/MainLayout";
import LoginLayout from "./Layouts/LoginLayout";
import FilmDetails from "./Pages/FilmDetails";
import Locations from "./Pages/Locations";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:movieSlug" element={<FilmDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Loginpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
