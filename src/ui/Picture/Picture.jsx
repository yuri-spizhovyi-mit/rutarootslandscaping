function Picture({
  mediaSizes = "",
  srcSets = [],
  src = "",
  alt = "",
  className = "",
  style = {},
}) {
  return (
    <picture>
      {srcSets.map((srcSet, index) => {
        if (index === srcSets.length - 1) return null;
        return (
          <source
            srcSet={srcSet}
            media={`(max-width:${mediaSizes.at(index)}px)`}
            key={index}
          />
        );
      })}
      <img
        className={className}
        src={src || srcSets.at(-1)}
        alt={alt}
        style={style}
      />
    </picture>
  );
}

export default Picture;
