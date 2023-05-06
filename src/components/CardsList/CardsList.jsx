import Card from "../Card/Card"
import {List} from './CardsList.styled'

const CardsList = ({users}) => {
    if (!users) return;
    return (
        <List>
            {users.map((item) => {
                return <Card key={item.id}
                    user={item}
                     />
            })}
        </List>
        
    );
}
export default CardsList