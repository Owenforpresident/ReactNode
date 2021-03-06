import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";



export default function App() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handlePosts();
  }, []);

  const handlePosts = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "http://localhost:8080/"
      );
    setPosts(result.data);
      console.log(result.data)
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
     setLoading(false);
    }
  };


  return (
    <div className="App">
      <div>
        <h1>Posts</h1>
        {loading ? <p>Posts are loading!</p> :''}
        {error ? <p>{error}</p> : ''}
        <ul>
 {posts? posts.map((post) => (<li key={post.id}>{post.title}</li>)) : ''}
        </ul>
      </div>
    </div>
  );
}