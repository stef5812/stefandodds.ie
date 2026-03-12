export default function NavButton({ href, children }) {
    return (
      <a
        href={href}
        className="
          relative
          px-6 py-2
          rounded-xl
          text-sm font-medium
          tracking-wide
          text-white/90
          bg-white/5
          border border-white/10
          backdrop-blur-sm
          transition-all duration-300
          hover:text-white
          hover:border-blue-400/60
          hover:bg-blue-500/10
          hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
          hover:scale-105
        "
      >
        {children}
      </a>
    );
  }
  