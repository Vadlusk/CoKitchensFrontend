import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

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
      <Toolbar>
        <Typography color="inherit">
          <S.Link href="/" color="inherit">CoKitchens</S.Link>
        </Typography>
        <S.DesktopMenu>
          <Button href="/calendar" color="inherit">Calendar</Button>
          <Button href="/kitchens" color="inherit">Kitchens</Button>
          <Button href="/stories" color="inherit"> Stories </Button>
          <Button href="/tools" color="inherit"> Toolkit </Button>
          <Button href="/team" color="inherit">    Team    </Button>
          <Button href="/contact" color="inherit"> Contact </Button>
        </S.DesktopMenu>
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
        style={{ margin: '10px' }}
        {...{
          edge: 'end',
          color: 'inherit',
          'aria-label': 'menu',
          'aria-haspopup': 'true',
          onClick: handleDrawerOpen
        }}
      >
        <Menu />
      </IconButton>
      <Drawer
         {...{
           anchor: 'left',
           open: drawerOpen,
           onClose: handleDrawerClose
         }}
       >
         <div>
           <S.MobileMenu>
             <Button href="/calendar" color="inherit">Calendar</Button>
             <Button href="/toolkit" color="inherit"> Toolkit </Button>
             <Button href="/kitchens" color="inherit">Kitchens</Button>
             <Button href="/stories" color="inherit"> Stories </Button>
             <Button href="/team" color="inherit">    Team    </Button>
             <Button href="/contact" color="inherit"> Contact </Button>
           </S.MobileMenu>
         </div>
       </Drawer>
       <Typography
         style={{
           position: 'fixed',
           right: '20px',
           top: '20px'
         }}
         color="inherit">
         <S.Link href="/" color="inherit">CoKitchens</S.Link>
       </Typography>
      </>
    )
  }

  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          background: '#0c4767',
          display: `${mobileView ? 'block' : 'inline-block'}`,
          height: '64px'
        }}
      >
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
  DesktopMenu: styled.div`
  margin: auto;
  `,
  MobileMenu: styled.div`
  display: grid;
  padding: 35px;
  `
}
