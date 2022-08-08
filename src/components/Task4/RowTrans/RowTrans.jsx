import PropTypes from 'prop-types';
import { TableBlock, BlockTabHead, RowTableStyle, ColorRow } from "./RowTrans.styled";

export const RowTrans = ({transactions}) =>{
    return <TableBlock className="transaction-history">

<thead>
    <tr>
      <BlockTabHead>Type</BlockTabHead>
      <BlockTabHead>Amount</BlockTabHead>
      <BlockTabHead>Currency</BlockTabHead>
    </tr>
  </thead >
  <tbody>
    {transactions.map(transaction => {
      const {type, amount, currency, id} = transaction;
      
   return   (<ColorRow key={id}>
    <RowTableStyle>{type}</RowTableStyle>
    <RowTableStyle>{amount}</RowTableStyle>
    <RowTableStyle>{currency}</RowTableStyle>
  </ColorRow>);
})}
   </tbody>  

</TableBlock >
}

RowTrans.propTypes = {
  transactions: PropTypes.arrayOf (
    PropTypes.exact ({ 
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired
  ).isRequired

  };