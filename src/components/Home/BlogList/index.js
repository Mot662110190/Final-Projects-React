import React, { useState, useEffect } from 'react';
import BlogItem from './BlogItem';
import styled from 'styled-components';
import axios from 'axios';

const BlogList = ({ blogs }) => {
console.log("blogs::", blogs );

  // ใช้ useEffect เพื่อดึงข้อมูลจาก REST API
  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await axios.get('https://apimocha.com/contentzz/all');
  //       setBlogs(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching blogs', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

  // if (loading) {
  //   return <p>Loading blogs...</p>;
  // }

  return (
    <StyledBlogList>
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
      ) : (
        <p>No blogs available</p>
      )}
    </StyledBlogList>
  );
};


// Styled-component สำหรับจัดการสไตล์
const StyledBlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default BlogList;
