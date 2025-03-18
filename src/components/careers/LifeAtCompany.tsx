import { useState } from 'react';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import { RxDotFilled } from 'react-icons/rx';

const LifeAtCompany = () => {
    const images = [
        {
            id: 1,
            link: 'https://imgs.search.brave.com/6cvKhDtedkrNTAn9YbxE1eJTTc6V1fIWsj0AFj5Kp1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTcz/NzEyNTgyL3Bob3Rv/L2ludGVyaW9yLW9m/LW1vZGVybi1vZmZp/Y2UuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVV2dFFRM3Rk/TmJ3ZzBSZjRQeHNS/YVpTVktpVC1sRVlU/WGpPeHBKOVY5T2s9',
            name: 'Life at Smaatix 1',
        },
        {
            id: 2,
            link: 'https://imgs.search.brave.com/FaRMzJMGVVAayTTixsE6_gwWbFwoR-f6-dJcs1d6P6s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/NDU0MTcxMS9waG90/by93b21lbi1tZWV0/aW5nLWluLWJ1c2lu/ZXNzLW9mZmljZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VmdOanNBNW9FNjg0/R01Fb2NzbHJEWXpB/QWpWLTYyNHRxajVT/TUpJZUh4ND0',
            name: 'Life at Smaatix 2',
        },
        {
            id: 3,
            link: 'https://imgs.search.brave.com/S3cGZTOysDYGMs-nmAcHfAaAQn6ZStMPAGFWQVKMkrw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODYz/NDk3NDk4L3Bob3Rv/L2ktbmVlZC1ldmVy/eW9uZS10by1naXZl/LW1lLXRoZWlyLWJl/c3QtaWRlYXMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU50/dXhVOTk5OGJXTURz/Wk44UUIwT3gtNUFs/cFE3Tm9pZk9oYnVY/UVdjcG89',
            name: 'Life at Smaatix 3',
        },
        {
            id: 4,
            link: 'https://imgs.search.brave.com/E2pw4HXF20FhmuIBvULUOAXPhDT7DCsqRk-WLMl430w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NDg1MzQ2Ni9waG90/by9wbGFjZS1vZi13/b3JrLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1KbjBXLW9a/ZEJqdG04MGdXaFd6/cm9wVWVXb09EeFly/eGJXSWtuaUFiaEdj/PQ',
            name: 'Life at Smaatix 4',
        },
        {
            id: 5,
            link: 'https://imgs.search.brave.com/E2pw4HXF20FhmuIBvULUOAXPhDT7DCsqRk-WLMl430w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NDg1MzQ2Ni9waG90/by9wbGFjZS1vZi13/b3JrLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1KbjBXLW9a/ZEJqdG04MGdXaFd6/cm9wVWVXb09EeFly/eGJXSWtuaUFiaEdj/PQ',
            name: 'Life at Smaatix 5',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <section className='flex flex-col items-center py-10'>
            <h2 className='lg:text-4xl md:text3xl sm:text-2xl font-bold  font-serif mb-10 text-purple-900'>
                Life at Smaatix
            </h2>
            <div className='max-w-[600px] h-[300px] w-full m-auto pb-8 px-4 relative group'>
                <div
                    style={{
                        backgroundImage: `url(${images[currentIndex].link})`,
                    }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                ></div>
                {/*  Left Arrow  */}
                <div
                    className=' absolute top-[50%] -translate-y-[50%] -translate-x-0 -left-10 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'
                    onClick={handlePrev}
                >
                    <IoChevronBackSharp size={15} />
                </div>

                {/* Right Arrow */}
                <div
                    className=' absolute top-[50%] -translate-y-[50%] -translate-x-0 -right-10 text-2xl rounded-full p-2 bg-black text-white cursor-pointer'
                    onClick={handleNext}
                >
                    <IoChevronForwardSharp size={15} />
                </div>

                <div className='flex top-4 justify-center py-2 '>
                    {images.map((image, index) => (
                        <div
                            className={` text-2xl cursor-pointer text-center ${
                                index === currentIndex
                                    ? 'text-red-500'
                                    : 'text-black'
                            }`}
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LifeAtCompany;
