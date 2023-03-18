import React from 'react';
import { Button, Container, FollowerCount } from './card.stled';
// import y from '../img/picture.svg';
import { ReactComponent as Logo } from '../img/vectors.svg';
import { ReactComponent as Picture } from '../img/picture.svg';
import { useState } from 'react';

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function Card(props) {
  const [following, setFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(100500);

  const handleFollowClick = () => {
    if (following) {
      setFollowerCount(prevCount => prevCount - 1);
    } else {
      setFollowerCount(prevCount => prevCount + 1);
    }
    setFollowing(prevFollowing => !prevFollowing);
  };
  return (
    <>
      <Container>
        <Logo fill="red" />
        <Picture />
        <img src={props.avatar} alt={props.name} width="80" />
        <h2>{props.user}</h2>
        <p href={props.tweets}>{props.tweets}</p>
        <FollowerCount>{numberWithCommas(followerCount)}</FollowerCount>
        <Button onClick={handleFollowClick} following={following}>
          {following ? 'FOLLOWING' : 'FOLLOW'}
        </Button>{' '}
        {/* {console.log(y)} */}
      </Container>
    </>
  );
}
export default Card;
