import { Avatar, Box, Button, Typography } from '@mui/material'
import slark from "../img/slark.png"
import React from 'react'

export default function Profile() {
  return (
    <>
      <div className='profile'>
        <Box
        display="flex"
        justifyContent="space-between"
        alignItems='center'
        flexDirection="column"
        maxWidth={"70%"}
        margin="auto"
        padding={3}
        boxShadow={"1px 1px 15px #5c5c5c"}
        borderRadius={"10px"}
        >
          <Typography variant='h4' textAlign="center" marginBottom={4}>Ваш профиль</Typography>
          <Box
          display="flex"
          justifyContent="space-between"
          alignItems='center'
          >
            <Avatar srcSet={slark} sx={{marginRight: 5, width: "120px", height: "120px"}} />
            <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            >
              <Typography variant='body1' marginBottom={1}>ФИО: <span>Xleb xleb xleb</span></Typography>
              <Typography variant='body1' marginBottom={1}>Номер: <span>+75432157532</span></Typography>
              <Typography variant='body1'>Почта: <span>xleb@xleb.xleb</span></Typography>
            </Box>
          </Box>
          <Button sx={{marginTop: 3, width: "60%" }} color="error" variant="outlined">Выйти из аккаунта</Button>
        </Box>
      </div>
    </>
  )
}
