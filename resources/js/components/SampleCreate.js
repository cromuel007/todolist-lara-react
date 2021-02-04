import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SampleCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            errors: []
        }

        this.handleCreateNewItem = this.handleCreateNewItem.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)

        this.input = React.createRef();
    }



    handleCreateNewItem(event) {
        event.preventDefault();

        const { name } = event.target
        const { history } = this.props

        const data = {
            name: name.value
        }

        axios.post('/todo', data)
            .then(response => {
                // redirect to the homepage
                history.push('/')
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data.errors
                })
            })
    }

    hasErrorFor(field) {
        return !!this.state.errors[field]
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className='invalid-feedback'>
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }

    render() {
        return (

            <div className='container py-4'>
                <div className='row justify-content-center'>

                    <div className='col-md-12'>

                        <Link className='btn btn-primary btn-sm mb-3' to='/'>
                            Back to listing
                </Link>

                        <div className='card'>
                            <div className='card-header'>Add New  </div>
                            <div className='card-body'>
                                <form onSubmit={this.handleCreateNewItem}>

                                    <div className='form-group'>
                                        <label htmlFor='title'>  Name</label>
                                        <input
                                            id='title'
                                            type='text'
                                            className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                            name='name'
                                            ref={this.input}
                                        />
                                        {this.renderErrorFor('title')}
                                    </div>
                                    <button className='btn btn-primary'>Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SampleCreate