import React from "react"
import Image from "gatsby-image"

export default ({
  alt,
  localFile: {
    childImageSharp: { fluid },
  },
}) => <Image fluid={fluid} alt={alt} />
