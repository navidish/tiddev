import './App.css';
import NavBar from './pages/NavBar';
import MainRoutes from './routes/Routes';



function App() {

  return (

    <div
      style={{
        display: 'flex',
      }}
    >
      <MainRoutes />
      <NavBar />
    </div>

  );
}

export default App;
