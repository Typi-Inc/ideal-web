import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import DealsItem from './DealsItem';
import { get } from '../intent/get';
import ReactList from 'react-list';
import Spinner from 'react-spinkit';

const RadiumReactList = Radium(ReactList);

class Deals extends React.Component {
  static propTypes = {
    deals: React.PropTypes.array
  };
  state = { isLoading: false };

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: false });
    this.pending = [];
    return nextProps;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  static queries = {
    deal() {
      return [['title', 'conditions', 'id', 'image', 'discount']];
    },
    business() {
      return ['business', ['name', 'image']];
    },
    tags() {
      return ['tags', 'sort:createdAt=desc', 'edges', { from: 0, to: 6 }, ['id', 'text']];
    },
    likes() {
      return ['likes', 'sort:createdAt=desc', 'count'];
    },
    likedByUser() {
      return ['likedByUser', '{{me}}'];
    }
  };
  pending = [];

  request(from) {
    this.pending.push(from);
    this.fetch();
  }

  fetch() {
    if (this.isLoading || !this.pending.length) return;
    const from = _.first(this.pending);
    get([
      ['featuredDeals', { from: from, to: from + 9 }, ['title', 'id', 'discount', 'image']],
      ['featuredDeals', { from: from, to: from + 9 }, 'business', ['name', 'image']],
      ['featuredDeals', { from: from, to: from + 9 }, 'tags', 'sort:createdAt=desc', 'edges',
        { from: 0, to: 6 }, ['id', 'text']],
      ['featuredDeals', { from: from, to: from + 9 }, 'likes', 'sort:createdAt=desc', 'count'],
      ['featuredDeals', { from: from, to: from + 9 }, 'likedByMe']
    ]);
    this.setState({ isLoading: true });
  }
  handleScroll() {
    // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
    // always return document.documentElement[scrollKey] as 0, so take
    // whichever has a value.
    const totalHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
    const currentPositionFromTop = document.body.scrollTop;
    const viewPortHeight = window.innerHeight;
    if (currentPositionFromTop + viewPortHeight > totalHeight - 500) {
      this.request(this.props.deals.length);
    }
  }
  renderItems(items, ref) {
    return (
      <div
        ref={ref}
        style = {{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}
      >
        {items}
      </div>
    );
  }
  render() {
    return (
      <div>
        <div
          style = {{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          {
            this.props.deals.map(deal => (
              <DealsItem key={deal.id} deal={deal} />
            ))
          }
        </div>
        {
          this.state.isLoading && (
            <div style={{ display: 'flex', justifyContent: 'center', height: '100px'}}>
              <Spinner spinnerName="wandering-cubes" noFadeIn />
            </div>
          )
        }
      </div>
    );
  }
}

export default Radium(Deals);
