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

                <div style={{overflow: 'hidden', clear: 'both' }}>
                    <Dustbin elms={this.state.elms}/>
                </div>

                <div className= "sidebar">
                    <Box name="ImageWidget" add={this.add}/>
                    <Box name="LikeMe" add={this.add}/>
                </div>
              </div>
            </DragDropContextProvider>
        );
    }
}
