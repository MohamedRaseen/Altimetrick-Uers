import React from 'react';
import '../styles/App.css';
import { Col, Button, Form, FormGroup, Label, Input, Row, Alert } from 'reactstrap';
import { signUpOnSubmit, signUpRemoveAlert, signUpFailure } from '../reducers/action';
import { connect } from 'react-redux';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userDetails: { userName: '', password: '', firstName: '', lastName: '', country: null, gender: '' } };
        this.countries = [
            'India', 'Pakistan', 'Australia', 'Srilanka'
        ];
    }

    inputOnChange = (e, property) => {
        let { userDetails } = this.state;
        userDetails[property] = e.target.value;
        this.setState({ userDetails });
    }
    onSubmitHandler = () => {
        let { userDetails } = this.state;
        let { signUpOnSubmit, signUpFailure } = this.props;
        if (userDetails.userName === '' || userDetails.password === '' || userDetails.firstName === '' || userDetails.country === null || userDetails.gender === '') {
            signUpFailure("Please Fill all Mandatory Fields");
        }
        else {
            signUpOnSubmit(userDetails);
        }
    }
    render() {
        const { userName, password, firstName, lastName, country, gender } = this.state.userDetails;
        const { alert, signUpRemoveAlert } = this.props;
        return (
            <Row>
                <Col className='main-content' sm="12" md={{ size: 6, offset: 3 }}>
                    <Col sm={10}>
                        <h3 className='align-center'>USER REGISTRATION </h3>
                    </Col>
                    {alert.show &&
                        <Col sm={10}>
                            <Alert className='align-center' color="danger" isOpen={true} toggle={() => { signUpRemoveAlert() }}>
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
                            <Label for="password">  Password*</Label>
                            <Col sm={10}>
                                <Input type="password" name="email" id="password" placeholder="password" value={password} onChange={(e) => this.inputOnChange(e, 'password')} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label for="firstName">First Name*</Label>
                            <Col sm={10}>
                                <Input type="text" name="firstName" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => this.inputOnChange(e, 'firstName')} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="lastName" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => this.inputOnChange(e, 'lastName')} />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Label for="country" sm={2}>Country*</Label>
                            <Col sm={10}>
                                <Input type="select" name="country" id="country" defaultValue={country} onChange={(e) => this.inputOnChange(e, 'country')}>
                                    {(country === null) && <option>---Select your country---</option>}
                                    {
                                        this.countries && this.countries.map((option, index) => {
                                            return <option key={index} value={option}>{option}</option>
                                        })
                                    }
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <legend className="col-form-label col-sm-2">Gender*</legend>
                            <Col sm={10}>
                                <FormGroup check>
                                    <Label check>
                                        <input type="radio" name="options" value='male' selected={gender === 'male'} onChange={(e) => this.inputOnChange(e, 'gender')} /> Male
            </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <input type="radio" name="options" value='female' selected={gender === 'female'} onChange={(e) => this.inputOnChange(e, 'female')} /> Female
            </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                    </Form>
                    <Col sm={10} className='align-center submit-button'>
                        <Button color="primary" onClick={this.onSubmitHandler}>Sign Up</Button>{' '}
                    </Col>
                </Col>
            </Row>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ...state.signUpPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpOnSubmit: (data) => { dispatch(signUpOnSubmit(data)) },
        signUpRemoveAlert: () => { dispatch(signUpRemoveAlert()) },
        signUpFailure: (data) => { dispatch(signUpFailure(data)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
