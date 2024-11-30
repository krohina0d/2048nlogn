import { Box } from '@mui/material';

const NlognLogo = () => {
  return (
    <Box 
      component="img"
      src="/nlogn-logo.svg"
      alt="nlogn logo"
      sx={{
        height: { xs: 40, sm: 50 },
        width: 'auto',
        mb: 2,
        cursor: 'pointer'
      }}
      onClick={() => window.open('https://nlogn.info/', '_blank')}
    />
  );
};

export default NlognLogo; 