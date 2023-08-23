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
      <Td isNumeric>{ limit_value_nmbr }</Td>
      <Td isNumeric>{ reported_value }</Td>
      <Td isNumeric>{ reported_date }</Td>
      <Td isNumeric>{ unit }</Td>
      <Td isNumeric>{ past_six_month_violation }</Td>
      <Td isNumeric>{ notes }</Td>
  </Tr>
  );
};

export default TableItem;
