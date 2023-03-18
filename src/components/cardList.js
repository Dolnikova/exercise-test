import Card from './card';
import y from '../img/hansel.svg';

function CardList({ items = [] }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Card avatar={item.avatar} user={item.user} tweets={item.tweets} />
          {console.log(y)}
        </li>
      ))}
    </ul>
  );
}
export default CardList;
