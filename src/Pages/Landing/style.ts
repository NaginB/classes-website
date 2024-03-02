import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Ant from 'antd'

export const Landing = styled.div`
  background-color: #000;
  padding: 1rem .5rem;
  color: white;
`;

export const Logo = styled.img`
  width: 250px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  @media screen and (max-width: 600px){
    flex-direction: column;
    gap: 2rem;
  }
`

export const Login = styled(Link)``

export const SignUp = styled(Link)`
  background-color: #ffffff;
  color: #000000;
  padding: .3rem .5rem;
  border-radius: 4px;
`

export const SectionOne = styled.div`
  text-align: center;
  margin-top: 10rem;
  @media screen and (max-width: 600px){
    margin-top: 5rem;
  }

  h1{
    font-size: 2.5rem;
    margin-bottom: 5rem;

    @media screen and (max-width: 600px){
      font-size: 1.8rem;
    }
  }

  h3{
    text-transform: uppercase;
    font-weight: 800;
    font-size:5rem;
    background: linear-gradient(171.12deg, #1871B6 -1.48%, #6FB1FC 13.55%, #C1D4E2 56.59%, #EBF4FB 122.07%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    line-height: 90px;
    margin-bottom: 5rem;
    @media screen and (max-width: 600px){
      font-size: 2.5rem;
      line-height: 54px;
      margin-bottom: 2rem;
    }
  }
  div{
    p{
      font-size: 2.5rem;
      @media screen and (max-width: 600px){
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
`

export const CreatorBtn = styled.button`
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 5rem;
  font-weight: 800;
  padding: 1rem 2.5rem;
  border-radius: 60px;
  background: linear-gradient(90.08deg, #0D6AC3 1.6%, #0D6AC3 1.61%, rgba(201, 124, 199, 0.990267) 58.35%, rgba(207, 125, 199, 0.99) 58.36%, rgba(249, 143, 18, 0.99) 98.79%, rgba(253, 145, 1, 0.99) 102.66%);
  @media screen and (max-width: 600px){
      margin-top: 2rem;
  }

`

export const SectionTwo = styled.div`
  margin-top: 10rem;
  @media screen and (max-width: 600px){
    margin-top: 5rem;
  }
`

export const SubHeading = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
  font-size:4rem;
  line-height: 90px;
  margin-bottom: 2rem;
  
  @media screen and (max-width: 600px){
    font-size: 2rem;
    line-height: 36px;
  }
`;

export const ViewProfileBtn = styled.button`
   background-color: #d9d9d9;
   box-shadow: 0px 1.167492151260376px 1.167492151260376px 0px #00000040 inset;
  color: #000000;
  padding: .3rem .6rem;
  border-radius: 4px;
`

export const CardWrapper = styled.div`
  min-height: 850px;
  width: 1500px;
  max-width: 90%;
  margin: auto;
  overflow: hidden;
  position: relative;

  .famous-user-card{
    position: absolute;
  }

  .card-2, .card-4{
    height: 600px;
  }

  .card-1{
    top: 0;
    left: 0;
  }

  .card-2{
    top: 136px;
    left: 280px;
    z-index: 2;
  }

  .card-3{
    top: 200px;
    height: 650px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
  }

  .card-4{
    top: 136px;
    right: 280px;
    z-index: 2;
  }

  .card-5{
    top: 0;
    right: 0;
  }

`

export const Card = styled.div`
  height: 600px;
  width: 350px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`

export const CardContent = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  width: 100%;
  h5{
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .followers-box{
    span{
      font-size: 14px;
    }
  }
`


export const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const SectionThree = styled.div`
  margin-top: 8rem;
  h3{
    margin-bottom: 5rem;
  }
`

export const SecThreeImg = styled.img`
  width: 1000px;
  border-radius: 50%;
  object-fit: cover;
  margin: auto;
  max-width: 90%;
  aspect-ratio: 1/1;
`


export const SectionFour = styled.div`
  margin-top: 8rem;
  h3{
    margin-bottom: 5rem;
  }
`

export const SectionFlex = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  @media screen and (max-width: 900px){
    flex-direction: column;
  }
`

export const PhoneImg = styled.img`
  height: 600px;
  border-radius: 10px;
  border: 1px solid #fff;
  overflow: hidden;
  object-fit: cover;
`

export const StateBoxWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 600px){
    flex-direction: column;
  }
`

export const StateBox = styled.div`
  width: 180px;
  height: 180px;
  background: #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  h5{
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
`

export const StateBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const FaqWrapper = styled.div`
  margin-top: 5rem;
`

export const CollaspeWrapper = styled.div`
  width: 1000px;
  max-width: 90%;
  margin: auto;
`

export const Collapse = styled(Ant.Collapse)`
  border: none!important;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .ant-collapse-header{
    background-color: #10055466;
    color: white !important;
  }

  .ant-collapse-item{
    border:1px solid #FFFFFF80!important;
    border-radius: 8px;
    overflow: hidden;
  }

  .ant-collapse-content-box{
    background-color: #160f3d;
    color: white !important;
  }

  .ant-collapse-content-active{
    border-top:1px solid #808080!important;
  }
`