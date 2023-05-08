import BackLink from "components/BackLink/BackLink";
import CardsList from "components/CardsList/CardsList";
import { Dropdown } from "components/DropDownMenu/DropDownMenu";
import LoadMoreButton from "components/LoadMoreButton/loadMoreButton";
import Loader from "components/Loader/Loader";
import NoTweets from "components/NoTweets/NoTweets";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useGetUsersQuery } from "redux/usersSlice/slice";

const cardsPerPage = 3;

const TweetsPage = ({navigaton}) => {
  const [page, setPage] = useState(1)
  let { data } = useGetUsersQuery();
  const { followList } = useSelector(state => state);
  const options = [
    { label: 'all', value: 'all' },
    { label: 'follow', value: 'follow' },
    { label: 'following', value: 'following' },
  ];
  const [listOfFollowers, setListOfFollowers] = useState('all');

 const location = useLocation();
    const [locationState, SetLocationState] = useState(null);
    const backLinkHref = useRef(location.state?.from ?? "/");
  useEffect(() => {
    SetLocationState(backLinkHref.current);
  }, []);

  const handleChange = (event) => {
    setListOfFollowers(event.target.value);
    setPage(1);
  };

  if (listOfFollowers === 'follow') data = data.filter(user => !followList.includes(user.id));
  if (listOfFollowers === 'following') data = data.filter(user => followList.includes(user.id));
 if (!data) return <Loader />;
  const paginatedUsers = data.slice(0, page * cardsPerPage);
  const getPage = () => setPage(page + 1);
  const totalPages = Math.ceil(data.length / cardsPerPage);

  return (
    <>
      <Dropdown
        label="Show cards"
        options={options}
        value={listOfFollowers}
        onChange={handleChange}
      />
      <BackLink locationState={locationState} />
      <CardsList users={paginatedUsers} />
      {data.length > 0 ? totalPages !== page && <LoadMoreButton getPage={getPage} /> : <NoTweets listOfFollowers={listOfFollowers} />}
    </>
  );
};

export default TweetsPage;