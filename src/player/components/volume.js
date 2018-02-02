import React from  'react';
import VolumenIcon from '../../icons/components/volumen.js';
import './volume.css';

const Volume = props => {
	return(
		<div
			className="Volume"
		>
			<div>
				<VolumenIcon
					color="#3BADE3"
					size={25}
				/>
				<div className="Volume-range">
					<input 
						step={.05}
						type="range"
						min={0}
						max={1}
						onChange={props.handleVolumeChange}
					/>
				</div>
			</div>
		</div>
	)
}

export default Volume;