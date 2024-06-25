import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Typography, Button, TextField, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { send } from 'emailjs-com';
import './index.css';
import Project from './Project';
import taskforce from './assets/taskforce.png';
import xrph from './assets/xrph.png';
import timeblock from './assets/timeblock.png';
import monitorme from './assets/monitorme.png';
import surge from './assets/surge.png';
import docvr from './assets/docvr.png';
import resume from './assets/resume.pdf';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#0582ca'
    },
    success: {
      main: '#0cce6b'
    }
  },
});

function App() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [subjectError, setSubjectError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  const handleSubmit = () => {
    console.log(subject);
    console.log(name);
    console.log(company);
    console.log(email);
    console.log(message);

    let errorMessages = [];

    if (subject.length === 0) {
      setSubjectError(true);
      errorMessages.push("Error: Please enter a value for the subject.");
    } else {
      setSubjectError(false);
    }
    if (name.length === 0) {
      setNameError(true);
      errorMessages.push("Error: Please enter a value for your name.");
    } else {
      setNameError(false);
    }
    if (message.length === 0) {
      setMessageError(true);
      errorMessages.push("Error: Please enter a value for the message.");
    } else {
      setMessageError(false);
    }
    if (email.length === 0 || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) === false) {
      setEmailError(true);
      errorMessages.push("Error: Please enter a valid email.");
    } else {
      setEmailError(false);
    }

    let successMessage = "";
    if (errorMessages.length === 0) {
      
      // SEND EMAIL
      // template id: 
      // service id: 
      send(
        'service_ou95crl',
        'template_knhyux6',
        {
          subject: subject,
          name: name,
          company: company,
          email: email,
          message: message
        },
        'F0BeuTn_xS5aQEoY3'
      )
      .then((response) => {
        successMessage = "Thank you for contacting me. I will respond as soon as I can.";
        setSuccess(successMessage);
        setErrors([]);
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        setSuccess("");
        setErrors(["Error sending email. Please check your connection."]);
        console.log('FAILED...', err);
      });
    } else {
      setSuccess("");
      setErrors(errorMessages);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3} id="#top">
        <Grid item container xs={12} justifyContent="flex-end" style={{height: '80px', marginTop: '20px'}}>
          <Grid item xs={0} sm={3} md={6} lg={6} />
          <Grid item xs={3} sm={3} md={2} lg={2}  style={{ textAlign: "right" }}>
            <span style={{color: "#0cce6b", fontSize: '15px', fontFamily: 'Space Mono'}}>01.</span><Link href="#about" underline="hover" variant="h6" style={{color: '#ffffff', fontSize: '15px', fontFamily: 'Space Mono', cursor: 'pointer'}}>About</Link>
            
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={2} style={{ textAlign: "center" }} >
            <span style={{color: "#0cce6b", fontSize: '15px', fontFamily: 'Space Mono'}}>02.</span><Link href="#projects" underline="hover" variant="h6" style={{color: '#ffffff', fontSize: '15px', fontFamily: 'Space Mono', cursor: 'pointer'}}>Projects</Link>
           
          </Grid>
          <Grid item xs={3} sm={3} md={2} lg={2}>
            <span style={{color: "#0cce6b", fontSize: '15px', fontFamily: 'Space Mono'}}>03.</span><Link href="#contact" underline="hover" variant="h6" style={{color: '#ffffff', fontSize: '15px', fontFamily: 'Space Mono', cursor: 'pointer'}}>Contact</Link>
            
          </Grid>
         </Grid>
        <Grid item container xs={12} style={{height: '80px'}} />
        <Grid item container xs={12} style={{height: '100px'}}>
          <Grid item xs={1} />
          <Grid item container xs={9}>
            <Grid item xs={12} style={{height: '100px'}}>
              <Typography color="primary" variant="h1" style={{fontFamily: 'Kanit'}} sx={{ fontSize: {xs: '50px', sm: '80px', md: '100px', lg: '100px'}}}>
                Hi, I'm Evan.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={12} sx={{ height: {xs: '0px', sm: '0px', md: '15px', lg: '15px'}}} />
          <Grid item xs={1} />
          <Grid item xs={9}>
            <Typography variant="h5" sx={{ marginTop: { xs: '-20px', sm: '0px', md: '0px', lg: '0px' } }} style={{fontWeight: 'bold', color: '#0cce6b', fontFamily: 'Kanit'}}>
              Software Developer
            </Typography>
            <Typography variant="h6" color="secondary" sx={{ marginTop: { xs: '20px', sm: '10px', md: '10px', lg: '10px' } }} style={{fontSize: '18px', fontFamily: 'Space Mono'}}>
              I am a software developer who specializes in creating meaningful app experiences. Currently, I'm working on my startup Brighter, a microlearning mobile application.
            </Typography>
            <Button variant="outlined" color="success" href="https://github.com/evanbrooks0629/TaskForceAI" target="_blank" style={{marginTop: '30px', textTransform: 'none', borderWidth: '3px', fontWeight: 'bold', fontFamily: 'Space Mono'}}>View my most recent project</Button>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={12} style={{height: '50px'}} />
          <Grid item xs={12} align="center" style={{height: '50px'}}>
            <Link href="#about"><ArrowDownwardIcon color="success" style={{fontSize: '30px'}} /></Link>
          </Grid>
          <Grid item xs={12} sx={{ height: { xs: '250px', sm:'250px', md:'250px', lg: '300px', xl: '300px' } }} />
          <Grid item xs={12} style={{height: '100px'}} id="about" />
          <Grid item container xs={12}>
            <Grid item xs={1} />
            <Grid item container xs={8} sm={6} md={6} lg={6} >
              <Typography variant="h4" color="primary" style={{fontFamily: 'Kanit'}}><span style={{color: '#0cce6b', fontFamily: 'Space Mono'}}>01.&nbsp;</span>About Me</Typography>
              <Typography variant="h6" color="secondary" style={{marginTop: "20px", fontSize: '18px', fontFamily: 'Space Mono'}}>
                Hey there! My name is Evan Brooks, and I recently conpleted my bachelor's degree in computer science at the University of Florida. My interests lie in software development, crypto, climbing, and soccer. I love to create web apps with React and mobile apps with React Native. My most recent project is called TaskForceAI, which is a desktop application that allows for custom configuration of teams of AI agents to complete complex tasks. 
              </Typography>
              <Typography variant="h6" color="secondary" style={{marginTop: "20px", fontSize: '18px', fontFamily: 'Space Mono'}}>
                I tend to work with JavaScript, Python, and C++, but I am also knowledgable in HTML, CSS, PHP, MySQL.  Recently I have been working on projects using React and Node. 
              </Typography>
              <Typography variant="h6" color="primary" style={{marginTop: "20px", fontSize: '18px', fontFamily: 'Space Mono'}}>Some other notable projects include <Link underline="always" href="https://evanbrooks0629.github.io/TimeBlock/" target="_blank" style={{cursor: 'pointer', color: '#0cce6b'}}>TimeBlock</Link>, <Link underline="always" href="https://devpost.com/software/monitorme-q5gt2n" target="_blank" style={{cursor: 'pointer', color: '#0cce6b'}}>MonitorMe</Link>, and <Link underline="always" href="https://github.com/evanbrooks0629/surge" target="_blank" style={{cursor: 'pointer', color: '#0cce6b'}}>Surge</Link></Typography>
            </Grid>
            <Grid item xs={1} sm={2} md={2} lg={2} />
            <Grid item xs={1} sx={{ boxShadow: 20 }} style={{borderRadius: '50px', marginTop: '110px', height: '400px', minWidth: '50px', maxWidth: '50px', backgroundColor: '#0582ca'}}>
              <Typography style={{color: '#fff', marginTop: "65px", fontSize: '20px', fontFamily: 'Space Mono', transform: 'rotate(90deg)'}}>
                Follow
              </Typography>
              <Typography style={{color: '#fff', marginTop: "55px", fontSize: '20px', fontFamily: 'Space Mono', transform: 'rotate(90deg)'}}>
                Me
              </Typography>
              <IconButton href="https://github.com/evanbrooks0629" target="_blank" sx={{ boxShadow: 5 }} style={{height: '45px', width: '45px', backgroundColor: '#0cce6b', borderRadius: '50px', marginLeft: '2.5px', marginTop: '30px'}}><GitHubIcon /></IconButton>
              <IconButton href="https://www.linkedin.com/in/evan-brooks-ab368a242" target="_blank" sx={{ boxShadow: 5 }} style={{height: '45px', width: '45px', backgroundColor: '#0cce6b', borderRadius: '50px', marginLeft: '2.5px', marginTop: '2.5px'}}><LinkedInIcon /></IconButton>
              <IconButton href="https://www.instagram.com/_evanbrooks_/" target="_blank" sx={{ boxShadow: 5 }} style={{height: '45px', width: '45px', backgroundColor: '#0cce6b', borderRadius: '50px', marginLeft: '2.5px', marginTop: '2.5px'}}><InstagramIcon /></IconButton>
              <IconButton href={resume} target="_blank" sx={{ boxShadow: 5 }} style={{height: '45px', width: '45px', backgroundColor: '#0cce6b', borderRadius: '50px', marginLeft: '2.5px', marginTop: '2.5px'}}><DownloadIcon /></IconButton>
            </Grid>
            <Grid item xs={1} sm={2} md={2} lg={2} />
          </Grid>
          <Grid item xs={12} style={{height: '50px'}} />
          <Grid item xs={12} align="center" style={{height: '50px'}}>
            <Link href="#projects"><ArrowDownwardIcon color="success" style={{fontSize: '30px'}} /></Link>
          </Grid>
          <Grid item xs={12} style={{height: '250px'}} />
          <Grid item xs={12} style={{height: '100px'}} id="projects" />
          <Grid item container xs={12}>
            <Grid item xs={1} />
            <Grid item container xs={10}>
              <Grid item xs={12}>
                <Typography variant="h4" color="primary" style={{fontFamily: 'Kanit'}}><span style={{color: '#0cce6b', fontFamily: 'Space Mono'}}>02.&nbsp;</span>My Projects</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" color="secondary" style={{marginTop: "20px", fontSize: '18px', fontFamily: 'Space Mono'}}>
                  Here are a few of my best projects. You can see more of my work by checking out my <Link underline="always" href="https://github.com/evanbrooks0629" target="_blank" style={{cursor: 'pointer', color: '#0cce6b'}}>GitHub</Link>.
                </Typography>
              </Grid>
              <Grid item container xs={12} style={{marginTop: '30px', position: 'relative'}}>
                <Project title="TaskForceAI" link1="https://github.com/evanbrooks0629/TaskForceAI" link2="https://youtu.be/npXj7mpZvDQ" subtitle="TaskForceAI is a desktop application that allows for custom configuration of teams of AI agents to complete complex tasks. Users can choose from multiple LLMs to run tasks. By configuring teams of agents, each task can be worked on by multiple agents simultaneously. Built using PyQt6 and Microsoft Autogen in Python." img1={taskforce} />
                <Project title="XRPH Wallet" link1="https://apps.apple.com/us/app/xrph-wallet/id6451218628" link2="https://github.com/XRPHealthcare/XRPH-Mobile-Wallet" subtitle="A non-custodial mobile wallet for the XRP Ledger. Users can send and receive XRP and XRPH, track transaction history, and get rewards using the XRPH Prescription Savings Card. Built with React Native, Firebase, Google Cloud, and XRPL.js. Visit the link to find out how to download it and the Github repository to view the open source code." img1={xrph} />
                <Project title="TimeBlock" link1="https://github.com/evanbrooks0629/TimeBlock" link2="https://evanbrooks0629.github.io/TimeBlock/" subtitle="Inspired by the popular TimeBlocking technique, I set out to create an app that let me do that, but using technology. This PWA lets you visually plan out your day by using things called 'blocks,' which can be any event. It is quite useful when you know you have things to do, but are having trouble planning out fitting everything into your day." img1={timeblock} />
                <Project title="MonitorMe" link1="https://github.com/evanbrooks0629/MonitorMe" link2="https://devpost.com/software/monitorme-q5gt2n" subtitle="Created in a solo Hackathon, MonitorMe aims to give buyers an advantage in a competitive online shopping market. This web app lets you create monitors, or price checkers, for a number of popular stores, like Walmart, Target, and BestBuy. Get notified when the price of an item drops below or at your target price, and go quickly to checkout to secure your product." img1={monitorme} />
                <Project title="Surge" link1="https://github.com/evanbrooks0629/surge" link2="https://devpost.com/software/surge-7guwd8" subtitle="While my attempt to creating a Supreme bot was rather short lived, I still gained a ton of experience creating a desktop app in Python. This allowed users to use bots to get a much better chance at capturing Supreme products, allowing you to resell them and make a profit. This project has been open sourced, and is used as a Sneaker bot template for many users." img1={surge} />
                <Project title="DocVR" link1="https://github.com/nitinramadoss/docvr" link2="https://devpost.com/software/docvr-virtual-reality-ai-health-assitant" subtitle="This is from my first hackathon, which composed of a team of people I go to school with. The app is a VR doctor appointment, where the user discusses their symptoms with the doctor. The AI model for the doctor was trained to respond to a number of symptoms and diagnose an illness based on the user's input. I focused mostly on the backend / data collection aspect, and I also helped with converting text to speech. We actually won 'Best Covid Hack' for this project." img1={docvr} />
              </Grid>
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid item xs={12} style={{height: '50px'}} />
          <Grid item xs={12} align="center" style={{height: '50px'}}>
            <Link href="#contact"><ArrowDownwardIcon color="success" style={{fontSize: '30px'}} /></Link>
          </Grid>
          <Grid item xs={12} style={{height: '250px'}} />
          <Grid item xs={12} style={{height: '100px'}} id="contact" />
          <Grid item container xs={12}>
            <Grid item xs={1} />
            <Grid item container xs={10}>
              <Grid item container xs={12}>
                <Grid item xs={12}>
                  <Typography variant="h4" color="primary" style={{fontFamily: 'Kanit'}}><span style={{color: '#0cce6b', fontFamily: 'Space Mono'}}>03.&nbsp;</span>Contact Me</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" color="secondary" style={{marginTop: "20px", fontSize: '18px', fontFamily: 'Space Mono'}}>
                    Contact me for any work inquiries, questions, or just to say a quick hello.
                  </Typography>
                </Grid>
                <Grid item container xs={12} spacing={3} style={{marginTop: '20px'}}>
                  <Grid item xs={12}>
                    <TextField
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      fullWidth
                      required
                      id="outlined-required"
                      label="Subject"
                      placeholder="Subject"
                      variant="outlined"
                      color="success"
                      focused
                      error={subjectError}
                      InputLabelProps={{
                        style: { fontFamily: 'Space Mono' },
                        
                      }}
                      sx={{ input: { color: "#fff" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField
                      value={name}
                      onChange={e => setName(e.target.value)}
                      fullWidth
                      required
                      id="outlined-required"
                      label="Name"
                      placeholder="Larry Page"
                      variant="outlined"
                      color="success"
                      focused
                      error={nameError}
                      InputLabelProps={{
                        style: { fontFamily: 'Space Mono' },
                        
                      }}
                      sx={{ input: { color: "#fff" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <TextField
                      value={company}
                      onChange={e => setCompany(e.target.value)}
                      fullWidth
                      id="outlined-required"
                      label="Company"
                      placeholder="Google"
                      variant="outlined"
                      color="success"
                      focused
                      InputLabelProps={{
                        style: { fontFamily: 'Space Mono' },
                        
                      }}
                      sx={{ input: { color: "#fff" } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      fullWidth
                      required
                      id="outlined-required"
                      label="Email"
                      placeholder="larrypage@gmail.com"
                      variant="outlined"
                      color="success"
                      focused
                      error={emailError}
                      InputLabelProps={{
                        style: { fontFamily: 'Space Mono' },
                        
                      }}
                      sx={{ input: { color: "#fff" } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      fullWidth
                      required
                      multiline
                      id="outlined-required"
                      label="Message"
                      placeholder="Hey there!"
                      variant="outlined"
                      color="success"
                      focused
                      error={messageError}
                      rows={3}
                      InputLabelProps={{
                        style: { fontFamily: 'Space Mono' },
                        
                      }}
                      sx={{ textarea: { color: "#fff" } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={6} lg={6}>
                    <Button onClick={handleSubmit} size="large" variant="outlined" color="success" style={{textTransform: 'none', borderWidth: '3px', fontWeight: 'bold', fontFamily: 'Space Mono'}}>Submit</Button>
                  </Grid>
                  <Grid item xs={12} sm={8} md={6} lg={6}>
                    {
                      errors.map(error => {
                        return <Typography color="error" style={{ fontSize: '15px', fontFamily: 'Space Mono' }} display="block">{error}</Typography>
                      })
                    }
                    <Typography style={{ fontSize: '15px', fontFamily: 'Space Mono', color: '#0cce6b'}} display="block">{success}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} />
          </Grid>
          <Grid item xs={12} style={{height: '50px'}} />
          <Grid item xs={12} align="center" style={{height: '50px'}}>
            <Link href="#bottom"><ArrowDownwardIcon color="success" style={{fontSize: '30px'}} /></Link>
          </Grid>
          <Grid item xs={12} style={{height: '200px'}} />
          <Grid item xs={12} id="bottom" style={{height: '50px'}} />
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Typography variant="h6" color="secondary" style={{marginTop: "20px", fontSize: '18px', fontFamily: 'Space Mono'}}>
               Website created by Evan Brooks. If you would like a website like this for yourself, please fill out the contact form and I'll respond as soon as I can.
            </Typography>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={12} style={{height: '50px'}} />
          <Grid item xs={12} style={{height: '50px'}} align="center">
            <Link underline="hover" variant="h5" color="secondary" href="#top" style={{cursor: 'pointer', color: "#0cce6b", fontFamily: 'Space Mono'}}>Go To Top <ArrowUpwardIcon /></Link>       
          </Grid>
          <Grid item xs={12} style={{height: '50px'}} />
        </Grid>
      </Grid>

      
    </ThemeProvider>
  );
}

export default App;
