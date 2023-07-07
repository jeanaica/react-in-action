import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const handleAddMeetup = (meetupData) => {
    fetch(`${import.meta.env.VITE_FIREBASE_DATABASE_URL}/meetups.json`, {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      history.replaceState('/');
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  );
}

export default NewMeetupPage;
