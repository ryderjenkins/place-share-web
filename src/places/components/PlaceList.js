import React from 'react';

import Card from '../../shared/components/UIElements/card/Card';
import Button from '../../shared/components/FormElements/button/Button';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = (props) => {
  const { items } = props;
  if (items.length === 0) {
    return (
      <div className="place-list-center">
        <Card>
          <h2>No places found</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          title={place.title}
          description={place.description}
          address={place.address}
          imageUrl={place.imageUrl}
          creatorId={place.creatorId}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
