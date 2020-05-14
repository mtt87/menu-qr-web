import React from 'react';
import { Heading, Box, Text, Flex, Image, Button } from 'rebass';
import uploading from './images/uploading.svg';
import uploadChange from './images/upload_change.svg';
import scanQR from './images/scan_qr.png';

function Home() {
  return (
    <Box>
      <Heading fontSize={5} textAlign="center" as="h1">
        Il menù ai tempi del COVID-19
      </Heading>
      <Flex my={4} justifyContent="center">
        <Button height={48} variant="xxl">
          Prova ora gratis per una settimana
        </Button>
      </Flex>
      <Flex
        maxWidth={1152}
        mx="auto"
        justifyContent="center"
        alignItems="center"
        my={5}
      >
        <Flex justifyContent="center" alignItems="center" width={0.4} p={3}>
          <Image maxHeight={350} src={uploading} />
        </Flex>
        <Box width={0.6} p={3}>
          <Heading fontSize={5} textAlign="center" mb={3} as="h2">
            Aggiungi il tuo menù nella piattaforma
          </Heading>
          <Text fontSize={1} textAlign="center">
            Suggeriamo il formato PDF o un immagine JPG o PNG
          </Text>
        </Box>
      </Flex>
      <Box bg="#f0f0f0">
        <Flex
          maxWidth={1152}
          mx="auto"
          justifyContent="center"
          alignItems="center"
          py={4}
        >
          <Box width={0.6} p={3}>
            <Heading mb={3} as="h2" fontSize={5} textAlign="center">
              Ottieni un QR code da poter stampare e posizionare sui tavoli
            </Heading>
            <Text textAlign="center">
              I tuoi clienti potranno cosi visualizzare il tuo menù
            </Text>
          </Box>
          <Box width={0.4} p={3}>
            <Image src={scanQR} />
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent="center" alignItems="center" my={5}>
        <Flex width={0.4} justifyContent="center" alignItems="center" p={3}>
          <Image maxHeight={250} src={uploadChange} />
        </Flex>
        <Box width={0.6} p={3}>
          <Heading fontSize={5} mb={3} textAlign="center" as="h2">
            Vuoi cambiare il tuo menù? Il QR code NON cambia!
          </Heading>
          <Text textAlign="center">
            Salva il nuovo menù nella nostra piattaforma senza dover ri-stampare
            il QR code, i tuoi clienti vedranno il menù aggiornato!
          </Text>
        </Box>
      </Flex>
      <Box bg="#f0f0f0">
        <Flex
          maxWidth={1152}
          mx="auto"
          justifyContent="center"
          alignItems="center"
          py={4}
        >
          Ecofriendly, X euro al mese, igenico
        </Flex>
      </Box>
    </Box>
  );
}

export default Home;
