import MeetupDetails from "@/components/meetups/MeetupDetails";

function meetUpDetails() {
  return (
    <MeetupDetails
      image="https://upload.wikimedia.org/wikipedia/commons/9/93/Lahore_collage.jpg"
      title="Heavy Place"
      address="Checking street Opposite bypass"
      description="This si the place to be"
    />
  );
}

export async function getStaticProps(context){
    let meetUpId = context.params.meetupId;
    console.log(meetUpId,"<Chekcing>");
    return {
      props: {
        meetupData: {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/93/Lahore_collage.jpg",
          title: "Heavy Place for rainy days",
          address: "Checking street Opposite bypass",
          description: "This si the place to be",
        },
      },
    };
}

export default meetUpDetails;
