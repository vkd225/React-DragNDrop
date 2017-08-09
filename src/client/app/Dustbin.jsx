import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes.jsx';
import Frame from 'react-frame-component';
import ImageWidget from './Components/imgwidget.jsx';
import AwesomeComponent from './Components/AwesomeComponent.jsx';
import Heading1 from './Components/Heading1.jsx';


const styles = {
  Dustbin: {
    width: '70%',
    height: '80%'
  }
};


const boxTarget = {
  drop() {
    return { name: 'Dustbin' };
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.isOver()
  }
}

class Dustbin extends Component {

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;


    // const elms = this.props.elms.map((e, idx) => {
    //   return  <div key={idx + 'img'}>{e}</div>;
    // });


    const elms = this.props.elms.map((e, idx) => {
      switch (e) {
        case "ImageWidget":
          return  <div key={idx + 'img'}> <ImageWidget /></div>;
          break ;

        case "LikeMe":
          return <div key={idx + 'img'}> <AwesomeComponent /></div>;
          break ;

        case "H1":
          return <div key={idx + 'img'}> <Heading1 /></div>;
          break;
      }
    });

    return connectDropTarget(
      <div>
        <Frame style={ styles.Dustbin }>
          {elms}
        </Frame>
      </div>
    );
  }
}

Dustbin.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.BOX, boxTarget, collect)(Dustbin);
