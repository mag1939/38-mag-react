export default function ViewToggleButton({onClick, children}) {
    return(
        <button
            onClick={onClick}
            className="px-6 py-3 bg-indigo-600 hover:bg-white hover:text-black text-white rounded-lg shadow-lg text-lg font-semibold transition duration-300 ease-in-out cursor-pointer"
        >
            {children}
        </button>
    )
}