import PropTypes from 'prop-types';
import { UserList, UserItems, UserLable, UserQuantity } from './StateUser.styled';


export const StateUser = ({ user: {stats: {followers, views, likes}}}) => { 
return <UserList className="stats">
    <UserItems>
      <UserLable className="label">Followers</UserLable>
      <UserQuantity className="quantity">{followers}</UserQuantity>
    </UserItems>
    <UserItems>
      <UserLable className="label">Views</UserLable>
      <UserQuantity className="quantity">{views}</UserQuantity>
    </UserItems>
    <UserItems>
      <UserLable className="label">Likes</UserLable>
      <UserQuantity className="quantity">{likes}</UserQuantity>
    </UserItems>
  </UserList>
}

StateUser.propTypes = {
  user: PropTypes.shape({
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};


