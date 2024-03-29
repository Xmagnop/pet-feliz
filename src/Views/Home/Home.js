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
import InfoCard from '../../Components/InfoCard';

export default function HomePage() {

    const animalMock = [
        {
            name: "Zézinho",
            image: imagemDog,
            animal: "Cachorro",
        },
        {
            name: "Zezão",
            image: imagemDog,
            animal: "Cachorro",
        },
        {
            name: "Zé",
            image: imagemDog,
            animal: "Gato",
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
                            <Link to="/produtos" style={{ textDecoration: 'none' }} >
                                <Button style={{
                                    backgroundColor: 'green',
                                    width: '300px',
                                    borderRadius: '23px',
                                    color: '#ffffff',
                                    fontFamily: 'Roboto',
                                    fontSize: '20px',
                                    textTransform: 'none'
                                }}>
                                    Acesse nossa Loja
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container className="middleHomeList">
                        {
                            animalMock.map((item, index) => (
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