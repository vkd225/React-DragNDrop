import React from 'react';
import {render} from 'react-dom';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Board from './Board.jsx';
import { observer } from './Game.jsx';

var knightPosition = observer()

class WrappedApp extends React.Component {
 
  render () {
    return (
      <div>
        <Board knightPosition={knightPosition}/>
      </div>

    );
  }
}

export default DragDropContext(HTML5Backend)(WrappedApp);



// class WrappedApp extends React.Component {
  
// 	observe(knightPosition => 
// 		ReactDOM.render(
// 			<Board knightPosition={knightPosition} />
// 		)
// 	);
// }

// export default DragDropContext(HTML5Backend)(WrappedApp);