import React from 'react';
import '../styles/App.css';
import { Col, Button, Form, FormGroup, Label, Input, Row, Alert } from 'reactstrap';
import { logInOnSubmit, logInRemoveAlert, logInFailure, updateUserData } from '../reducers/action';
import { connect } from 'react-redux';


class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userDetails: { userName: '', password: ''} };
    }

    componentDidMount(){
      this.props.updateUserData(null);
    }

    inputOnChange = (e, property) => {
        let { userDetails } = this.state;
        userDetails[property] = e.target.value;
        this.setState({ userDetails });
    }
    onSubmitHandler = () => {
        let { userDetails } = this.state;
        let { logInOnSubmit, logInFailure } = this.props;
        if (userDetails.userName === '' || userDetails.password === '') {
          logInFailure("Please Fill User name and Password");
        }
        else {
          logInOnSubmit(userDetails);
        }
    }
    render() {
        const { userName, password } = this.state.userDetails;
        const { alert, logInRemoveAlert, userData } = this.props;

        if(userData && alert.message === 'User Suceessfully Loggedin'){
          this.props.history.push('/dashboard');
          return null;
        }

        return (
            <Row>
                <Col className='main-content' sm="12" md={{ size: 6, offset: 3 }}>
                    <Col sm={10}>
                        <h3 className='align-center'>USER LOGIN </h3>
                    </Col>
                    {alert.show &&
                        <Col sm={10}>
                            <Alert className='align-center' color="danger" isOpen={true} toggle={() => { logInRemoveAlert() }}>
                                {alert.message}
                            </Alert>
                        </Col>
                    }
                    <Col sm={10}>
                        <Alert className='align-center' color="light">
                            Asterisk Implies Mandatory
                        </Alert>
                    </Col>
                    <Form>
                        <FormGroup>
                            <Col sm={10}>
                                <Label for="userName">User Name*</Label>
                                <Input type="text" name="userName" id="userName" placeholder="User Name" value={userName} onChange={(e) => this.inputOnChange(e, 'userName')} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" sm={2}>Password*</Label>
                            <Col sm={10}>
                                <Input type="password" name="email" id="password" placeholder="password" value={password} onChange={(e) => this.inputOnChange(e, 'password')} />
                            </Col>
                        </FormGroup>
                        
                    </Form>
                    <Col sm={10} className='align-center submit-button'>
                        <Button color="primary" onClick={this.onSubmitHandler}>Log In</Button>{' '}
                    </Col>
                    <Col sm={10} className='align-center submit-button'>
                        <Button color="primary" style={{marginTop:'25px'}} onClick={()=>{
                          this.props.history.push('/signup');
                        }}>Sign Up</Button>{' '}
                    </Col>
                </Col>
            </Row>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ...state.logInPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logInOnSubmit: (data) => { dispatch(logInOnSubmit(data)) },
        logInRemoveAlert: () => { dispatch(logInRemoveAlert()) },
        logInFailure: (data) => { dispatch(logInFailure(data)) },
        updateUserData: () => {dispatch(updateUserData())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
