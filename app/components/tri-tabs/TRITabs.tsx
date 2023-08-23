'use client';

import { Box, Center, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { FC, HTMLAttributes, useRef } from 'react';
import CustomBarChart from './bar-chart';

interface ITRITabs extends HTMLAttributes<HTMLDivElement> {

}

const TRITabs: FC<ITRITabs> = () => {
  const staticDataForChart = useRef({
    off_site_waste_mgmt: [
      {
        name: 'off-site disposal',
        value: 1000,
      },
      {
        name: 'off-site recycling',
        value: 500,
      },
      {
        name: 'off-site energy recovery',
        value: 700,
      },
    ],
    on_site_waste_mgmt: [
      {
        name: 'on-site treatment',
        value: 400,
      },
      {
        name: 'on-site recycling',
        value: 100,
      },
      {
        name: 'on-site energy recovery',
        value: 400,
      },
    ],
    on_site_releases: [
      {
        name: 'air emissions',
        value: 450,
      },
      {
        name: 'Land releases',
        value: 800,
      },
      {
        name: 'surface water discharge',
        value: 120,
      },
    ],
  });
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
              TRI data
            </Heading>
          </Center>
          <Tabs mt='20px' width={ '650px' }>
            <TabList w={ '100%' } justifyContent={ 'space-between' }>
              <Tab>Off-site waste mgmt</Tab>
              <Tab>On-site waste mgmt</Tab>
              <Tab>On-site releases</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <CustomBarChart 
                  data={ staticDataForChart.current.off_site_waste_mgmt }
                />
              </TabPanel>
              <TabPanel>
                <CustomBarChart 
                    data={ staticDataForChart.current.on_site_waste_mgmt }
                />
              </TabPanel>
              <TabPanel>
                <CustomBarChart 
                      data={ staticDataForChart.current.on_site_releases }
                  />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Center>
    </Box>
  );
};

export default TRITabs;
