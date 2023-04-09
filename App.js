import logo from './logo.svg'
import './App.css'
import nav from './components/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import footer from './components/footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav/>
      <Routes>
            <Route path ="/" element={<h1>PRODUCT COMPONENTS</h1>} />
            <Route path ="/add" element={<h1>ADD COMPONENTS</h1>} />
            <Route path ="/update" element={<h1>UPDATE COMPONENTS</h1>} />
            <Route path ="/logout" element={<h1>LOGOUT COMPONENTS</h1>} />
            <Route path ="/profile" element={<h1>PROFILE COMPONENTS</h1>} />
      </Routes>  
      </BrowserRouter>
      <footer/>
    </div>
  );
}

export default App;
