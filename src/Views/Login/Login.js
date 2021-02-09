import React from 'react';
import { Grid } from '@material-ui/core';
import './Login.css'
import imagemLogin from '../../images/imagem-loginPage.png'

export default function loginPage() {

    return (
        <>
            <Grid container className="loginPage">
                <Grid className="elipse1"></Grid>
                <Grid className="elipse2"></Grid>
                <Grid className="elipse3"></Grid>
                <Grid className="elipse4"></Grid>
                <Grid className="elipse5"></Grid>
                <Grid className="elipse6"></Grid>
                <Grid className="elipse7"></Grid>
                <Grid className="loginBox">
                    <Grid>
                        <img src={imagemLogin} />
                    </Grid>
                    <Grid className="loginForm">
                        <h1>Login</h1>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}