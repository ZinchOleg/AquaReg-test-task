'use client';
import { Center, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <header>
      <Center bg='blue.400' h='60px' color='white' width='100%'>
        <Text fontSize='x-large' fontWeight='500'>
          AquaReg
        </Text>
      </Center>
    </header>
  );
};

export default Header;
