import './App.css';
import Header from './header.js';
import Profil from './profil.js';
import Sidebar from './sidebar.js';
import logo from'./logo.svg'
import avatar from'./elon.jpg'
import post from'./elon_mini.jpg'
function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Profil/>
    </div>
  );
}
export default App;
