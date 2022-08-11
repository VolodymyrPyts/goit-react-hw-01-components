import PropTypes from 'prop-types';
import { StatusBlock} from "./FriendListItem.styled";


export const FriendListItem = ({avatar, name, isOnline}) =>{

  return <>   
       
          <StatusBlock className="status" status={isOnline}>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </StatusBlock>
        
      
  </ >
}


FriendListItem.propTypes = {
 
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    

  };