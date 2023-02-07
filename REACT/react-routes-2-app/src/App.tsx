import "./App.css";

import { BorderContainer } from "./components/BorderContainer/BorderContainer";
import { AccountInfo } from "./components/AccountInfo/AccountInfo";
import { AccountInfoContainer } from "./components/AccountInfo/AccountInfo.styled";

function App() {
  return (
    <div className="App">
      <BorderContainer>
        <p>Sveiki</p>
      </BorderContainer>

      <AccountInfoContainer>
        <AccountInfo account={{ name: "Loreta", birthdate: new Date() }} />
      </AccountInfoContainer>
    </div>
  );
}

export default App;
