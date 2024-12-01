import { Box } from '@mui/material';

const NlognLogo = () => {
  const logoPath = `${import.meta.env.BASE_URL}nlogn-logo.svg`;

  return (
    <Box 
      component="img"
      src={logoPath}
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