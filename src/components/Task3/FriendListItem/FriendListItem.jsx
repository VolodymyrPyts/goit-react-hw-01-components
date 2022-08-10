import PropTypes from 'prop-types';
import { ListFriend, ItemFriend, StatusBlock} from "./FriendListItem.styled";


export const FriendListItem = ({friends}) =>{
  return <ListFriend>
      {friends.map(friend => {
        const {avatar, name, isOnline, id} = friend;
       
        return   (<ItemFriend className="item" key={id}>
          <StatusBlock className="status" status={isOnline}>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </StatusBlock>
        </ItemFriend>);
      })}  
  </ListFriend>
}


FriendListItem.propTypes = {
  friends: PropTypes.arrayOf (
    PropTypes.exact ({ 
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired

  };