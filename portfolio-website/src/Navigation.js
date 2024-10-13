import './Navigation.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

function Navigation() {
return (
    <Tabs
      defaultActiveKey="Navigation"
      id="Navigation-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home" defaultActiveKey>
        <App/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <App/>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <App/>
      </Tab>
      <Tab eventKey="projects" title="Projects">
        <App/>
      </Tab>
    </Tabs>
  );
}

export default Navigation;