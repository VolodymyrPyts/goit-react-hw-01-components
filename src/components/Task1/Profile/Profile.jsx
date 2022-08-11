import { Box } from 'components/theme/Box';
import PropTypes from 'prop-types';

import { ImgUser, NameUser, InformUser } from "../InfoUser/InfoUser.styled";
import { UserList, UserItems, UserLable, UserQuantity } from '../StateUser/StateUser.styled';


 export const Profile = ({username, tag, location, avatar, stats: {followers, views, likes }} ) => {
return (
<Box width="300px" mt='15px' backgroundColor="white" ml='auto' mr='auto'  borderRadius='10px' className="profile" >

  <Box position='center'  p='20px' className="description">
    <ImgUser
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <NameUser className="name">{username}</NameUser>
    <InformUser className="tag">@{tag}</InformUser>
    <InformUser className="location">{location}</InformUser>
  </Box>

  <UserList className="stats">
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
</Box>)
}

Profile.propTypes = {
     username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,

};

