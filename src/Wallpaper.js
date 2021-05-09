import React from 'react'
import styled from 'styled-components'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

function Wallpaper() {
    return (
        <div className="Wallpaper">
            <Container>
                <Image>
                    <img src="https://wallpaperaccess.com/full/26984.jpg" alt="">

                    </img>
                </Image>
                <Info>
                    <Title>
                        Title
                    </Title>
                    <Download>
                        <GetAppRoundedIcon/>
                    </Download>
                </Info>
            </Container>
        </div>
    )
}

export default Wallpaper

const Container = styled.div`
`

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

const Image = styled.div`


    img{
        height:100%;
        max-height:500px;
        max-width:500px;
        width:100%; 
        border-radius:5px; 
    }
`
const Info = styled.div`
    margin-top:5px;
    border-radius:5px;
    width:100%;
    height:50px; 
    background-color:#5a5978;  
    display:flex;
    justify-content:center;
    align-items:center;
`
const Title = styled.p`
    padding-left:10px;
    overflow:ellipsis;
    flex:1;
    font-size:20px;
`
const Download = styled.div`
    padding:5px;
    cursor:pointer;
`