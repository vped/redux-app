import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import style from './FriendListItem.css';
import Pagination from "react-js-pagination";
require("bootstrap/less/bootstrap.less");

class FriendList extends Component {
  render () {
      let pagination = null;
      if(this.props.totalCount > 2)
      {
          pagination =
              <div className="text-center">
                  <Pagination
                      activePage={this.props.currentPage}
                      itemsCountPerPage={this.props.perPage}
                      totalItemsCount={this.props.totalCount}
                      pageRangeDisplayed={5}
                      onChange={this.props.pageClick}
                  />
              </div>
      }
    return (
        <div>
          <ul className={styles.friendList}>
            {
              this.props.friends && this.props.friends.length > 0 ? this.props.friends.map((friend, index) => {
                return (
                  <FriendListItem
                    key={index}
                    {...friend}
                    {...this.props.actions} />
                );
              }): <li className={style.friendListItem}>
                    <div className={style.friendInfos}>
                      Empty Friend List
                    </div>
                </li>
            }
          </ul>
            {pagination}
        </div>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
