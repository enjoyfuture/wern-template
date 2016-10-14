import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';
import * as homeAction from './action';
import bootstrap from '../../util/bootstrapCss';
import styles from './index';

const cx = classNames.bind(styles);

class Home extends Component {
  static propTypes = {
    home: PropTypes.object,
    homeAction: PropTypes.object,
  };

  helloHandle = (e) => {
    e.stopPropagation();
    this.props.homeAction.hello('开启 React Router Redux Immutable 之旅吧！');
  };

  render() {
    return (
      <div className={cx('home')}>
        <h1 className={bootstrap('m-t-2')}>The react app using wern cil to generate.</h1>
        <h2 className={bootstrap('m-t-3')}>
          React Redux Router Immutable Webpack Gulp Sass Css Module etc.
        </h2>
        <hr className={bootstrap('m-t-2', 'm-b-2')}/>
        <div>
          <h3 className={bootstrap('m-b-1')}>{this.props.home.get('content')}</h3>
          <button className={bootstrap('btn', 'btn-info')}
                  onClick={this.helloHandle}>欢迎您来到这里
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    home: state.get('home')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homeAction: bindActionCreators(homeAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
