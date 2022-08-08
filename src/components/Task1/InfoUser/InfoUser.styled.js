import styled from 'styled-components';

export const ImgUser = styled.img`
    width: 150px;
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    

`
export const NameUser = styled.p`
font-size: ${p => p.theme.fontSizes.m};
color: ${p => p.theme.colors.black};
text-align: center;
margin-top: 10px;
margin-bottom: 10px;
font-weight: 700;
`
export const InformUser = styled.p`
font-size: ${p => p.theme.fontSizes.s};
color: ${p => p.theme.colors.text};
text-align: center;
margin-top: 0;
margin-bottom: 5px;
`