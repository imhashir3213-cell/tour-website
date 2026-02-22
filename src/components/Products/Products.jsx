
import React, { useState } from 'react';
import Card from './Card';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { motion } from 'motion/react';
import gilgit from '../../assets/gilgit.jpg';
import isb from '../../assets/isb.jpg';
import neelum from '../../assets/neelum.jpeg';
import jheel from '../../assets/jheel.jpeg'
import badshahi from '../../assets/badshahi.png'
import naran from '../../assets/naran.jpg'
function Products() {
  const cardsData = [
    { image: gilgit, text: 'Skardu' , detail:'A serene valley with majestic mountains.' ,index:'01'},
    { image: isb, text: 'Islamabad' , detail:'The modern and green capital city.',index:'02'},
    { image: neelum, text: 'Neelum Valley' ,detail:'A lush valley with crystal-clear rivers.',index:'03'},
    { image: jheel, text: 'Jheel Saif-Ul-Malook' , detail:' stunning alpine lake in the mountains.' ,index:'04'},
    {image: badshahi, text: 'Badshahi Mosque' , detail:'A grand Mughal-era architectural wonder.',index:'05'},
    {image: naran, text: 'Naran Kaghan' , detail:'A scenic paradise with lakes and trails.',index:'06'}

  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };
  const visibleCards = [];
  for (let i = 0; i <= 3; i++) {
    visibleCards.push(cardsData[(startIndex + i) % cardsData.length]);
  }

  return (
    <motion.div id='packages' className='h-dvh w-screen' 
     >
      <motion.div className='flex flex-row w-350' initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0  }}
      transition={{ duration: 1, ease: "easeOut" }}>
        <div className='flex flex-col w-360 h-30 justify-center mt-10'>
          <h1 className='font-bold text-xl ml-50'>Popular Destinations</h1>
          <p className='font-semibold text-lg ml-50'>
            Here are the best tourist destinations all across Pakistan
          </p>
        </div>
        <div className='flex flex-row w-100 mt-20 gap-2 ml-80'>
          <FaRegArrowAltCircleLeft
            size={30}
            className='hover:text-blue-400 cursor-pointer'
            onClick={handlePrev}
          />
          <FaRegArrowAltCircleRight
            size={30}
            className='hover:text-blue-400 cursor-pointer'
            onClick={handleNext}
          />
        </div>
      </motion.div>

      <motion.div className='flex gap-10 ml-50 h-100 w-300' initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 , y:0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      >
      
     
      {visibleCards.map((card, index) => (
          <Card key={index} image={card.image} text={card.text} detail={card.detail} index={card.index}/>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Products;
