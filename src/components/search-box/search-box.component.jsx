

import './search-box.style.css'

const Searchbox=({ClassName,placeholder,onChangeHandler})=>(

    
    <input 
        className={`search-box ${ClassName}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
        
)


export default Searchbox;