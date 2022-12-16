import { Container, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container sx={{ height: "auto", padding: "100px 30px"}}>
      <Typography variant="h2">My Story</Typography>
      <br/><br/>
      <Typography variant="h4">
        Brenda Hernandez is a real estate investor which excels in customer
        service, sales, event planning, and hard work. This coupled with focus
        and determination has allowed her to
      </Typography>

      <br/><br/>
      <Typography variant="h4">
        After 23 years in corporate she retired early from her management
        position and now dedicates 100% of her focus building and hosting her
        short-term rental business. Her positive attitude and exceptional
        customer support serves to help her thrive in this industry with a
        successful 85% occupancy rate and over $113,000 in revenue year to date,
        on track to gross well over $125,000 figures by end of year.
      </Typography>

      <br/><br/>
      <Typography variant="h4">
        Brenda’s goals; continue to expand her short-term rental portfolio and
        grow her STVR consulting business.
      </Typography>
    </Container>
  );
};

export default Contact;
