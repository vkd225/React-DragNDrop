import React from 'react';

import Frame from 'react-frame-component';



class ContentEditor2 extends React.Component {
  render () {
    return (
      	<div>
          <h2>Image Widget !!!</h2>
      		<h2>Below is an iFrame</h2>
          
             <Frame>
              <p>This is a react aware iFrame</p>
            </Frame>

      	</div>
    );
  }
}

export default ContentEditor2;
