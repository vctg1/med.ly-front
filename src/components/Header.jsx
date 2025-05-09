import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import React from "react";
import medImg from "../images/med-logo.png"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from "react-router";

export default function Header(){
    const location = useLocation();
    const currentPath = location.pathname;
    return(
        <Grid marginBottom="2rem" display={'flex'} justifyContent={'space-between'}>
            <img src={medImg} height='80vh' />
            <Box display={'flex'} gap="1em" >
            <ButtonGroup >
            <Link style={{display:'flex'}} to='/'><Button variant={currentPath === '/' ? 'contained' : 'text'}>Home</Button></Link>
            <Link style={{display:'flex'}} to='/agenda'><Button variant={currentPath === '/agenda' ? 'contained' : 'text'}>Agenda</Button></Link>
            <Link style={{display:'flex'}} to='/pacientes'><Button variant={currentPath === '/pacientes' ? 'contained' : 'text'}>Pacientes</Button></Link>
            </ButtonGroup>
            </Box>
            <Box display={'flex'} gap="1em" >
            <ButtonGroup variant="text">
            <Button>
            <AccountBoxIcon color="info" />
            </Button>
            <Button>
            <LogoutIcon color="error"/>
            </Button>
            </ButtonGroup>
            </Box>
        </Grid>
    )
}