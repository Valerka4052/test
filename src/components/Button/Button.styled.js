import styled from '@emotion/styled';
export const Button = styled.button`
width:196px;
padding-top:14px;
padding-bottom:14px;
margin-top:26px;
text-align:center;
font-size:18px;
font-weight:600;
line-height:1,21;
text-transform: uppercase;
border-radius:10px;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
background-color:${props => (props.followStatus ? '#5CD3A8' : '#EBD8FF')};
border-style:none;
color:#373737;
`;
