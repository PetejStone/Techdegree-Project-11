import React from 'react';
import Image from './Image';
import NoImage from './NoImage';


const ImageList = (props) => { 
  
  const results = props.data;

  let photos;

  if (results.length > 0) {
    photos = results.map(photo => 
      <Image url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} />
     );
  } else {
    photos = <NoImage />
  }
  

  return(
    <ul className="image-list">
      {photos}
    </ul> 
  );
}

export default ImageList;
