import Card from '../ui/Card';
import styles from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';
import { useContext } from 'react';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const handleToggleFavoritesStatus = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite(props);
    }
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={handleToggleFavoritesStatus}>
            {itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
