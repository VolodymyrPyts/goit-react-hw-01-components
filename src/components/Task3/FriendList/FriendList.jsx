import { Box } from 'components/theme/Box';

import { FriendListItem } from "../FriendListItem/FriendListItem";
import { ListFriend, ItemFriend} from "../FriendListItem/FriendListItem.styled";


export const FriendList = ({friends}) =>{
    return <Box display="block" ml='auto' mr="auto" width="250px" mt='15px' backgroundColor='#fffdfd' >
       <ListFriend>
        
       {friends.map(({avatar, name, isOnline, id}) => (
            <ItemFriend key={id}>
             <FriendListItem 
                avatar={avatar}
                name={name} 
                isOnline={isOnline}/>
             </ItemFriend>
       ))}
       </ListFriend>
               
    </Box>
}