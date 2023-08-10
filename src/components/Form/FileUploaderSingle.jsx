import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Icon from '@components/icon';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({ multiple, onUpload }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: multiple,
    accept: {
			'image/*': ['.png', '.jpg', '.jpeg',]
		},
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file)));
      if (onUpload) {
        onUpload(acceptedFiles);
      }
    },
  });

  const img = files.map((file) => (
    <img key={file.name} alt={file.name} className='single-file-image' src={URL.createObjectURL(file)} />
  ));

  return (
    <Box {...getRootProps({ className: 'dropzone' })} sx={files.length ? { height: 450 } : {}}>
      <input {...getInputProps()} />
      {files.length ? (
        img
      ) : (
        <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Box
            sx={{
              mb: 8.75,
              width: 48,
              height: 48,
              display: 'flex',
              borderRadius: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: `${theme.palette.background.paper} !important`,
            }}
          >
            <Icon icon='tabler:upload' fontSize='1.75rem' />
          </Box>
          <Typography variant='h4' sx={{ mb: 2.5 }}>
            Drop files here or click to upload.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FileUploader;