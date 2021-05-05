import React from 'react'
import styled from 'styled-components'

import { color } from '../../styles/colors'

const Navbar = () => (
  <S.Navbar>
    <S.Brandname href="/">CoKitchens</S.Brandname>

    <S.Link href="/calendar">Calendar</S.Link>
    <S.Link href="/toolkit"> Toolkit </S.Link>
    <S.Link href="/kitchens">Kitchens</S.Link>
    <S.Link href="/stories"> Stories </S.Link>
    <S.Link href="/team">    Team    </S.Link>
    <S.Link href="/contact"> Contact </S.Link>
  </S.Navbar>
)

export default Navbar

const S = {
  Navbar: styled.div`
    height: 60px;
    width: 100%;
    background: ${color('navbarBackground')};
  `,
  Brandname: styled.a`
  `,
  Link: styled.a`
  `
}
