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
                        <Grid>
                            <Grid className="wrapPhoto" container style={{ marginTop: '-5%' }} >
                                <Grid item style={{
                                    marginLeft: '3%',
                                    color: 'white',
                                    fontFamily: 'Roboto',
                                    fontWeight: 'bold',
                                    fontSize: '30px'
                                }} >
                                    <h3>Nome do Animal</h3>
                                </Grid>
                            </Grid>
                            <Grid item className="underPhoto">
                                <p className="photoText">Raça:</p><p>Maltês</p><p className="photoText">idade:</p><p>2</p><p className="photoText">Animal:</p><p>cachorro</p>
                            </Grid>
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
