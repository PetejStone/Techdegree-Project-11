import React, {Component} from 'react';
import axios from 'axios';
import apiKey from '../config.js';
import ImageList from './ImageList';
import Loading from './Loading';

class PhotoContainer extends Component {
    constructor() {
        super();
        this.state = {
          images: [],
          loading: true,
        
        };

      } 
    
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
              loading: true
            })
            this.performSearch(nextProps.option);
          } 
        }
      
    //calls this function before it renders
      componentDidMount() {
        this.performSearch(this.props.option);
      
      }

    
      performSearch = (option) => {
    //interpolated variables retrieved from the array thru React in Dev Tools
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${option}&per_page=20&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            images: response.data.photos.photo,
            loading: false
          });
        })
        .catch(error => {
          console.log('Error fetching data', error);
        });
        
      }
    render(props){
        return(
            <div>
                <h2 className="option-title">{this.props.option}</h2>
                {this.state.loading ? <h1>Loading...</h1>: <ImageList data={this.state.images} />}
            </div>
            
        );
    }
}

export default PhotoContainer;