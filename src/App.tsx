import './App.css';
import { Provider } from "react-redux";

import store from './redux/store';
import ClientView from './view/client';

function App() {
  return (
    <Provider store={store}>
      <ClientView />
    </Provider>
  );
}

export default App;
