import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import banner from '../assets/banner.jpg'

export default function Home(){
    return(
        <div>
        <Helmet>
            <title>Study Alliance | Home</title>
        </Helmet>
        <Cover img={banner}></Cover>
        </div>
    )
}