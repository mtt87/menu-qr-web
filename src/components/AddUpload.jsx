import React, { useRef, useState } from 'react';
import { Flex, Text, Button, Box } from 'rebass';
import { FaCloudUploadAlt, FaPlus } from 'react-icons/fa';
import { Input, Label, Select } from '@rebass/forms';
import { BASE_URL, MENU_TYPES } from '../config';
import { useAuth0 } from '../services/auth0Wrapper';
import request from 'superagent';
import { mutate } from 'swr';

function AddUpload({ restaurantId, first, availableMenus }) {
  const [hasFiles, setHasFiles] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('');
  const [uploading, setUploading] = useState(false);
  const fileInput = useRef();
  const { getTokenSilently } = useAuth0();
  const addMenu = async () => {
    try {
      setUploading(true);
      const token = await getTokenSilently();
      await request
        .post(`${BASE_URL}/restaurants/${restaurantId}/uploads`)
        .set('Authorization', `Bearer ${token}`)
        .field('type', type)
        .attach('menu', fileInput.current.files[0]);
      setOpen(false);
      setType('');
      mutate('/restaurants');
    } catch (err) {
      console.log(err);
      setUploading(false);
    } finally {
      setUploading(false);
    }
  };
  if (!open) {
    return (
      <Box onClick={() => setOpen(true)} sx={{ cursor: 'pointer' }} p={2}>
        <Flex
          height="100%"
          width={260}
          p={3}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ border: '1px dashed #ddd', borderRadius: 4 }}
        >
          <FaPlus size={32} />
          {first ? (
            <Text mt={3}>Carica il tuo primo menu</Text>
          ) : (
            <Text mt={3}>Aggiungi un altro tipo di menu</Text>
          )}
        </Flex>
      </Box>
    );
  }
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
        <Label mb={2}>Tipologia</Label>
        <Select value={type} onChange={(e) => setType(e.target.value)} mb={3}>
          <option value="" disabled>
            Seleziona tipo di menù
          </option>
          {availableMenus.map((t) => (
            <option key={t} value={t}>
              {MENU_TYPES[t]}
            </option>
          ))}
        </Select>
        <Box mb={3}>
          <Input
            disabled={uploading}
            ref={fileInput}
            type="file"
            accept=".pdf,.jpeg,.jpg,.png"
            mb={1}
            onChange={(e) => setHasFiles(e.target.files.length > 0)}
          />
          <Text mb={3} fontSize={1}>
            * solo immagini e pdf
          </Text>
        </Box>
        <Flex alignItems="center">
          <Button mr={2} variant="outline" onClick={() => setOpen(false)}>
            <Text>Chiudi</Text>
          </Button>
          <Button disabled={uploading || !hasFiles || !type} onClick={addMenu}>
            <Flex>
              <FaCloudUploadAlt size={18} />
              <Text ml={2}>Carica</Text>
            </Flex>
          </Button>
        </Flex>
        {uploading && <Text my={2}>Caricamento...</Text>}
      </Box>
    </Box>
  );
}

export default AddUpload;
