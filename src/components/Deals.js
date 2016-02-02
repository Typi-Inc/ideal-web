import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import Spinner from 'react-spinkit';
import DealsItem from './DealsItem';
import { prependToPaths, toPaths } from '../utils/helpers';

class Deals extends React.Component {
  static propTypes = {
    deals: React.PropTypes.array,
    fetch: React.PropTypes.func
  };
  constructor(props, context) {
    super(props, context);
    this.handleScroll = this.handleScroll.bind(this);
  }
  state = { isLoading: false };
  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: false });
    this.pending = [];
    return nextProps;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  static paths = (from, to) => prependToPaths(
    ['featuredDeals', { from, to }],
    toPaths(DealsItem.queries())
  );
  pending = [];

  request(from) {
    this.pending.push(from);
    this.fetch();
  }

  fetch() {
    if (this.isLoading || !this.pending.length) return;
    const from = _.first(this.pending);
    this.props.fetch(0, from + 9);
    this.setState({ isLoading: true });
  }
  handleScroll() {
    // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
    // always return document.documentElement[scrollKey] as 0, so take
    // whichever has a value.
    const totalHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    const currentPositionFromTop = document.body.scrollTop || document.documentElement.scrollTop;
    const viewPortHeight = window.innerHeight;
    if (currentPositionFromTop + viewPortHeight > totalHeight - 500) {
      this.request(this.props.deals.length);
    }
  }
  render() {
    return (
      <div style = {{ paddingTop: '60px' }}>
        <div
          style = {{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {
            this.props.deals.map(deal => (
              <div key={deal.id}>
                <DealsItem deal={deal} />
              </div>
            ))
          }
        </div>
        {
          this.state.isLoading && (
            <div style={{ display: 'flex', justifyContent: 'center', height: '100px' }}>
              <Spinner spinnerName="wandering-cubes" noFadeIn />
            </div>
          )
        }
      </div>
    );
  }
}

export default Radium(Deals);
