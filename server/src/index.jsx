//import { createRoot } from 'react-dom/client';
import { useRoutes } from "react-router-dom";
import AppRoute from "./config/app-route.jsx";

// bootstrap
import "bootstrap";

// css
import "@fortawesome/fontawesome-free/css/all.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./index.scss";
import "./scss/react.scss";
import "bootstrap-social/bootstrap-social.css";
import User from "./utils/user";
import { AppSettings } from "./config/app-settings.jsx";

const { getRole } = new User();

function App() {
  const {role} = getRole();
 
  const element = useRoutes(AppRoute);

  return (
    <AppSettings.Provider value={{role}}>
      {element}
    </AppSettings.Provider>
    
  )
}

export default App;
