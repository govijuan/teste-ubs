import React from 'react'
import styled from 'styled-components'
import logo from '../logo.svg';

const Header = props =>
    <Wrap>
        <img src={logo}  title="" alt=""/>
        <PageTitle>{props.pageTitle}</PageTitle>
    </Wrap>


const Wrap = styled.header`
    height: 76px;
    background-color: #282c34;
    position: fixed;
    z-index: 10;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    img{
        display: inline-block;
        height: 60px;
        margin: auto 0;
    }
`
const PageTitle = styled.h1`
    color: #ffffff;
    text-align: center;
    display: inline-block;
`
export default Header