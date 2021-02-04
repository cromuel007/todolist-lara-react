import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SampleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.getData();       
    }

    getData() {
        axios.get('/todo').then(response => {
            this.setState({
                items: response.data
            })
        })
    }


    handleDelete(e) {
        e.preventDefault();
        const id = e.target.id.value;
        axios.delete('/todo/' + id);
        this.getData();
    }


    render() {
        const { items } = this.state

        return (
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-12'>


                        <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                            Create new
                    </Link>

                        {this.state.items.length !== 0 ?

                            <table className="table table-hovered table-striped">
                                <thead>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td colSpan="3" className="action-head">Action</td>
                                </thead>

                                {this.state.items.map((item, i) => (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td> {item.name}</td>
                                        <td className="action-sub"> <Link className='btn btn-info' to={`todo/${item.id}/edit`} key={item.id}  > Edit </Link></td>
                                        <td className="action-sub"> <Link className='btn btn-success' to={`todo/${item.id}/view`} key={item.id}  > Details </Link></td>
                                        <td className="action-sub"><form onSubmit={this.handleDelete} >
                                            <input type="hidden" name="id" value={item.id} />
                                            <button type="submit" className="btn btn-danger">Delete</button>
                                        </form></td>
                                    </tr>
                                ))}



                            </table>


                            : <div> No Data!</div>}

                    </div>
                </div>
            </div>
        )
    }
}

export default SampleList