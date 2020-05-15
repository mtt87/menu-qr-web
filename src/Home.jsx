import React from 'react';
import { Heading, Box, Text, Flex, Image, Button } from 'rebass';
import { FaLeaf } from 'react-icons/fa';
import { GiTwoCoins } from 'react-icons/gi';
import { FcKindle } from 'react-icons/fc';
import uploading from './images/uploading.svg';
import uploadChange from './images/upload_change.svg';
import scanQR from './images/scan_qr.png';
import { useAuth0 } from './services/auth0Wrapper';

function Home() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Box>
      <Heading fontSize={5} my={4} textAlign="center" as="h1">
        Il menù ai tempi del COVID-19 in tre semplici passi
      </Heading>
      <Flex my={4} justifyContent="center">
        <Button onClick={() => loginWithRedirect()} height={48} variant="xxl">
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
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={0.6}
          p={3}
        >
          <Flex
            width={36}
            height={36}
            justifyContent="center"
            alignItems="center"
            sx={{
              borderRadius: 9999,
              borderColor: 'primary',
              borderWidth: 1,
              borderStyle: 'solid',
            }}
            mb={2}
          >
            <Text fontSize={2}>1</Text>
          </Flex>
          <Heading fontSize={5} mb={3} as="h2">
            Carica il tuo menù nella piattaforma
          </Heading>
          <Text fontSize={1}>Suggeriamo il formato PDF, JPG o PNG</Text>
        </Flex>
      </Flex>
      <Box bg="#f0f0f0">
        <Flex
          maxWidth={1152}
          mx="auto"
          justifyContent="center"
          alignItems="center"
          py={5}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width={0.6}
            p={3}
          >
            <Flex
              width={36}
              height={36}
              justifyContent="center"
              alignItems="center"
              sx={{
                borderRadius: 9999,
                borderColor: 'primary',
                borderWidth: 1,
                borderStyle: 'solid',
              }}
              mb={2}
            >
              <Text fontSize={2}>2</Text>
            </Flex>
            <Heading mb={3} as="h2" fontSize={5} textAlign="center">
              Ottieni un QR code che non cambia mai
            </Heading>
            <Text fontSize={3} textAlign="center">
              Da stampare e mettere sui tavoli
            </Text>
          </Flex>
          <Box width={0.4} p={3}>
            <Image src={scanQR} />
          </Box>
        </Flex>
      </Box>
      <Flex
        maxWidth={1152}
        mx="auto"
        justifyContent="center"
        alignItems="center"
        py={5}
      >
        <Flex width={0.4} justifyContent="center" alignItems="center" p={3}>
          <Image maxHeight={250} src={uploadChange} />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width={0.6}
          p={3}
        >
          <Flex
            width={36}
            height={36}
            justifyContent="center"
            alignItems="center"
            sx={{
              borderRadius: 9999,
              borderColor: 'primary',
              borderWidth: 1,
              borderStyle: 'solid',
            }}
            mb={2}
          >
            <Text fontSize={2}>3</Text>
          </Flex>
          <Heading fontSize={5} mb={3} textAlign="center" as="h2">
            I clienti visualizzano il tuo menù
          </Heading>
          <Text fontSize={3} textAlign="center">
            Tramite cansione del QR code verranno indirizzati al tuo menù
          </Text>
        </Flex>
      </Flex>
      <Box bg="#f0f0f0">
        <Flex
          maxWidth={1152}
          mx="auto"
          justifyContent="center"
          alignItems="center"
          py={5}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width={1}
            p={3}
          >
            <Heading fontSize={5} mb={3} textAlign="center" as="h2">
              Devi cambiare il menù? Mantieni lo stesso QR!
            </Heading>
            <Text fontSize={3} mb={2} textAlign="center">
              Evita di stampare continuamente nuovi QR code
            </Text>
            <Text fontSize={3} mb={2} textAlign="center">
              Una volta creato un QR code per un menù puoi aggiornarlo quante
              volte vuoi
            </Text>
            <Text fontSize={3} mb={2} textAlign="center">
              I tuoi clienti vedranno sempre il menù aggiornato!
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box py={5} bg="#fff">
        <Flex maxWidth={1152} mx="auto" mb={4}>
          <Box width={[1, 0.5, 0.3333]} p={3}>
            <Flex flexDirection="column" alignItems="center">
              <FcKindle size={48} />
              <Text mt={3} mb={2} fontSize={4} textAlign="center">
                Nessun sistema richiesto
              </Text>
              <Text textAlign="center">
                Non e' necessario nessuna integrazione o tablet
              </Text>
            </Flex>
          </Box>
          <Box width={[1, 0.5, 0.3333]} p={3}>
            <Flex flexDirection="column" alignItems="center">
              <GiTwoCoins color="#ffb367" size={48} />
              <Text mt={3} mb={2} fontSize={4} textAlign="center">
                x.xx€ al mese
              </Text>
              <Text textAlign="center">per ogni ristorante</Text>
            </Flex>
          </Box>
          <Box width={[1, 0.5, 0.3333]} p={3}>
            <Flex flexDirection="column" alignItems="center">
              <FaLeaf color="green" size={48} />
              <Text mt={3} mb={2} fontSize={4} textAlign="center">
                Rispetta l'ambiente
              </Text>
              <Text textAlign="center">Stampa una volta sola</Text>
            </Flex>
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Button onClick={() => loginWithRedirect()} height={48} variant="xxl">
            Prova ora gratis per una settimana
          </Button>
        </Flex>
      </Box>
      <Box bg="#f2f2f2" py={4}>
        <Text textAlign="center">Stay safe</Text>
      </Box>
    </Box>
  );
}

export default Home;
