import { Button, Container } from './LoadMoreButton.styled';
const LoadMoreButton = ({getPage}) => {

    return (
       <Container><Button onClick={()=>getPage()}>Load more</Button></Container>
        
    );
};
export default LoadMoreButton