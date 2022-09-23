import React from 'react'
import tw from 'twin.macro'
import { css } from 'styled-components/macro' //eslint-disable-line
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from '../demo/hero/TwoColumnWithFeaturesAndTestimonial.js'

import Features from '../demo/features/ThreeColWithSideImage.js'
import MainFeature from '../demo/features/TwoColWithTwoHorizontalFeaturesAndButton.js'
import FeatureStats from '../demo/features/ThreeColCenteredStatsPrimaryBackground.js'

import Pricing from '../demo/pricing/TwoPlansWithDurationSwitcher.js'

import Blog from '../demo/blogs/GridWithFeaturedPost.js'

import Testimonial from '../demo/testimonials/TwoColumnWithImageAndRating.js'

import FAQ from '../demo/faqs/SingleCol.js'

import GetStarted from '../demo/cta/GetStartedLight.js'

import Footer from '../demo/footers/FiveColumnWithInputForm.js'

const HighlightedText = tw.span`text-primary-500`

const StyledDiv = tw.div`min-h-screen text-indigo-900 p-8 overflow-hidden`

export default () => {
  return (
    // <AnimationRevealPage>
    <StyledDiv>
      <Hero />
      <FeatureStats />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Features</HighlightedText>
          </>
        }
      />
      <MainFeature
        heading={
          <>
            Cloud built by and for{' '}
            <HighlightedText>Professionals</HighlightedText>
          </>
        }
      />
      <Testimonial
        heading={
          <>
            Our Clients <HighlightedText>Love Us</HighlightedText>
          </>
        }
      />
      <Pricing
        heading={
          <>
            Flexible <HighlightedText>Plans</HighlightedText>
          </>
        }
      />
      <FAQ
        heading={
          <>
            Any <HighlightedText>Questions ?</HighlightedText>
          </>
        }
      />
      <Blog
        subheading="Blog"
        heading={
          <>
            We love <HighlightedText>Writing</HighlightedText>
          </>
        }
      />
      <GetStarted />
      <Footer />
    </StyledDiv>
    // </AnimationRevealPage>
  )
}
