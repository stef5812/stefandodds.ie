export default function NavImageButton({
    href,
    label,
    img,
    imgHover,
  }) {
    return (
      <a
        href={href}
        aria-label={label}
        className="group relative inline-flex items-center justify-center"
      >
        {/* Default image */}
        <img
          src={img}
          alt={label}
          className="h-11 w-auto transition-opacity duration-200 group-hover:opacity-0"
          draggable="false"
        />
  
        {/* Hover image */}
        <img
          src={imgHover}
          alt=""
          className="pointer-events-none absolute inset-0 h-11 w-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          draggable="false"
        />
      </a>
    );
  }
  