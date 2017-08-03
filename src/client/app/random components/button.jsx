import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin'

import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


var styles = {
  button: {
    margin: 5,
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
};


injectTapEventPlugin();

class UploadButton extends React.Component {


	constructor(props) {
	    super(props);
	    this.state = {value: 1};
	    this.handleModeChange = this.handleModeChange.bind(this)

	    this.state = {file: '', imagePreviewUrl: ''}
	    this._handleImageChange = this._handleImageChange.bind(this);
    	this._handleSubmit = this._handleSubmit.bind(this);
  	}

  	handleModeChange(event, index, value) {
  		this.setState({value})
  	};

  	_handleSubmit(e) {
    	e.preventDefault();
    	// TODO: do something with -> this.state.file
  	}

  	_handleImageChange(e) {
	    e.preventDefault();

	    let reader = new FileReader();
	    let file = e.target.files[0];

	    reader.onloadend = () => {
	      this.setState({
	        file: file,
	        imagePreviewUrl: reader.result
	      });
	    }

	    reader.readAsDataURL(file)
  	}

  	componentDidMount{
        if(this.props.file !== false){
            var self = this,
            img = new Image(),
            reader = new FileReader();

            reader.onload = function(e) {
	            self.state.base64 = e.target.result;
	            img.src = e.target.result;
	            self.resize(img);
            };
            reader.readAsDataURL(this.props.file);
        }
    }

	render(){
		let {imagePreviewUrl} = this.state;
	    let $imagePreview = null;
	    if (imagePreviewUrl) {
	      $imagePreview = (<img src={imagePreviewUrl} />);
    	}

	  	return (
	  		<div>	
		  		<div>  	
				  	<DropDownMenu value={this.state.value} onChange={this.handleModeChange}>
			          <MenuItem value={1} primaryText="Design" />
			          <MenuItem value={2} primaryText="View" />
			          <MenuItem value={3} primaryText="Print" />
			        </DropDownMenu>
			    </div>

			  	<RaisedButton label="Upload an Image" 
				   labelPosition="before"
				   style={styles.button}
				   containerElement="label"
				>
					<input type="file" style={styles.exampleImageInput} onChange = {this._handleImageChange} />
					{$imagePreview}
			  	</RaisedButton>
	  		</div>
	  );
	}
}

export default UploadButton;