import React, { Component } from 'react';
import './App.css';

class App extends Component {

  companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]
  
  getStuff() {
    return "I am spotcheck 1"
  }

  getMorningGreeting() {
    return (
      <div>Good morning</div>
    )
  }

  getEveningGreeting() {
    return(
      <div>Good Evening</div>
    )
  }

  getArr(){
    return(
      [
        <div>{this.getMorningGreeting()}</div>,
        <div>{this.getEveningGreeting()}</div>,
        <p>some text</p>
      ]
    )
  }

  showCompany(name, revenue) {
    return(
      <div>company: {name} , revenue: {revenue}</div>
    )
  }

  getClassName(temperature) {
    if(temperature < 15)
      return "freezing"
    if(temperature < 30)
      return "fair"
    return "hell-scape"
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            <h1>{this.getStuff()}</h1>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {new Date().getHours() > 12 ? this.getEveningGreeting() : this.getMorningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {this.getArr()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {this.companies.map(company => this.showCompany(company.name,company.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            <div id="weatherBox" class={this.getClassName(10)}></div>
            <div id="weatherBox" class={this.getClassName(25)}></div>
            <div id="weatherBox" class={this.getClassName(50)}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
