import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Container from './Container.jsx';
import Heading1 from './Components/Heading1.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends React.Component {
  render () {

    return (
      <div>
        <MuiThemeProvider>
          <Container />
        </MuiThemeProvider>
      </div>

    );
  }
}

render(<App/>, document.getElementById('app'));
