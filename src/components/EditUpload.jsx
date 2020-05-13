import React, { useRef, useState } from 'react';
import { Flex, Text, Button, Box, Image, Link } from 'rebass';
import { FaCloudUploadAlt, FaDownload, FaPrint } from 'react-icons/fa';
import { Input } from '@rebass/forms';
import { BASE_URL } from '../config';
import { useAuth0 } from '../services/auth0Wrapper';
import request from 'superagent';

function EditUpload({ restaurantId, data }) {
  const [uploading, setUploading] = useState(false);
  const [showUpdated, setShowUpdated] = useState(false);
  const fileInput = useRef();
  const { getTokenSilently } = useAuth0();
  const editMenu = async () => {
    try {
      setUploading(true);
      const token = await getTokenSilently();
      await request
        .put(`${BASE_URL}/restaurants/${restaurantId}/uploads/${data.id}`)
        .set('Authorization', `Bearer ${token}`)
        .attach('menu', fileInput.current.files[0]);
      setShowUpdated(true);
      setTimeout(() => {
        setShowUpdated(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    } finally {
      setUploading(false);
    }
  };
  return (
    <Box p={2}>
      <Box
        minWidth={300}
        p={3}
        style={{ border: '1px solid #ddd', borderRadius: 4 }}
      >
        <Text mb={1} fontWeight="bold">
          {data.name}
        </Text>
        <Box py={3}>
          <Text fontSize={0} mb={1}>
            Anteprima QR
          </Text>
          <Box width={128} height={128} bg="#eee">
            <Link
              target="_blank"
              href={`https://view.menu-qr.tech/?id=${data.id}`}
            >
              <Image src={`${BASE_URL}/view-qr/${data.id}`} width={128} />
            </Link>
          </Box>
        </Box>
        <Link fontSize={3} href={`${BASE_URL}/download-qr/${data.id}`}>
          <Button variant="outline">
            <Flex alignSelf="center">
              <FaPrint />
              <Text ml={2}>Scarica QR da stampare</Text>
            </Flex>
          </Button>
        </Link>
        <Box height={1} my={3} bg="#ddd" />
        <Text>Aggiorna il menù con una nuova versione</Text>
        <Box my={3}>
          <Input
            disabled={uploading}
            ref={fileInput}
            type="file"
            accept=".pdf,.jpeg,.jpg,.png"
          />
        </Box>
        <Button disabled={uploading} onClick={editMenu}>
          <Flex>
            <FaCloudUploadAlt size={18} />
            <Text ml={2}>Aggiorna menù</Text>
          </Flex>
        </Button>
        {uploading && <Text my={2}>Caricamento...</Text>}
        {showUpdated && (
          <Text color="green" my={2}>
            Menù aggiornato!
          </Text>
        )}
      </Box>
    </Box>
  );
}

export default EditUpload;
