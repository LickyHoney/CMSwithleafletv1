/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { CardBody,Card } from 'reactstrap';
import { index } from "../../../config/pluginsInit";

class Index extends React.Component {

    constructor(props) {
        super(props);
        
       
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
        setTimeout(function () {
            index();
        }, 800);
        document.getElementById('body').className = 'sidebar-main-active right-column-fixed header-top-bgcolor'
    }
    componentWillUnmount() {
        document.getElementById('body').className = ''
    }
    render() {

        return (
            <>
            <Card >
            <CardBody>
               <form className="mt-4 ">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control mb-0" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter email" value="admin@admin.com" />
                </div>
                <div className="form-group" >

                    <style>
                        
                    </style>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control mb-0" id="exampleInputPassword1"
                            placeholder="Password" value="12345678"  />
                </div>
                <div className="d-inline-block w-100">
                    
                    <button type="submit" className="btn btn-primary float-right marginlf40" onClick={this.sayHello}>Sign in</button>
                </div>
                
            </form>
            </CardBody>
            </Card>
            </>
        );
    }
}

export default Index;
