import React from "react";
import { Grid } from '@material-ui/core';
import './cadastro1.css';
import imagemFundo from '../../images/fundo-pet-feliz.png';
import imagemCadastroPet from '../../images/imagem-cadastro-pet.png';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from 'react-router-dom'

export default function CadastroPet1() {

    return (

        <>
            <Grid container className="loginPage">
                <img alt='' src={imagemFundo} style={{
                    position: 'absolute'
                }} />
                <Grid className="loginBox" style={{
                    width:'59%'
                }}>
                    <Grid style={{
                        width: '35%'
                    }}>
                        <img alt='' src={imagemCadastroPet} />
                    </Grid>
                    <Grid className="loginForm">
                        <Grid style={{
                            marginTop: '-3%'
                        }}>
                            <h1 style={{
                                width: '100%',
                                color: '#FDFDFD',
                                fontFamily: 'Malgun Gothic',
                                fontSize: '60px',
                                marginLeft: '10%',
                                fontWeight: 'bold'
                            }}>Cadastro PET</h1>
                            <p style={{
                                color: '#FDFDFD',
                                fontFamily: 'Malgun Gothic',
                                marginTop: '-13%',
                                marginLeft: '12%',
                                fontSize: '26px',
                                fontWeight: '500',
                                width: '100%'
                            }}>Informações do PET</p>
                            <Grid alignItems="center" justifyContent="center">
                                <FormControl variant="outlined" style={{
                                    width: "100%",
                                    marginLeft: '50%'
                                }}>
                                    <TextField
                                        id="outlined-adornment-password"
                                        placeholder="Nome"
                                        variant="outlined"
                                        type="text"
                                        InputProps={{
                                            endAdornment: <InputAdornment></InputAdornment>,
                                        }}
                                    />
                                    <TextField style={{
                                        marginTop: '3%'
                                    }}
                                        placeholder="Idade"
                                        id="outlined-adornment-password"
                                        variant="outlined"
                                        type="text"
                                        InputProps={{
                                            endAdornment: <InputAdornment></InputAdornment>,
                                        }}
                                    />
                                    <TextField style={{
                                        marginTop: '3%'
                                    }}
                                        id="outlined-multiline"
                                        placeholder="Por que adotar?"
                                        multiline
                                        rows={5}
                                        variant="outlined"
                                    />
                                    <Grid item style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        marginTop: '5%',
                                    }}>
                                        <Link to="/cadastropet2" style={{
                                            textDecoration: 'none',
                                        }}>
                                            <Button
                                                type="submit"
                                                style={{
                                                    textTransform: 'none',
                                                    color: "#ffffff",
                                                    fontSize: 20,
                                                    borderRadius: 20,
                                                    marginLeft: '-28%',
                                                    width: "160%",
                                                    backgroundColor: "#F36B53",
                                                }}
                                            >
                                                Continuar
                                            </Button>
                                        </Link>
                                    </Grid>
                                    <Grid
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Link to="/cadastropet1" style={{
                                            textDecoration: 'none'
                                        }}>
                                            <Button
                                                style={{
                                                    fontFamily: "Malgun Gothic",
                                                    textTransform: "none",
                                                    fontStyle: "normal",
                                                    color: "#ffffff",
                                                    textAlign: "left",
                                                    fontSize: 16,
                                                    marginTop: '2%'
                                                }}
                                            >
                                                Voltar
                                        </Button>
                                        </Link>
                                    </Grid>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>

    );

}