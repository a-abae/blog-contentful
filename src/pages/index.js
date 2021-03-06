import * as React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'
import "typeface-montserrat";

import Layout from "../components/layout"
import SEO from "../components/seo"

import VideoBanner from '../components/video-banner'
import FormTypeA from "../components/form-typeA"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="The Edge Treatment Center is an Orange County, CA-based addiction rehab center committed to providing the necessary tools for long-term drug and alcohol recovery for you or your loved one." />

    <div className="hide-on-mobile">
      <VideoBanner src="https://videos.ctfassets.net/tfksgh4ee5k6/M9gC1IZcgNvQLTyKdtDmN/b2f55cd5567e65184699557009ef966f/Website_Header_No_Sound_New_Text.mp4" type="video/mp4" />
    </div>
    <div className="show-on-mobile">
      <VideoBanner src="https://videos.ctfassets.net/tfksgh4ee5k6/5sgYecHynlCGei5e6YUU88/60f465459ca49cd8d8d1f7ff114e71a0/Website_Header_Mobile.mp4" type="video/mp4" />
    </div>

    <div className="wrapper">
      <div>
        <h1 className="text-center">
          Orange County Drug and Alcohol Treatment Center
        </h1>
        <h3 >
          The Edge Treatment Center is an Orange County, CA&#8209;based addiction rehab center committed to providing the necessary tools for long&#8209;term drug and alcohol recovery for you or your loved&nbsp;one.
        </h3>
      </div>

      <div>
        <h4>Get in touch</h4>
        <FormTypeA />
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque dolor et eros scelerisque porta. Donec consectetur tellus id semper fringilla. Aenean tristique lacus magna. Nulla ullamcorper finibus dui, nec maximus eros luctus non. Nullam semper finibus tortor, non sagittis dui rhoncus tempor. Proin faucibus nibh et risus laoreet, nec mattis est tincidunt. Suspendisse at efficitur tellus. Suspendisse tincidunt, dolor eu vehicula congue, nibh velit mattis sapien, quis ultrices mauris magna sit amet lacus. Cras egestas nulla nisl, vitae tincidunt ex convallis bibendum. Quisque in egestas massa. Nullam urna felis, tempus nec fringilla in, gravida eu risus. Vestibulum pellentesque eget felis eget accumsan.
        </p>
        <p>
          Ut a bibendum urna. Morbi volutpat lorem congue semper egestas. Donec malesuada libero ac diam congue, eu malesuada lectus dapibus. Duis vestibulum, nulla non maximus eleifend, ante nulla molestie enim, sed finibus eros tortor non mi. Proin faucibus molestie facilisis. Phasellus id mi ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris lobortis ante volutpat hendrerit faucibus. Mauris ultricies mollis justo, at hendrerit metus gravida quis. Pellentesque vel neque tellus. Duis a erat metus.
        </p>
        <p>
          Praesent vestibulum urna vitae convallis luctus. Quisque auctor tristique tincidunt. Morbi vestibulum, orci vel sollicitudin placerat, dolor mauris feugiat eros, in vestibulum velit tellus nec sem. Fusce consectetur consectetur massa, eu maximus velit porttitor a. Praesent eget ligula facilisis, condimentum lacus a, aliquet augue. Proin vel suscipit purus. Integer neque ipsum, pellentesque id pharetra ut, tempus vitae metus. Suspendisse ac lacus fringilla, hendrerit arcu nec, scelerisque neque. Curabitur sodales, libero sit amet blandit rutrum, erat nisl iaculis lectus, feugiat aliquet diam augue eget velit. Vestibulum porta, sapien a posuere dapibus, libero purus porta risus, sed lacinia nisl justo et velit.
        </p>
        <p>
          Fusce massa mauris, lobortis vel urna vel, posuere finibus magna. Pellentesque ornare nisi a orci vulputate, in cursus elit feugiat. Proin placerat consequat lectus ac convallis. Suspendisse leo nisl, tincidunt et massa in, vehicula feugiat augue. Nullam condimentum, quam vel viverra tincidunt, nunc risus interdum elit, vel pulvinar augue mauris at nulla. Nulla quis egestas ipsum, nec ultrices libero. Fusce justo arcu, vehicula sollicitudin molestie vitae, porta vitae nisi. Duis mollis imperdiet libero, sed laoreet est condimentum non. Praesent ac libero vestibulum nisl lacinia convallis. Vivamus maximus lorem sapien, eu aliquam erat iaculis in.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
