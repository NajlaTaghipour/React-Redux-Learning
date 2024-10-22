import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import MilkContainer from "./components/MilkContainer";
import UserLists from "./components/UserLists";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <MilkContainer />
      <hr />
      <UserLists />
    </Provider>
  );
}

export default App;
