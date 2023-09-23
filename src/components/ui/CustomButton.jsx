const CustomButton = ({ title, handleBtn, css}) => {
    
    return (
        <button
            className={`bg-gradient-to-r from-[#F6B027] to-[#B27600] text-white rounded-full font-medium ${css} 
                hover:bg-primary-200 hover:bg-opacity-20 transition duration-300 ease-in cursor-pointer`}
            onClick={handleBtn}>
            {title}
        </button>
    );
}

export default CustomButton;