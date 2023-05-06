import axios from "axios";

export async function getApi() {
    try {
        const response = await axios(`https://64563e0e2e41ccf1691779b2.mockapi.io/api/cards/users`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    };
};
export async function incrementFollower(currentUser) {
    const newBody = {
user: currentUser.user,
  avatar: currentUser.avatar,
  tweets: currentUser.tweets,
  followers: Number(currentUser.followers)+1,
    }
    try {
        const response = await axios.put(`https://64563e0e2e41ccf1691779b2.mockapi.io/api/cards/users/${currentUser.id}`,newBody);
        return response.data;
    } catch (error) {
        console.log(error.message);
    };
};
export async function decrementFollower(currentUser) {
    const newBody = {
user: currentUser.user,
  avatar: currentUser.avatar,
  tweets: currentUser.tweets,
  followers: Number(currentUser.followers)-1,
    }
    try {
        const response = await axios.put(`https://64563e0e2e41ccf1691779b2.mockapi.io/api/cards/users/${currentUser.id}`,newBody);
        return response.data;
    } catch (error) {
        console.log(error.message);
    };
};