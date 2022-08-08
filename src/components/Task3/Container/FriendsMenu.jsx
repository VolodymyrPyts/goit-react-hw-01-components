import { Box } from 'components/theme/Box';
import  friends  from '../../Data/friends.json';
import { CardsUser } from "../CardUser/CardUser";


export const FriendsMenu = () =>{
    return <Box display="block" ml='auto' mr="auto" width="250px" mt='15px' backgroundColor='#fffdfd' >
    <CardsUser friends={friends}/>
    </Box>
}