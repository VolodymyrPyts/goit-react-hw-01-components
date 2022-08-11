import { Box } from 'components/theme/Box';
import PropTypes from 'prop-types';

import { TableBlock, BlockTabHead, RowTableStyle, ColorRow } from "../RowTrans/RowTrans.styled";

export const TransactionHistory = ({transactions}) =>{
    return <Box display="block" ml='auto' mr="auto" width="500px" hight='250px'
                mt='15px' backgroundColor='#fffdfd' >
        <TableBlock className="transaction-history">
            <thead>
                <tr>
                <BlockTabHead>Type</BlockTabHead>
                <BlockTabHead>Amount</BlockTabHead>
                <BlockTabHead>Currency</BlockTabHead>
                </tr>
            </thead >
            <tbody>
                {transactions.map(({type, amount, currency, id}) => (
                                
           <ColorRow key={id}>
                <RowTableStyle>{type}</RowTableStyle>
                <RowTableStyle>{amount}</RowTableStyle>
                <RowTableStyle>{currency}</RowTableStyle>
            </ColorRow>
            ))}
            </tbody>  
        </TableBlock >
    </Box>
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf (
      PropTypes.exact ({ 
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      }).isRequired
    ).isRequired
};