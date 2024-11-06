import React from 'react'
import {Link} from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">Would you like to reach out to me? <br className="sm:block hidden"></br>
        Check out the Contact Page!
      </p>
      <Link to="/contact" className="btn">Contact Page</Link>
    </section>
  )
}

export default CTA
