const title = ({ content, size }) => {

  const sizeClass = size === "small" ? "text-3xl sm:text-5xl" : "text-5xl sm:text-7xl";

  return (
    <h1
      className={"font-custom text-center font-semibold tracking-wide text-black" + sizeClass}>
      {content}
    </h1>
  )
}

export default title;