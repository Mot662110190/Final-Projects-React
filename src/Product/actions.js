import { createAction } from '@reduxjs/toolkit';

export const addBlog = createAction('ADD_BLOG');
export const updateBlog = createAction('UPDATE_BLOG');
export const deleteBlog = createAction('DELETE_BLOG');
export const fetchblog = createAction('FETCH_BLOG');