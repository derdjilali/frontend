const Button = ({ name_btn, padding, handleBtn}) => {
    
    return (
        <button
            className={`text-white rounded-md bg-primary-200 ${padding} 
                hover:bg-primary-200 hover:bg-opacity-20 transition duration-300 ease-in`}
            onClick={handleBtn}>
            {name_btn}
        </button>
    );
}

export default Button;