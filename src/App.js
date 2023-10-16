import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './layout/Dashboard';
import LeadList from './layout/LeadList'
import CreateList from './layout/CreateList'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>

      <main className='d-flex w-100'>
        <div className='bg-light' style={{width: "20%"}}>
          <Sidebar/>
        </div>

        <div>
          <Routes>
            <Route path='/'  element={<Dashboard/>}/>
            <Route path='/leadlist'  element={<LeadList/>}/>
            <Route path='/createlist'  element={<CreateList/>}/>
          </Routes>

        </div>

      </main>
    </div>
  );
}

export default App;
