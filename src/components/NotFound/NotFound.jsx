import { Link } from "react-router-dom";

export function NotFound() {
    return ( <div>
        <h2>Page not found :(</h2>
        <Link to={'/tweets'} >go to tweets</Link>
        </div>);
};