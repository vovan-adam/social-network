import './App.css';
import post from'./elon_mini.jpg'
function Post(props){
  return(
        <div className="post">
            <img src={post} alt=""/>
            <span>{props.name}</span>
            <p>{props.message}</p>
        </div>
  );
}
export default Post;