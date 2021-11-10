import { useState } from "react";

const Inicio = () => {
		const [ contador, setContador ] = useState(0);
	return (
		<div className="container">
		<div className="d-flex justify-content-center my-3">
			
		<button
			onClick={() => setContador(contador - 1)}
			type="button" className="btn btn-outline-light">
			<i className="bi bi-cloud-minus-fill btn-lg text-info"></i>
			</button>

		<p className="display-1 fw-bold">{ contador }</p>

		<button 
		onClick={() => setContador(contador + 1)}
		type="button" className="btn btn-outline-light">
		<i className="bi bi-cloud-plus-fill btn-lg text-info"></i>
		</button>	

		</div>
		</div> );
}
 
export default Inicio;