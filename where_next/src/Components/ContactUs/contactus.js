import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: '#45b1e8', width:"100px" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function ContactUs() {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Contact</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>For Quick Response please call +1 518-870-8455</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Support</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>For any Technical queries Please Mail to <a>abc@albany.edu</a></Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="2">Destination</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>For any Technical queries Please Mail to <a>abc@albany.edu</a></Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

 /* render(<ContactUs />);  */