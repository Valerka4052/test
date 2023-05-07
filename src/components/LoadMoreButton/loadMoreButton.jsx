
const LoadMoreButton = ({getPage}) => {

    return (
        <button onClick={()=>getPage(3)}>Load more</button>
    );
};
export default LoadMoreButton