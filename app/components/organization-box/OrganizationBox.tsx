'use client';

import { FC } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';
import FacilityBaseData from '@components/organization-box/facility-base-data';
import Image from 'next/image';
import OrganizationBaseData from './organization-base-data';
import StructuresData from './structures-data';
import { useAppSelector } from '@hooks/redux';
import { selectorStructuresDataTanksInfo } from '@Redux/structures-data/structuresDataSelectors';
import { selectorFacilityData } from '@Redux/facility-data/facilityDataSelectors';
import profilePic from '../../../public/images/example.jpg';


const OrganizationBox: FC = () => {
  const tanksInfo = useAppSelector(selectorStructuresDataTanksInfo);
  const facilityData = useAppSelector(selectorFacilityData);

  return (
    <Box
      w='100%'
      h='fit-content'
    >
      <Center mt={ '20px' }>
        <Flex maxWidth='1280px' justifyContent={ 'space-between' } alignItems={ 'flex-start' }>
          <Flex  flexDirection={ 'column' } mr={ '20px' } >
            <FacilityBaseData
              city={ facilityData.city }
              country={ facilityData.country }
              facilityName={ facilityData.facilityName }
              latitude={ facilityData.latitude }
              longitude={ facilityData.longitude }
              state={ facilityData.state }
              street={ facilityData.street }
              zip={ facilityData.zip }
            />
            <Box mt='25px'>
              <OrganizationBaseData
                  companyOwner='South Yard'
                  linkedNumberOfFacilities={ 1 }
                  ownerType='Privately Owned Facility'
                  phoneNumber='(999) 123 1234'
                  tankArea={ 100 }
                  websiteLink={ 'https://name@example.com' }
              />
            </Box>
            <Box mt='25px'>
              <StructuresData
                tanksInfo={ tanksInfo }
              />
            </Box>
          </Flex>
          <Box
            position={ 'relative' }
            w={ '600px' }
            h={ '400px' }
            borderRadius={ '10px' }
            overflow={ 'hidden' }
          >
            <Image
              alt='facility photo'
              src={ profilePic }
              style={ {
                width: '100%',
                height: '100%',
              } }
              priority={ true }
            />
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default OrganizationBox;
