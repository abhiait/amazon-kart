import React from "react";
import classes from './ProductPreview.module.css'

const ProductPreview =(props) => {
    const getTimeHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const getTimeMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    return(
        <div className={classes.ProductPreview}>
            <img src={props.currentPreviewimage} alt="product preview" />

            {
                props.showHeartBeatSection ? 
                <div className={classes.timing}>
                <p>{`${getTimeHour} : ${getTimeMinute}`}</p>
                </div>

                
            :
           <div className={classes.heartBeat}>
              
              <i className="fa fa-heartbeat"><br/></i>              
             
              <p>78</p>
            </div>
            }
            
            
           
              
        </div>

    );
    
}
export default ProductPreview;