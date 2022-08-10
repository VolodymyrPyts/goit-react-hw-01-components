import styled from "styled-components";

export const ListFriend = styled.ul`
width: auto;
list-style: none;
padding: 10px;
margin: 0;
`

export const ItemFriend = styled.li`

margin-bottom: 10px;
padding: 5px;
box-shadow: 5px 5px 5px #3b353587;

&:last-child{
    margin-bottom: 0;
}
`
export const StatusBlock = styled.div`
display: flex;
justify-content: flex-start;
gap: 15px;
padding: 5px;
height: 100%;
border: 2px solid  ${p => (p.status ? '#00FA00' : '#FC1423')};
border-radius: 5px;
`