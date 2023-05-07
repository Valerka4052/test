import CardsList from "components/CardsList/CardsList";
import { Dropdown } from "components/DropDownMenu/DropDownMenu";
import LoadMoreButton from "components/LoadMoreButton/loadMoreButton";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "redux/usersSlice/slice";

const TweetsPage = () => {
    const [limitItemsPerPage, setLimitItemsPerPage] = useState(3);
  let { data } = useGetUsersQuery(limitItemsPerPage);
    const {followList} = useSelector(state => state)
    const options = [
    { label: 'all', value: 'all' },
    { label: 'follow', value: 'follow' },
    { label: 'following', value: 'following' },
  ];
  const [listOfFollowers, setListOfFollowers] = useState('all');

  const handleChange = (event) => {
    setListOfFollowers(event.target.value);
  };
  
  if (!data) return;
 
  if (listOfFollowers === 'follow') data = data.filter(user => !followList.includes(user.id));
  if (listOfFollowers === 'following') data = data.filter(user => followList.includes(user.id));
  
  const getPage = (number) => { setLimitItemsPerPage(limitItemsPerPage + number) };
  
  return (
    <>
      <Dropdown
        label="Show users"
        options={options}
        value={listOfFollowers}
        onChange={handleChange}
      />
      <CardsList users={data} />
      <LoadMoreButton getPage={getPage} />
    </>
  );
}

export default TweetsPage