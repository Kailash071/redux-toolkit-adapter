
// import AddPostForm from "./features/posts/AddPostForm";
// import SinglePostPage from "./features/posts/SinglePostPage";
// import EditPostForm from "./features/posts/EditPostForm";
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';
import PostLists from "./components/posts/PostLists";
import PostAddForm from "./components/posts/PostAddForm";
import SinglePost from "./components/posts/SinglePost";
import PostEdit from "./components/posts/PostEdit";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>

      <Route index element={<PostLists />} />

      <Route path="post">
        <Route index element={<PostAddForm/>} />
         <Route path=":postId" element={<SinglePost />} />
       <Route path="edit/:postId" element={<PostEdit />} />
      </Route>

    </Route>
  </Routes>
  );
}

export default App;
