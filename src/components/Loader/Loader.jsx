
import { ColorRing } from 'react-loader-spinner';
import {Container} from './Loader.styled'
const Loader = () => {
    return (
        <Container>
            <ColorRing
                visible={true}
                height="380"
                width="380"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </Container>
    );
};
export default Loader;