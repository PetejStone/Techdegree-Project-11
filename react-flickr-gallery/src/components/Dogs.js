import React from 'react';
import ImageList from './ImageList';

//Loading state added
const Dogs = (props) => (
    <div>
        {props.loading ? <h1>Loading...</h1> : <ImageList data={props.data} loading={props.loading} />}
    </div>
);

export default Dogs;