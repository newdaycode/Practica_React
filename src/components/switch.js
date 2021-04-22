import React, { useRef} from 'react';
import './../assets/css/switch.css';


function Switch ({setDarkMode, checked, setCheckend}){
	const ref = useRef(null)

	function handleChange(){
		setCheckend(ref.current.checked)
		setDarkMode(ref.current.checked)

	}

	return (
		<React.Fragment>
          <div className="dark-mode" >
            <p className="dark-mode-total">Dark Mode</p>
            <input ref={ref} onChange={handleChange} type="checkbox" checked={checked} className="checkbox" id="checkbox"/>
            <label className="switch" htmlFor="checkbox"></label>
          </div>
		</React.Fragment>
			
	);

}


export default Switch;