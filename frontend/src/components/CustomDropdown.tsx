import CustomTitle from "./CustomTitle"

type Option = {
  value: string;
  label: string;
};

type CustomDropdownProps = {
  title: string;
  options: Option[];
  onSelect: (value: string) => void;
};

function CustomDropdown({ title, options, onSelect }: CustomDropdownProps) {
  return (
    <div className="bg-blue-500 rounded-sm p-4">
        
        <CustomTitle title={title} />
        <select
            className="w-full p-1 shadow-md rounded bg-white text-black dark:bg-gray-700 dark:text-white"
            onChange={(e) => onSelect(e.target.value)}
        >

        {options.map(({ value, label }) => (
            <option key={value} value={value}>
            {label}
            </option>
        ))}

        </select>
    </div>
  );
}

export default CustomDropdown;
