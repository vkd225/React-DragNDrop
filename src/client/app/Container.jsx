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

                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    <Box name="Image Widget" add={this.add}/>
                    <Box name="Heading H1" add={this.add}/>
                    <Box name="Heading H2" add={this.add}/>
                    <Box name="Paragraph" add={this.add}/>
                </div>
              </div>
            </DragDropContextProvider>
        );
    }
}
