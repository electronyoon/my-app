import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dbFe from 'db_fe';

const data = {
  cardHeader: "연계항목 분석",
  cardText: "설명"
}

export default function HoverComponent() {

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
