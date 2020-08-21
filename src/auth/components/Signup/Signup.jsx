import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, Button, Grid, makeStyles } from '@material-ui/core';
import { useForm } from '../../../shared/hooks/customHooks';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}))


const Signup = () => {

    const classes = useStyles();

    const createUser = async () => {
        console.log('requesting to server to create a new user', inputs)
    }

    const { inputs, handleSubmitForm, handleInputChange } = useForm(createUser, {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        town: '',
        zipCode: ''
    });

    return (
        <div className={classes.root}>
            <form noValidate className={classes.root} onSubmit={handleSubmitForm}>
                <Container maxWidth="xs">
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item xs={12}>
                            <TextField id="firstName" name="firstName" type="text" label="Nombres" value={inputs.firstName} fullWidth onInput={handleInputChange}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="lastName" name="lastName" type="text" label="Apellidos" value={inputs.lastName} fullWidth onInput={handleInputChange}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="address" name="address" type="text" label="Dirección" value={inputs.address} fullWidth onInput={handleInputChange}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="city" name="city" type="text" label="Ciudad" value={inputs.city} fullWidth onInput={handleInputChange}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="town" name="town" type="text" label="Municipio" value={inputs.town} fullWidth onInput={handleInputChange}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="zipCode" name="zipCode" type="text" label="Código postal" value={inputs.zipCode} fullWidth onInput={handleInputChange}></TextField>
                        </Grid>

                    </Grid>
                    <Grid container justify="flex-end" spacing={3}>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit"> Registrarse </Button>
                        </Grid>
                    </Grid>
                    <span> {JSON.stringify(inputs)} </span>
                </Container>

            </form>
        </div>


    )
}

export default Signup;