import styled from '@emotion/styled';
import backgroundImage from '../../images/p.png'
import profileImage from '../../images/Boy.png'

export const Container = styled.li`
margin-left: auto;
margin-right:auto;
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
export const Text = styled.p`
margin-top:0;
margin-bottom:16px;
font-size:20px;
font-weight:500;
line-height:1,21;
color:#EBD8FF;
`;
export const ProfileImageContainer = styled.div`
width:88px;
height:88px;
align-items:center;
position: absolute;
background-image: url(${profileImage});
top:178px;
left:50%;
 transform: translateX(-50%);
`;
export const Img = styled.img`
width:62px;
height:62px;
border-radius:50%;
overflow:hidden;
position: absolute;
top:8px;
left:14px;
`;