import styled from 'styled-components';

export const UserList = styled.ul`
list-style:none;
margin:0;
padding:0;
display:flex;
border-top: 1px solid #a8a8a8;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px; 
background-color: #c6c6c6;
`;


export const UserItems = styled.li`
display:flex;
flex-direction: column;
border-right: 1px solid #a8a8a8;
width:99px;
text-align: center;

padding: 12px;

&:last-child {border-right: none;};

`

export const UserQuantity = styled.span`
font-size: 16px;
font-weight: 700;
color: #101010;
`
export const UserLable = styled.span `margin-bottom:5px;
    font-size: 16px;
font-weight: 400;
color: #959595;
   
`