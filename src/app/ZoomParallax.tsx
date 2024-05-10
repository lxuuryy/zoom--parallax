'use client'
import React from 'react'
import Image from 'next/image'
import  {motion, useScroll, useTransform}  from 'framer-motion'
import Lenis from 'lenis'

type Props = {
    src?: string;
}

function ZoomParallax({ src }: Props) {
    React.useEffect(() => {
        const lenis = new Lenis();
        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);
    const ref = React.useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'] 
    })
    const scale = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale2 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const image = [
        {
            src: '/7.jpeg',
            scale: scale,
            
            width: '25vw',
            height: '25vh'
        },
        {
            src: '/2.jpeg',
            scale: scale4,
            top:'-25vh',
            left: '-34vw',
            width: '35vw',
            height:'30vh'
        },
        {
            src: '/3 (1).jpg',
            scale: scale2,
            top:'-27vh',
            left: '30vw',
            width: '20vw',
            height:'45vh'
        },
        {
            src: '/4 (1).jpg',
            scale: scale4,
            top:'10vh',
            left: '27.5vw',
            width: '25vw',
            height:'25vh'
        },
        {
            src: '/5 (1).jpg',
            scale: scale3,
            top:'31.5vh',
            left: '0vw',
            width: '20vw',
            height:'25vh'
        },
        {
            src: '/6 (1).jpg',
            scale: scale4,
            top: '7.5vh',
            left: '-30.5vw',
            width: '30vw',
            height: '25vh'
        },
        {
            src: '/1.jpeg',
            scale: scale5,
           
            top: '-30.5vh',
            left: '.5vw',
            width: '25vw',
            height: '25vh'
        }
        
    ]

   

    

    
  return (
    <div ref={ref} className='h-[300vh]  '>
        <div className='h-[100vh] sticky top-0 overflow-hidden'>
            {image.map((item, index) => (
                <motion.div style={{scale: item.scale }} key={index} className='absolute w-full h-full flex items-center justify-center '>
                    <div style={{top:item.top, width:item.width, height:item.height, left:item.left}} className='relative w-[25vw] h-[25vh]'  key={index}>
                    <Image src={item.src} layout="fill" objectFit="cover" alt={`this is ${index}`}/>
                    </div>
                </motion.div>))}
            </div>
    </div>
  )
}

export default ZoomParallax