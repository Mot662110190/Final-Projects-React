import React from 'react';
import BlogItem from './BlogItem';
import styled from 'styled-components';

const BlogList = ({ blogs }) => {
  console.log(blogs); // ตรวจสอบข้อมูลที่ถูกส่งเข้ามา

  return (
    <StyledBlogList>
      {Array.isArray(blogs) && blogs.length > 0 ? (
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
