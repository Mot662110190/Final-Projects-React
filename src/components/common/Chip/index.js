import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Chip = ({ label }) => <p className='chip'>{label}</p>;

Chip.propTypes = {
  label: PropTypes.string.isRequired,  // กำหนดให้ label เป็น string และต้องระบุค่าเสมอ
};

export default styled(Chip)`
 .chip {
  font-size: 0.7rem;
  background: linear-gradient(to right, #6190e8, #a7bfe8);
  color: #fff;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  width: fit-content;
  text-transform: capitalize;
}
`;
