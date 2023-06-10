import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddAClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }
    const handleAdd = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Add A Class  Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="flex gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Class Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="text" {...register("image", { required: true })} name='image' placeholder="Class Image" className="input input-bordered" />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Instructor Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Instructor Email" className="input input-bordered" />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input type="text" {...register("seats", { required: true })} name='seats' placeholder="Available Seats" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text"  {...register("price", { required: true })} name='price' placeholder="Price" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleAdd} className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAClass;