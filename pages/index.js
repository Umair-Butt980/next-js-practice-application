import Layout from "@/components/layout/layout";
import MeetupList from "@/components/meetups/MeetupList";

const dummy_meetups = [
  {
    id: "mu1",
    title: "FIrst Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Lahore_collage.jpg",
    address: "Opposite Lahore street",
    description: "Just a fun loving place near lahore",
  },
  {
    id: "mu2",
    title: "Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Faisal_Mosque%2C_Islamabad_III.jpg",
    address: "Opposite ISLAMABAD street",
    description: "Just a fun loving place near ISLAMABAD",
  },
  {
    id: "mu3",
    title: "Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Clock_Tower_Faisalabad_by_Usman_Nadeem.jpg",
    address: "Opposite Faislabad street",
    description: "Just a fun loving place near Faislabad",
  },
  {
    id: "mu4",
    title: "Fourth Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Church_near_Murree.JPG",
    address: "Opposite NathiaGali Street",
    description: "Just a fun loving place near NathiaGali",
  },
];
function HomePage() {
  return <MeetupList meetups={dummy_meetups} />;
}

// export async function getServerSideProps(context){
//     let req = context.req;
//     let res = context.res;
//     return{
//         props:{
//             meetups:dummy_meetups
//         }
//     }
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: dummy_meetups,
    },
  };
}

export default HomePage;
