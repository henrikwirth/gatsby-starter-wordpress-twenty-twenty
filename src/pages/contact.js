import React from "react"
import Layout from "../components/Layout"
import ContactForm from '../components/ContactForm'

export default () => (
  <Layout
    bodyClass={`page-template-default page has-no-pagination not-showing-comments footer-top-visible customize-support`}
  >
    <header className="blog-header has-text-align-center header-footer-group">
      <div className="blog-header-inner section-inner medium">
        <h1 className="entry-title">
          Contact Us
        </h1>
      </div>
    </header>
    <div className="contact-page">
      <div className="contact-form">
        <ContactForm />
      </div>
    </div>
  </Layout>
)
