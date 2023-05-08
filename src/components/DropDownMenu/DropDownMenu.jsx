
import {Container,Label,Select,Option} from './DropDownMenu.styled'
export const Dropdown = ({ label, value, options, onChange }) => {
    return (
        <Container>
            <Label>
                {label}   
                <Select value={value} onChange={onChange}>
                    {options.map((option, idx) => (
                        <Option key={idx} value={option.value}>{option.label}</Option>
                    ))}
                </Select>
            </Label>
        </Container>
    );
};