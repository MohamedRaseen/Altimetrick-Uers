import React from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import { Card, Button, CardTitle, CardText } from 'reactstrap';


class Dashboard extends React.Component{
  render(){

    if(!this.props.userData){
      this.props.history.push('/');
      return null;
    }

    const { firstName, lastName, gender, country, userName} = this.props.userData;
    return(
      <Card body>
          <CardTitle>User Details</CardTitle>
          <CardText>
            <h3>
                Fisrt Name : {firstName}
            </h3>
            <h3>
                Last Name : {lastName}
            </h3>
            <h3>
                Gender : {gender}
            </h3>
            <h3>
                Country : {country}
            </h3>
            <h3>
                User Name : {userName}
            </h3>
          </CardText>
          <Button onClick={()=>{
            this.props.history.push('/');
          }}>Log Out</Button>
        </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.logInPage
  }
}

export default connect(mapStateToProps, null)(Dashboard);