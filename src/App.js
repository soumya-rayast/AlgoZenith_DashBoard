import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Learn from './Pages/Learn'
import Forums from './Pages/Forums'
import Upskill from './Pages/Upskill'
import Contest from './Pages/Contest'
import Leaderboard from './Pages/Leaderboard'
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <Router>
      <div>
        <div className="flex w-full">
          <Sidebar />
          <div className='w-[70%] my-6 mx-auto ml-[max(1vw,25px)] '>
            <Navbar />
            <div className=' text-base mt-10 border-[1px] border-[rgba(164,230,255,1)] rounded-lg min-h-screen'>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/learn' element={<Learn />} />
                <Route path='/forums' element={<Forums />} />
                <Route path='/upskill' element={<Upskill />} />
                <Route path='/contest' element={<Contest />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
