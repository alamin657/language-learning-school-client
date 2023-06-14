import React from 'react';
const ExtraSection = () => {
    return (
        <div data-aos-duration="3000" data-aos="fade-up-left">
            <h1 className='text-4xl text-center text-orange-500 mt-2 font-bold'>Welcome to Language Learning School!!!</h1>
            <p className='text-center text-gray-400'>Our Language Learning School is a leading institution dedicated to providing exceptional language <br /> education and fostering a global community of passionate learners.</p>
            <div className='grid md:grid-cols-3 sm:grid-cols-1'>
                <div className='flex max-w-5xl mx-auto gap-8 group'>
                    <div className='bg-white/10 p-8 mix-blend-luminosity group-hover:scale-[0.85] duration-500 group-hover:bg-orange-400  cursor-pointer'>
                        <img className='rounded-full w-2/5 mx-auto' src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/elementor/thumbs/woman-learning-english-online-e1625538535869-p9p4lrjtk1sd2tmdyid28uz6flhqadle7aui7qrlao.jpg" />
                        <h3 className='text-xl font-bold text-center'>Diverse Language Programs</h3>
                        <p className='text-center'> We offer comprehensive language programs that cover a wide array of languages, including English, Spanish, French, German, Mandarin....... </p>
                        <p className='bg-orange-500 text-center py-2.5 mx-auto px-8 rounded-full'>Please click me!!!!</p>
                    </div>

                </div>
                <div className='flex max-w-5xl mx-auto gap-8 group'>
                    <div className='bg-white/10 p-8 mix-blend-luminosity  group-hover:bg-orange-400 group-hover:scale-[0.85] duration-500 cursor-pointer '>
                        <img className='rounded-full w-2/5 mx-auto' src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/elementor/thumbs/girl-making-a-video-call-online-on-the-internet--e1625538546462-p9p4m1w1n86imj7da4tyiad8yu2rn1qfwq0uhsc9e8.jpg" />
                        <h3 className='text-xl font-bold text-center'>Tailored Learning Approach</h3>
                        <p className='text-center'> Our classes are conducted in a dynamic and engaging environment, fostering active participation and promoting a communicative.</p>
                        <p className='bg-orange-500 text-center py-2.5 mx-auto px-8 rounded-full'>Please click me!!!!</p>
                    </div>

                </div>
                <div className='flex max-w-5xl mx-auto gap-8 group'>
                    <div className='bg-white/10 p-8 mix-blend-luminosity group-hover:scale-[0.85] duration-500 group-hover:bg-orange-400  cursor-pointer'>
                        <img className='rounded-full w-2/5 mx-auto' src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/elementor/thumbs/male-student-wearing-headphones-taking-online-course-seminar-watching-webinar--e1625538582195-p9p4mzq8h9gu8hu7sjgj01tucpfzc5gs1dibrqy368.jpg" />
                        <h3 className='text-xl font-bold text-center'>Qualified and Supportive Instructors</h3>
                        <p className='text-center'>Our team of dedicated instructors comprises highly qualified language professionals who possess extensive teaching experience. </p>
                        <p className='bg-orange-500 text-center py-2.5 mx-auto px-8 rounded-full'>Please click me!!!!</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ExtraSection;
