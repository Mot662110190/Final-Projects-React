import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Blog = ({ className }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className={className}>
          <div className='blog-wrap'>
            <header>
              <p className='blog-date'>Published {blog.createdAt}</p>
              <h1>{blog.title}</h1>
              <div className='blog-subCategory'>
                {blog.subCategory.map((category, i) => (
                  <div key={i}>
                    <Chip label={category} />
                  </div>
                ))}
              </div>
            </header>
            <img src={blog.cover} alt='cover' />
            <p className='blog-desc'>{blog.description}</p>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

// Styled component
const StyledBlog = styled(Blog)`
  .blog-wrap {
    max-width: 700px;
    margin: 0 auto;
  }

  .blog-goBack {
    text-decoration: none;
    font-size: 0.8rem;
    color: #a9a9a9;
    font-weight: 500;
    margin-bottom: 2rem;
    display: block;
  }
  
  .blog-wrap header {
    text-align: center;
  }

  .blog-date {
    font-size: 0.8rem;
    color: #a9a9a9;
    font-weight: 500;
  }

  .blog-wrap img {
    width: 100%;
  }

  .blog-subCategory {
    display: flex;
    justify-content: center;
  }
  
  .blog-subCategory > div {
    margin: 1rem;
  }
  
  .blog-desc {
    padding: 1rem;
    margin-top: 1.5rem;
  }
`;

export default StyledBlog;
