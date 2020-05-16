import React from 'react';
import { Heading, Box, Text, Flex, Image, Button } from 'rebass';
import { FaLeaf } from 'react-icons/fa';
import { GiTwoCoins } from 'react-icons/gi';
import { FcKindle } from 'react-icons/fc';
import uploading from './images/uploading.svg';
import scanMenu from './images/scan_menu.svg';
import printMenu from './images/print.svg';
import { useAuth0 } from './services/auth0Wrapper';

function Home() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Box pb={4}>
        <Heading fontSize={5} my={4} textAlign="center" as="h1">
          Il menù per i ristoranti ai tempi del COVID-19
        </Heading>
        {/* <Flex mb={4} justifyContent="center">
          <Image src="//placehold.it/600x300" />
        </Flex> */}
        <Heading fontSize={4} mb={1} textAlign="center" as="h2">
          Genera un magic QR code che non cambia mai
        </Heading>
        <Heading fontSize={4} mb={1} textAlign="center" as="h2">
          I tuoi clienti potranno visualizzare il tuo menù online
        </Heading>
        <Flex
          flexDirection="column"
          alignItems="center"
          my={4}
          justifyContent="center"
        >
          <Button
            mb={3}
            onClick={() => loginWithRedirect()}
            height={48}
            variant="xxl"
          >
            Prova ora gratis per una settimana
          </Button>
          <Text>poi 3.99€ al mese per ristorante</Text>
        </Flex>
      </Box>

      <Box bg="#f2f2f2">
        <Flex
          maxWidth={1152}
          mx="auto"
          justifyContent="center"
          alignItems="center"
          my={5}
          flexWrap="wrap"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            width={[1, 0.4]}
            p={3}
          >
            <Image maxHeight={350} src={uploading} />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width={[1, 0.6]}
            p={4}
          >
            <Heading textAlign="center" fontSize={5} mb={3} as="h2">
              Carica il tuo menù nella piattaforma
            </Heading>
            <Text textAlign="center" fontSize={1}>
              Suggeriamo il formato PDF, JPG o PNG
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Box bg="#fff">
        <Flex
          maxWidth={1152}
          mx="auto"
          justifyContent="center"
          alignItems="center"
          py={5}
          flexWrap="wrap"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width={[1, 0.6]}
            p={4}
          >
            <Heading mb={3} as="h2" fontSize={5} textAlign="center">
              Ottieni un magic QR code
            </Heading>
            <Text fontSize={3} textAlign="center">
              Da stampare e mettere sui tavoli
            </Text>
            <Text fontSize={3} textAlign="center">
              Non preoccuparti non cambierà mai!
            </Text>
          </Flex>
          <Box width={[1, 0.4]} p={3}>
            <Image src={printMenu} />
          </Box>
        </Flex>
      </Box>

      <Box bg="#f2f2f2">
        <Flex
          maxWidth={1152}
          mx="auto"
          justifyContent="center"
          alignItems="center"
          py={5}
          flexWrap="wrap"
        >
          <Flex
            width={[1, 0.4]}
            justifyContent="center"
            alignItems="center"
            p={3}
          >
            <Image height={300} src={scanMenu} />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width={[1, 0.6]}
            p={4}
          >
            <Heading fontSize={5} mb={3} textAlign="center" as="h2">
              I clienti visualizzano il tuo menù
            </Heading>
            <Text fontSize={3} textAlign="center">
              Tramite scansione del magic QR code visualizzeranno il tuo menù
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box bg="#fff">
        <Flex
          maxWidth={1152}
          mx="auto"
          justifyContent="center"
          alignItems="center"
          py={5}
          flexWrap="wrap"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width={1}
            p={3}
          >
            <Heading fontSize={5} mb={3} textAlign="center" as="h2">
              Devi cambiare il menù? Il magic QR non cambia!
            </Heading>
            <Text fontSize={3} mb={2} textAlign="center">
              Evita di stampare continuamente nuovi QR code
            </Text>
            <Text fontSize={3} mb={2} textAlign="center">
              Aggiorna online i tuoi menù quante volte vuoi
            </Text>
            <Text fontSize={3} mb={2} textAlign="center">
              I tuoi clienti vedranno sempre il menù aggiornato!
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box py={5} bg="#f2f2f2">
        <Flex flexWrap="wrap" maxWidth={1152} mx="auto" mb={4}>
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
                3.99€ al mese
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
      <Box bg="#fff" py={4}>
        <Text textAlign="center">Stay safe</Text>
      </Box>
    </>
  );
}

export default Home;
