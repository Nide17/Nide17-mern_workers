import React, { Component } from 'react';
// import { v4 as uuid } from 'uuid';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addWorker } from '../actions/workerActions';

class WorkerModel extends Component {

    //properties of the modal
    state = {
        // initialy doesn't show
        modal: false,
        name: ''
    }

    //showing and hiding modal
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmitHandler = e => {
        e.preventDefault();

        const newWorker = {

            // id: uuid(),
            // name comes from the state bcz as we type we update the state
            name: this.state.name
        }

        // Add worker via addWorker action 
        this.props.addWorker(newWorker);

        //Closing the model
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    // call the toggle function
                    onClick={this.toggle}
                >Add worker</Button>

                <Modal
                    // Set it to the state of modal true or false
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >

                    <ModalHeader toggle={this.toggle}>Add a worker</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmitHandler}>

                            <FormGroup>
                                <Label for="worker">Worker</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="worker"
                                    placeholder="Add a worker"
                                    onChange={this.onChangeHandler}
                                />
                                <Button
                                    color="dark"
                                    style={{ marginTop: '2rem' }}
                                    block
                                >Add Worker</Button>
                            </FormGroup>

                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }


}

// Map the worker to state props
const mapStateToProps = state => ({
    worker: state.worker
});

export default connect(
    mapStateToProps,
    { addWorker })(WorkerModel);
