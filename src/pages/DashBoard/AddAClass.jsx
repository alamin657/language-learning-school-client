import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/axiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Upload_Image_Token;


const AddAClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, instructor, email, price, seats, status, enrolled } = data;
                    const addClass = { name, status, enrolled, instructor, email, price: parseFloat(price), seats: parseFloat(seats), image: imgURL }
                    console.log(addClass)
                    axiosSecure.post('/classes', addClass)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Add Class successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }
    // fetch('http://localhost:5000/classes', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    //     .then(res => res.json())
    //     .then(result => {
    //         console.log(result)
    //     })




    // const handleAdd = () => {
    //     Swal.fire({
    //         title: 'Success!',
    //         text: 'Add A Class  Successfully',
    //         icon: 'success',
    //         confirmButtonText: 'Cool'
    //     })
    // }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="flex gap-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Instructor Name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="file" {...register("image", { required: true })} name='image' placeholder="Class Image" className="file-input file-input-bordered file-input-info" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Image</span>
                            </label>
                            <input type="text"  {...register("picture", { required: true })} name='picture' placeholder="image" className="input input-bordered" />
                        </div>

                        <div className='flex gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Class Name" className="input input-bordered" />
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
                        <div className='flex gap-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enroll</span>
                                </label>
                                <input type="text" {...register("enrolled", { required: true })} name='enrolled' placeholder="enroll" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>
                                <input type="text"  {...register("status", { required: true })} name='status' placeholder="status" className="input input-bordered" />
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAClass;