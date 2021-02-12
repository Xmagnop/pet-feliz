import React from "react";
import { Grid } from '@material-ui/core';
import './cadastro1.css';
import imagemFundo from '../../images/fundo-pet-feliz.png';
import imagemCadastro1 from '../../images/imagem-cadastro1.png';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link } from 'react-router-dom'

export default function Cadastro1() {

    return (

        <>
            <Grid container className="loginPage">
                <img alt="" src={imagemFundo} style={{
                    position: 'absolute'
                }} />
                <Grid className="loginBox">
                    <Grid style={{
                        width:'35%'
                    }}>
                        <img alt="" src={imagemCadastro1} />
                    </Grid>
                    <Grid className="loginForm">
                        <Grid>
                            <h1 style={{
                                color: '#FDFDFD',
                                fontFamily: 'Malgun Gothic',
                                fontSize: '60px',
                                marginLeft: '30%',
                                fontWeight: 'bold'
                            }}>Cadastro</h1>
                            <p style={{
                                color: '#FDFDFD',
                                fontFamily: 'Malgun Gothic',
                                marginTop: '-15%',
                                marginLeft: '32%',
                                fontSize: '26px',
                                fontWeight: '500',
                                width: '100%'
                            }}>Insira suas informações</p>
                            <Grid alignItems="center" justifyContent="center">
                                <FormControl variant="outlined" style={{
                                    width: "130%",
                                    marginLeft: '65%'
                                }}>
                                    <TextField style={{
                                        marginTop: '5%'
                                    }}
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
                                        placeholder="Sobrenome"
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
                                        id="outlined-adornment-password"
                                        placeholder="Data de nascimento"
                                        variant="outlined"
                                        type="email"
                                        InputProps={{
                                            endAdornment: <InputAdornment></InputAdornment>,
                                        }}
                                    />
                                    <Grid item style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: 'center',
                                        marginTop: '7%',
                                    }}>
                                        <Link to="/cadastro2" style={{
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
                                        <Link to="/" style={{
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