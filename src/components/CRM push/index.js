import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

const CRMpush = () => {
    const location = useLocation();
    const { id } = location.state || {};
    
    const [customerData, setCustomerData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCustomerData = async () => {
            if (id) {
                try {
                    const response = await fetch(`https://crm-backend-3nq7.onrender.com/api/customers/${id}`);
                    if (response.ok) {
                        const data = await response.json();
                        setCustomerData(data);
                        setIsLoading(false);
                    } else {
                        throw new Error("Failed to fetch customer data");
                    }
                } 
                catch (error) {
                    setError(error.message);
                } 
            } 
            else {
                setError("ID not found");
                setIsLoading(false);
            }
        };

        fetchCustomerData();
    }, [id]);

    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <div>
                <h2 className="text-center">CRM Push</h2>
                {customerData ? (
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Pincode</th>
                                    <th>Organization</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{customerData.name.firstName}</td>
                                    <td>{customerData.name.lastName}</td>
                                    <td>{customerData.email}</td>
                                    <td>{customerData.phoneNumber}</td>
                                    <td>{customerData.address.street}</td>
                                    <td>{customerData.address.city}</td>
                                    <td>{customerData.address.state}</td>
                                    <td>{customerData.address.pincode}</td>
                                    <td>{customerData.organization}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="button-container">
                        <button className="btn btn-primary">
                            Push to CRM
                        </button>
                        </div>
                    </div>
                ) : (
                    <div>ID not found</div>
                )}
            </div>
        </div>
    );
};

export default CRMpush;
