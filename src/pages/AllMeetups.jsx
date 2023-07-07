import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const handleFetch = () => {
    setIsLoading(true);

    fetch(`${import.meta.env.VITE_FIREBASE_DATABASE_URL}/meetups.json`, {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);

        const newData = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));

        setLoadedMeetups(newData);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
