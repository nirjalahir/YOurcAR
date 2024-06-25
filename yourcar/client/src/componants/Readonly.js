import React, { Component } from 'react'
import ReadonlyItems from '../componants/ReadonlyItems'
import '../componants/Readonly.css'
import heroImage from '../hero1.jpg';


export class Readonly extends Component {
  
  constructor() {
    super();
    this.state = {
      dataGrouped: [],
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('/getAllcars'); 
      const jsonData = await response.json();

      const groupedData = jsonData.reduce((acc, car) => {
        const { company, ...rest } = car;
        if (!acc[company]) {
          acc[company] = [];
        }
        acc[company].push(rest);
        return acc;
      }, {});

      this.setState({ dataGrouped: Object.entries(groupedData) });
    } catch (error) {
      console.error(error);
    }
  }
  render() {

    return (
      
      <>
        <div className='backimgReadonly'>
          <img src={heroImage} alt="" />
        </div>
        <div className="container my-5">
          <h2>Happy Hunting!</h2>
          {this.state.dataGrouped.map(([company, cars]) => (
            <div key={company}>
              <div className="company_tag my-5">
              {company}
              </div>
              <div className="row">
                {cars.map((element) => (
                  <div className="col-md-4" key={element.model}>
                    <ReadonlyItems
                      model={element.model}
                      engine={element.engine}
                      transmission={element.transmission}
                      power={element.power}
                      torque={element.torque}
                      mileage={element.mileage}
                      price={element.price}
                      Imageurl={element.urlToImage}
                      variants={element.variants}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default Readonly


