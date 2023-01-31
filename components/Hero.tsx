"use client"
import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Moving on a <br />
            <Text as={'span'} color={'green.400'}>
              budget?
            </Text>
            
          </Heading>
          <Text color={'gray.500'}>
            Our core problem is the accumulation of excess waste as a result of students moving in/out of their apartments and abandoning used furniture 
            on the street at start/end of semester.
          </Text>

          <Text color={'gray.500'}>
          Our solution helps off-campus students who want to find / dispose of furniture by easily displaying nearby items, free of charge.
          </Text>
          
          <Text color={'gray.500'}>
          Interested? Let us know your thoughts in <Button variant={'link'} colorScheme={'blue'} size={'sm'}> this survey. </Button>
          </Text>
        </Stack>
      </Container>
    </>
  );
}

