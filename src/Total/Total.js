// const total = Object.keys(this.state.selected)
//   .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0); 


import React from 'react';

function Total(props){
  const total = Object.keys(props)
    .reduce((acc, curr) => acc + props[curr].cost, 0);
  return (
    <div className="summary__total">
      <div className="summary__total__lable">Your Price: </div>
      <div className="summary__total__value">{total}</div>
      <div className="summary__option__cost">
        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(total)}
      </div>
    </div>
  );
}

export default Total;