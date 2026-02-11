export default function ProjectCard({
  title,
  description,
  stack,
  href,
  image,
  featured = false,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group relative overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-white/10 transition hover:ring-orange-500/25 ${
        featured ? "md:flex md:min-h-[420px]" : ""
      }`}
    >
      {/* IMAGE */}
      {image && (
        <>
          {featured ? (
            <div className="relative md:w-1/2">
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover opacity-80 transition group-hover:opacity-50"
              />
            </div>
          ) : (
            <img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition group-hover:opacity-50"
            />
          )}
        </>
      )}

      {/* CONTENT */}
      <div
        className={`relative flex flex-col justify-end ${
          featured ? "md:w-1/2 p-10" : "p-6"
        }`}
      >
        {featured && (
          <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 px-3 py-1 text-xs font-semibold text-white ring-1 ring-orange-500/30">
            Featured Project
          </span>
        )}

        <h3
          className={`font-semibold text-white ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-3 leading-relaxed text-white/80 ${
            featured ? "text-base" : "text-sm"
          }`}
        >
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white"
            >
              {item}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-block text-sm font-medium text-white/85 transition group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent">
          View project →
        </span>
      </div>
    </a>
  );
}
