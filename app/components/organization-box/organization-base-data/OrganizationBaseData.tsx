'use client';

import { Box, Heading, Link, Text } from '@chakra-ui/react';
import { FC, useRef } from 'react';

interface IOrganizationBaseData {
  ownerType: string | null;
  companyOwner: string;
  websiteLink: string | null;
  linkedNumberOfFacilities: number;
  tankArea: number;
  phoneNumber: string;
}

const OrganizationBaseData: FC<IOrganizationBaseData> = ({
  companyOwner,
  linkedNumberOfFacilities,
  ownerType,
  phoneNumber,
  tankArea,
  websiteLink
}) => {
  const { current: ifNotSpecified } = useRef('not specified');

  return (
    <Box
      w='100%'
      h='fit-content'
      color='gray.600'
      fontWeight={ 600 }
    >
      <Box mb={ '10px' }>
        <Heading
            as='h2'
            size='xl'
            fontWeight={ 500 }
        >
          Organization info
        </Heading>
      </Box>

      <Box>
        <Text>Company owner: { companyOwner }</Text>
        <Text>Owner type: { ownerType || ifNotSpecified }</Text>
        <Text>Website Link: { websiteLink ? (
          <Link href={ websiteLink } isExternal>
            { websiteLink }
          </Link>
        ) : ifNotSpecified }
        </Text>
        <Text>Linked number of facilities: { linkedNumberOfFacilities }</Text>
        <Text>Phone number: { phoneNumber }</Text>
        <Text>Tank area: { tankArea }</Text>
      </Box>
    </Box>
  );
};

export default OrganizationBaseData;
