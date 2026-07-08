const FilterButton = ({ active, title, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`
      relative
      overflow-hidden
      rounded-full
      border
      px-7
      py-3
      text-sm
      uppercase
      tracking-[3px]
      transition-all
      duration-500

      ${active
                    ? "bg-white text-black border-white"
                    : "border-white/20 text-white hover:border-white"
                }
    `}
        >
            {title}
        </button>
    );
};

export default FilterButton;