import Image from 'next/image'

function Logo({ src, alt, width, height, classes }) {
  return <Image src={src} alt={alt} width={width} height={height} className={classes} priority />
}

export default Logo
