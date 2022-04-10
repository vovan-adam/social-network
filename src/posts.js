import './App.css';
import Post from'./post.js'
function Posts(){
  return(
    <div className="posts">
        <h2>My posts</h2>
        <input placeholder="enter text" type="text"/>
        <button>Add post</button>
        <Post message="Igor is Igor" name="Lux"/>
        <Post message="Igor is a cat" name="Ivan"/>
        <Post message="Igor is a dog" name="Makar"/>
        <Post message="Igor is loch" name="Alex"/>
        <Post message="Igor is ejnk" name="Stefan"/>
     </div>
  );
}
export default Posts;