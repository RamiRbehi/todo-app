import React from 'react'
import styled from 'styled-components'

const ResponsiveCtrBtn = ({filter}) => {
  return (
    <Container>
        <CenterMobileDiv>
            <All onClick={() => filter("all")}>All</All>
            <Active onClick={() => filter("active")}>Active</Active>
            <Completed onClick={() => filter("completed")}>Completed</Completed>
        </CenterMobileDiv>
    </Container>
  )
}

const Container = styled.div`
    position: absolute;
    top: 350px;
`
const CenterMobileDiv = styled.div`
    
     display: flex;
    justify-content: space-between;
    gap: 10px;
    display: none;
    @media only screen and (max-width: 375px) {
        display: block;
        padding-top: 20px;
    }
`
const All = styled.button`
    border: none;
    background: transparent;
    color: hsl(220, 98%, 61%);
    font-weight: 700;
    cursor: pointer;
`
const Active = styled.button`
    border: none;
    background: transparent;
    font-weight: 700;
    color: hsl(235, 19%, 35%);
    cursor: pointer;

    &:hover{
        color: hsl(235, 24%, 19%);
    }
`
const Completed = styled.button`
    border: none;
    background: transparent;
    font-weight: 700;
    color: hsl(235, 19%, 35%);
    cursor: pointer;

    &:hover{
        color: hsl(235, 24%, 19%);
    }
`

export default ResponsiveCtrBtn