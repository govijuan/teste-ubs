import React from 'react'
import styled from 'styled-components'

const Header = props =>
    <Wrap>
        <PageTitle>Teste Juan Coral</PageTitle>
    </Wrap>


const Wrap = styled.header`
    height: 76px;
    background-color: #282c34;
`
const PageTitle = styled.h1`
    color: #ffffff;
    text-align: center;
`
export default Header