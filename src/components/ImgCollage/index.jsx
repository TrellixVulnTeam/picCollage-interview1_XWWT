import React, { useState } from 'react';
import img0 from "../../imgs/img0.png";
import img1 from "../../imgs/img1.png";
import img2 from "../../imgs/img2.png";
import "./style.scss";

const collageType_DATA = ["collage-0", "collage-1", "collage-2", "collage-3", "collage-4"]
const img_DATA = [img0, img1, img2]



const ImgCollage = (props) => {
    return ( 
            <div className={`imgCollage ${collageType_DATA[props.type]}`}> 
                {img_DATA.map(item => (<div className='imgBox'><img className="imgBox-img" src={item} alt="image"></img></div>))}
            </div> 
    );
}
 
export default ImgCollage;