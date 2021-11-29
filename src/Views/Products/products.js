import React from 'react';
import { Grid } from '@material-ui/core';
import imagemFundo from '../../images/fundo-pet-feliz.png';
import imagemLogo from '../../images/imagem-loginPage.png';
import './products.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import imagemDog from '../../images/cachorropetfeliz.jpg';
import Divider from '@material-ui/core/Divider';
import InfoCard from '../../Components/InfoCard';

export default function ProductsPage() {

    const productMock = [
        {
            name: "Coleira",
            image: imagemDog,
            price: "R$20,00",
        },
        {
            name: "Ração",
            image: imagemDog,
            price: "R$40,00",
        },
        {
            name: "Osso",
            image: imagemDog,
            price: "R$10,00",
        },
    ]

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
                            <Button style={{
                                backgroundColor: 'cadetblue',
                                width: '150px',
                                borderRadius: '23px',
                                color: '#ffffff',
                                fontFamily: 'Roboto',
                                fontSize: '20px',
                                textTransform: 'none'
                            }}>
                                Carrinho
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container className="middleHomeList">
                        {
                            productMock.map((item, index) => (
                                <>
                                    <InfoCard
                                        key={index}
                                        name={item.name}
                                        image={item.image}
                                        animal={item.animal}
                                        price={item.price}
                                    />
                                    <Divider variant="middle" style={{
                                        width: '100%',
                                    }} />
                                </>
                            ))
                        }
                    </Grid>
                    <Grid container className="bottomHome">
                        <Link to="/home" style={{ textDecoration: 'none' }} >
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
                <img alt="" src={imagemFundo} style={{
                    position: 'absolute'
                }} />
            </Grid>
        </>

    )

}