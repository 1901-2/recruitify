import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import line from '../../assets/line.png';
import sas from '../../assets/sas.png';
import hua from '../../assets/hua.png';
import slider from '../../assets/slider.png';
import product from '../../assets/product.png';
import vk from '../../assets/vk.png';
import a from '../../assets/a.png';
import chanel from '../../assets/chanel.png';
import ea from '../../assets/ea.png';


const Jobs = () => {
  const data = [
    {
      id: 1,
      image: line,
      title: 'Web Developer',
      time: 'Now',
      location: 'Canada',
      desc: 'Builds, designs, and maintains all websites and software applications',
      company: 'Novac Linus Co.',
    },

    {
        id: 2,
        image: sas,
        title: 'UI Designer',
        time: '14Hrs',
        location: 'Manchester',
        desc: 'Builds, designs, and maintains all websites and software applications',
        company: 'Liquid Accessments',
      },

      {
        id: 3,
        image: hua,
        title: 'Software Eng',
        time: '10Hrs',
        location: 'Austria',
        desc: 'Builds, designs, and maintains all websites and software applications',
        company: 'Web Tech Agency',
      },

      {
        id: 4,
        image: slider,
        title: 'Ui/Ux Designer',
        time: '10Hrs',
        location: 'Germany',
        desc: 'Builds, designs, and maintains all websites and software applications',
        company: 'Government',
      },

      {
        id: 5,
        image: product,
        title: 'Product Designer',
        time: 'Now',
        location: 'Manchester',
        desc: 'Builds, designs, and maintains all websites and software applications',
        company: 'Newcastle',
      },

      {
        id: 6,
        image: vk,
        title: 'Researcher',
        time: '5Hrs',
        location: 'Norway',
        desc: 'Builds, designs, and maintains all websites and software applications',
        company: 'Nin Co.',
      },

      {
        id: 7,
        image: chanel,
        title: 'Fashion Designer',
        time: '12Hrs',
        location: 'United Kingdom',
        desc: 'Builds, designs, and maintains all websites and software applications',
        company: 'Chanel',
      },

      {
        id: 8,
        image: a,
        title: 'Lead Developer',
        time: '17Hrs',
        location: 'Leeds',
        desc: 'Builds, designs, and maintains all websites and software applications',
        company: 'Nimeloi-UK',
      },

      {
        id: 9,
        image: ea,
        title: 'Data Scientist',
        time: '2 Days',
        location: 'Turkey',
        desc: 'Builds, designs, and maintains all websites and software applications',
        company: 'Name And Sans',
      },


      
      
  ];

  return (
    <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      {data.map(({ id, image, title, time, location, desc, company }) => {
        return (
          <div
            key={id}
            className="group group-item singleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                {title}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive />
                {time}
              </span>
            </span>
            <h6 className="text-[#ccc]">{location}</h6>

            <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
              {desc}
            </p>

            <div className="company flex items-center gap-2">
              <img src={image} alt="Company-Logo" className="w-[10%]" />
              <span className="text-[14px] py-[1rem] block group-hover:text-white">
                {company}
              </span>
            </div>

            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover:text-white">
              Apply Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
        

            
            
        

    
