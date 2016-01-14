import React from 'react';
import _ from 'lodash';
import combineTemplate from 'rx.observable.combine-template';

class Combinator extends React.Component {
  constructor(props, context) {
    super(props, context);
    // Keep track of whether the component has mounted
    this.componentHasMounted = false;
    // Subscribe to child prop changes so we know when to re-render
    if (props.children.subscribe) {
      this.subscription = props.children.subscribe(
        children =>
        !this.componentHasMounted ? this.state = children : this.setState(children)
      );
    } else {
      this.subscription = combineTemplate(props.children).subscribe(
        children =>
        !this.componentHasMounted ? this.state = children : this.setState(children)
      );
    }
  }
  componentDidMount() {
    this.componentHasMounted = true;
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextState, this.state);
  }
  componentWillUnmount() {
    // Clean-up subscription before un-mounting
    this.subscription.dispose();
  }
  render() {
    return this.state;
  }
}

Combinator.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default Combinator;
