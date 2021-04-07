import React from 'react';
import { Grid } from '@material-ui/core';
import imagemFundo from '../../images/fundo-pet-feliz.png';
import imagemDog from '../../images/cachorropetfeliz.jpg';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import './detalhes.css';

export default function DetalhesPet() {

    return (

        <>
            <Grid container className="details-page">
                <Grid container className="entire-top">
                    <Grid container className="top-details-page">
                        <Grid item>
                            <img alt="" src={imagemDog} style={{
                                borderRadius: '280px',
                                width: '300px',
                                height: '300px'
                            }} />
                        </Grid>
                        <Grid className="wrapPhoto" container style={{ marginTop: '-5%' }} >
                            <Grid item style={{
                                marginLeft: '3%',
                                color: 'white',
                                fontFamily: 'Roboto',
                                fontWeight: 'bold',
                                fontSize: '30px'
                            }} >
                                <h3>Zézinho</h3>
                            </Grid>
                        </Grid>
                        <Grid item className="underPhoto">
                            <p className="photoText">Raça:</p><p className="photoText2">Maltês</p><p className="photoText">Idade:</p><p className="photoText2">2</p><p className="photoText">Animal:</p><p className="photoText2">Cachorro</p>
                        </Grid>
                    </Grid>
                    <Grid container className="restPage">
                        <Grid container className="buttons">
                            <Link to="/cadastropet1" style={{ textDecoration: 'none' }} >
                                <Button style={{
                                    backgroundColor: '#4EBDEA',
                                    borderRadius: '23px',
                                    color: '#ffffff',
                                    width: '200px',
                                    height: '50px',
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
                                    height: '50px',
                                    fontFamily: 'Roboto',
                                    fontSize: '18px',
                                    textTransform: 'none'
                                }}>
                                    Sair
                                </Button>
                            </Link>
                        </Grid>
                        <Grid container className="textContainer">
                            <Grid item >
                                <h3 className="title">Por que adotar?</h3>
                            </Grid>
                            <Grid item >
                                <p className="porqueText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Grid>
                        </Grid>
                        <Grid container className="textContainer">
                            <Grid item >
                                <h3 className="title">Histórico</h3>
                            </Grid>
                            <Grid item >
                                <p className="porqueText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </Grid>
                        </Grid>
                        <Grid container className="bottom-details-page">
                            <Grid item>
                                <Link to="/home" style={{textDecoration: 'none'}} >
                                    <Button style={{
                                        textTransform: 'none',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                        border: '2px solid #CBCBCB',
                                        width: '15vw',
                                        color: 'rgba(8, 99, 205, 0.79)',
                                        fontFamily: 'Roboto',
                                        fontWeight: 'bold',
                                        fontSize: '20px',
                                        borderRadius: '30px'
                                    }} >Voltar</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <img alt="" src={imagemFundo} style={{
                    position: 'absolute',
                    height: '123vh',
                    width: '99vw'
                }} />
            </Grid>
        </>

    )

}
