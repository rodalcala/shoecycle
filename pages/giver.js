import { withApollo } from './../lib/apollo';
import ShoeForm from './../components/ShoeForm';

const Giver = () => <ShoeForm />;

export default withApollo(Giver);
