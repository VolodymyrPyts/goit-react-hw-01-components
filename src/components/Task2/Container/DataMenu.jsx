import { Box } from 'components/theme/Box';
import  data  from '../../Data/data.json'; 
import { DataItems } from '../DataItems/DataItems'
import { TitleData } from './DataMenu.styled'

export const DataMenu = () =>{
    return <Box width="400px"  backgroundColor="white" borderBottomLeftRadius="5px" borderBottomRightRadius="5px" mt="15px" mr='auto' ml='auto' as='section' className="statistics">
    <TitleData className='title'>Upload stats</TitleData>
  
   <DataItems data={data}/>
    
    
  </Box>
}