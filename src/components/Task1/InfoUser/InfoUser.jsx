import PropTypes from 'prop-types';
import { Box } from 'components/theme/Box';
import { ImgUser, NameUser, InformUser } from "./InfoUser.styled";

export const InfoUser = ({ user: {username, tag, location, avatar}}) => {

 return <Box position='center'  p='20px' className="description">
     <ImgUser
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <NameUser className="name">{username}</NameUser>
    <InformUser className="tag">@{tag}</InformUser>
    <InformUser className="location">{location}</InformUser>
  </Box>
}

InfoUser.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
