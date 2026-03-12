export default function ProjectCard({
  introTitle,
  intro,
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
      className={`group relative overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-green-500/30 hover:shadow-2xl ${
        featured ? "md:flex md:flex-row-reverse md:min-h-[420px]" : ""
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
                className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:opacity-55"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-900/20 to-transparent" />
            </div>
          ) : (
            <>
              <img
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-900/65 to-zinc-900/20" />
            </>
          )}
        </>
      )}

      {/* CONTENT */}
      <div
        className={`relative flex flex-col justify-end ${
          featured ? "p-10 md:w-1/2" : "p-6"
        }`}
      >
        {featured && (
          <span className="mb-4 inline-block w-fit rounded-full bg-gradient-to-r from-green-500/20 to-zinc-400/20 px-3 py-1 text-xs font-semibold text-green-300 ring-1 ring-green-500/30">
            Featured Project
          </span>
        )}

        {introTitle && (
          <h3
            className={`font-semibold text-white ${
              featured ? "text-2xl" : "text-xl"
            }`}
          >
            {introTitle}
          </h3>
        )}

        {intro && (
          <p
            className={`mt-3 pb-8 leading-relaxed text-white/80 ${
              featured ? "text-base" : "text-sm"
            }`}
          >
            {intro}
          </p>
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
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/10"
            >
              {item}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-block text-sm font-medium text-white/85 transition group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-green-600 group-hover:bg-clip-text group-hover:text-transparent">
          View project →
        </span>
      </div>
    </a>
  );
}