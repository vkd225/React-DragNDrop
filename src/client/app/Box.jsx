import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes.jsx';

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
        window.alert( `You dropped ${item.name} into ${dropResult.name}!`);
        console.log('Render Image Widget here !!!');
    }
  },
};


function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class Box extends Component {
  constructor() {
    super ();
    this.state = {
      elms : []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isDragging) {
      this.props.add(nextProps.name);
    }
  }


  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props;
    const opacity = isDragging ? 0.4 : 1;
    
    return (
      connectDragSource(
        <div style={{ border: '1px dashed gray',
                      backgroundColor: 'white',
                      padding: '0.5rem 1rem',
                      marginRight: '1.5rem',
                      marginBottom: '1.5rem',
                      cursor: 'move',
                      float: 'left' }}>
          {name}
        </div>,
      )
    );
  }
}

Box.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
};

export default DragSource(ItemTypes.BOX, boxSource, collect)(Box);
