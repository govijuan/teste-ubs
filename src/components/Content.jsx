import React, { Component } from "react"
import styled from 'styled-components'

import GridWrap from './grid/GridWrap'
import { useSelector } from "react-redux"

let Content = props => {
        const populateData = useSelector( state => state.populateData)
        return(
            <Container>
                <div>Populate Data: {populateData} </div>
            </Container>
        )
}

const Container = styled(GridWrap)`
  padding-top: 120px;
  padding-bottom: 60px;
  background-color: transparent;
  overflow-x: scroll;
  margin: 0 auto;
`
export default Content;
