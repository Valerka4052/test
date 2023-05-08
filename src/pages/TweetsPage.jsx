import CardsList from "components/CardsList/CardsList";
import { Dropdown } from "components/DropDownMenu/DropDownMenu";
import LoadMoreButton from "components/LoadMoreButton/loadMoreButton";
import Loader from "components/Loader/Loader";
import NoTweets from "components/NoTweets/NoTweets";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "redux/usersSlice/slice";

const cardsPerPage = 3;

const TweetsPage = () => {
  const [page, setPage] = useState(1)
  let { data } = useGetUsersQuery();
  const { followList } = useSelector(state => state);
  const options = [
    { label: 'all', value: 'all' },
    { label: 'follow', value: 'follow' },
    { label: 'following', value: 'following' },
  ];
  const [listOfFollowers, setListOfFollowers] = useState('all');

  const handleChange = (event) => {
    setListOfFollowers(event.target.value);
    setPage(1);
  };

  if (listOfFollowers === 'follow') data = data.filter(user => !followList.includes(user.id));
  if (listOfFollowers === 'following') data = data.filter(user => followList.includes(user.id));
 if (!data) return <Loader />;
  const paginatedUsers = data.slice(0, page * cardsPerPage);
   const getPage = () => setPage(page + 1);
  return (
    <>
      <Dropdown
        label="Show cards"
        options={options}
        value={listOfFollowers}
        onChange={handleChange}
      />
      <CardsList users={paginatedUsers} />
      {data.length > 0 ? data.length - cardsPerPage >= page * cardsPerPage && <LoadMoreButton getPage={getPage} /> : <NoTweets listOfFollowers={listOfFollowers} />}
    </>
  );
};

export default TweetsPage