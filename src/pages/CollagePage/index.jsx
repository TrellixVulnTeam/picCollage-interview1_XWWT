import React, { useState } from 'react';
import ImageCollage from "../../components/ImgCollage"
import "./style.scss"

const CollagePage = () => {
    const [collageType, setCollageType] = useState(0);
    return ( 
        <div className='collage-page'>
            <h1>{`Collage Style ${collageType}`}</h1>
            <ImageCollage type={collageType}/>
            <button onClick={() => {setCollageType((collageType+1)%5)}}>click me</button>
        </div> 
    );
}
 
export default CollagePage;