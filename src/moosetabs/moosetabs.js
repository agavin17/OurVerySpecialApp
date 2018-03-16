import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import SitePopover from '../modal/modal.js';
import "./moosetabs.css";

const google = window.google;
var map;
var infoWindow;
var pos;

export default class MooseTabs extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.calculateRoute = this.calculateRoute.bind(this);
        this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
    
        this.state = {
            activeTab: '1',
            work:""
        };
    }

    calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: {lat:pos.lat, lng:pos.lng},
          destination: "albertsons belgrade",
          travelMode: 'DRIVING'
        }, function (response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    calculateRoute() {
        // this.directionsDisplay.setMap(map);
        // this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay)
        return new Promise((resolve, reject)=>{
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: { lat: 45.676998, lng: -111.042931 }
              });
    
                infoWindow = new google.maps.InfoWindow();
    
                if (navigator.geolocation) {
                    debugger
                    navigator.geolocation.getCurrentPosition(function (position) {
                        pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        infoWindow.setPosition(pos);
                        infoWindow.setContent('Your Are Here');
                        infoWindow.open(map);
                        map.setCenter(pos);
                    }, function () {
                        handleLocationError(true, infoWindow, map.getCenter());
                    });
                } else {
                    // Browser doesn't support Geolocation
                    handleLocationError(false, infoWindow, map.getCenter());
                }
                debugger
                function handleLocationError(browserHasGeolocation, infoWindow, pos) {
                    infoWindow.setPosition(pos);
                    infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
                    infoWindow.open(map);
                }
                if(pos){
                resolve();
                }
        }).then(()=>{
            this.directionsDisplay.setMap(map);
            this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay)

        })
       
            
        }
    

    render() {

        // navigator.geolocation.getCurrentPosition(function (position) {
        //     pos = {
        //         lat: position.coords.latitude,
        //         lng: position.coords.longitude
        //     };
        // })

        return (
            <div id="moosetabs-div">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Mon - Fri
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            7 Days A Week
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Monday
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        >
                            Tuesday
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '5' })}
                            onClick={() => { this.toggle('5'); }}
                        >
                            Wednesday
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '6' })}
                            onClick={() => { this.toggle('6'); }}
                        >
                            Thursday
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '7' })}
                            onClick={() => { this.toggle('7'); }}
                        >
                            Friday
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '8' })}
                            onClick={() => { this.toggle('8'); }}
                        >
                            Saturday
            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '9' })}
                            onClick={() => { this.toggle('9'); }}
                        >
                            Sunday
            </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Card body>
                                    <CardTitle>Every Weekday Specials</CardTitle>
                                    <CardText>
                                        <div id="moosetabs-text" className="mappy">
                                            <li> $2 <p id="end">albertsons belgrade</p>Wells and domestics 5-7pm - <SitePopover calculateRoute= {this.calculateRoute} siteTitle="The Crystal" imgUrl="http://media.liveauctiongroup.net/i/27338/24151529_1.jpg?v=8D33FD3D09B7430" siteUrl="https://www.facebook.com/TheCrystalBar/" /></li>
                                            <li> $2.75 Domestics, $2.75 Wells, $2.25 PBR Cans 4-7pm - <SitePopover siteTitle="The Legion" imgUrl="http://bozemanamericanlegion.org/yahoo_site_admin/assets/images/americanlegionlogo.10384110_std.jpg" siteUrl="http://www.bozemanamericanlegion.org/" /></li>
                                            {/* <li>$1 Off all drinks, $2 off Moscow Mules - 3-6pm - The Bacchus Pub<SitePopover siteTitle="" imgUrl="" siteUrl=""/></li> */}
                                            <li>$2.49 Wells $2.99 Cocktails 2.99 or cheaper on all beers $2.99 House Wine - 4-7pm - <SitePopover siteTitle="Old Chicago" imgUrl="http://kdth.radiodubuque.com/wp-content/uploads/sites/2/2017/11/Old-Chicago.jpg" siteUrl="https://oldchicago.com/locations/bozeman" /></li>
                                            <li>Sushi/Appetizer and Drink Happy Hour (too much to list here) - <SitePopover siteTitle="Seven Sushi" imgUrl="http://static1.squarespace.com/static/55f3260ee4b0a0b7895485f9/t/55f36a7ee4b04150216a8a86/1442015873086/Seven-logo.png?format=1000w" siteUrl="https://www.7bozeman.com/" /></li>
                                            <li>$1 off Drafts, $2.5 single $3.75 Double wells - 3:17 - 6:17pm - <SitePopover siteTitle="Pub 317" imgUrl="http://www.runtothepub.com/uploads/2/4/4/3/24437128/317-logo_orig.jpg" siteUrl="http://www.pub317.com/" /></li>
                                            <li>Doubles for Singles - 4-9pm - <SitePopover siteTitle="Bar IX" imgUrl="https://www.slamfestivals.org/wp-content/uploads/2015/08/Bar-IX-Montana-Logo-blank-back.jpg" siteUrl="http://bar-ix.com/" /></li>
                                        </div>
                                        <div id='map'className="mappy">hey</div>
                                    </CardText>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Everyday Specials</CardTitle>
                                    <CardText>
                                        <li>$2 PBR or Black Velvet - <SitePopover className="popover-test" siteTitle="The Legion" imgUrl="http://bozemanamericanlegion.org/yahoo_site_admin/assets/images/americanlegionlogo.10384110_std.jpg" siteUrl="http://www.bozemanamericanlegion.org/" /></li>
                                        <li>$2 Bud and Bud Light cans - <SitePopover siteTitle="The Crystal" imgUrl="http://media.liveauctiongroup.net/i/27338/24151529_1.jpg?v=8D33FD3D09B7430" siteUrl="https://www.facebook.com/TheCrystalBar/" /></li>
                                        <li>$2 Rainier Cans and Bottles - <SitePopover siteTitle="The Crystal" imgUrl="http://media.liveauctiongroup.net/i/27338/24151529_1.jpg?v=8D33FD3D09B7430" siteUrl="https://www.facebook.com/TheCrystalBar/" /></li>
                                        <li>$1.75 Oly and PBR - <SitePopover siteTitle="The Crystal" imgUrl="http://media.liveauctiongroup.net/i/27338/24151529_1.jpg?v=8D33FD3D09B7430" siteUrl="https://www.facebook.com/TheCrystalBar/" /></li>
                                        <li>$2 Pacifico and Corona - <SitePopover siteTitle="The Crystal" imgUrl="http://media.liveauctiongroup.net/i/27338/24151529_1.jpg?v=8D33FD3D09B7430" siteUrl="https://www.facebook.com/TheCrystalBar/" /></li>
                                        <li>$3 Grey Goose and $2 Fire Ball Shots and rotating beer specials (Current special, changes from time to time) - <SitePopover siteTitle="Cat's Paw" imgUrl="https://cdn-az.allevents.in/banners/3beae132a566c7e4e01eabc8262b557d-rimg-w600-h600-gmir.jpg" siteUrl="https://www.facebook.com/catspawbozeman/" /></li>
                                        <li>$8 Bucket of 5 Coronas - Baja Fresh<SitePopover siteTitle="Baja Fresh" imgUrl="https://upload.wikimedia.org/wikipedia/commons/b/bf/Logo_of_Baja_Fresh_%281997%E2%80%932010%29.png" siteUrl="" /></li>
                                        <li>$2 Jack - <SitePopover siteTitle="Mixers" imgUrl="http://bozemanmagazine.com/uploads/image/listing/000/633/633/header_giant/633_1983_670_Screen_shot_2014_01_29_at_3_01_46_PM.png" siteUrl="http://www.mixersclub.com/" /></li>
                                        <li>$2 Drafts, wells and domestics and 2 for 1 appetizers - 4-7pm - <SitePopover siteTitle="Mixers" imgUrl="http://bozemanmagazine.com/uploads/image/listing/000/633/633/header_giant/633_1983_670_Screen_shot_2014_01_29_at_3_01_46_PM.png" siteUrl="http://www.mixersclub.com/" /></li>
                                        <li>$3 Pints - <SitePopover siteTitle="Neptunes" imgUrl="https://s-media-cache-ak0.pinimg.com/originals/59/8d/f5/598df5e196d071cf5478e31c9056465a.jpg" siteUrl="http://neptunesbrewery.com/" /></li>
                                        <li>$4 Long Island Iced Teas, $5 Margaritas, $5 Mai Thais, $3 Draft Beers, $4 23oz draft beer, $4 Pork Carnitas, $5 Beef Sliders, $5 Shrimp Cocktail - 4-6pm - <SitePopover siteTitle="The Bay" imgUrl="http://thebaybarandgrille.com/wp-content/uploads/2016/04/the-bay-logo-final.png" siteUrl="http://thebaybarandgrille.com/" /></li>
                                        <li>$1.50 Beer Special - <SitePopover siteTitle="The Eagles" imgUrl="http://4.bp.blogspot.com/-9z2XKye19Sc/T0-_C0glauI/AAAAAAAAFtw/QrN-WZIOKIM/s1600/eagle.jpg" siteUrl="https://www.facebook.com/bozemaneagles326/" /></li>
                                        <li>Free Ski Pass To Bridger Bowl if you blow the keg - <SitePopover siteTitle="Bar IX" imgUrl="https://www.slamfestivals.org/wp-content/uploads/2015/08/Bar-IX-Montana-Logo-blank-back.jpg" siteUrl="http://bar-ix.com/" /></li>
                                        <li>Happy Hour 3pm - 5pm - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>
                                    </CardText>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Monday Specials</CardTitle>
                                    <CardText>
                                        <li>$8 Cannery Calypso Cooler - <SitePopover siteTitle="The Cannery" siteDescription="Cannery info" imgUrl="http://webzoom.freewebs.com/thecanneryandburgerbobs/cannery%20logo1.jpg" siteUrl="http://thecanneryandburgerbobs.webs.com/" /></li>
                                        <li>$1.75 Millers all day - <SitePopover siteTitle="The Crystal" imgUrl="http://media.liveauctiongroup.net/i/27338/24151529_1.jpg?v=8D33FD3D09B7430" siteUrl="https://www.facebook.com/TheCrystalBar/" /></li>
                                        <li>Food and Drink Specials - SIN Night - <SitePopover siteTitle="Plonk" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6Ph5nQ705QexMzlGl2wesbm5fZsojCFLr7pr6jBiRkO_ukbKuQ" siteUrl="https://plonkwine.com/" /></li>
                                        <li>$2.50-$3 Pints, $3 Long Island Iced Teas, $4 Bahama Mamas and Margaritas, $4.99 Appetizers 4-6pm 9-close - <SitePopover siteTitle="Applebee's" imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Applebee%27s.svg/1200px-Applebee%27s.svg.png" siteUrl="https://www.applebees.com/en" /></li>
                                        <li>2 for 1 Long Island Iced Teas - <SitePopover siteTitle="Mixers" imgUrl="http://bozemanmagazine.com/uploads/image/listing/000/633/633/header_giant/633_1983_670_Screen_shot_2014_01_29_at_3_01_46_PM.png" siteUrl="http://www.mixersclub.com/" /></li>
                                        <li>$6 Growler refills - 4-7pm - <SitePopover siteTitle="Neptunes" imgUrl="https://s-media-cache-ak0.pinimg.com/originals/59/8d/f5/598df5e196d071cf5478e31c9056465a.jpg" siteUrl="http://neptunesbrewery.com/" /></li>
                                        <li>1/2 Price Nachos and $10 for 5 Bud Lights - <SitePopover siteTitle="The Pour House" siteDescription="Pour House info" siteUrl="http://www.pourhousemt.com/" imgUrl="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/1553124_10152157221594687_1238910614_o.jpg?oh=1090c77ef4005741b4065f2e92c3272d&oe=5B4DC923" /></li>
                                        <li>$2.25 Drafts - <SitePopover siteTitle="Spectators" imgUrl="http://bozemancvb.com/uploads/Attractions/Spectators/Logo.jpg" siteUrl="http://www.spectatorsmt.com/" /></li>
                                        <li>$10 18 Boneless Wings and a pitcher of beer - <SitePopover siteTitle="Bar IX" imgUrl="https://www.slamfestivals.org/wp-content/uploads/2015/08/Bar-IX-Montana-Logo-blank-back.jpg" siteUrl="http://bar-ix.com/" /></li>
                                        <li>1/2 off every Family Platter - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>
                                        <li>Happy Hour 3pm to 5pm and 8pm to close - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>
                                    </CardText>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Tuesday Specials</CardTitle>
                                    <CardText>
                                        <li>$6 Sauza Margaritas - <SitePopover siteTitle="The Cannery" siteDescription="Cannery info" imgUrl="http://webzoom.freewebs.com/thecanneryandburgerbobs/cannery%20logo1.jpg" siteUrl="http://thecanneryandburgerbobs.webs.com/" /></li>
                                        <li>$2.50-$3 Pints, $3 Long Island Iced Teas, $4 Bahama Mamas and Margaritas, $4.99 Appetizers 4-6pm 9-close - <SitePopover siteTitle="Applebee's" imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Applebee%27s.svg/1200px-Applebee%27s.svg.png" siteUrl="https://www.applebees.com/en" /></li>
                                        <li>$1 Off pints from 4-7pm - <SitePopover siteTitle="Neptunes" imgUrl="https://s-media-cache-ak0.pinimg.com/originals/59/8d/f5/598df5e196d071cf5478e31c9056465a.jpg" siteUrl="http://neptunesbrewery.com/" /></li>
                                        <li>$2 Coronas - <SitePopover siteTitle="The Pour House" siteDescription="Pour House info" siteUrl="http://www.pourhousemt.com/" imgUrl="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/1553124_10152157221594687_1238910614_o.jpg?oh=1090c77ef4005741b4065f2e92c3272d&oe=5B4DC923" /></li>
                                        <li>$2.5 Vodka or gin and tonic $3.75 doubles - Tonic Tuesday - <SitePopover siteTitle="Spectators" imgUrl="http://bozemancvb.com/uploads/Attractions/Spectators/Logo.jpg" siteUrl="http://www.spectatorsmt.com/" /></li>
                                        <li>$7.95 Half-pound burger and pint of beer - 5 to close -  <SitePopover siteTitle="Spectators" imgUrl="http://bozemancvb.com/uploads/Attractions/Spectators/Logo.jpg" siteUrl="http://www.spectatorsmt.com/" /></li>
                                        <li>$2 Olympia, $1 Kamikazes - 5-9pm - The Rocking R-Bar<SitePopover siteTitle="The Rocking R-Bar" imgUrl="http://www.betweenthelinesmt.com/uploads/1/0/0/4/100479566/published/rbar-logo-bozeman.jpeg?1492409050" siteUrl="https://www.rockingrbar.com/" /></li>
                                        <li>Free pitcher of beer with an order of ribs - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>
                                        <li>Happy Hour 3pm to 5pm and 8pm to Close - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>
                                    </CardText>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="5">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Wednesday Specials</CardTitle>
                                    <CardText>
                                        <li>50-cent Wing Wednesday - With purchase of any whiskey drink or cocktail - <SitePopover siteTitle="The Cannery" siteDescription="Cannery info" imgUrl="http://webzoom.freewebs.com/thecanneryandburgerbobs/cannery%20logo1.jpg" siteUrl="http://thecanneryandburgerbobs.webs.com/" /></li>
                                        <li>$1.50 Ten-High Whiskey - Whiskey Wednesday - 10am-4pm - <SitePopover siteTitle="The Crystal" imgUrl="http://media.liveauctiongroup.net/i/27338/24151529_1.jpg?v=8D33FD3D09B7430" siteUrl="https://www.facebook.com/TheCrystalBar/" /></li>
                                        <li>$5 Burger Beer and Chips ($1 for extra patty) - 5-8pm - <SitePopover siteTitle="The Crystal" imgUrl="http://media.liveauctiongroup.net/i/27338/24151529_1.jpg?v=8D33FD3D09B7430" siteUrl="https://www.facebook.com/TheCrystalBar/" /></li>
                                        <li>$8 Baby Back Ribs - <SitePopover siteTitle="The Legion" imgUrl="http://bozemanamericanlegion.org/yahoo_site_admin/assets/images/americanlegionlogo.10384110_std.jpg" siteUrl="http://www.bozemanamericanlegion.org/" /></li>
                                        <li>$2.50-$3 Pints, $3 Long Island Iced Teas, $4 Bahama Mamas and Margaritas, $4.99 Appetizers 4-6pm 9-close - <SitePopover siteTitle="Applebee's" imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Applebee%27s.svg/1200px-Applebee%27s.svg.png" siteUrl="https://www.applebees.com/en" /></li>
                                        <li>Free Live Jazz Music - <SitePopover siteTitle="Plonk" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6Ph5nQ705QexMzlGl2wesbm5fZsojCFLr7pr6jBiRkO_ukbKuQ" siteUrl="https://plonkwine.com/" /></li>
                                        <li>75-cent Chicken Fingers - <SitePopover siteTitle="Buffalo Wild Wings" imgUrl="http://3.bp.blogspot.com/-WSyAaKL1TFY/T_6Yl8sfbwI/AAAAAAAAIXg/FqEjlMxT24o/s1600/Buffalo+Wild+Wings+logo.png" siteUrl="https://www.buffalowildwings.com/" /></li>
                                        <li>$1 off all new beers added to WBT (up to four beers) - <SitePopover siteTitle="Old Chicago" imgUrl="http://kdth.radiodubuque.com/wp-content/uploads/sites/2/2017/11/Old-Chicago.jpg" siteUrl="https://oldchicago.com/locations/bozeman" /></li>
                                        <li>$2 Jack, Bud Light Platinum and Draft Beer - Wild West Wednesday Dancing and a Country DJ - 8pm-Close - <SitePopover siteTitle="Mixers" imgUrl="http://bozemanmagazine.com/uploads/image/listing/000/633/633/header_giant/633_1983_670_Screen_shot_2014_01_29_at_3_01_46_PM.png" siteUrl="http://www.mixersclub.com/" /></li>
                                        <li>$1 Off pints from 4-7pm - <SitePopover siteTitle="Neptunes" imgUrl="https://s-media-cache-ak0.pinimg.com/originals/59/8d/f5/598df5e196d071cf5478e31c9056465a.jpg" siteUrl="http://neptunesbrewery.com/" /></li>
                                        <li>1/2 off all bottles of wine - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>
                                        <li>Happy Hour 3pm - 5pm and 8pm - Close - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>

                                    </CardText>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="6">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Thursday Specials</CardTitle>
                                    <CardText>
                                        <li>$5 Stoli Martinis and single ladies get first drink free! - Ladies Night - <SitePopover siteTitle="The Cannery" siteDescription="Cannery info" imgUrl="http://webzoom.freewebs.com/thecanneryandburgerbobs/cannery%20logo1.jpg" siteUrl="http://thecanneryandburgerbobs.webs.com/" /></li>
                                        <li>2 for 1 Top Shelf Thursday - 8-11pm - <SitePopover siteTitle="The Crystal" imgUrl="http://media.liveauctiongroup.net/i/27338/24151529_1.jpg?v=8D33FD3D09B7430" siteUrl="https://www.facebook.com/TheCrystalBar/" /></li>
                                        <li>$1.25 Pizza Slices and PBR - 8-10pm - <SitePopover siteTitle="Old Chicago" imgUrl="http://kdth.radiodubuque.com/wp-content/uploads/sites/2/2017/11/Old-Chicago.jpg" siteUrl="https://oldchicago.com/locations/bozeman" /></li>
                                        <li>$2.50-$3 Pints, $3 Long Island Iced Teas, $4 Bahama Mamas and Margaritas, $4.99 Appetizers 4-6pm 9-close - <SitePopover siteTitle="Applebee's" imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Applebee%27s.svg/1200px-Applebee%27s.svg.png" siteUrl="https://www.applebees.com/en" /></li>
                                        <li>Boot Night - $5 for glass boot and first drink $3 refill doubles $2 refill drafts, Ladies wearing cowboy boots get $1 wells and $2 double wells - <SitePopover siteTitle="Mixers" imgUrl="http://bozemanmagazine.com/uploads/image/listing/000/633/633/header_giant/633_1983_670_Screen_shot_2014_01_29_at_3_01_46_PM.png" siteUrl="http://www.mixersclub.com/" /></li>
                                        <li>$2 Pints - <SitePopover siteTitle="Cat's Paw" imgUrl="https://cdn-az.allevents.in/banners/3beae132a566c7e4e01eabc8262b557d-rimg-w600-h600-gmir.jpg" siteUrl="https://www.facebook.com/catspawbozeman/" /></li>
                                        <li>$1 Off pint from 4-7pm - <SitePopover siteTitle="Neptunes" imgUrl="https://s-media-cache-ak0.pinimg.com/originals/59/8d/f5/598df5e196d071cf5478e31c9056465a.jpg" siteUrl="http://neptunesbrewery.com/" /></li>
                                        <li>60-cent Boneless Wings - <SitePopover siteTitle="Buffalo Wild Wings" imgUrl="http://3.bp.blogspot.com/-WSyAaKL1TFY/T_6Yl8sfbwI/AAAAAAAAIXg/FqEjlMxT24o/s1600/Buffalo+Wild+Wings+logo.png" siteUrl="https://www.buffalowildwings.com/" /></li>
                                        <li>$3 Stoli - <SitePopover siteTitle="The Pour House" siteDescription="Pour House info" siteUrl="http://www.pourhousemt.com/" imgUrl="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/1553124_10152157221594687_1238910614_o.jpg?oh=1090c77ef4005741b4065f2e92c3272d&oe=5B4DC923" /></li>
                                        <li>$2.5 Stolli singles $3.75 doubles - <SitePopover siteTitle="Spectators" imgUrl="http://bozemancvb.com/uploads/Attractions/Spectators/Logo.jpg" siteUrl="http://www.spectatorsmt.com/" /></li>
                                        <li>19.95 17 inch Pizza and pitcher of beer - 5-close - <SitePopover siteTitle="Spectators" imgUrl="http://bozemancvb.com/uploads/Attractions/Spectators/Logo.jpg" siteUrl="http://www.spectatorsmt.com/" /></li>
                                        <li>$10 Pitcher of you favorite cocktail - 9 to close - <SitePopover siteTitle="Bar IX" imgUrl="https://www.slamfestivals.org/wp-content/uploads/2015/08/Bar-IX-Montana-Logo-blank-back.jpg" siteUrl="http://bar-ix.com/" /></li>
                                        <li>Free shrimp and scallop scampi with purchase of a steak - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>
                                        <li>Happy Hour 3pm - 5pm and 8pm - Close - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>

                                    </CardText>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="7">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Friday Specials</CardTitle>
                                    <CardText>
                                        <li>Free appetizers and $3 Draft Bud Light and PBR - <SitePopover siteTitle="The Cannery" siteDescription="Cannery info" imgUrl="http://webzoom.freewebs.com/thecanneryandburgerbobs/cannery%20logo1.jpg" siteUrl="http://thecanneryandburgerbobs.webs.com/" /></li>
                                        <li>Live Music and Assorted Drink Specials - 7:30-10pm -  <SitePopover siteTitle="Montana Ted's" imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/06/3f/93/56/ted-s-montana-grill.jpg" siteUrl="https://www.tedsmontanagrill.com/" /></li>
                                        <li>$2.50-$3 Pints, $3 Long Island Iced Teas, $4 Bahama Mamas and Margaritas, $4.99 Appetizers 9-close - <SitePopover siteTitle="Applebee's" imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Applebee%27s.svg/1200px-Applebee%27s.svg.png" siteUrl="https://www.applebees.com/en" /></li>
                                        <li>$2 Premium Whiskey - Whiskey Friday - 9-11pm - <SitePopover siteTitle="Mixers" imgUrl="http://bozemanmagazine.com/uploads/image/listing/000/633/633/header_giant/633_1983_670_Screen_shot_2014_01_29_at_3_01_46_PM.png" siteUrl="http://www.mixersclub.com/" /></li>
                                        <li>$1 Off pints from 4-7pm - <SitePopover siteTitle="Neptunes" imgUrl="https://s-media-cache-ak0.pinimg.com/originals/59/8d/f5/598df5e196d071cf5478e31c9056465a.jpg" siteUrl="http://neptunesbrewery.com/" /></li>
                                        <li>$3 Jameson - <SitePopover siteTitle="The Pour House" siteDescription="Pour House info" siteUrl="http://www.pourhousemt.com/" imgUrl="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/1553124_10152157221594687_1238910614_o.jpg?oh=1090c77ef4005741b4065f2e92c3272d&oe=5B4DC923" /></li>
                                        <li>$2 Twisted Teas, $3 Jager Bombs - <SitePopover siteTitle="Spectators" imgUrl="http://bozemancvb.com/uploads/Attractions/Spectators/Logo.jpg" siteUrl="http://www.spectatorsmt.com/" /></li>
                                        <li>$12.75 12 Wings and a pitcher of beer - 5 - close - <SitePopover siteTitle="Spectators" imgUrl="http://bozemancvb.com/uploads/Attractions/Spectators/Logo.jpg" siteUrl="http://www.spectatorsmt.com/" /></li>
                                        <li>$24.99 Dinner for Two - 2 Chef Select entrees, unlimited tuscan bread, soup or sald, and any two mini desserts - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>
                                        <li>Happy Hour 3pm - 5pm and 9pm - Close - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>

                                    </CardText>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="8">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Saturday Specials</CardTitle>
                                    <CardText>
                                        <li>$5 Mimosas & Bloody Mary's - <SitePopover siteTitle="The Cannery" siteDescription="Cannery info" imgUrl="http://webzoom.freewebs.com/thecanneryandburgerbobs/cannery%20logo1.jpg" siteUrl="http://thecanneryandburgerbobs.webs.com/" /></li>
                                        <li>Live Music and Assorted Drink Specials - 7:30-10pm  -  <SitePopover siteTitle="Montana Ted's" imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/06/3f/93/56/ted-s-montana-grill.jpg" siteUrl="https://www.tedsmontanagrill.com/" /></li>
                                        <li>$2.50-$3 Pints, $3 Long Island Iced Teas, $4 Bahama Mamas and Margaritas, $4.99 Appetizers 4-6pm 9-close - <SitePopover siteTitle="Applebee's" imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Applebee%27s.svg/1200px-Applebee%27s.svg.png" siteUrl="https://www.applebees.com/en" /></li>
                                        <li>$1 Off pints from 4-7pm - <SitePopover siteTitle="Neptunes" imgUrl="https://s-media-cache-ak0.pinimg.com/originals/59/8d/f5/598df5e196d071cf5478e31c9056465a.jpg" siteUrl="http://neptunesbrewery.com/" /></li>
                                        <li>50-cent wings, $3 Draft Beer - <SitePopover siteTitle="The Pour House" siteDescription="Pour House info" siteUrl="http://www.pourhousemt.com/" imgUrl="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/1553124_10152157221594687_1238910614_o.jpg?oh=1090c77ef4005741b4065f2e92c3272d&oe=5B4DC923" /></li>
                                        <li>Doubles for singles - 4-9pm - <SitePopover siteTitle="Bar IX" imgUrl="https://www.slamfestivals.org/wp-content/uploads/2015/08/Bar-IX-Montana-Logo-blank-back.jpg" siteUrl="http://bar-ix.com/" /></li>
                                        <li>$24.99 Dinner for Two - 2 Chef Select entrees, unlimited tuscan bread, soup or sald, and any two mini desserts - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>
                                        <li>Happy Hour 3pm to 5pm and 9pm to Close - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>
                                    </CardText>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="9">
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Sunday Specials</CardTitle>
                                    <CardText>
                                        <li>$1 Beef or Chicken Sliders with purchase of a pitcher of beer - <SitePopover siteTitle="The Cannery" siteDescription="Cannery info" imgUrl="http://webzoom.freewebs.com/thecanneryandburgerbobs/cannery%20logo1.jpg" siteUrl="http://thecanneryandburgerbobs.webs.com/" /></li>
                                        <li>$2.49 Wells $2.99 Cocktails 2.99 or cheaper on all beers $2.99 House Wine - 7-10pm - <SitePopover siteTitle="Old Chicago" imgUrl="http://kdth.radiodubuque.com/wp-content/uploads/sites/2/2017/11/Old-Chicago.jpg" siteUrl="https://oldchicago.com/locations/bozeman" /></li>
                                        <li>$5 Coffee and 4 Beignets - <SitePopover siteTitle="Cafe Zydeco" imgUrl="http://static.wixstatic.com/media/8ea240_3aa7ef93332984f788c5562b656d5178.png/v1/fill/w_363,h_225,al_c,usm_0.66_1.00_0.01/8ea240_3aa7ef93332984f788c5562b656d5178.png" siteUrl="http://www.cafezydeco.com/" /></li>
                                        <li>$5.75 Chicken Fried Steak Hashed Browns and Toast - <SitePopover siteTitle="Cat's Paw" imgUrl="https://cdn-az.allevents.in/banners/3beae132a566c7e4e01eabc8262b557d-rimg-w600-h600-gmir.jpg" siteUrl="https://www.facebook.com/catspawbozeman/" /></li>
                                        <li>$2 Sliders, Bottomless Mimosa - <SitePopover siteTitle="The Pour House" siteDescription="Pour House info" siteUrl="http://www.pourhousemt.com/" imgUrl="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/1553124_10152157221594687_1238910614_o.jpg?oh=1090c77ef4005741b4065f2e92c3272d&oe=5B4DC923" /></li>
                                        <li>2 for 1 all day - <SitePopover siteTitle="Bar IX" imgUrl="https://www.slamfestivals.org/wp-content/uploads/2015/08/Bar-IX-Montana-Logo-blank-back.jpg" siteUrl="http://bar-ix.com/" /></li>
                                        <li>Kids 10 and under eat free with purchase of adult entree - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>
                                        <li>Happy Hour 3pm to 5pm and 8pm to Close - <SitePopover siteTitle="Johnny Carino's" imgUrl="http://images.all-free-download.com/images/graphiclarge/johnny_carinos_137557.jpg" siteUrl="http://www.carinos.com/bozeman-mt/menu" /></li>
                                    </CardText>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}