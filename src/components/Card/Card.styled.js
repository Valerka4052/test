import styled from '@emotion/styled';
import backgroundImage from '../../images/background.png'
import line from "../../images/line.png"
import logo from "../../images/logo.png";

export const Container = styled.li`
width:380px;
height:460px;
padding-top:28px;
display:flex;
flex-direction:column;
align-items:center;
position: relative;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
`;
export const ImageContainer = styled.div`
width:308px;
height:168px;
background-size: contain;
background-image: url(${backgroundImage});
margin-bottom:88px;
`;
export const Line = styled.div`
position: absolute;
top: 214px;
left: 50%;
transform: translate(-50%, -50%);
width:100%;
height:8px;
background-image:url(${line});
`;
export const Logo = styled.div`
width:76px;
height:22px;
position: absolute;
top:20px;
left:20px;
background-image: url(${logo});
`;
export const ProfileImgContainer = styled.div`
position: absolute;
  top: 214px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:2 ;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Text = styled.p`
margin-top:0;
margin-bottom:16px;
font-size:20px;
font-weight:500;
text-transform:uppercase;
color:#EBD8FF;
`;

export const Img = styled.img`
width:62px;
height:62px;
border-radius:50%;
`;