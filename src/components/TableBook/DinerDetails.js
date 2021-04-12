import SectionTitle from './SectionTitle';
import AppInput from '../AppInput';

export default function DinerDetails() {
	return (
		<section className="diner-details details-input">
			<SectionTitle>
				<span className="detail-type">2</span> Diner Details
			</SectionTitle>

			<AppInput>Main Diner Name</AppInput>
			<AppInput>Main Diner Cell</AppInput>
			<AppInput>Main Diner Email (optional)</AppInput>
			<button className="btn"> Confirm Table </button>
		</section>
	);
}
