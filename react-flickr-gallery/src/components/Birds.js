import React from 'react';
import ImageList from './ImageList';

const Birds = (props) => (
    //display loading when page first loads
    <div>
     <ImageList data={props.data}  />
    </div>
);



export default Birds;