import React from 'react';
import { Heading, Box, Text, Flex, Image, Link } from 'rebass';
import { FaLeaf, FaGithub } from 'react-icons/fa';
import { GiTwoCoins } from 'react-icons/gi';
import { FcKindle } from 'react-icons/fc';
import uploading from './images/uploading.svg';
import scanMenu from './images/scan_menu.svg';
import printMenu from './images/print.svg';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Box maxWidth={1152} px={3} mx="auto" py={6}>
        <Heading textAlign="center" mb={4} fontSize={5}>
          Ciao
        </Heading>
        <Text fontSize={3} mb={2} textAlign="center">
          ho sviluppato questo prototipo di servizio per la gestione dei codici
          QR e menù dei ristoranti.
        </Text>
        <Text fontSize={3} mb={5} textAlign="center">
          Mi sono poi reso conto strada facendo che ci sono valide alternative e
          ho quindi deciso di non portare avanti il progetto e renderlo
          open-source.
        </Text>
        <Flex mb={5} justifyContent="center" alignItems="center">
          <Box flex={1}>
            <Link
              target="_blank"
              rel="noopener"
              href="https://github.com/mtt87/menu-qr-server"
              sx={{ textDecoration: 'none' }}
            >
              <Flex p={2} alignItems="center" flexDirection="column">
                <FaGithub size={48} color="#333" />
                <Text mt={3} fontSize={4}>
                  Server
                </Text>
                <Text mt={2}>https://github.com/mtt87/menu-qr-server</Text>
              </Flex>
            </Link>
          </Box>
          <Box flex={1}>
            <Link
              target="_blank"
              rel="noopener"
              href="https://github.com/mtt87/menu-qr-web"
              sx={{ textDecoration: 'none' }}
            >
              <Flex p={2} alignItems="center" flexDirection="column">
                <FaGithub size={48} color="#333" />
                <Text mt={3} fontSize={4}>
                  Web app
                </Text>
                <Text mt={2}>https://github.com/mtt87/menu-qr-web</Text>
              </Flex>
            </Link>
          </Box>
          <Box flex={1}>
            <Link
              target="_blank"
              rel="noopener"
              href="https://github.com/mtt87/menu-qr-view"
              sx={{ textDecoration: 'none' }}
            >
              <Flex p={2} alignItems="center" flexDirection="column">
                <FaGithub size={48} color="#333" />
                <Text mt={3} fontSize={4}>
                  Web redirect page
                </Text>
                <Text mt={2}>https://github.com/mtt87/menu-qr-view</Text>
              </Flex>
            </Link>
          </Box>
        </Flex>
        <Text fontSize={3} mb={5} textAlign="center">
          Grazie per aver provato il servizio.
        </Text>
      </Box>
      <Box width={1}>
        <Box height={1} bg="#ccc" width={1} />
      </Box>
      <Box pb={4}>
        <Heading fontSize={5} my={4} textAlign="center" as="h1">
          Il menù per i ristoranti ai tempi del COVID-19
        </Heading>
        <Heading fontSize={4} mb={1} textAlign="center" as="h2">
          Genera un codice QR smart che non cambia mai
        </Heading>
        <Heading fontSize={4} mb={1} textAlign="center" as="h2">
          I tuoi clienti potranno visualizzare il tuo menù online
        </Heading>
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
              Ottieni un codice QR smart
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
              I clienti visualizzeranno il tuo menù
            </Heading>
            <Text fontSize={3} textAlign="center">
              Aprendo la fotocamera dello smartphone e inquadrando il codice QR
              smart
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
              Devi cambiare il menù? Il codice QR smart non cambia!
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
      <Box py={4} bg="#f2f2f2">
        <Flex flexWrap="wrap" maxWidth={1152} mx="auto">
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
                Gratis
              </Text>
              <Text textAlign="center">per singolo ristorante</Text>
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
      </Box>
      <Footer />
    </>
  );
}

export default Home;
