import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

/**
 * One example of using react-motion (0.3.0) within react-router (v1.0.0-rc3).
 *
 * Usage is simple, and really only requires two things–both of which are
 * injected into your app via react-router–pathname and children:
 *
 *   <RouteTransition pathname={this.props.pathname}>
 *     {this.props.children}
 *   </RouteTransition>
 */
class RouteTransition extends React.Component {
  getStyles() {
    const { children, pathname } = this.props;

    return {
      [pathname]: {
        children,
        opacity: spring(1)
        // x: spring(0)
      }
    };
  }
  willEnter() {
    return {
      children: this.props.children,
      opacity: spring(0)
      // x: spring(100)
    };
  }
  willLeave(key, value) {
    return {
      children: value.children,
      opacity: spring(0)
      // x: spring(-100)
    };
  }
  render() {
    return (
      <TransitionMotion
        styles={this.getStyles()}
        willEnter={this.willEnter.bind(this)}
        willLeave={this.willLeave.bind(this)}
      >
        {interpolated =>
          <div>
            {Object.keys(interpolated).map(key =>
              <div
                key={`${key}-transition`}
                style={{
                  position: 'absolute',
                  opacity: interpolated[key].opacity
                  // transform: `translateX(${interpolated[key].x}%)`
                }}
              >
               {interpolated[key].children}
              </div>
            )}
          </div>
        }
      </TransitionMotion>
    );
  }
}

RouteTransition.propTypes = {
  children: React.PropTypes.element.isRequired,
  pathname: React.PropTypes.string
};

export default RouteTransition;
