import Card from './card';
// import y from '../img/elizabeth.svg';

function CardList({ items = [] }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Card
            id={item.id}
            avatar={item.avatar}
            user={item.user}
            tweets={item.tweets}
          />
          {/* {console.log(y)} */}
        </li>
      ))}
    </ul>
  );
}
export default CardList;
