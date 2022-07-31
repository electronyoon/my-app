import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dbFe from 'db_fe';

const data = {
  cardHeader: "",
  cardText: ""
}

data.cardHeader = dbFe.stepList.step5.nm
data.cardText = dbFe.stepList.step5.description

export default function Step5Component() {

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Header as="h5">{data.cardHeader}</Card.Header>
      <Card.Body>
        <Card.Text>
          {data.cardText}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
