import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { addBlog } from './actions';  // โปรดตรวจสอบว่ามี action นี้แล้ว

function AddForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorAvatar, setAuthorAvatar] = useState('');
  const [cover, setCover] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    // เรียกใช้ action addBlog เพื่อเพิ่มข้อมูลบล็อก
    dispatch(addBlog({ title, description, authorName, authorAvatar, cover, category }));
    navigate('/');  // หลังจากเพิ่มสำเร็จ นำผู้ใช้กลับไปที่หน้าแรก
  }

  return (
    <>
      <h1>Add New Blog</h1>
      <form onSubmit={onSubmit}>
        <div id="create-form" className="input-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="authorName">Author Name</label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(event) => setAuthorName(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="authorAvatar">Author Avatar URL</label>
          <input
            type="text"
            id="authorAvatar"
            value={authorAvatar}
            onChange={(event) => setAuthorAvatar(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="cover">Cover Image URL</label>
          <input
            type="text"
            id="cover"
            value={cover}
            onChange={(event) => setCover(event.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>

        <button type="submit">Add Blog</button>
      </form>
    </>
  );
}

export default AddForm;

