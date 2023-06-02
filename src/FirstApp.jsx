//props son las propiedades o atributos a las funciones 
import PropTypes  from "prop-types"; 
export const FirstApp = ({title}) =>{
    
    return (
    <>
    <p>First app with React Bitches</p>
    </>
    )
}

   //PropTypes 
FirstApp.propTypes ={

    title: PropTypes.string.isRequired
}

FirstApp.defaultProps={
    title:'no ha llegado el titulo todavia'
}