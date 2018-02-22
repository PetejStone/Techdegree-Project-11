import React from 'react';
import ImageList from './ImageList';

//Loading state added
const Dogs = (props) => (
    <div>
        {<ImageList data={props.data}/>}
        
        </div>
);

export default Dogs;