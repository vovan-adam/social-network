import './App.css';

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


function Header(){
  return(
    <div className="header">Header</div>
  );
}
function Sidebar(){
  return(
    <div className="sidebar">Sidebar</div>
  );
}
function Profil(){
  return(
    <div className="profil">Profil</div>
  );
}
