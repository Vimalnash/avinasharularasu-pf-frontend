
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { UseAppContext } from './Context/AppContext'
import { ProjectDetail } from './Components/ProjectDetail';

function App() {
  const {theme} = UseAppContext();
  return (
    <>
    <div data-theme={theme}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/project/:projDetail" element={<ProjectDetail />} />
      </Routes>
    </div>
    </>
  )
};

export default App;
