import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  FollowerCount,
  Ellips,
  Rectangl,
  Log,
  Pictur,
  Img,
  Block2,
} from './card.stled';

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function Card(props) {
  const [following, setFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(100500);

  const userId = props.id;
  useEffect(() => {
    const savedFollowing = JSON.parse(
      localStorage.getItem(`following-${userId}`)
    );
    const savedFollowerCount = JSON.parse(
      localStorage.getItem(`followerCount-${userId}`)
    );

    if (savedFollowing !== null) {
      setFollowing(savedFollowing);
    }

    if (savedFollowerCount !== null) {
      setFollowerCount(savedFollowerCount);
    }
  }, [userId]);

  const handleFollowClick = () => {
    if (following) {
      setFollowerCount(prevCount => prevCount - 1);
    } else {
      setFollowerCount(prevCount => prevCount + 1);
    }

    setFollowing(prevFollowing => !prevFollowing);

    localStorage.setItem(`following-${userId}`, JSON.stringify(!following));
    localStorage.setItem(
      `followerCount-${userId}`,
      JSON.stringify(followerCount + (following ? -1 : 1))
    );
  };

  return (
    <>
      <Container>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginTop: '26px',
          }}
        >
          <Log />
          <Pictur />
          <Rectangl />
          <Ellips width="80" />
          <Img src={props.avatar} alt={props.name} width="62" />
        </div>
        <Block2>
          <h2>{props.user}</h2>
          <p href={props.tweets}>{props.tweets}</p>
          <FollowerCount>
            {numberWithCommas(followerCount)} FOLLOWERS
          </FollowerCount>
          <Button onClick={handleFollowClick} following={following}>
            {following ? 'FOLLOWING' : 'FOLLOW'}
          </Button>
        </Block2>
      </Container>
    </>
  );
}

export default Card;
