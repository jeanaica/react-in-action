import Card from '../ui/Card';
import styles from './NewMeetupForm.module.css';

function NewMeetupForm() {
  return (
    <Card>
      <form className={styles.form}>
        <div className={styles.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' />
        </div>
        <div className={styles.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='text' required id='image' />
        </div>
        <div className={styles.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' required id='address' />
        </div>
        <div className={styles.control}>
          <label htmlFor='description'>Meetup Description</label>
          <input type='text' required id='description' rows='5' />
        </div>
        <div className={styles.actions}>
          <button type='button'>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
