import { Box } from 'components/theme/Box';
import { InfoUser } from "../InfoUser/InfoUser";
import  user  from '../../Data/user.json'; 
import { StateUser, } from "../StateUser/StateUser";

export const UserMenu = ( ) => {
return <Box width="300px" mt='15px' backgroundColor="white" ml='auto' mr='auto'  borderRadius='10px' className="profile" >

<InfoUser user={user}/>
<StateUser user={user}/>


</Box>
}