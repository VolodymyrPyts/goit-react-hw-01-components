import { Box } from 'components/theme/Box';
import PropTypes from 'prop-types';

import { TitleData } from './Statistics.styled'
import { ItemsData, ListData, SpanDataLab, SpanDataPercent  } from '../DataItems/DataItems.styled'

export const Statistics = ({data, title}) =>{
  return <Box width="400px"  backgroundColor="white" borderBottomLeftRadius="5px" borderBottomRightRadius="5px" mt="15px" mr='auto' ml='auto' as='section' className="statistics">
    {title && <TitleData className='title'>Upload stats</TitleData>}
    <ItemsData>
      {data.map(({id, label, percentage}) => {
                return (
          <ListData key={id} >
            <SpanDataLab>{label}</SpanDataLab>
            <SpanDataPercent>{percentage}%</SpanDataPercent>
          </ListData>
        );
      })}
    </ItemsData>   
  </Box>
}

Statistics.propTypes = {
  title: PropTypes.string,
  Data: PropTypes.arrayOf(PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }))

  };