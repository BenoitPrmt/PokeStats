const title = ({ content, size }) => {

  const sizeClass = size === "small" ? "text-3xl sm:text-5xl" : "text-5xl sm:text-7xl";

  return (
    <h1
      className={"md:text-start gradient-red bg-clip-text font-semibold text-transparent tracking-wide" + sizeClass}>
      {content}
    </h1>
  )
}

export default title;