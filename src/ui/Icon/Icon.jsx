const ICON_SIZES = {
  primary: {
    width: "40px",
    height: "40px",
  },
  secondary: {
    width: "36px",
    height: "36px",
  },
  tertiary: {
    width: "24px",
    height: "24px",
  },
};

function Icon({ className = "", size = "primary", name = "" }) {
  const iconSize = ICON_SIZES[size] || ICON_SIZES.primary;

  return (
    <svg className={className} style={iconSize}>
      <use xlinkHref={`/icons.svg#${name}`} />
    </svg>
  );
}

export default Icon;
