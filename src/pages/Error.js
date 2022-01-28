import { Link } from 'react-router-dom'
import leo from '../images/leo2.gif'

export default function Error() {
	return (
		<section className='warning-page section'>
			<div className='warning-container'>
				<h1 className='alert'>Ops! It's a dead end</h1>
				<img src={leo} alt='go home' />
				<Link to='/' className='btn btn-primary'>
					Back home
				</Link>
			</div>
		</section>
	)
}
