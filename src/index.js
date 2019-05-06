import React from 'react';
import ReactDOM from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';
import App from './components/App';

const generateClassName = createGenerateClassName();

class Main extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return <App />;
  }
}

ReactDOM.hydrate(
  <JssProvider generateClassName={generateClassName}>
    <Main />
  </JssProvider>,
  document.getElementById('reactContainer'),
);
