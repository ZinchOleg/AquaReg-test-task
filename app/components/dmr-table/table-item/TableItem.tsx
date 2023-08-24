import { FC } from 'react';
import {
  Tr,
  Td,
} from '@chakra-ui/react';
import { IDmrDataArrayItem } from '@Redux/dmr-data/dmrDataSlice';

interface ITableItem extends Omit<IDmrDataArrayItem, 'id'> {

}

const TableItem: FC<ITableItem> = ({
  limit_value_nmbr,
  notes,
  past_six_month_violation,
  reported_date,
  reported_value,
  unit,
}) => {
  return (
    <Tr fontSize={ 'md' }>
      <Td textAlign={ 'center' } verticalAlign={ 'middle' }>{ limit_value_nmbr }</Td>
      <Td textAlign={ 'center' } verticalAlign={ 'middle' }>{ reported_value }</Td>
      <Td textAlign={ 'center' } verticalAlign={ 'middle' }>{ reported_date }</Td>
      <Td textAlign={ 'center' } verticalAlign={ 'middle' }>{ unit }</Td>
      <Td textAlign={ 'center' } verticalAlign={ 'middle' }>{ past_six_month_violation }</Td>
      <Td textAlign={ 'center' } verticalAlign={ 'middle' }>{ notes }</Td>
  </Tr>
  );
};

export default TableItem;
