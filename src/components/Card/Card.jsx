import { Container, ImageContainer,Text,ProfileImageContainer,Img } from './Card.styled';
import FollowButton from '../Button/Button';
import user from '../../images/user.png'
import { useState } from 'react';
const Card = ({ user }) => {
   

    return(
        <Container>
            <ImageContainer></ImageContainer>
            <Text>{user.tweets} tweets</Text>
            <Text>{user.followers} followers</Text>
            <FollowButton currentUser={user} />
            <ProfileImageContainer>
                <Img src={user.avatar} alt='profile'/>
            </ProfileImageContainer>
    </Container>)

};
export default Card;