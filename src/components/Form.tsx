import { Box, Button, Grid, TextField } from '@material-ui/core';
import React from 'react';

const Form = () => {
    const [num, setNum] = React.useState<string>();
    const [numIngresado, setNumIngresado] = React.useState<any>();

    React.useEffect(() => {
        NumeroAleatorio();
    },[]);

    const CompararNumeros = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(isNaN(numIngresado)){
                    reject(new Error('Ingrese un numero no un texto'))
                }else{
                    if(num === numIngresado){
                        resolve('Numero Ingresado Correcto, Felicidades!');
                    }else{
                        reject(new Error(`Numero Equivocado, numero ingresado:${numIngresado} numero aleatorio:${num}`))
                    }
                }
            },1000)
        })
    }

    const NumeroAleatorio = () => {
        const a = Math.floor(Math.random() * 9) + 1;
        console.log(a);
        setNum(a.toString());
    }

    const handleChange = (event:any) => {
        setNumIngresado(event.target.value);
    }

    const handleOnClick = () => {
        CompararNumeros()
        .then(response => alert(response))
        .catch(error => {alert(error)})
    }
    
    return(
        <Box style={{paddingTop:250}}>
        <Grid container justifyContent={'center'} alignItems={'center'} spacing={5}>
            <Grid item lg={3}>
            <TextField variant={'outlined'} label={'Numero'} placeholder={'Ingrese un numero del 1 al 10'} defaultValue={numIngresado} onChange={(event) => handleChange(event)} fullWidth/>
            </Grid>
            <Grid item lg={3}>
            <Button variant={'contained'} color={'primary'} onClick={() => handleOnClick()}>Ingresar</Button>
            </Grid>
        </Grid>
        </Box>
    );
}

export default Form;