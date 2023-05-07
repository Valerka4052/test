import { Container, ImageContainer,Text,ProfileImageContainer,Img } from './Card.styled';
import FollowButton from '../Button/Button';
const Card = ({ user }) => {
   

    return(
        <Container>
            <ImageContainer></ImageContainer>
            <Text>{user.tweets} tweets</Text>
            <Text>{user.followers.toLocaleString("en-US")} followers</Text>
            <FollowButton currentUser={user} />
            <ProfileImageContainer>
                <Img src={user.avatar} alt='profile'/>
            </ProfileImageContainer>
    </Container>)

};
export default Card;