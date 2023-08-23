import { FC } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Heading,
} from '@chakra-ui/react';
import TableItem from './table-item';
import { IStructuresDataTankInfo } from '@Redux/structures-data/structuresDataSlice';

interface IStructuresData {
  tanksInfo: IStructuresDataTankInfo[];
}

const StructuresData: FC<IStructuresData> = ({ tanksInfo }) => {

  if(tanksInfo.length < 1) {
    return null;
  }

  return (
    <>
    <Heading
      as='h2'
      size='xl'
      fontWeight={ 500 }
      color='gray.600'
    >
      Structures data
    </Heading>
      <TableContainer >
        <Table size={ 'sm' } padding={ 0 }>
          <Thead>
            <Tr fontSize={ 'x-small' }>
              <Th isNumeric>Setting tank</Th>
              <Th isNumeric>Setting tank area</Th>
              <Th isNumeric>Process tanks</Th>
              <Th isNumeric>Process tanks area</Th>
              <Th isNumeric>Cooling towers</Th>
            </Tr>
          </Thead>
          <Tbody>
            { tanksInfo.map(item => (
              <TableItem
                key={ item.id }
                coolingTowers={ item.coolingTowers }
                numberOfProcessTanks={ item.numberOfProcessTanks }
                numberOfSettingTank={ item.numberOfSettingTank }
                processTankArea={ item.processTankArea }
                settingTankArea={ item.settingTankArea }
              />
            )) }
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StructuresData;
