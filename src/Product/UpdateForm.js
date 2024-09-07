import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateBlog, deleteBlog } from './actions';  // ตรวจสอบว่า actions สำหรับบล็อกมีอยู่

export default function UpdateForm() {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogs); // สมมติว่า state มี blogs อยู่
  const blog = blogs.find((blog) => blog.id === Number(id));

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorAvatar, setAuthorAvatar] = useState('');
  const [cover, setCover] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setDescription(blog.description);
      setAuthorName(blog.authorName);
      setAuthorAvatar(blog.authorAvatar);
      setCover(blog.cover);
      setCategory(blog.category);
    }
  }, [blog]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (title && description && authorName && cover && category) {
      dispatch(updateBlog({ id: blog.id, title, description, authorName, authorAvatar, cover, category }));
      navigate('/');
    } else {
      alert('Please fill out all fields');
    }
  };

  const onDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this blog?');
    if (confirmed) {
      dispatch(deleteBlog({ id: blog.id }));
      navigate('/');
    }
  };

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      <h1>Update Blog</h1>
      <form id="update-form" onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="authorName">Author Name</label>
          <input
            name="authorName"
            type="text"
            id="authorName"
            value={authorName}
            onChange={(event) => setAuthorName(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="authorAvatar">Author Avatar URL</label>
          <input
            name="authorAvatar"
            type="text"
            id="authorAvatar"
            value={authorAvatar}
            onChange={(event) => setAuthorAvatar(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="cover">Cover Image URL</label>
          <input
            name="cover"
            type="text"
            id="cover"
            value={cover}
            onChange={(event) => setCover(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="category">Category</label>
          <input
            name="category"
            type="text"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>

        <button type="submit">Update Blog</button>
        <button
          type="button"
          className="UpdateForm__delete-button"
          onClick={onDelete}
        >
          Delete Blog
        </button>
      </form>
    </>
  );
}

