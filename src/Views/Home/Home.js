import React from 'react';
import { Grid } from '@material-ui/core';
import imagemFundo from '../../images/fundo-pet-feliz.png';
import imagemLogo from '../../images/imagem-loginPage.png';
import './Home.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";

export default function HomePage() {

    return (

        <>
            <Grid className="loginPage">
                <Grid className="loginBox">
                    <Grid container className="topHome">
                        <Grid item xs={3} style={{
                            marginTop: '5%',
                            marginLeft: '6%'
                        }}>
                            <AccountCircleIcon style={{
                                fontSize: '50px'
                            }} />
                        </Grid>
                        <Grid item xs={4} >
                            <img alt="" src={imagemLogo} style={{
                                width: '50%',
                            }} />
                        </Grid>
                        <Grid item xs={4}>
                            <Button>Cadastrar PET</Button>
                            <Button>Sair</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <img alt="" src={imagemFundo} style={{
                    position: 'absolute'
                }} />
            </Grid>
        </>

    )

}