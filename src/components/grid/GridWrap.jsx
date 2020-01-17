import React from 'react'
import styled from 'styled-components'

const GridWrap = props =>
    <Wrap {...props}>

    </Wrap>

const Wrap = styled.div`
    padding: 0 15px;
    @media(max-width: 1200px){
        max-width: 992px;
    }
    @media(max-width: 991px){
        max-width: 768px;
    }
    @media(max-width: 767px){
        max-width: 480px;
    }
`
export default GridWrap