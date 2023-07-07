import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // eslint-disable-next-line no-unused-vars
  addFavorite: (favoriteMeetup) => {},
  // eslint-disable-next-line no-unused-vars
  removeFavorite: (meetupId) => {},
  // eslint-disable-next-line no-unused-vars
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const handleAddFavorite = (favoriteMeetup) => {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.concat(favoriteMeetup)
    );
  };

  const handleRemoveFavorite = (meetupId) => {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const handleItemIsFavorite = (meetupId) => {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.some((meetup) => meetup.id === meetupId)
    );
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    itemIsFavorite: handleItemIsFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
