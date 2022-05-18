import React, { useContext, useState } from 'react'
import { Button, Col, Input, Row, Select } from 'antd';
import Context from '../context'

const Navbar = () => {
    let { setApiURL,  RANDOM_USER_API, setFilter, filter, setCurrentPage } = useContext(Context);
    const [inputValue, setInputValue] = useState('')
    const [dropdownValue, setDropdownValue] = useState(null)
    const { Option } = Select;
    const onChange = e => {
        setFilter(prev => {
            return {
                ...prev,
                keyword: `&keyword=${e.target.value}`,
                page: `&page=1`,
                pageSize: `&pageSize=10`,
            }
        })
        setInputValue(e.target.value)
    };
    const handleChange = (input) =>  {
        setFilter((prev) => {
            return {
                ...prev,
                gender: `&gender=${input.value}`,
                page: `&page=1`,
                pageSize: `&pageSize=10`,
            }
        })
        setDropdownValue(input)
    }
    const handleClick = () => {
        let parse = ''
        for(let element in filter) {
            if(filter[element]) {
                parse += filter[element]
            }
        }
        setCurrentPage(1)
        const result = RANDOM_USER_API + parse
        setApiURL(result)
    }

    return (
        <Row>
            <Col span={6}>
                <Input
                    placeholder="Search..."
                    onChange={onChange}
                    value={inputValue}
                />
            </Col>
            <Col span={2}>
                <Button onClick={handleClick}>Search</Button>
            </Col>
            <Col span={6}>
                <Select
                    labelInValue
                    style={{ width: 130 }}
                    placeholder="Select gender"
                    onChange={handleChange}
                    value={dropdownValue}
                >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                </Select>
                <Button onClick={handleClick}>Filter</Button>
                <Button onClick={() => {
                    setInputValue('')
                    setDropdownValue(null)
                    setApiURL(RANDOM_USER_API)
                }}>Reset Filter</Button>
            </Col>
        </Row>   
    )
}

export default Navbar