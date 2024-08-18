import { Component } from "react";
import "./index.css"
import { Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


class CustomerForm extends Component{
    state = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        organization:'',
        isLoading: false,
        id:""
    }

    submitForm = async (event) =>{
        event.preventDefault();
        this.setState({isLoading : true})
        const customer = {
            phoneNumber: this.state.phone,
            name: {
                firstName: this.state.firstname,
                lastName: this.state.lastname
            },
            email: this.state.email,
            address: {
                street: this.state.address,
                city: this.state.city,
                state: this.state.state,
                pincode: this.state.pincode
            },
            organization: this.state.organization
        };
        try {
            const response = await fetch("https://crm-backend-3nq7.onrender.com/api/customers",{
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(customer)
            });
            if (response.ok){
                this.setState({isLoading:false})
                const newCustomer = await response.json()
                this.setState({
                    firstName:"",
                    lastName:"",
                    email:"",
                    phone:"",
                    address:"",
                    city:"",
                    state:"",
                    pincode:"",
                    organization:"",
                    id:newCustomer._id
                })
                alert("customer created successfully")
                
            }
            else{
                alert("Failed to create the customer data")
            }
        }
        catch(error){
            console.log(error)
            alert("Error while creating customer data")
        }

    }

    render(){
        const {firstname, id,  lastname,email, phone, address,city,state,pincode,organization } = this.state

        if (id !== ""){
            return(<Navigate to="/CRMpush" state={{ id }}/>)
        } 
        return(
            <form className="form-container" onSubmit={this.submitForm}>
                <h1><span className="span-element">C</span>ustomer <span className="span-element">I</span>nformation <span className="span-element">C</span>apture <span className="span-element">F</span>orm</h1>
                <div className="input-container mb-3 mt-3">
                    <label htmlFor="first-name" className="mb-1">FIRST NAME</label>
                    <input className="form-control" 
                    id="first-name" 
                    type="text" 
                    value = {firstname}
                    placeholder="Enter the First Name" 
                    onChange={(e) => this.setState({firstname: e.target.value})}
                    required/>
                </div>
                <div className="input-container mb-3">
                    <label htmlFor="last-name" className="mb-1">LAST NAME</label>
                    <input className="form-control" 
                    id="last-name" 
                    type="text" 
                    placeholder="Enter the Last Name" 
                    value={lastname}
                    onChange={(e) => this.setState({lastname: e.target.value})}
                    required/>
                </div>
                <div className="input-container mb-3">
                    <label htmlFor="email" className="mb-1">Email</label>
                    <input className="form-control" 
                    id="email" 
                    type="email" 
                    placeholder="Enter the Email" 
                    value={email}
                    onChange={(e)=>this.setState({email: e.target.value})}
                    required/>
                </div>
                <div className="input-container mb-3">
                    <label htmlFor="phone" className="mb-1">Phone Number</label>
                    <input className="form-control" 
                    id="phone" 
                    type="tel" 
                    placeholder="Enter the Phone Number" 
                    pattern="[6-9]{1}[0-9]{9}"
                    title="Phone number should be a valid 10-digit Indian number starting with 6-9." 
                    value={phone}
                    onChange={(e) => this.setState({phone: e.target.value})}
                    required/>
                </div>
                <div className="input-container mb-3">
                    <label htmlFor="address" className="mb-1">Address</label>
                    <input className="form-control" 
                    id="address" 
                    type="text" 
                    placeholder="Enter the Address"
                    value={address}
                    onChange={(e) => this.setState({address: e.target.value})}
                    required/>
                </div>
                <div className="input-container mb-3">
                    <label htmlFor="city" className="mb-1">City</label>
                    <input className="form-control" 
                    id="city" 
                    type="text" 
                    placeholder="Enter the City Name" 
                    value={city}
                    onChange={(e) => this.setState({city: e.target.value})}
                    required/>
                </div>
                <div className="input-container mb-3">
                    <label htmlFor="state" className="mb-1">State</label>
                    <input className="form-control" 
                    id="state" 
                    type="text" 
                    placeholder="Enter the State Name" 
                    value={state}
                    onChange={(e) => this.setState({state: e.target.value})}
                    required/>
                </div>
                <div className="input-container mb-3">
                    <label htmlFor="postal-code" className="mb-1">PIN Code</label>
                    <input className="form-control" 
                    id="postal-code" 
                    type="text" 
                    placeholder="Enter the pincode"
                    value={pincode}
                    onChange={(e) => this.setState({pincode: e.target.value})}
                    required/>
                </div>
                <div className="input-container mb-3">
                    <label htmlFor="organization" className="mb-1">Current Organization</label>
                    <input className="form-control" 
                    id="organization" 
                    type="text" 
                    placeholder="Enter the Current Organization"  
                    value={organization}
                    onChange={(e) => this.setState({organization: e.target.value})}
                    required/>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        )
    }
}
export default CustomerForm