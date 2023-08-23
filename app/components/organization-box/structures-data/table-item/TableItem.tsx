import { FC } from 'react';
import {
  Tr,
  Td,
} from '@chakra-ui/react';
import { IStructuresDataTankInfo } from '@Redux/structures-data/structuresDataSlice';

interface ITableItem extends Omit<IStructuresDataTankInfo, 'id'> {

}

const TableItem: FC<ITableItem> = ({
  processTankArea,
  coolingTowers,
  numberOfProcessTanks,
  numberOfSettingTank,
  settingTankArea,
}) => {
  return (
    <Tr fontSize={ 'x-small' }>
      <Td isNumeric>{ numberOfSettingTank }</Td>
      <Td isNumeric>{ settingTankArea }</Td>
      <Td isNumeric>{ numberOfProcessTanks }</Td>
      <Td isNumeric>{ processTankArea }</Td>
      <Td isNumeric>{ coolingTowers }</Td>
  </Tr>
  );
};

export default TableItem;
