import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

import styled from 'styled-components'

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
          <Toolbar>
            <Typography color="inherit">
              <S.Link>CoKitchens</S.Link>
            </Typography>
            <div>
              <Button href="/calendar" color="inherit">Calendar</Button>
              <Button href="/toolkit" color="inherit"> Toolkit </Button>
              <Button href="/kitchens" color="inherit">Kitchens</Button>
              <Button href="/stories" color="inherit"> Stories </Button>
              <Button href="/team" color="inherit">    Team    </Button>
              <Button href="/contact" color="inherit"> Contact </Button>
            </div>
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar

const S = {
  Link: styled.a`
  `
}
