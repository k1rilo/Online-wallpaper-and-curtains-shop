import React from 'react';
import PropTypes from 'prop-types';

export default function Products({ id, name, cost, img }) {
  return(
    <div data-id={id} className='product flex'>
      <img src={img} />
      <h3>{name}</h3>
      <span>{cost}&#8381;</span>
      <button>Добавить</button>
    </div>
  )
}

Products.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
}
