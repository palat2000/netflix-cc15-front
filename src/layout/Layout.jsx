import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  // const [search, setSearch] = useState(null);
  return (
    <div className="flex flex-col h-[100vh]">
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
