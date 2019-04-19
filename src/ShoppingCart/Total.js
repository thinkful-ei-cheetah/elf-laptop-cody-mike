// const total = Object.keys(this.state.selected)
//   .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0); 


import React from 'react';
import App from './App';


class Total extends App {
  render(){
     const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);
      return (
        
        <div className="summary__option__cost">
        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(total)}
    </div>
  );
}

}
export default Total;