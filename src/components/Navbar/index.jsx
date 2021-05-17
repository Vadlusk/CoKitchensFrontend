import React, { useState, useEffect } from 'react'

import { AppBar, Toolbar, Typography, Button, IconButton, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import styled from 'styled-components'

const Navbar = () => {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })
  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }
    setResponsiveness()
    const eventListener = window.addEventListener('resize', () => setResponsiveness())

    return function cleanup () {
      window.removeEventListener('resize', eventListener)
    }
  }, [])

  const displayDesktop = () => {
    return (
      <Toolbar style={{ background: '#0c4767' }}>
        <Typography color="inherit">
          <S.Link href="/" color="inherit">CoKitchens</S.Link>
        </Typography>
        <S.Menu>
          <Button href="/calendar" color="inherit">Calendar</Button>
          <Button href="/tools" color="inherit"> Toolkit </Button>
          <Button href="/kitchens" color="inherit">Kitchens</Button>
          <Button href="/stories" color="inherit"> Stories </Button>
          <Button href="/team" color="inherit">    Team    </Button>
          <Button href="/contact" color="inherit"> Contact </Button>
        </S.Menu>
      </Toolbar>
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }))

    return (
      <>
      <IconButton
        {...{
          edge: 'end',
          color: 'inherit',
          'aria-label': 'menu',
          'aria-haspopup': 'true',
          onClick: handleDrawerOpen
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
         {...{
           anchor: 'left',
           open: drawerOpen,
           onClose: handleDrawerClose
         }}
       >
         <div>
           <S.Menu>
             <Button href="/calendar" color="inherit">Calendar</Button>
             <Button href="/toolkit" color="inherit"> Toolkit </Button>
             <Button href="/kitchens" color="inherit">Kitchens</Button>
             <Button href="/stories" color="inherit"> Stories </Button>
             <Button href="/team" color="inherit">    Team    </Button>
             <Button href="/contact" color="inherit"> Contact </Button>
           </S.Menu>
         </div>
       </Drawer>
      <S.Link href="/" color="inherit">CoKitchens</S.Link>
      </>
    )
  }

  return (
    <div>
      <AppBar position="fixed">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </div>
  )
}

export default Navbar

const S = {
  Link: styled.a`
  color: white;
  text-decoration: none;
  `,
  Menu: styled.div`
  margin: auto;
  `
}
