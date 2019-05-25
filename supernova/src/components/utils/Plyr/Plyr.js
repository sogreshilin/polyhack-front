import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import plyr from 'plyr';

class Plyr extends React.Component {
  static propTypes = {
    'options': PropTypes.object,  // this is an options object from the docs
    'source': PropTypes.object  // this is a source object from the docs
  }

  componentDidMount () {
    this.player = plyr.setup(ReactDOM.findDOMNode(this), this.props.options)[0];
    this.player.source(this.props.source);
  }

  componentWillUnmount () {
    this.player.destroy();
  }

  render () {
    return (
      <div className='js-plyr plyr'>
        <div></div>
      </div>
    );
  }
}

export default Plyr;