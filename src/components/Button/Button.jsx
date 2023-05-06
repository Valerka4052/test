import { useState } from 'react';
import { Button } from './Button.styled'
import { useChangeFollowersQuantityMutation } from '../../redux/usersSlice/slice';
import { useDispatch, useSelector } from 'react-redux';
import { plusFollowList, minusFollowList } from '../../redux/followSlice/slice';


const FollowButton = ({ currentUser }) => {
    const dispatch = useDispatch();
    const {followList} = useSelector(state => state);
    const followStatus = followList.includes(currentUser.id);
    const [changeFollowersQuantity] = useChangeFollowersQuantityMutation();
    const incrementFollower = () => {
        const newBody = {
            id:currentUser.id,
            user: currentUser.user,
            avatar: currentUser.avatar,
            tweets: currentUser.tweets,
            followers: Number(currentUser.followers) + 1,
        };
        changeFollowersQuantity(newBody);
    };
    const decrementFollower = () => {
        const newBody = {
            id:currentUser.id,
            user: currentUser.user,
            avatar: currentUser.avatar,
            tweets: currentUser.tweets,
            followers: Number(currentUser.followers) - 1,
        };
        changeFollowersQuantity(newBody);
    };

    return (
        <Button followStatus={followStatus} onClick={!followStatus ?
            () => { incrementFollower();dispatch(plusFollowList(currentUser.id)); }
            : () => { decrementFollower();;dispatch(minusFollowList(currentUser.id)); }
        } >{followStatus ? 'following' : 'follow'}</Button>
    );
};
export default FollowButton