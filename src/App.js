import Header from "./components/Header/Header";
import Game from "./components/Game/Game";

import { NotificationContainer } from "react-notifications";
import './styles/notifications.css';


function App() {
  return (
    <div className="app">
        <Header />
        <Game />
        <NotificationContainer />
    </div>
  );
}

export default App;
