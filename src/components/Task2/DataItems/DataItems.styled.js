import StatisticsColor from './DataColorStyle';
import styled from 'styled-components';

export const ItemsData = styled.ul`
list-style:none;
display: flex;
margin: 0;
padding: 0;
width: 100%;
flex-grow: 1;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;

`
export const ListData = styled.li`
display: flex;
text-align: center;
flex-direction: column;
padding: 10px;
width: 100%;
background-color: ${StatisticsColor};

&:first-child {
    border-bottom-left-radius: 5px;
}
&:last-child {
    border-bottom-right-radius: 5px;
}

`


export const SpanDataLab = styled.span`
padding-bottom: 10px;
font-size: ${p => p.theme.fontSizes.s};
color: ${p => p.theme.colors.text};
`

export const SpanDataPercent = styled.span`
font-weight: 700;
font-size: ${p => p.theme.fontSizes.l};
color: ${p => p.theme.colors.text};
`