import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin.jsx';
import Box from './Box.jsx';

export default class Container extends Component {
    constructor(){
        super();
        this.state = {
            elms : []
        }
        this.add = this.add.bind(this);
    }

    add(elm) {
        this.setState({
            elms : this.state.elms.concat([elm])
        });
    }


    render() {

        return (
            <DragDropContextProvider backend={HTML5Backend}>
              <div>
              	<h2>Drop the Components here to render them</h2>
                <div style={{float: 'left', width: '100%'}}>
                    <Dustbin elms={this.state.elms}/>
                </div>

                <div style={{float: 'left', width: '30%'}}>
                    <h2>Widgets</h2>
                    <Box name="ImageWidget" add={this.add}/>
                    <Box name="LikeMe" add={this.add}/>
                    <Box name="H1" add={this.add}/>
                </div>
              </div>
            </DragDropContextProvider>
        );
    }
}
