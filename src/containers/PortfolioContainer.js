import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  listStocks = () => {
    return this.props.portfolio.map(stock => {
      return <Stock stock={stock} onClick={this.props.onClick}/>
    })
  }


  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.listStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
