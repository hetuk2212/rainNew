 import React from 'react'
import Carousel from './public/components/Carousel'
import PlanSlider from './public/components/PlanSlider'
import ServiceCards from './public/components/ServiceCards'
import TeamMember from './public/components/TeamMember'
import EInvoicingCard from './public/components/EInvoicingCard'
import DocumentUnderstanding from './public/components/DocumentUnderstanding'
 
 const Home = () => {
   return (
     <div>
     <Carousel />
        <PlanSlider />
        <ServiceCards />
        <TeamMember />
        <EInvoicingCard />
        <DocumentUnderstanding />
     </div>
   )
 }
 
 export default Home