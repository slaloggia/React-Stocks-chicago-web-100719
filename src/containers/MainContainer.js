import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state= {
    stocks: [],
    displayStocks: [],
    portfolio: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json()) 
    .then(stocks => this.setState({stocks: stocks, displayStocks: stocks}))
  }

  handleFilter = (filter) => {
    if (filter !== "All") {
      let filteredStocks = this.state.stocks.filter(stock => stock.type === filter)
      this.setState({displayStocks: filteredStocks})
    }else{
      this.setState({displayStocks: this.state.stocks})
    }
  }

  handleSort = (sort) => {
    let sortedStocks = []
    switch(sort) {
      case "Alphabetically":
        sortedStocks = this.state.displayStocks.sort((a, b) => a.name > b.name ? 1 : -1)
      break;
      case "Price":
        sortedStocks = this.state.displayStocks.sort((a, b) => a.price > b.price ? 1 : -1)
      break;
      default:
        sortedStocks = this.displayStocks
    }
    this.setState({displayStocks: sortedStocks})
  }


  buyStock = (id) => {
    let myStock = this.state.stocks.find(stock => stock.id === id)
    let myPortfolio = this.state.portfolio
    myPortfolio.push(myStock)
    this.setState({portfolio: myPortfolio})
  }

  sellStock = (id) => {
    const myPortfolio = this.state.portfolio
    let myStock = myPortfolio.find(stock => stock.id === id)
    let index = myPortfolio.indexOf(myStock)
    myPortfolio.splice(index, 1)

    this.setState({portfolio: myPortfolio})
  }

  render() {
    return (
      <div>
        <SearchBar handleFilter={this.handleFilter} handleSort={this.handleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} onClick={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} onClick={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

