import './App.css';
import NavBar from './pages/NavBar';
import store from './redux/store';
import MainRoutes from './routes/Routes';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
        }}
      >
        <MainRoutes />
        <NavBar />
      </div>
    </Provider>
  );
}

export default App;
