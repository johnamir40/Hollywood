import { Outlet } from "react-router-dom";
import Header from "../components/main-components/Header";
import Footer from "../components/main-components/Footer";

export default function MainLayout() {
  return (
    <div className=" w-full h-dvh">
      <Header />

      <main className="pt-19">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
