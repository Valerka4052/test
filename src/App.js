import CardsList from './components/CardsList/CardsList';
import './App.css';
import { useGetUsersQuery } from './redux/usersSlice/slice';

function App() {
  const { data } = useGetUsersQuery();
   return (
    <CardsList users={data} />
  );
};

export default App;
