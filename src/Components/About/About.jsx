import React, {Component } from 'react';
import { Input, Grid, Segment } from 'semantic-ui-react'
import ImageGallery from 'react-image-gallery';

class About extends Component {
  render() {
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ];

    return (
      <div>
        <Segment>
          {/*<img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />*/}
          <Grid columns={2} relaxed='very'>
            <Grid.Column>
              <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column>
              <ImageGallery items={images} />
            </Grid.Column>
          </Grid>
        </Segment>
      </div>

    );
  }
}

export default About;
