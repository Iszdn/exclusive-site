import React from 'react'
import HeaderSection from '../../components/HomePageComponents/HeaderSection'
import TodaysSection from '../../components/HomePageComponents/TodaysSection'
import CategoriesSection from '../../components/HomePageComponents/CategoriesSection'
import ThisMonthSection from '../../components/HomePageComponents/ThisMonthSection'
import CatMusSection from '../../components/HomePageComponents/CatMusSection'
import OurProductSection from '../../components/HomePageComponents/OurProductSection'
import FeaturedSection from '../../components/HomePageComponents/FeatureSection'
import ServicesSection from '../../components/HomePageComponents/ServicesSection'
import BackToTopButton from '../../components/BackToTop'

const HomePage = () => {
  return (
    <>
    
<HeaderSection/>
<TodaysSection/>
<CategoriesSection/>
<ThisMonthSection/>
<CatMusSection/>
<OurProductSection/>
<FeaturedSection/>
<ServicesSection/>

    </>
  )
}

export default HomePage