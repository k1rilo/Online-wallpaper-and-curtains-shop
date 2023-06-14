import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='auth'>
        <div className='form'>
            <Box
            display="flex"
            justifyContent="center"
            alignItems='center'
            flexDirection="column"
            maxWidth={640}
            margin="auto"
            padding={5}
            boxShadow={"1px 1px 15px #5c5c5c"}
            borderRadius={"10px"}
            >
                <Typography variant='h3' textAlign="center">Вход</Typography>
                <TextField fullWidth={true} margin='normal' type='email' label="Почта" variant="outlined" placeholder='Введите почту'/>
                <TextField fullWidth={true} margin='normal' type='password' label="Пароль" variant="outlined" placeholder='Введите пароль'/>
                <Button sx={{marginBottom: 2, marginTop: 2, width: "50%" }} variant="contained">Войти</Button>
                <Typography variant='body1'>У вас нет аккаунта? <Link to="/registration" className='auth_text'>Регистрация</Link></Typography>
            </Box>
        </div>
    </div>
  )
}
