import React from 'react';
import Image from './Image';
import NoImage from './NoImage';



const ImageList = (props) => { 
  
  const results = props.data;

  let photos;
 
  if (results.length > 0) {
    //added loading state
    photos = results.map(photo => 
      <Image 
      url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} 
      key={photo.id} 
      loading={props.loading}
      />
     );
     
  } else  {
    photos = <NoImage />
  }
  

  return(
    //add loading to rendering
    <ul className="image-list">
      { props.loading ? <h1>Loading...</h1> : photos }
    </ul> 
  );
}

export default ImageList;
