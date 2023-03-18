import users from '../users.json';
import CardList from './cardList';

const App = () => {
  return <CardList items={users} />;
};
export default App;
