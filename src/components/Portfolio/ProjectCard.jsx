const ProjectCard = ({ project, activeCategory }) => {
    const visible =
        activeCategory === "All" ||
        activeCategory === project.category;

    return (
        <article
            data-category={project.category}
            className={`
        flip-item
        overflow-hidden
        rounded-2xl
        relative
        transition-all
        duration-500

        ${visible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75 pointer-events-none"
                }
      `}
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[4/5] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8">
                <p className="uppercase tracking-[4px] text-xs text-white/70">
                    {project.category}
                </p>

                <h2 className="text-white text-3xl mt-2">
                    {project.title}
                </h2>
            </div>
        </article>
    );
};

export default ProjectCard;