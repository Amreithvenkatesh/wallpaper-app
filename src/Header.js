import React from 'react'
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';

function Header() {
    return (
        <div className="Header">
            <Container>
                <Select>
                    <HomeIcon style={{ color:"#403c7a"}} fontSize="large"/>
                    <AppsIcon style={{cursor:"pointer"}} fontSize="large"/>
                </Select>
            </Container>
        </div>
    )
}

export default Header

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };

const Container = styled.div`
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Select = styled.div`
    display:flex;
    height:70px;
    @media ${device.mobileS} {
        width:25vw;
      }
    @media ${device.mobileM} {
        width:25vw;
      }
    @media ${device.mobileL} {
        width:25vw;
      }
    @media  ${device.tablet}{
        width:10vw;
      }
    @media ${device.laptop} {
        width:8vw;
      }
    @media ${device.desktop} {
        width:5vw;
      }
    border-radius:1em;
    background-color:#e8fafc;
    justify-content:space-evenly;
    align-items:center;
`