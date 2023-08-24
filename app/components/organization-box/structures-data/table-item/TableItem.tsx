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
      <Td textAlign={ 'center' } verticalAlign={ 'middle' }>{ numberOfSettingTank }</Td>
      <Td textAlign={ 'center' } verticalAlign={ 'middle' }>{ settingTankArea }</Td>
      <Td textAlign={ 'center' } verticalAlign={ 'middle' }>{ numberOfProcessTanks }</Td>
      <Td textAlign={ 'center' } verticalAlign={ 'middle' }>{ processTankArea }</Td>
      <Td textAlign={ 'center' } verticalAlign={ 'middle' }>{ coolingTowers }</Td>
  </Tr>
  );
};

export default TableItem;
