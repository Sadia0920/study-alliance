import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import banner from '../assets/banner.jpg'
import SectionTitle from "../shared/SectionTitle";
import SessionCard from "../components/SessionCard";
import TutorCard from "../components/TutorCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";
import PopularCourses from "../components/PopularCourses";
import PremiumAccess from "../components/PremiumAccess";
import ContactUs from "../components/ContactUs";
import { TbEscalatorDown } from "react-icons/tb";
import Testimonials from "../components/Testimonials";

export default function Home(){
  const axiosSecure = useAxiosSecure()
  const { refetch, data: sessions=[] } = useQuery({
      queryKey: ['sessions'],
      queryFn: async()=>{
          const res = await axiosSecure.get('/session')
          return res.data;
      }
  })
    const limit = 6; 
  const limitedCards = sessions.slice(0, limit);

  const uniqueTutors = Object.values(
    sessions.reduce((acc, tutor) => {
      if (!acc[tutor.tutorName]) {
        acc[tutor.tutorName] = {
          tutorName: tutor.tutorName,
          sessionTitle: [],
        };
      }
    acc[tutor.tutorName].sessionTitle.push(tutor.sessionTitle);
      return acc;
    }, {})
 );
//  console.log(uniqueTutors)

    return(
        <div>
        <Helmet>
            <title>Study Alliance | Home</title>
        </Helmet>
        <Cover img={banner} title='Learn Together, Grow Together' text='Join a global community of learners and achieve your goals faster with collaborative study tools, expert resources, and interactive group sessions. Start your journey today!'></Cover>
        
        <SectionTitle subHeading='Online Courses' heading='study session'></SectionTitle>
        <div className='w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-7'>
      {
        limitedCards.map((item,idx) => <SessionCard key={idx} item={item}></SessionCard>)
      }
      </div>

      <div className='text-center'>
      <Link to='/allSession'><p className='text-xl btn border-0 bg-transparent border-b-2 border-[rgb(76,48,161)] text-[rgb(76,48,161)]'>All Session</p></Link>
      </div>
      <SectionTitle subHeading='Subjects' heading='Popular Courses'></SectionTitle>
      <PopularCourses></PopularCourses>
      
      <SectionTitle subHeading='Tutor Details' heading='Tutor Session'></SectionTitle>
      <div className='w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-7'>
      {
        uniqueTutors.map((data,idx) => <TutorCard key={idx} data={data}></TutorCard>)
      }
      </div>
      <SectionTitle subHeading='Testimonials' heading='Success Stories'></SectionTitle>
      <Testimonials></Testimonials>
      <SectionTitle subHeading='premium Access' heading='Unlock Premium Learning'></SectionTitle>
      <PremiumAccess></PremiumAccess>
      <SectionTitle subHeading='contact' heading='Contact Us'></SectionTitle>
      <ContactUs></ContactUs>
      <SectionTitle subHeading='Questions Answers' heading='FAQ Session'></SectionTitle>
      <FAQ></FAQ>
    
        </div>
    )
}