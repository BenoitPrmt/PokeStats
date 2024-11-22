const title = ({content}) => {
  return (
    <h1
      className="md:text-start bg-gradient-to-r from-gradientB via-gradientR bg-clip-text text-5xl font-semibold
          text-transparent sm:text-7xl tracking-wide">
      {content}
    </h1>
  )
}

export default title;