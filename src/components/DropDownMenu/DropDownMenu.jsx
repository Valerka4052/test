export const Dropdown = ({ label, value, options, onChange }) => {
    return (
        <div>
            <label>
                {label}
                <select value={value} onChange={onChange}>
                    {options.map((option, idx) => (
                        <option key={idx} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        </div>
    );
};