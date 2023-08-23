'use client';

import { Box, Center, Flex, Heading, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { FC } from 'react';
import TableItem from './table-item';
import { useAppSelector } from '@hooks/redux';
import { selectorDMRDataArray } from '@Redux/dmr-data/dmrDataSelectors';


const DMRTable: FC = () => {
  const dmrData = useAppSelector(selectorDMRDataArray);

  if(dmrData.length < 0) {
    return null; 
  }

  return (
    <Box
      w={ '100%' }
      h={ 'fit-content' }
    >
      <Center mt={ '50px' }>
        <Flex flexDirection={ 'column' } maxWidth='1280px' justifyContent={ 'space-between' } alignItems={ 'flex-end' }>
          <Center width={ '100%' }>
            <Heading
              as='h2'
              size='xl'
              fontWeight={ 500 }
              color='gray.600'
            >
              DMR data
            </Heading>
          </Center>
          <TableContainer mt={ '30px' } border={ '1px' } borderColor={ 'grey.400' } borderRadius={ '10px' }>
            <Table size={ 'lg' } padding={ 0 }>
              <Thead>
                <Tr fontSize={ 'lg' }>
                  <Th isNumeric>Limit value</Th>
                  <Th isNumeric>Reported value</Th>
                  <Th isNumeric>Reported Date</Th>
                  <Th isNumeric>Unit</Th>
                  <Th isNumeric>Violation</Th>
                  <Th isNumeric>Notes</Th>
                </Tr>
              </Thead>
              <Tbody>
                { dmrData.map(item => (
                  <TableItem
                    key={ item.id }
                    limit_value_nmbr={ item.limit_value_nmbr }
                    notes={ item.notes }
                    past_six_month_violation={ item.past_six_month_violation }
                    reported_date={ item.reported_date }
                    reported_value={ item.reported_value }
                    unit={ item.unit }
                  />
                )) }
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Center>
    </Box>
  );
};

export default DMRTable;
