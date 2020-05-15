import React, { useRef, useState } from 'react';
import { Flex, Text, Button, Box } from 'rebass';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Input, Label, Select } from '@rebass/forms';
import { BASE_URL } from '../config';
import { useAuth0 } from '../services/auth0Wrapper';
import request from 'superagent';
import { mutate } from 'swr';

function AddUpload({ restaurantId }) {
  const [hasFiles, setHasFiles] = useState(false);
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
        .attach('menu', fileInput.current.files[0]);
      mutate('/restaurants');
    } catch (err) {
      setUploading(false);
      console.log(err);
    } finally {
      setUploading(false);
    }
  };
  return (
    <Box p={2}>
      <Box
        height="100%"
        minWidth={300}
        p={3}
        style={{ border: '1px dashed #ddd', borderRadius: 4 }}
      >
        <Label mb={1}>Tipologia</Label>
        <Select value={type} onChange={(e) => setType(e.target.value)} mb={3}>
          <option value="" disabled></option>
          <option value="default">Menu completo</option>
          <option value="drinks">Menu bevande</option>
          <option value="desserts">Menu dessert</option>
          <option value="lunch">Menu pranzo</option>
          <option value="dinner">Menu cena</option>
          <option value="daily">Menu del giorno</option>
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
        {console.log(uploading, !hasFiles, !type)}
        <Button disabled={uploading || !hasFiles || !type} onClick={addMenu}>
          <Flex>
            <FaCloudUploadAlt size={18} />
            <Text ml={2}>Carica</Text>
          </Flex>
        </Button>
        {uploading && <Text my={2}>Caricamento...</Text>}
      </Box>
    </Box>
  );
}

export default AddUpload;
