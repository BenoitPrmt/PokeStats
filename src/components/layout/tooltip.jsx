const Tooltip = ({content}) => {
  return (
    <div
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
                   absolute -bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                   w-24 text-sm shadow text-white font-medium rounded-lg py-1 text-center
                   bg-gradient-to-r from-gradientB via-gradientR">
      {content}
    </div>
  )
}

export default Tooltip;