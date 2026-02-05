export default function ProjectCard({ title, description, stack, href, image }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-3xl bg-zinc-900 ring-1 ring-white/10 transition hover:ring-orange-500/25"
    >
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40 transition group-hover:opacity-50"
        />
      )}

      <div className="relative flex h-full flex-col justify-end p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-3 text-sm leading-relaxed text-white/80">
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

        <span className="mt-5 inline-block text-sm font-medium text-white/85 transition group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-emerald-400 group-hover:bg-clip-text group-hover:text-transparent">
          View project →
        </span>
      </div>
    </a>
  );
}
