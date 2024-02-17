import Head from 'next/head';
import { ChakraProvider, Box, Heading, Input, Button, Link, Center, Image, Text, Flex, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <ChakraProvider>
      <div style={{ backgroundColor: '#ADD8E6' }} className="min-h-screen">
        <Head>
          <title>Login | Your App Name</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Flex minH="100vh" align="center" justify="center" p={8} flexDirection={{ base: 'column', md: 'row' }}>
          {/* Left Section - Login Form with Logo */}
          <Box w="100%" maxW="400px" p={8} rounded="md" boxShadow="lg" bg="white" mx="auto" mb={{ base: 8, md: 0 }}>
            

            <Image src="/your-logo.png" alt="Your Logo" mb={4} mx="auto" />

            <Heading as="h2" size="xl" mb={6} textAlign="center">
              Login to your Account
            </Heading>

            <form>
              <Box mb={4}>
                <label htmlFor="username" className="text-sm font-semibold mb-1">
                  Username:
                </label>
                <Input type="text" id="username" placeholder="Enter your username" variant="filled" />
              </Box>

              <Box mb={4}>
                <label htmlFor="password" className="text-sm font-semibold mb-1">
                  Password:
                </label>
                <Input type="password" id="password" placeholder="Enter your password" variant="filled" />
              </Box>

              <Button type="submit" colorScheme="blue" size="lg" w="100%" mb={2}>
                Login
              </Button>

              <Box textAlign="center" mt={2}>
                <Text mb={2} fontSize="xl" fontFamily="cursive">
                  OR
                </Text>
                <Button variant="outline" size="lg" w="100%" mb={2}>
                  Continue with Google
                </Button>
              </Box>

              <Box textAlign="center" mt={2}>
                <Link color="blue.500" href="#">
                  Issues? Contact us
                </Link>
              </Box>
            </form>
          </Box>

          {/* Right Section - Additional Content */}
          <VStack align="center" maxW="400px" ml={{ base: 0, md: 8 }}>
            {/* Text content */}
            <Text fontSize="2xl" fontFamily="fantasy" mb={4} textAlign="center">
              What can I say - I fell in love with smart Alloc
            </Text>

            {/* Image and text content */}
            <Flex align="center" flexDirection="column">
              <Image src="/images/steve-jobs.jpg" alt="Steve Jobs" boxSize="40px" borderRadius="full" />
              <Box mt={2}>
                <Text fontWeight="bold" fontSize="lg">
                  Steve Jobs
                </Text>
                <Text color="gray.500" fontSize="sm">
                  stevejobs@gmail.com
                </Text>
              </Box>
            </Flex>

            {/* Add your rating star component here */}
          </VStack>
        </Flex>
      </div>
    </ChakraProvider>
  );
}
