import React from "react";
import { Grid } from '@material-ui/core';
import './cadastro1.css';
import imagemFundo from '../../images/fundo-pet-feliz.png';
import imagemCadastroPet from '../../images/imagem-cadastro-pet.png';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import swal from 'sweetalert';


export default function CadastroPet1() {

    const submitCadastroPet = () => {
        return(
            swal({
                title: "PET Cadastrado!",
                text: "Tudo pronto para adoção",
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
                <Grid className="loginBox" style={{
                    width: '59%'
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
                                    <TextField style={{
                                        marginTop: '3%'
                                    }}
                                        id="outlined-multiline"
                                        placeholder="Histórico"
                                        multiline
                                        rows={5}
                                        variant="outlined"
                                    />
                                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                        {({ getRootProps, getInputProps }) => (
                                            <section style={{
                                                marginLeft: '24%'
                                            }}>
                                                <div {...getRootProps()} display="flex" alignItems="center" justifyContent="center" style={{
                                                    backgroundColor: '#ffffff',
                                                    height: '10vh',
                                                    width: '20vh',
                                                    borderRadius: '20px'
                                                }}>
                                                    <input {...getInputProps()} />
                                                    <p><PhotoCameraIcon style={{
                                                        fontSize: '50px',
                                                        margin: '13%',
                                                        marginLeft: '35%'
                                                    }}/></p>
                                                </div>
                                            </section>
                                        )}
                                    </Dropzone>
                                    <Grid style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: '7%'
                                    }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            onClick={submitCadastroPet}
                                            style={{
                                                textTransform: "none",
                                                color: "#ffffff",
                                                fontSize: 20,
                                                borderRadius: 20,
                                                width: "50%",
                                                backgroundColor: "#F36B53",
                                            }}
                                        >
                                            Cadastrar
                                        </Button>
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