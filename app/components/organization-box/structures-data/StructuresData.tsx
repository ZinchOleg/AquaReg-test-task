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
import { Box } from '@chakra-ui/react';

interface IStructuresData {
  tanksInfo: IStructuresDataTankInfo[];
}

const StructuresData: FC<IStructuresData> = ({ tanksInfo }) => {

  if(tanksInfo.length < 1) {
    return null;
  }

  return (
    <>
    <Box mb={ '10px' }>
      <Heading
        as='h2'
        size='xl'
        fontWeight={ 500 }
        color='gray.600'
    >
      Structures data
      </Heading>
    </Box>
      <TableContainer>
        <Table size={ 'sm' } padding={ 0 } align={ 'center' }>
          <Thead>
            <Tr fontSize={ 'x-small' }>
              <Th textAlign={ 'center' }>Setting tank</Th>
              <Th textAlign={ 'center' }>Setting tank area</Th>
              <Th textAlign={ 'center' }>Process tanks</Th>
              <Th textAlign={ 'center' }>Process tanks area</Th>
              <Th textAlign={ 'center' }>Cooling towers</Th>
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
