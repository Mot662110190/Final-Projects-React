import { createReducer } from '@reduxjs/toolkit';
import {

  addBlog,    // เพิ่ม
  updateBlog, // เพิ่ม
  deleteBlog,  // เพิ่ม
  fetchblog
} from './actions';

let currentProductId = 9;
let currentBlogId = 5; // ตัวอย่าง ID สำหรับ Blog

const productReducers = createReducer([], (builder) => {
  builder
    .addCase(addBlog, (state, action) => {
      state.push({ id: ++currentBlogId, ...action.payload });
    })
    .addCase(updateBlog, (state, action) => {
      const blogIndex = state.findIndex(
        (blog) => blog.id === action.payload.id
      );
      if (blogIndex !== -1) {
        state[blogIndex] = action.payload;
      }
    })
    .addCase(deleteBlog, (state, action) => {
      const blogIndex = state.findIndex(
        (blog) => blog.id === action.payload.id
      );
      if (blogIndex !== -1) {
        state.splice(blogIndex, 1);
      }
    })
    .addCase(fetchblog, (state, action) => {
      return action.payload;
    });
   
});

export default productReducers;


