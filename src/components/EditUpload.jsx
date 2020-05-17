import React, { useRef, useState } from 'react';
import { Flex, Text, Button, Box, Image, Link } from 'rebass';
import { FaCloudUploadAlt, FaPrint, FaEdit, FaTrash } from 'react-icons/fa';
import { BsEyeFill } from 'react-icons/bs';
import { Input } from '@rebass/forms';
import { BASE_URL, MENU_TYPES } from '../config';
import { useAuth0 } from '../services/auth0Wrapper';
import request from 'superagent';
import { mutate } from 'swr';

function EditUpload({ restaurantId, data }) {
  const [uploading, setUploading] = useState(false);
  const [showUpdated, setShowUpdated] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
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
      setOpenUpdate(false);
      setTimeout(() => {
        setShowUpdated(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    } finally {
      setUploading(false);
    }
  };
  const deleteMenu = async () => {
    try {
      if (
        !window.confirm(
          "Sei sicuro di voler eliminare questo menu? L'operazione non è reversibile!",
        )
      ) {
        return;
      }
      const token = await getTokenSilently();
      await request
        .delete(`${BASE_URL}/restaurants/${restaurantId}/uploads/${data.id}`)
        .set('Authorization', `Bearer ${token}`);
      mutate('/restaurants');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box p={2}>
      <Box
        height="100%"
        width={260}
        p={3}
        style={{
          border: '1px solid #ddd',
          borderRadius: 4,
          boxShadow:
            '0 0.250em 0.375em rgba(50,50,93,.09), 0 0.063em 0.188em rgba(0,0,0,.08)',
        }}
      >
        <Text textAlign="center" fontSize={3} mb={1}>
          {MENU_TYPES[data.type]}
        </Text>
        <Box my={3}>
          <Flex mb={3}>
            <Link
              sx={{ display: 'flex', justifyContent: 'center' }}
              target="_blank"
              href={`https://view.menu-qr.tech/?id=${data.id}`}
            >
              <Image
                bg="#eee"
                src={`${BASE_URL}/view-qr/${data.id}`}
                width={0.7}
              />
            </Link>
          </Flex>
          <Box mb={2}>
            <Link href={`${BASE_URL}/download-qr/${data.id}`}>
              <Button width={1} variant="outline">
                <Flex justifyContent="center" alignItems="center">
                  <FaPrint />
                  <Text ml={2}>Stampa codice QR</Text>
                </Flex>
              </Button>
            </Link>
          </Box>
          <Box mb={2}>
            <Link
              target="_blank"
              href={`https://view.menu-qr.tech/?id=${data.id}`}
            >
              <Button width={1} variant="outline">
                <Flex justifyContent="center" alignItems="center">
                  <BsEyeFill />
                  <Text ml={2}>Visualizza menu</Text>
                </Flex>
              </Button>
            </Link>
          </Box>
        </Box>
        <Box height={1} my={3} bg="#ddd" />
        {openUpdate ? (
          <Box>
            <Text>Carica una nuova versione</Text>
            <Box my={3}>
              <Input
                disabled={uploading}
                ref={fileInput}
                type="file"
                accept=".pdf,.jpeg,.jpg,.png"
              />
            </Box>
            <Flex>
              <Button
                variant="outline"
                mr={2}
                disabled={uploading}
                onClick={() => setOpenUpdate(false)}
              >
                <Text>Chiudi</Text>
              </Button>
              <Button variant="primary" disabled={uploading} onClick={editMenu}>
                <Flex>
                  <FaCloudUploadAlt size={18} />
                  <Text ml={2}>Aggiorna</Text>
                </Flex>
              </Button>
            </Flex>
            {uploading && <Text my={2}>Caricamento...</Text>}
          </Box>
        ) : (
          <Flex alignItems="space-between">
            <Box flex={1} mr={2}>
              <Button onClick={() => setOpenUpdate(true)} variant="transparent">
                <Flex alignItems="center">
                  <FaEdit />
                  <Text ml={2}>Aggiorna</Text>
                </Flex>
              </Button>
            </Box>
            <Box flex={1} mr={2}>
              <Button onClick={deleteMenu} variant="transparent">
                <Flex alignItems="center">
                  <FaTrash />
                  <Text ml={2}>Rimuovi</Text>
                </Flex>
              </Button>
            </Box>
          </Flex>
        )}
        {showUpdated && (
          <Text textAlign="center" color="green" my={2}>
            Menù aggiornato!
          </Text>
        )}
      </Box>
    </Box>
  );
}

export default EditUpload;
