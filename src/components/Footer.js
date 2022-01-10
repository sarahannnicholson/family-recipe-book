import * as React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Grid';

const Footer = () => (
  <Container component='footer'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h2'>Social</Typography>
        </Grid>
        <Grid item xs={12}>
          <Tooltip title="glutenfree.sarah's Instagram">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
              href='https://www.instagram.com/glutenfree.sarah/?hl=en'
            >
              <InstagramIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
  </Container>
)

export default Footer;
