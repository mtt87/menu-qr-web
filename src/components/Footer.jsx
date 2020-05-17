import React from 'react';
import { Box, Text, Link, Flex } from 'rebass';
import { FaLinkedin, FaTwitter, FaGithub, FaAt } from 'react-icons/fa';

function Footer() {
  return (
    <Box bg="#fff" py={4}>
      <Text display="block" mb={2} textAlign="center">
        Creato da Mattia Asti
      </Text>
      <Text mb={3} textAlign="center">
        <Link
          display="block"
          sx={{ textDecoration: 'none' }}
          mx={1}
          href="https://hextech.ch"
        >
          <span role="img" aria-label="logo">
            🧙‍♂️
          </span>{' '}
          hextech.ch
        </Link>
      </Text>
      <Flex justifyContent="center" alignItems="center">
        <Link mx={2} href="https://www.linkedin.com/in/mattiaasti/">
          <FaLinkedin size={22} color="#0077b5" />
        </Link>
        <Link mx={2} href="https://twitter.com/mattia_asti">
          <FaTwitter size={22} color="#1da1f2" />
        </Link>
        <Link mx={2} href="https://github.com/mtt87">
          <FaGithub size={22} color="#333" />
        </Link>
        <Link mx={2} href="mailto:mattia.asti@gmail.com">
          <FaAt size={22} />
        </Link>
      </Flex>
    </Box>
  );
}

export default Footer;
