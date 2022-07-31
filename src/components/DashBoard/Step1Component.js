import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { LightbulbFill, LightbulbOffFill, CheckLg } from 'react-bootstrap-icons';
import Spinner from 'react-bootstrap/Spinner';

import FetchSemisteps from './FetchSemisteps';
import dbFe from 'db_fe';

const data = {
  cardHeader: "",
  cardText: ""
}

data.cardHeader = dbFe.stepList.step1.nm
data.cardText = dbFe.stepList.step1.description

export default function Step1Component() {

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Header style={{display: "flex", justifyContent: "space-between"}} as="h5">
        <div>
          {data.cardHeader}
        </div>
        <div>
          <Button size="sm" disabled block>다음</Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {data.cardText}
          {<FetchSemisteps /> && <ListGroup as="ol" numbered>
                                    <ListGroup.Item>
                                        Cras justo odio <CheckLg style={{color: "green"}} />
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Cras justo odio <Spinner animation="border" size="sm" variant="primary" />
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        Cras justo odio
                                    </ListGroup.Item>
                                  </ListGroup>}

          
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
