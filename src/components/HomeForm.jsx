import React, { Component } from 'react'


class HomeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: "",
            id: "",
            description: "",
            price: ""
        }
    }
    render() {

        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            this.props.addHome(this.state)
        }
        return (
            <>
  
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="address">Address</label>
                        <input type="text" onChange={onChange} name="address" id="address" />
                        <label htmlFor="description">Description</label>
                        <input type="text" onChange={onChange} name="description" id="description" />
                        <label htmlFor="price">price</label>
                        <input type="number" onChange={onChange} name="price" id="price" />
                        <label htmlFor="id">id</label>
                        <input type="number" onChange={onChange} name="id" id="id" />
                        <button type="submit">Create Home</button>
                    </form>
                
            </>
        )
    }
}

export default HomeForm;