import React, { Component } from 'react'
import NewItem from './NewItem'
import heroImage from '../hero1.jpg';
import "../componants/News.css"

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    }

  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/everything?q=cars&apiKey=443e3594fd0e41568b938ef18507d4e1";
    let data=  await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
    }
  
  render() {
    return (
      <>
      <div className='formImg'>
                <img src={heroImage} alt="" />
            </div>
      <div className="container my-5">
        <h1>Daily car news</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            console.log(element)
            return <div className="col-md-4"  key={element.url}>
                <NewItem title={element.title?element.title:""} description={element.description?element.description:""} Imageurl={element.urlToImage} newsurl={element.url}/>
            </div>
          })}
        </div>
      </div>
      </>
    )
  }
}

export default News
