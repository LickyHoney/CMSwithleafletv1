/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { CardBody,Card } from 'reactstrap';
import { index } from "../../../config/pluginsInit";
import data from '../../../fakeData/json/sampledata.json';
import {Polygon, Popup, Rectangle, Marker, TileLayer , MapContainer} from 'react-leaflet';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 51.505,
            lng: -0.09,
            zoom: 13,
          };
       
        this.state = {
            style: {
                backgroundImage: `url(${require('../../../assets/images/page-img/33.png')})`,
                backgroundSize: 'cover',
                height: "423px"
            }
        };
        this.sayHello = this.sayHello.bind(this);
    }
    sayHello() {
        this.props.history.push('/dashboard1');
      }

    componentDidMount() {
        debugger;
        this.refno=window.location.pathname.replace('/Detail/','');
        
        setTimeout(function () {
            index();
        }, 800);
        document.getElementById('body').className = 'sidebar-main-active right-column-fixed header-top-bgcolor'
    }
    componentWillUnmount() {
        document.getElementById('body').className = ''
    }
    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <>
            <Card >
            <CardBody>





                            <div>
                                {data.data.filter(item => item.refnum===this.refno).map(filteredName => (
                                    <div>
                                     <h1 className="display-8">#{filteredName.refnum}-{filteredName.description}</h1>
                                     <h1 className="display-9">{filteredName.street}   {filteredName.Apartment} {filteredName.doornum} {filteredName.region} {filteredName.country}</h1>
                                     </div>




                                ))}
                                </div>
                                <div>
                                {data.data.filter(item => item.refnum===this.refno).map(filteredName => (
                                    <div>
                                <MapContainer
                                            style={ { height: "500px", width: "100%"}}
                                            
                                            center={[filteredName.latitude, filteredName.longitude]} zoom={18} maxZoom={100}
                                            
                                        >
    
                                                <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                            />

                                    <Polygon positions={filteredName.boundaries} color='red'
                                     />
    
    
                                     </MapContainer>
                                     </div>
                                ))
                                }
                                </div>
            </CardBody>
            </Card>
            </>
        );
    }
}

export default Index;
