import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {

  render() {
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{this.props.name}</span></div>
          <div>
            <small>xx friends in common</small>
          </div>
        </div>

        <div className={styles.friendActions}>
          <div className={`dropdown ${styles.dropdownDisplay}`}>
          <button data-toggle="dropdown" className={`btn btn-default dropdown-toggle ${styles.btnAction}`}>
            <i title="Select Sex" className={classnames('fa', {
              'fa-male': this.props.sex === 'M',
              'fa-female': this.props.sex === 'F',
              'fa-genderless ': this.props.sex === 'N'
            })} />
          </button>
            <ul className="dropdown-menu">
              <li><a href="javascript:void(0)" onClick={() => this.props.addSex(this.props.id,'M')}>Male</a></li>
              <li><a href="javascript:void(0)" onClick={() => this.props.addSex(this.props.id,'F')}>Female</a></li>
            </ul>
          </div>

          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classnames('fa', {
              'fa-star': this.props.starred,
              'fa-star-o': !this.props.starred
            })} />
          </button>

          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => this.props.deleteFriend(this.props.id)}>
            <i title="Delete" className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  sex: PropTypes.string,
  starFriend: PropTypes.func.isRequired,
  addSex: PropTypes.func.isRequired
};

export default FriendListItem
