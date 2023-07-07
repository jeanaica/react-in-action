import Card from '../ui/Card';
import styles from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    props.onAddMeetup(formProps);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' name='title' />
        </div>
        <div className={styles.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='text' required id='image' name='image' />
        </div>
        <div className={styles.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' required id='addres' name='address' />
        </div>
        <div className={styles.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea
            type='text'
            required
            id='description'
            name='description'
            rows='5'
          />
        </div>
        <div className={styles.actions}>
          <button type='submit'>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
