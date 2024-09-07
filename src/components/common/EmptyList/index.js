import React from 'react';
import styled from 'styled-components';

const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src='/assets/images/13525-empty.gif' alt='empty' />
  </div>
);

export default styled(EmptyList)`
 .emptyList-wrap {
  display: flex;
  justify-content: center;
}
.emptyList-wrap img {
  max-width: 250px;
  width: 100%;
}

`;
