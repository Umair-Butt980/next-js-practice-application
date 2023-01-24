import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
  <section className={classes.detail}>
    <img src={props.image} alt={props.alt} />
    <h1> {props.title} </h1>
    <address>{props.address}</address>
    <p> {props.description} </p>
  </section>;
}
export default MeetupDetails;
