import React from 'react';
import ImageList from './ImageList';

const Cats = (props) => 
//Loading state added
<div>
    {props.loading ? <h1>Loading...</h1> : <ImageList data={props.data} loading={props.loading} />}
</div>
export default Cats;