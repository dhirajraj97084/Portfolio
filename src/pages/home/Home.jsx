import React from 'react'
import Layout from '../../component/layout/Layout'
import Hero from '../../component/hero/Hero'
import Abot from '../../component/abot/Abot'
import Projt from '../../component/projt/Projt'
import Skills from '../../component/skills/Skills'



function Home() {
  return (
    <Layout>
      <Hero/>
     <Abot/>
     <Skills/>
     <Projt/>      
    </Layout>
  )
}

export default Home
