import React, {useState} from 'react';
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";

const SearchBar = (props) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSearch = () => {
        const regexp = new RegExp(value, 'i');
        const result = props.data.filter((elem) =>
            regexp.test(elem.title + elem.id)
        );
        props.setData(result);

    }

    return (
        <div>
            <Input onChange={(e)=> handleChange(e)} placeholder="Search"/>
            <Button onClick={handleSearch} title = 'Search' />
        </div>
    )
};

export default SearchBar;