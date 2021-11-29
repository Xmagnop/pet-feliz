import React from "react";
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./index.css";

export default function InfoCard(props) {

    return (
        <Grid container className="animalList">
            <Grid item>
                <Link to={!props.price ? "/detalhes" : "/produtos"}>
                    <img alt="" src={props.image} style={{
                        borderRadius: '280px',
                        width: '145px',
                        height: '145px'
                    }} />
                </Link>
            </Grid>
            <Grid item style={{ marginLeft: '15%' }}>
                <Link to={props.price ? "/produtos" : "/detalhes"} style={{ textDecoration: 'none', color: 'black' }} ><h1>{props.name}</h1></Link>
                <Link to={props.price ? "/produtos" : "/detalhes"} style={{ textDecoration: 'none', color: 'black' }}>
                    {
                        props.price ?
                            <div className="textoLista" style={{
                                marginTop: '-25%'
                            }} ><h3>Preço:</h3><p style={{ fontSize: '18px', marginLeft: '2%' }} >{props.price}</p></div>
                            :
                            <div className="textoLista" style={{
                                marginTop: '-25%'
                            }} ><h3>Animal:</h3><p style={{ fontSize: '18px', marginLeft: '2%' }} >{props.animal}</p></div>
                    }
                </Link>
            </Grid>
        </Grid>
    )

}