import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes.jsx';
import Frame from 'react-frame-component';
import ImageWidget from './Components/imgwidget.jsx';
import AwesomeComponent from './Components/AwesomeComponent.jsx';

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
          return  <div key={idx + 'img'}> <ImageWidget /> </div>;
          break ;

        case "AwesomeComponent":
          return <div key={idx + 'img'}> <AwesomeComponent /> </div>;
          break ;
      }
    });

    return connectDropTarget(
      <div>
        <Frame style={{ width: '80%', height: '80%' }}>
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
