import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { v4 as uuid } from 'uuid';

import { connect } from 'react-redux';
import { getWorkers, deleteWorker } from '../actions/workerActions';
//Bring in Prop-Types: kind of form validation
import PropTypes from 'prop-types';

class Workers extends Component {


    //Run the GET_WORKERS action
    componentDidMount() {
        this.props.getWorkers();
    };

    onDeleteClick = (id) => {
        //Call the delete action
        this.props.deleteWorker(id);
    };

    render() {
        //Destructuring the state to have individual person

        const { workers } = this.props.worker;
        return (
            <Container>
                {/* Displaying the workers list*/}
                <ListGroup>
                    <TransitionGroup className="laours-list">

                        {/* let's map through them by destructuring values in the map function */}
                        {workers.map(({ _id, name }) => (

                            <CSSTransition key={_id} timeout={1000} classNames="fade">
                                <ListGroupItem>

                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                        &times;
                                </Button>

                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}

                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
    }
}

Workers.propTypes = {
    // the function
    getWorkers: PropTypes.func.isRequired,
    //Represent the state
    worker: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    worker: state.worker
});

export default connect(mapStateToProps, { getWorkers, deleteWorker })(Workers);
