import Button from './components/Button';

function App() {
	return (
		<div
			style={{
				boxSizing: 'border-box',
				textAlign: 'center',
			}}
		>
			<h1>Differnet Buttons</h1>
			<Button varient='contained' color='primary'>
				Primary Button
			</Button>
			<Button varient='contained' color='red'>
				Danger Button
			</Button>
			<Button varient='contained' color='warning'>
				Warning Button
			</Button>
			<Button varient='default'>Default Button</Button>
			<Button varient='dashed'>Dashed Button</Button>
			<Button varient='text'>Text Button</Button>
			<Button varient='link'>Link Button</Button>
		</div>
	);
}

export default App;
