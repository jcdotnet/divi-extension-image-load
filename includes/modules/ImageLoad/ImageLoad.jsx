// External Dependencies
import React, { Component, Fragment } from 'react';

// Internal Dependencies
import './style.css';


class ImageLoad extends Component {

  static slug = 'deil_image_load';

  _updateParent(childProps) {
    this.props.content.forEach( (elem, i) => {
      if (i === childProps.moduleInfo.order) {
        elem.props.attrs.image_width = childProps.image_width;
      }
    });
    this.forceUpdate(); // we actually change the component state, we are just forcing the update for testing purposes
  }

  render() {
    console.log('PARENT RENDER');
 
    this.props.content.forEach(elem => { 
        elem.props.attrs.update_parent = this._updateParent.bind(this);
    });

    return (
      <Fragment>
        <h2>We need to hover over the sections so the images width are stored...</h2>
        <div class="deil-images">
          { this.props.content }
        </div>
      </Fragment>
    );
  }
}

export default ImageLoad;
