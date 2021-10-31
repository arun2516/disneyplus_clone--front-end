import React from 'react'
import styled from 'styled-components'
function Detail() {
    return (
        <Container>
           <Background>
               <img src="https://lh3.googleusercontent.com/proxy/hCQQgS3GboLzeUGGdyxiAtdufPCCct5NimUWKRgcLvIuGvO5_4JhA5aG9GjAeJjU4TsB2wZBAzm0EttNKcR6svslymeYRoMmiiZyvTFKJ1xMvcutgTmp-O3Go7jErJxd3WBDtEtnd41U8oJT00mAatowNeQfrNrMqnX6KmRQIPWaIL5SMaBaShFYqJ0v-_4y-33t7ms2pe5NbfWOdyN5xE_6N2NRaSFj"/>
           </Background>
           <ImageTitle>
               <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1522856074944-CXPZQOKB9OJLBMB1F678/bau_poster.jpg"/>
           </ImageTitle>
           <Controls>
               <PlayButton>
                      <img src="/images/play-icon-black.png"/>
                      <span>Play</span>
               </PlayButton>
               <TrailerButton>
                     <img src="/images/play-icon-white.png"/>
                     <span>Trailer</span>
               </TrailerButton>
               <AddButton>
                      <span>+</span>
               </AddButton>
               <GroupWatchButton>
                      <img src="/images/group-icon.png"/>
               </GroupWatchButton>
           </Controls>
           <SubTitle>
               2018 . 7m . Family, Fantasy, Kids, Animation
           </SubTitle>
           <Description>
           An ageing Chinese mother, feeling alone when her child moves out, gets a second chance at motherhood when one of her dumplings comes to life.
           </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position: relative;

`
const Background = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;
img{
    width: 100%;
    height:100%;
    object-fit: cover;
}
`
const ImageTitle= styled.div`
height: 30vh;
min-height: 170px;
width: 35vw;
min-width: 200px;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`
const Controls = styled.div`
display:flex;
align-items:center;


`
const PlayButton = styled.button`
cursor: pointer;
border-radius: 4px;
font-size: 15px;
padding:0px 24px;
margin-right: 22px;
display:flex;
align-items: center;
height:56px;
background-color: rgb(249,249,249);
border:none;
letter-spacing: 1.8px;
&:hover{
    background: rgb(198,198,198);
}

`


const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color:rgb(249,249,249);
text-transform:uppercase;
`


const AddButton = styled.button`
margin-right:16px;
width:44px;
height:44px;
display:flex;
align-items:center;
justify-content: center;
border-radius:50%;
border:2px solid white;
background-color: rgba(0,0,0,0.6);
cursor: pointer;
span{
    font-size:30px;
    color:white;
}


`


const GroupWatchButton = styled(AddButton)`
background-color: rgb(0,0,0);

`

const SubTitle = styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`

const Description = styled.div`
line-height: 1.4;
font-size:20px;
margin-top: 16px;
color: rgb(249, 249, 249);
max-width:760px;
`