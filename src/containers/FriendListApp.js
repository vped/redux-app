import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend,addSex} from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components';

class FriendListApp extends Component {
  constructor(props){
    super();
    this.state = {
      perPage:2,
      currentPage:1,
      totalCount:props.friendlist && props.friendlist.friendsById.length
    };

    this.pageClick = this.pageClick.bind(this);
    this.getFriends = this.getFriends.bind(this);
  }

  pageClick(pageNumber){
    this.setState({currentPage:pageNumber});
  }

  componentWillReceiveProps(newProps) {

    let count = newProps.friendlist && newProps.friendlist.friendsById.length;

    if(count < (this.state.currentPage*this.state.perPage)-1){
      this.setState({currentPage:this.state.currentPage-1});
    }

    this.setState({ totalCount:count})
  }

  getFriends() {
    let { friendlist: { friendsById }} = this.props;
    let state = this.state;

    return friendsById.slice(state.perPage*(state.currentPage-1),(state.perPage*state.currentPage));

  }

  render () {

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend,
      addSex: this.props.addSex
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList
            pageClick={this.pageClick}
            {...this.state}
            friends={this.getFriends()}
            actions={actions}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  addSex
})(FriendListApp)
