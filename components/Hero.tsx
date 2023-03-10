"use client"
import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Link,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '4xl', sm: '2xl', md: '6xl' }}
            lineHeight={'110%'}>
            Moving on a <br />
            <Text as={'span'} color={'green.400'}>
              budget?
            </Text>
            
          </Heading>
          <Text color={'gray.800'} fontSize={{ base: 'lg'}}>
            Our core problem is the accumulation of excess waste as a result of students moving in/out of their apartments and abandoning used furniture 
            on the street at start/end of semester.
          </Text>

          <Text color={'gray.800'} fontSize={{ base: 'lg'}}>
          Our solution helps off-campus students who want to find / dispose of furniture by easily displaying nearby items, free of charge.
          </Text>
          
          <Text color={'gray.800'} fontSize={{ base: 'lg'}}>
          Interested? Let us know your thoughts in <Link href='https://forms.gle/cM6hNc2aLpWtxBya7' color={'blue.500'}>this survey. </Link>
          </Text>
        </Stack>
      </Container>
    </>
  );
}

