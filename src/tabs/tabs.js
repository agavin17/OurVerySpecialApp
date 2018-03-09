import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "./tabs.css";

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav id="tabs" tabs>
          <NavItem className="nav-item">
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Lunch Specials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Music Venues
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              School Lunches
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className="fb-page" width="380" data-href="https://www.facebook.com/Town-Country-Foods-148368425076/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Town-Country-Foods-148368425076/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Town-Country-Foods-148368425076/">Town &amp; Country Foods</a></blockquote></div>
                <div className="fb-page" width="380" data-href="https://www.facebook.com/heebsgrocery/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/heebsgrocery/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/heebsgrocery/">Heeb&#039;s East Main Grocery</a></blockquote></div>
                <div className="fb-page" width="380" data-href="https://www.facebook.com/Daves-Sushi-Off-Main-167896217894/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Daves-Sushi-Off-Main-167896217894/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Daves-Sushi-Off-Main-167896217894/">Dave&#039;s Sushi - Off Main</a></blockquote></div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}