/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";
import { Table, Container, Col, Row } from "reactstrap";
import { index } from "../../../config/pluginsInit";

import { Marker, TileLayer,Popup , MapContainer} from 'react-leaflet';
import data from '../../../fakeData/json/sampledata.json';
function renderPopup (item){
   
    return (
      
      <Popup
        
      >
         
        <Link  to={item.link} >{item.description}</Link>
      </Popup>
      
    );
  }
class Index extends React.Component {
     
    componentDidMount() {
this.post=[60.21679719545689, 24.810291821854594];

        setTimeout(function () {
            index();
        }, 800);
    }
   
    render() {
        return (
            <>

<Row className="iq-example-row">
<Container>

<Row className="row">
<Col className="col-4">
<Table hover className="table" items={data.data}>
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">Name</th>
         <th scope="col">Address</th>
         <th scope="col"></th>
         
      </tr>
   </thead>
   <tbody>
                                {
                                    data.data.map((item, index) => (
                                       
                                        <tr key={index}>
                                            <td >{item.refnum} </td>
                                           <td> <Link   to={item.link} className="nav-link font-weight-bold ">{item.description} </Link></td>
                                            <td >{item.street}   {item.Apartment} {item.doornum} {item.region} {item.country}</td>
                                            <Link>Delete</Link>
                                        </tr>
                                    ))
                                }


   </tbody>
</Table>


</Col>
<Col className="col-8">
<MapContainer
                                            style={ { height: "500px", width: "100%"}}
                                            
                                            center={[60.21679719545689, 24.810291821854594]} zoom={12} maxZoom={100}
                                            
                                        >
    
                                                <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                            />
                            
                                {
                                    data.data.map((item, index) => (
                                       
                                        <Marker   
                                                position={[item.latitude,item.longitude]}
                                                onMouseOver={(e) => {
                                                    e.target.openPopup();
                                                  }}
                                                  onMouseOut={(e) => {
                                                    e.target.closePopup();
                                                  }}
                                                >
                                                          {renderPopup(item) }
                                                </Marker>
                                    ))
                                }

      
    
    
                                     </MapContainer>
</Col>
</Row>
</Container>
</Row>


             
            </>
        )
    }
}

export default Index;