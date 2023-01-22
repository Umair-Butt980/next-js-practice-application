import NewMeetupForm from "@/components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const addMeetupHandler = () => {
    console.log(enteredMeetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
