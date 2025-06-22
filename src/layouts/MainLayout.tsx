import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-4">
            <Outlet />
        </main>
        <Footer />
    </div>
  );
}