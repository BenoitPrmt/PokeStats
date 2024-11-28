const TitleTertiary = ({content, tagColor}) => {
  return (
    <>
      {tagColor ? <span className={`size-4 rounded-full ${tagColor}`}></span> : null}

      <h3 className="uppercase tracking-wide text-2xl font-semibold mb-3">{content}</h3>
    </>
  )
}

export default TitleTertiary;