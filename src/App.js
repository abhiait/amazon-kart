import logo from './logo.svg';
import React, { Component } from 'react';
import classes from './App.module.css';

import ProductPreview from './ProductPreview/ProductPreview.js'
import ProductDetails from './ProductDetails/ProductDetails.js';
import TopBar from './TopBar/topBar';
import ProductData from './ProductData';


class App extends Component {
  state = {
    productData : ProductData,
    // currentPreviewimage: 'https://imgur.com/xSIK4M8.png',
    currentPreviewimagePos: 0,
    showHeartBeatSection : true
  }
  onColorOptionClick = (pos) =>{
    // const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
    // console.log(updatedPreviewImage); 
    // this.setState({currentPreviewimage: updatedPreviewImage 
    this.setState({currentPreviewimagePos: pos })
  }

  onFeatureItemClick =(pos) =>{
    // console.log(pos);
    let updatedState = true;
    if(pos===1){
      updatedState = false;
    }
    console.log(updatedState);
    this.setState({showHeartBeatSection: updatedState});
  }

 
 render () {
  return (
    <div className="App">
      <header className='App-header'>
      <TopBar/>     
        </header>
        <div className={classes.mainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewimage={this.state.productData.colorOptions
            [this.state.currentPreviewimagePos].imageUrl} 
            showHeartBeatSection = {this.state.showHeartBeatSection} />
          </div>

          <div className={classes.productDetails}>
           <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick}
           currentPreviewimagePos={this.state.currentPreviewimagePos}
           onFeatureItemClick ={this.onFeatureItemClick} 
           showHeartBeatSection = {this.state.showHeartBeatSection}/>
            </div>
     
    </div>
    </div>
  );
 }
 
}

export default App;
 