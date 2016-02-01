import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import DealsItem from './DealsItem';
import { get } from '../intent/get';
import ReactList from 'react-list';

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
    const [, lastVisibleIndex] = this.list.getVisibleRange();
    if (lastVisibleIndex >= this.props.deals.length - 2) this.request(this.props.deals.length);
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
  renderItem(index, key) {
    return (
      <DealsItem key={key} deal={this.props.deals[index]} />
    );
  }
  render() {
    return (
      <div>
        <RadiumReactList
          ref={el => this.list = el}
          itemRenderer={this.renderItem.bind(this)}
          itemsRenderer={this.renderItems.bind(this)}
          length={this.props.deals.length}
          type="variable"
        />
        {
          this.state.isLoading && (
            <div>Loading</div>
          )
        }
      </div>
    );
  }
}

export default Radium(Deals);
