import React from 'react';
import ImageList from './ImageList';

const Birds = (props) => (
    //display loading when page first loads
    <div>
   { props.loading ? <h1>Loading...</h1> : <ImageList data={props.data} loading={props.loading} />}
    </div>
);



export default Birds;