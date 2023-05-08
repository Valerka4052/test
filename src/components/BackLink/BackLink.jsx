import { Link } from "./BackLink.styled";
const BackLink = ({locationState}) => {
    return (
        <div><Link to={locationState}>Back</Link></div>
        
    );
};
export default BackLink;