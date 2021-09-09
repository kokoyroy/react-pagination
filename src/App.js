import React, { useState, useEffect } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const fetchPosts = async () => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    setPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
    console.log(posts);
  }, []);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const props = {
    loading, currentPosts, currentPage, postsPerPage
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My blog</h1>
      <Posts {...props} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} changePage={setCurrentPage} />
    </div>
  );
}


export default App;
