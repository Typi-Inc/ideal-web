import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import shallowEqual from '../utils/shallowEqual';
import DealCommentAuthor from './DealCommentAuthor';

class DealComment extends React.Component {
  static propTypes = {
    text: React.PropTypes.string,
    createdAt: React.PropTypes.string,
    author: React.PropTypes.object
  };
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(_.omit(this.props, 'author'), _.omit(nextProps, 'author'));
  }
  static queries = () => ({
    text: null,
    createdAt: null,
    author: {
      ...DealCommentAuthor.queries()
    }
  });
  render() {
    return (
      <div style={{
        display: 'flex',
        paddingTop: '10px',
        borderBottom: '1px solid rgba(0,0,0,0.12)'
      }}
      >
        <div>
          <img src="http://www.spacefacts.de/bios/portraits_hi/cosmonauts/kotov_oleg.jpg"
            style={{ height: '50px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
          <DealCommentAuthor />
          <div style={{ fontSize: '16px' }}>
            {this.props.text}
          </div>
          <div style={{ color: '#a99999' }}>
            {Date.parse(this.props.createdAt)}
          </div>
        </div>
      </div>
    );
  }
}

export default Radium(DealComment);
