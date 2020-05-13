import React, { useRef, useState } from 'react';
import { Flex, Text, Button, Box } from 'rebass';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Input } from '@rebass/forms';
import { BASE_URL } from '../config';
import { useAuth0 } from '../services/auth0Wrapper';
import request from 'superagent';
import { mutate } from 'swr';

function AddUpload({ restaurantId }) {
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
        style={{ border: '1px solid #ddd', borderRadius: 4 }}
      >
        {/* <Text mb={3}>Aggiungi un menù</Text> */}
        <Box mb={3}>
          <Input disabled={uploading} ref={fileInput} type="file" />
        </Box>
        <Button disabled={uploading} onClick={addMenu}>
          <Flex>
            <FaCloudUploadAlt size={18} />
            <Text ml={2}>Carica menù</Text>
          </Flex>
        </Button>
        {uploading && <Text my={2}>Caricamento...</Text>}
      </Box>
    </Box>
  );
}

export default AddUpload;
