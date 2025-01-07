import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './index.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff'
      },
      secondary: {
        main: '#0582ca'
      },
      info: {
        main: '#0cce6b'
      }
    },
  });

function Project(props) {
    return(
        <ThemeProvider theme={theme}>
            <Grid item container xs={12} sm={12} md={12} lg={12} xl={6} style={{backgroundImage: 'linear-gradient(#003554, #0cce6b), linear-gradient(#0cce6b, #0cce6b), linear-gradient(#0cce6b, #003554), linear-gradient(#0cce6b, #0cce6b)', backgroundRepeat: 'no-repeat', backgroundSize: '4px 80%, 100% 4px, 4px 80%, 100% 4px, calc(100% - 8px) calc(100% - 8px)', backgroundPosition: 'left bottom, left bottom, right top, right top, 4px 4px', marginBottom: '20px'}} sx={{ width: { xs: '100%', sm: '100%', md: '100%', lg: '100%', xl: '95%' } }}>
                <Grid item container xs={12} sm={12} md={6} lg={6} order={{ xs: 2, sm: 2, md: 1, lg: 1 }}>
                    <Grid item xs={12} style={{position: 'relative', paddingBottom: "50%", marginLeft: '5%', marginRight: '5%', marginTop: '5%', marginBottom: '5%', backgroundImage: `url(${props.img1})`, backgroundSize: 'cover', backgroundColor: 'rgba(12, 206, 107, 0.5)', backgroundBlendMode: 'multiply'}} ></Grid>
                 </Grid>
                <Grid item container xs={12} sm={12} md={6} lg={6} order={{ xs: 1, sm: 1, md: 2, lg: 2 }} justifyContent="flex-end" align="right">
                    
                    <Grid item xs={8} style={{marginTop: '15px'}}>
                        <Link underline="hover" variant="h5" color="secondary" href={props.link2} target="_blank" style={{cursor: 'pointer', padding: '15px 20px 0px 10px', color: "#0cce6b", fontFamily: 'Space Mono'}}>{props.title}</Link>
                    
                    </Grid>
                    <Grid item xs={4} direction="row">
                        {props.link1 && <IconButton href={props.link1} target="_blank" sx={{ boxShadow: 5 }} style={{height: '35px', width: '35px', backgroundColor: '#0cce6b', borderRadius: '50px', marginRight: '10px', marginTop: '15px'}}><GitHubIcon /></IconButton>}
                        {props.link2 && <IconButton href={props.link2} target="_blank" sx={{ boxShadow: 5 }} style={{height: '35px', width: '35px', backgroundColor: '#0cce6b', borderRadius: '50px', marginRight: '15px', marginTop: '15px'}}><LaunchIcon /></IconButton>}
                       
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="primary" style={{fontSize: '12px', padding: '10px 20px 15px 10px', fontFamily: 'Kanit'}}>{props.subtitle}</Typography>
                
                    </Grid>
                    
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Project;