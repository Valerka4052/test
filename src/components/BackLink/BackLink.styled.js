import styled from '@emotion/styled';
import { Link as CustomLink } from "react-router-dom"

export const Link = styled(CustomLink)`
width:196px;
padding:14px 10px;
margin-left:30px;
margin-bottom:10px;
text-align:center;
text-decoration:none;
font-size:16px;
font-weight:500;
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
`;
// export const Container = styled.div`
// width:100%;
// /* padding-top:30px;
// padding-bottom:30px; */
// /* display:flex;
// justify-content:center; */
// `;