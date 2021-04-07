import React from 'react';
import { Grid } from '@material-ui/core';
import imagemFundo from '../../images/fundo-pet-feliz.png';
import imagemLogo from '../../images/imagem-loginPage.png';
import './Home.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import imagemDog from '../../images/cachorropetfeliz.jpg';
import Divider from '@material-ui/core/Divider';

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
                            <Link to="/cadastropet1" style={{ textDecoration: 'none' }} >
                                <Button style={{
                                    backgroundColor: '#4EBDEA',
                                    borderRadius: '23px',
                                    color: '#ffffff',
                                    width: '200px',
                                    fontSize: '18px',
                                    fontFamily: 'Roboto',
                                    textTransform: 'none'
                                }}>
                                    Cadastrar PET
                            </Button>
                            </Link>
                            <Link to="/" style={{ marginLeft: '2%', textDecoration: 'none' }}>
                                <Button style={{
                                    backgroundColor: '#D10000',
                                    borderRadius: '23px',
                                    color: '#ffffff',
                                    fontFamily: 'Roboto',
                                    fontSize: '18px',
                                    textTransform: 'none'
                                }}>
                                    Sair
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container className="middleHome">
                        <Grid item>
                            <input style={{
                                width: '600px',
                                paddingLeft: '3%',
                                height: '35px',
                                marginLeft: '-3%',
                                borderRadius: '20px'
                            }}
                                id="outlined-adornment-search"
                                placeholder="Pesquise um PET"
                                variant="outlined"
                                type="text"
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="middleHomeList">
                        <Grid item className="animalList" style={{
                            marginLeft: '8%',
                        }}>
                            <Grid container className="animalList">
                                <Grid item>
                                    <Link to="/detalhes">
                                        <img alt="" src={imagemDog} style={{
                                            borderRadius: '280px',
                                            width: '145px',
                                            height: '145px'
                                        }} />
                                    </Link>
                                </Grid>
                                <Grid item style={{ marginLeft: '15%' }}>
                                    <Link to="/detalhes" style={{ textDecoration: 'none', color: 'black' }} ><h1>zézinho</h1></Link>
                                    <Link to="/detalhes" style={{ textDecoration: 'none', color: 'black' }}>
                                        <div className="textoLista" style={{
                                            marginTop: '-25%'
                                        }} ><h3>Animal:</h3><p style={{ fontSize: '18px', marginLeft: '2%' }} >Cachorro</p></div>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Divider variant="middle" style={{
                                width: '100%',
                            }} />
                            <Grid container className="animalList">
                            <Grid item>
                                    <Link to="/detalhes">
                                        <img alt="" src={imagemDog} style={{
                                            borderRadius: '280px',
                                            width: '145px',
                                            height: '145px'
                                        }} />
                                    </Link>
                                </Grid>
                                <Grid item style={{ marginLeft: '15%' }}>
                                    <Link to="/detalhes" style={{ textDecoration: 'none', color: 'black' }} ><h1>zézinho</h1></Link>
                                    <Link to="/detalhes" style={{ textDecoration: 'none', color: 'black' }}>
                                        <div className="textoLista" style={{
                                            marginTop: '-25%'
                                        }} ><h3>Animal:</h3><p style={{ fontSize: '18px', marginLeft: '2%' }} >Cachorro</p></div>
                                    </Link>
                                </Grid>
                            </Grid>
                            <Divider variant="middle" style={{
                                width: '100%'
                            }} />
                            <Grid container className="animalList">
                            <Grid item>
                                    <Link to="/detalhes">
                                        <img alt="" src={imagemDog} style={{
                                            borderRadius: '280px',
                                            width: '145px',
                                            height: '145px'
                                        }} />
                                    </Link>
                                </Grid>
                                <Grid item style={{ marginLeft: '15%' }}>
                                    <Link to="/detalhes" style={{ textDecoration: 'none', color: 'black' }} ><h1>zézinho</h1></Link>
                                    <Link to="/detalhes" style={{ textDecoration: 'none', color: 'black' }}>
                                        <div className="textoLista" style={{
                                            marginTop: '-25%'
                                        }} ><h3>Animal:</h3><p style={{ fontSize: '18px', marginLeft: '2%' }} >Cachorro</p></div>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container className="bottomHome">
                        <Button className="verMais">
                            Ver Mais
                        </Button>
                    </Grid>
                </Grid>
                <img alt="" src={imagemFundo} style={{
                    position: 'absolute'
                }} />
            </Grid>
        </>

    )

}