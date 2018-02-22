import React from 'react';
import {NavLink} from 'react-router-dom';


const HomePage = (props) => (
    
    <div>
        
        <NavLink to="/search" className="option search" >Click Here To Search For Images!</NavLink>
        {console.log(props)}
    </div>
);

export default HomePage;