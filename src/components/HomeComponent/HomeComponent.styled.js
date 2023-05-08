import styled from '@emotion/styled';
import { Link as CustomLink } from "react-router-dom"

export const Container = styled.div`

width:100%;
height:100%;
padding:30px 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
export const HeadTitle = styled.h2`
font-size:36px;
font-weight:600;
line-height:1.21%;
`;
export const Link = styled(CustomLink)`
width:196px;
padding-top:14px;
padding-bottom:14px;
margin-top:30px;
text-align:center;
text-decoration:none;
font-size:18px;
font-weight:600;
line-height:1,21;
text-transform: uppercase;
border-radius:10px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
background-color:#EBD8FF;
border-style:none;
color:#373737;
&:hover{
    background-color:#5CD3A8;
    color:white;
}
` 