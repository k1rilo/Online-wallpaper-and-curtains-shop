import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Reg() {
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
              <Typography variant='h3' textAlign="center">Регистрация</Typography>
              <TextField fullWidth={true} margin='normal' label="ФИО" variant="outlined" placeholder='Введите ФИО'/>
              <TextField fullWidth={true} margin='normal' type='email' label="Почта" variant="outlined" placeholder='Введите почту'/>
              <TextField fullWidth={true} margin='normal' type='number' label="Номер" variant="outlined" placeholder='Введите номер'/>
              <TextField fullWidth={true} margin='normal' type='password' label="Пароль" variant="outlined" placeholder='Введите пароль'/>
              <TextField fullWidth={true} margin='normal' type='password' label="Повтор пароля" variant="outlined" placeholder='Повторите пароль'/>
              <Button sx={{marginBottom: 2, marginTop: 2, width: "50%" }} variant="contained">Зарегестрироваться</Button>
              <Typography variant='body1'>У вас есть аккаунт? <Link to="/login" className='auth_text'>Войти</Link></Typography>
            </Box>
        </div>
    </div>
  )
}
