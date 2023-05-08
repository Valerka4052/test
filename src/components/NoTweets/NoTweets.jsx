import { Container, HeadTitle } from "./NoTweets.styled";

const NoTweets = ({ listOfFollowers }) => {
    return (
        <Container>
            <HeadTitle>There is no {listOfFollowers} tweets</HeadTitle>
        </Container>
    );
};
export default NoTweets;