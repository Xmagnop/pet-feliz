import React, { useState } from "react";
import { Grid } from '@material-ui/core';
import './Login.css';
import imagemFundo from '../../images/fundo-pet-feliz.png';
import imagemLogin from '../../images/imagem-loginPage.png';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { Link } from 'react-router-dom'

export default function LoginPage() {

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    return (
        <>
            <Grid container className="loginPage">
                <img src={imagemFundo} style={{
                    position: 'absolute'
                }}/>
                <Grid className="loginBox">
                    <Grid>
                        <img src={imagemLogin} />
                    </Grid>
                    <Grid className="loginForm">
                        <Grid>
                            <h1 style={{
                                color: '#FDFDFD',
                                fontFamily: 'Malgun Gothic',
                                fontSize: '70px',
                                marginLeft: '30%',
                                fontWeight: 'bold'
                            }}>Login</h1>
                            <p style={{
                                color: '#FDFDFD',
                                fontFamily: 'Malgun Gothic',
                                marginTop: '-15%',
                                marginLeft: '32%',
                                fontSize: '26px',
                                fontWeight: '500',
                            }}>Bem Vindo!</p>
                            <FormControl variant="outlined" style={{
                                width: "130%",
                                marginLeft: '65%',
                                marginTop: '5%'
                            }}>
                                <TextField
                                    id="outlined-adornment-password"
                                    placeholder="E-mail"
                                    variant="outlined"
                                    type="email"
                                    InputProps={{
                                        endAdornment: <InputAdornment></InputAdornment>,
                                    }}
                                />
                                <TextField style={{
                                    marginTop: '3%'
                                }}
                                    placeholder="Senha"
                                    id="outlined-adornment-password"
                                    variant="outlined"
                                    type={showPassword ? "text" : "password"}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    id="icon_button_password"
                                                    aria-label="Toggle password visibility"
                                                    onClick={handleShowPassword}
                                                >
                                                    {showPassword ? (
                                                        <VisibilityOutlinedIcon />
                                                    ) : (
                                                            <VisibilityOffOutlinedIcon />
                                                        )}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {/* Botao enviar */}
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: '10%'
                                }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        style={{
                                            textTransform: "none",
                                            color: "#ffffff",
                                            fontSize: 20,
                                            borderRadius: 20,
                                            width: "50%",
                                            backgroundColor: "#F36B53",
                                        }}
                                    >
                                        Login
                                </Button>
                                </div>
                                <div
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
                                            Cadastre-se agora!
                                        </Button>
                                    </Link>
                                </div>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}