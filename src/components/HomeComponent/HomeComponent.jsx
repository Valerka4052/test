import { Container, HeadTitle, Link } from "./HomeComponent.styled";

const HomeComponent = () => {
    return (
          <Container>
            <HeadTitle>Hello! Let's go to</HeadTitle>
            <Link to='/tweets' >tweets</Link>
        </Container>
    )
}
export default HomeComponent