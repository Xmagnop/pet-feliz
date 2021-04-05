import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import imagemFundo from '../../images/fundo-pet-feliz.png';
import imagemLogo from '../../images/imagem-loginPage.png';
import './Home.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import InputAdornment from "@material-ui/core/InputAdornment";

export default function HomePage() {

    return (

        <>
            <Grid className="loginPage">
                <Grid className="loginBoxHome">
                    <Grid container className="topHome">
                        <Grid item xs={3} style={{
                            marginTop: '1.5%',
                            marginLeft: '6%'
                        }}>
                            <AccountCircleIcon style={{
                                fontSize: '50px',
                                color: '#C4672C'
                            }} />
                        </Grid>
                        <Grid item xs={4} >
                            <img alt="" src={imagemLogo} style={{
                                width: '50%',
                            }} />
                        </Grid>
                        <Grid item xs={4} style={{
                            marginTop: '2%',
                            marginRight: '-15%'
                        }}>
                            <Button style={{
                                backgroundColor: '#4EBDEA',
                                borderRadius: '23px',
                                color: '#ffffff',
                                width: '35%',
                                fontFamily: 'Roboto'
                            }}>
                                Cadastrar PET
                            </Button>
                            <Link to="/" style={{ marginLeft: '2%', textDecoration: 'none' }}>
                                <Button style={{
                                    backgroundColor: '#D10000',
                                    borderRadius: '23px',
                                    color: '#ffffff',
                                    fontFamily: 'Roboto'
                                }}>
                                    Sair
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container className="middleHome">
                        <Grid item>
                            <input style={{
                                width: '100%',
                                height: '30px',
                                // marginLeft: '130%'
                                borderRadius: '20px'
                            }}
                                id="outlined-adornment-search"
                                placeholder="Pesquise um PET"
                                variant="outlined"
                                type="text"
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="bottomHome">
                        <Grid item>
                            
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