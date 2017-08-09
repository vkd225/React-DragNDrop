import React from 'react';
class Heading1 extends React.Component {

  constructor(props) {
    super(props);
  }

  onChange () {
    const value = event.target.value
    if (value) {
      this.setState ({ value: value })
    }
  }

  render() {
    let Heading = null ;
    Heading = <h1><input type="primaryText" placeholder = "Heading H1" onChange={this.onChange}/></h1>

    return (
      <div>
        {Heading}
      </div>
    );
  }

}

export default Heading1;
