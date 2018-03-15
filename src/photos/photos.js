import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "./photos.css";

export default class Photos extends Component {
    
    render() {

        const images = [
            {
              original: 'http://cdn.foodbeast.com/content/uploads/2016/05/Shitty-Food-Porn-4.jpg',
              thumbnail: 'http://cdn.foodbeast.com/content/uploads/2016/05/Shitty-Food-Porn-4.jpg',
            },
            // {
            //   original: 'http://lorempixel.com/1000/600/nature/2/',
            //   thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            // },
            // {
            //   original: 'http://lorempixel.com/1000/600/nature/3/',
            //   thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            // }
          ]

        return (
            <div>
                <ImageGallery items={images} />
            </div>
        )
    }   
}    
