import React from 'react'
import styled from 'styled-components'
import Wallpaper from './Wallpaper'

function Body() {
    return (
        <div className="Body">
            <Container>
                <Wallpaper/>
                <Wallpaper/>
                <Wallpaper/>
                <Wallpaper/>
                <Wallpaper/>
                <Wallpaper/>
            </Container>
        </div>
    )
}

export default Body

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
    desktopL: `(min-width: ${size.desktopL})`
  };

const Container = styled.div`
    margin:30px;
    display:grid;
    grid-gap:20px;
    
    @media ${device.mobileS} {
        grid-template-columns: repeat(2 , minmax(0,1fr));
      }
    @media ${device.mobileM} {
        grid-template-columns: repeat(2 , minmax(0,1fr));
      }
    @media ${device.mobileL} {
        grid-template-columns: repeat(2 , minmax(0,1fr));
      }
    @media  ${device.tablet}{
        grid-template-columns: repeat(3 , minmax(0,1fr));
      }
    @media ${device.laptop} {
        grid-template-columns: repeat(4 , minmax(0,1fr));
      }
    @media ${device.desktop} {
        grid-template-columns: repeat(5 , minmax(0,1fr));
      }

`
