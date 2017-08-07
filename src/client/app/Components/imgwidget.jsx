import React, { Component } from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';


const styles = {
  image: {
    maxWidth: 800,
  },
  home: {
    marginRight: 24,
  },
  button: {
    margin: 4,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  }
};


class ImageWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dropDownValue: 1,
      url: "./images/default_image.jpg",
    };

    this.handleModeChange = this.handleModeChange.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onChangeAlt = this.onChangeAlt.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleModeChange(event, index, value) {
    this.setState({dropDownValue: value})
  }

  onChange(event) {
    const value = event.target.value
    if (value) {
      this.setState({ url : value })
    }
  }

  onChangeAlt(event) {
    const value = event.target.value
    if (value) {
      this.setState({ alt : value })
    }
  }

  handleOpen () {
    this.setState({
      open: true,
    });
  }

  handleClose () {
    this.setState({
      open: false,
    });
  }

  handleSubmit() {
    this.setState({
      dropDownValue: 2,
      open: false
    })
  }


  render() {

    console.log('render');

    let image = null;
    let editHtml = null;
    switch(this.state.dropDownValue) {
      case 1:
        image = <img style={styles.image} src="./images/default_image.jpg" alt="Default Image" />
        editHtml = <RaisedButton
            label="Edit"
            labelPosition="before"
            style={styles.button}
            containerElement="label"
            onTouchTap={this.handleOpen}
          />

        break;

      case 2:
        image = <img style={styles.image} src={this.state.url} alt={this.state.alt} />
        break;

      case 3:
        image = <img style={styles.image} src={this.state.url} alt={this.state.alt} />
        break;
    }

    const tabActions = [
      <Tabs>
        <Tab label="PREVIEW" >
          <div>
            <p>
              Preview of the Image.
            </p>
          </div>
        </Tab>
        <Tab label="UPLOAD IMAGE" >
          <div>
            <p>
              Upload your Image.
            </p>
          </div>
        </Tab>
        <Tab label="CHOOSE FROM LIBRARY" >
          <div>
            <p>
              Choose your Image from Library.
            </p>
          </div>
        </Tab>
        <Tab label="IMAGE VIA URL">
          <div>
            <p>
              Copy your URL below.
            </p>
            <div>
              <input type="url" placeholder="Paste your Image URL here !!" size= "50" onChange={this.onChange} />
            </div>
            <div>
              <input type="primaryText" placeholder = "Alternative Image Name" size= "50" onChange={this.onChangeAlt} />
            </div>
          </div>
        </Tab>
      </Tabs>,

      <FlatButton
        label="CANCEL"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="DONE"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];
 

    return (

      <div>

        <DropDownMenu value={this.state.dropDownValue} onChange={this.handleModeChange}>
          <MenuItem value={1} primaryText="Design" />
          <MenuItem value={2} primaryText="View" />
          <MenuItem value={3} primaryText="Print" />
        </DropDownMenu>
        <div>
          {editHtml}
        </div>
          <Dialog
            title="EDIT IMAGE"
            actions={tabActions}
            modal={true}
            open={this.state.open}
          >
          </Dialog>
        <figure>
          {image}
          <figcaption>
            <span>Figure</span>
            <span>X.X</span>
            <span>Title</span>
            <span>Caption</span>
            <span>Citation</span>
          </figcaption>
        </figure>

      </div>

    );
  }
}

export default ImageWidget;
