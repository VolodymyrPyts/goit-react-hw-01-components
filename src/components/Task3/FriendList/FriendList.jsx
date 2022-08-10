import { Box } from 'components/theme/Box';
import  friends  from '../../Data/friends.json';
import { FriendListItem } from "../FriendListItem/FriendListItem";


export const FriendList = () =>{
    return <Box display="block" ml='auto' mr="auto" width="250px" mt='15px' backgroundColor='#fffdfd' >
        <FriendListItem friends={friends}/>
    </Box>
}