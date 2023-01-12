import { Home } from './views/Home/Home';
import { Provider } from 'react-redux';
import store  from './app/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Home />
      </Provider>
    </div>
  );
}

export default App;
