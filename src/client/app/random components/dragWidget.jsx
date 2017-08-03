import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragSource } from 'react-dnd';

import AddWidget from './widgets.jsx'

export const WidgetTypes = {
	ImageWidget : 'AddWidget'
};

const WidgetSource = {
	beginDrag(props){
		return{};
	}
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Iframe extends React.Component {

    render() {
    	const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
        	<div style={{
		        opacity: isDragging ? 0.5 : 1,
		        fontSize: 25,
		        fontWeight: 'bold',
		        cursor: 'move'
		    }}>
				<AddWidget />
		    </div>

        );
        
    }
}

Iframe.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(WidgetTypes.ImageWidget, WidgetSource, collect)(Iframe);
