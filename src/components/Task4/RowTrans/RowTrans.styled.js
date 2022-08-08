import styled from "styled-components";

export const TableBlock = styled.table`
width: 100%;
border: 1px solid #828282;
margin: 0;
border-collapse: collapse;
text-transform: uppercase;
`

export const BlockTabHead = styled.th`
border: 1px solid #828282;
padding: 8px;
background-color: #b4d4ff;
color: ${p => p.theme.colors.white};

`

export const RowTableStyle = styled.td`
border: 1px solid #828282;
padding: 8px;
color: #787575;
text-align: center;
text-transform: capitalize;
`
export const ColorRow = styled.tr`
&:nth-child(2n) {
    background-color: #ceeef8c2;
    
}
`


