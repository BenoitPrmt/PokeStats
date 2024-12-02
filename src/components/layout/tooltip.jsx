const Tooltip = ({content}) => {
  return (
    <div
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
                   absolute -bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                   w-24 text-sm shadow-sm text-white font-medium rounded-lg py-2 px-1 text-center
                   bg-gradient-to-r from-gradientB to-gradientR">
      {content}
    </div>
  )
}

export default Tooltip;