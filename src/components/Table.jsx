import React, { useEffect, useContext, useState} from 'react'
import {Table as Datatable, Image} from 'antd'
import Context from '../context'

const Table = () => {
  const { data, setData, columns, setColumns, loading, setLoading, apiURL, setApiURL, RANDOM_USER_API, setFilter, filter, setCurrentPage, currentPage} = useContext(Context);
  const renderDate = (date) => {
      return new Date(date).toUTCString()
  }

  const renderElement = (row, element) => {
      const {dob, id, location, login, name, picture, registered} = row
      switch(element) {
        case 'dob':
            return renderDate(dob.date)
        case 'id':
            return id.name;
        case 'location':
            return `${location.street.name} ${location.street.number}, ${location.city}, ${location.state}, ${location.country}`
        case 'login':
            return login.username;
        case 'name':
            return `${name.title} ${name.first} ${name.last}`
        case 'picture':
            return <Image src={picture.thumbnail}/>
        case 'registered':
            return renderDate(registered.date)
        default:
            return row[element]
      }
  }

  const getData = async ( ) => {
        const arrColumn = []
        const response = await fetch(apiURL)
        const result = await response.json()
        if(result) {
            const {results} = result 
            for(let element in results[0]) {
                arrColumn.push({
                    title: element,
                    dataIndex: element,
                    key: element,
                    show: true,
                    render: (_, row) => renderElement(row, element),
                    sorter: true
                })
            }
            setColumns(arrColumn)
            setData(result?.results)
            setLoading(false)
        }
    }

  useEffect(() => {
    setLoading(true)
    getData()
  }, [apiURL])

  const handleSort = (sorter, pagination) => {
    let data = {}
    setFilter((prev) => {
        data = {
            ...prev,
            sortBy: sorter.order ? `&sortBy=${sorter.field}` : '',
            sortOrder: sorter.order ? `&sortOrder=${sorter.order}` : '',
            page: `&page=${pagination.current}`,
            pageSize: `&pageSize=${pagination.pageSize}`,
        }
        return data
    })
    setCurrentPage(pagination.current)
    let parse = ''
        for(let element in data) {
            if(data[element]) {
                parse += data[element]
            }
        }
    const result = RANDOM_USER_API + parse
    setApiURL(result)
  }

  return (
          <Datatable 
          columns={columns} 
          dataSource={data} 
          loading={loading} 
          onChange={(pagination, _, sorter) => handleSort(sorter, pagination)}
          pagination={{current: currentPage, showSizeChanger: false}}
          />
  )
}

export default Table