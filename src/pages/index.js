import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/pages/landing/hero'
import Publications from '../components/reuse/publications/publicatons'
import TableDesc from '../components/pages/landing/table-desc'
import Pathways from '../components/reuse/pathways/pathways'
import TestimonialsLanding from "../components/pages/landing/testimonials-landing"
import MarkQaulity from "../components/reuse/mark-qaulity/mark-qaulity"
import QouteCoursesBanner from '../components/pages/landing/qoute-courses-banner'
import WhereOurGraduatesWork from '../components/reuse/where-our-graduates-work-banner/where-our-graduates-work'
const IndexPage = () => (
  <Layout 

  >
    <SEO title="Home" />

   <Hero />
   <TableDesc />
   <Publications />
   <Pathways />
   <TestimonialsLanding />
   <MarkQaulity />
   <QouteCoursesBanner />
   <WhereOurGraduatesWork />
  </Layout>
)

export default IndexPage
