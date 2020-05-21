import React from "react"
import Image from "gatsby-image"
import './styles.css'

export default ({
  alt,
  align,
  sizeSlug,
  className,
  localFile: {
    childImageSharp,
  },
}) => {
  if ( 'full' === sizeSlug ) {
    return <Image fluid={childImageSharp?.fluid} alt={alt} className={`${className ? className : ''} align-${align}`} />
  }

  if ( childImageSharp[sizeSlug] ) {
    return <Image fluid={childImageSharp[sizeSlug]} alt={alt} className={`${className ? className : ''} align-${align}`} />
  }

  return null;
}
