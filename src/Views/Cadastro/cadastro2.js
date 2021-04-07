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
import swal from 'sweetalert';

export default function Cadastro2() {

    const submitCadastro = () => {
        return (
            swal({
                title: "Cadastro Realizado!",
                text: "obrigado por entrar em nossa comunidade",
                icon: "success",
            })
        );
    }

    return (

        <>
            <Grid container className="loginPage">
                <img alt='' src={imagemFundo} style={{
                    position: 'absolute'
                }} />
                <Grid className="loginBox">
                    <Grid style={{
                        width: '35%'
                    }}>
                        <img alt='' src={imagemCadastro1} />
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
                                        placeholder="Telefone"
                                        variant="outlined"
                                        type="text"
                                        InputProps={{
                                            endAdornment: <InputAdornment></InputAdornment>,
                                        }}
                                    />
                                    <TextField style={{
                                        marginTop: '3%'
                                    }}
                                        placeholder="Email"
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
                                        placeholder="Senha"
                                        variant="outlined"
                                        type="email"
                                        InputProps={{
                                            endAdornment: <InputAdornment></InputAdornment>,
                                        }}
                                    />
                                    <Grid style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: '7%'
                                    }}>
                                        <Link to="/home" style={{ textDecoration: 'none' }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                onClick={submitCadastro}
                                                style={{
                                                    textTransform: "none",
                                                    color: "#ffffff",
                                                    fontSize: 20,
                                                    borderRadius: 20,
                                                    marginLeft: '-19%',
                                                    width: '140%',
                                                    backgroundColor: "#F36B53",
                                                }}
                                            >
                                                Cadastrar
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
                                        <Link to="/cadastro1" style={{
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