import React from "react";
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
 const colorOptions = props.data.colorOptions.map((items, pos)=>{
   const classArr = [classes.productImage]
   if(pos === props.currentPreviewimagePos){
     classArr.push(classes.selectedProductImage);
   }
   return(
    <img key={pos} className={classArr.join(' ')} src={items.imageUrl} 
    alt={items.styleName} onClick =  { () => props.onColorOptionClick(pos)} />
   );
 })
 
 const featureList = props.data.featureList.map((items, pos )=>{
   const classArr = [classes.featureButton]
   if (pos ===1 && props.showHeartBeatSection){
     classArr.push(classes.selectedFeatureButton);
   }
   else if(pos===0 && !props.showHeartBeatSection){
     classArr.push(classes.selectedFeatureButton);
   }
   return(
    <button onClick={() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{items}</button>

   )
 })

    return(
        <div className={classes.productDetails}>
        <h1 className={classes.productTitle}>{props.data.title}</h1>
        <p className={classes.productDescription}>{props.data.description}</p>
        <h3 className={classes.sectionHeading}> Select Color </h3>
        

       <div>
         {colorOptions}
        {/* <img className={[classes.productImage, classes.selectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" 
          alt="Black Color" />
          <img className={classes.productImage} src="https://imgur.com/PTgQlim.png" 
          alt="Red Color" />              
          <img className={classes.productImage} src="https://imgur.com/Mplj1YR.png" 
          alt="Blue Color" />
          <img className={classes.productImage} src="https://imgur.com/xSIK4M8.png" 
          alt="Purple Color" /> */}
          </div>

          
          <h3 className={classes.sectionHeading}> Features</h3>    
          <div>  
            {featureList}      
          {/* <button className={[classes.featureButton, classes.selectedFeatureButton].join(' ')}>Time</button>
          <button className={classes.featureButton}>Heart Rate</button> */}
        </div>
        <div>
          <button className={classes.buyButton}>Buy</button>
        </div>
    
        </div>

    );
}

export default ProductDetails;