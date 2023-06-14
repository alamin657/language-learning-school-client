import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const PaymentHistory = () => {
    const [payments, setPayments] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/payments/${user?.email}`)
            .then(res => res.json())
            .then(data => setPayments(data))
    }, [user])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Email</th>
                        <th>TransactionId</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        payments.map(payment =>
                            <tr key={payment._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={payment.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {payment.email}
                                </td>

                                <td>{payment.transactionId}</td>
                                <td>{payment.Date}</td>
                                <td>${payment.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        )
                    }
                </tbody>


            </table>
        </div>
    );
};

export default PaymentHistory;