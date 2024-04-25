// PostList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to Our Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
            <p>{post.published_date}</p>
            <p>{post.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;


// PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostDetail() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    axios.get(`/api/posts/${slug}/`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Published on: {post.published_date}</p>
      <p>Author: {post.author}</p>
      <a href="/">Back to All Posts</a>
    </div>
  );
}

export default PostDetail;
