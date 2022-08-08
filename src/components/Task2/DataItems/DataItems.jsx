import PropTypes from 'prop-types';
import { ItemsData, ListData, SpanDataLab, SpanDataPercent  } from './DataItems.styled'

export const DataItems = ({data}) =>{
    return <ItemsData>

        {data.map(stat => {
          const {label, percentage,id} = stat;
          return (
              <ListData key={id} >
                  <SpanDataLab>{label}</SpanDataLab>
                  <SpanDataPercent>{percentage}%</SpanDataPercent>
              </ListData>
          );
         })}
 
  </ItemsData>
}


  DataItems.propTypes = {
    data: PropTypes.arrayOf (
      PropTypes.exact ({ 
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired
  
    };