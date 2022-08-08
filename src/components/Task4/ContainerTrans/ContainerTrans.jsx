import { Box } from 'components/theme/Box';
import  transactions  from '../../Data/transactions.json';
import { RowTrans } from "../RowTrans/RowTrans";


export const ContainerTrans = () =>{
    return <Box display="block" ml='auto' mr="auto" width="500px" hight='250px'  mt='15px' backgroundColor='#fffdfd' >
    <RowTrans transactions={transactions}/>
    </Box>
}