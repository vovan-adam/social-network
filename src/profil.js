import './App.css';
import avatar from'./elon.jpg'
import Posts from './posts.js'
function Profil(){
  return(
    <div className="profil">
      <div className="me">
        <img className="avatar" src={avatar} alt=""/>
        <div className="profil-details">
            <p className="name">Elon Mask</p>
            <p className="status"><span>Status: </span> Youn are not me, I am not you...</p>
            <p className="motherland"><span>Motherland: </span> Africa</p>
            <p className="Job"><span>Job: </span>Pizza deliver</p>
            <p className="hobby"><span>Hobby: </span>Technikal engineering</p>
        </div>
      </div>
      <Posts/>
    </div>
  );
}
export default Profil;