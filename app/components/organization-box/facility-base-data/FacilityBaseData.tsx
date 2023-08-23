import { IFacilityData } from '@Redux/facility-data/facilityDataSlice';
import { Box, Flex, Heading, Text, Tooltip } from '@chakra-ui/react';
import { FC } from 'react';

interface IFacilityBaseData extends IFacilityData {
}

const FacilityBaseData: FC<IFacilityBaseData> = ({
  city,
  country,
  facilityName,
  latitude,
  longitude,
  state,
  street,
  zip
}) => {
  return (
    <Flex
      flexDirection={ 'column' }
      alignItems={ 'flex-start' }
      color='gray.600'
      fontWeight={ 600 }
      borderRadius={ 10 }
    >
      <Heading
        as='h2'
        size='xl'
        fontWeight={ 500 }
      >
        { facilityName }
      </Heading>
      <Tooltip 
        hasArrow
        closeOnScroll
        closeDelay={ 2000 }
        pointerEvents={ 'all' }
        background={ 'blue.300' }
        padding={ '3' }
        borderRadius={ '8px' } label={ (
        <Box>
          <Text fontSize={ 'sm' } >Latitude: { latitude }</Text>
          <Text fontSize={ 'sm' } >Longitude: { longitude }</Text>
        </Box>
      ) }>
        <Text fontSize='md' mt='10px'>
          { `country: ${country}, state: ${state}, city: ${city}, street: ${street}, zip: ${zip}` }
        </Text>
      </Tooltip>
    </Flex>
  );
};

export default FacilityBaseData;
