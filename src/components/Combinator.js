import React from 'react';
import combineTemplate from '../utils/combineTemplate';

class Combinator extends React.Component {
  static propTypes = {
    children: React.PropTypes.object.isRequired
  };
  constructor(props, context) {
    super(props, context);
    // Keep track of whether the component has mounted
    this.componentHasMounted = false;
    // Subscribe to child prop changes so we know when to re-render
    if (props.children.subscribe) {
      this.subscription = props.children.subscribe(
        children =>
        children && (!this.componentHasMounted ? this.state = children : this.setState(children))
      );
    } else {
      this.subscription = combineTemplate(props.children).subscribe(
        children =>
        children && (!this.componentHasMounted ? this.state = children : this.setState(children))
      );
    }
  }
  componentDidMount() {
    this.componentHasMounted = true;
  }
  componentWillUnmount() {
    // Clean-up subscription before un-mounting
    this.subscription.unsubscribe();
  }
  render() {
    return this.state;
  }
}

export default Combinator;
