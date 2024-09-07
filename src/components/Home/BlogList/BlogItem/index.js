import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import styled from 'styled-components';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
  className,
}) => {
  return (
    <div className={className}>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape({
    description: PropTypes.string.isRequired,  
    title: PropTypes.string.isRequired,  
    createdAt: PropTypes.string.isRequired, 
    authorName: PropTypes.string.isRequired,  
    authorAvatar: PropTypes.string.isRequired,  
    cover: PropTypes.string.isRequired,  
    category: PropTypes.string.isRequired,  
    id: PropTypes.number.isRequired, 
  }).isRequired,
  className: PropTypes.string.isRequired,  
};

const StyledBlogItem = styled(BlogItem)`
  display: flex;
  flex-direction: column;

  .blogItem-cover {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin: 0.5rem 0 1rem 0;
    flex: 1;
  }

  .blogItem-desc {
    position: relative;
    max-height: 50px;
    overflow: hidden;
    padding-right: 0.6rem;
    font-size: 0.8rem;
    color: #a9a9a9;
  }

  .blogItem-desc::before {
    position: absolute;
    content: '...';
    bottom: 0;
    right: 0;
  }

  footer {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    justify-content: space-between;
  }

  .blogItem-link {
    text-decoration: none;
    color: inherit;
  }

  .blogItem-author {
    display: flex;
    align-items: center;
  }

  .blogItem-author img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 0.5rem;
  }

  .blogItem-author p {
    font-size: 0.6rem;
    color: #a9a9a9;
    font-weight: 600;
  }
`;

export default StyledBlogItem;
