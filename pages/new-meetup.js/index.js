import Layout from "@/components/layout/layout";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return (
    <Layout>
      {" "}
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Layout>
  );
}

export default NewMeetupPage;
