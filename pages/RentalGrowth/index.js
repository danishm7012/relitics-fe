import React from 'react';
import { CSVLink } from "react-csv"
import 'antd/dist/antd.css';
import { Table, Button, Space, Select, message } from 'antd';
import Dashnav from '../../Component/Dashnav';
import Sidebar from '../../Component/SideNavbar';
import GetData from '../../Api/GetData';
import { componentDidMount } from "react"
import { Spin } from 'antd';
import withAuth from "../../Component/Auth"
import PostData from "../../Api/PostData"
import DeleteData from "../../Api/DeleteData"



class Aprecation extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        data: [],
        currentPage: 1,
        totalPages: 1,
        loading: true,
        favourite:[],
    region: true,
    };

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        if (pagination.current !== 1) {
            this.tableData(pagination.current)
        }
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    clearFilters = () => {
        this.setState({ filteredInfo: null });
    };

    clearAll = () => {
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        });
    };

    setStateSort = () => {
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        });
    };
    componentDidMount() {
        this.tableData(1)
    }

    tableData = (pageNo) => {
        const response = GetData.RentalGrowth(pageNo);
        console.log(response)
        response.then(value => {
            console.log('dfgh', value)
            this.setState({
                data: value?.data?.rentalGrowth,
                totalPages: value?.data?.pages,
                loading: false
            })
        })
    }

    print() {
        var content = document.getElementsByClassName('ant-table-content');
        var pri = document.getElementById('ifmcontentstoprint').contentWindow;
        pri.document.open();
        pri.document.write(content[0].innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }
    favourites=()=> {
        const response = GetData.Favourite();
        console.log(response)
        response.then(value => {
            console.log(value)
            this.setState({
              favourite: value?.data?.favoriteRegions
            })
                console.log(value.data.favoriteRegions)
    
            }
     
        //   setLoading(false);
        )}
    
         AddFavourite = (e) => {
          const res = PostData.AddFavouriteCity(e)
          res.then(value => {
              console.log('value', value.data)
              if (value.data.success) {
                  message.success('Added to favourites')
                  this.favourites()
              }
    
          })
              .catch(err => {
                  console.log(err)
              })
      }
    
       DeleteFavrt = (id) => {
        const response = DeleteData.DeleteFavourite(id);
        response.then(value => {
    
            console.log(value)
            if(value){
            message.success('Remove from favourites')
    
            this.favourites()
            }
            //   setLoading(false);
        })
    }

    render() {

        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: 'Region',
                fixed: 'left',
                key: 'region',
                width: '15%',
                // filters: [
                //   { text: 'Joe', value: 'Joe' },
                //   { text: 'Jim', value: 'Jim' },
                // ],
                filteredValue: filteredInfo.name || null,
                // onFilter: (value, record) => record.name.includes(value),
                sorter: (a, b) => a.region.length - b.region.length,
                sortOrder: sortedInfo.columnKey === 'region' && sortedInfo.order,
                ellipsis: true,
                render: (record, text, index) => <div className='d-flex my-auto'>
          <p className='my-auto mx-2'>{record.region}</p>{this.state.favourite.some(el => el.regionID === record._id) ? <img src='./filledHeart.svg' onClick={() => this.DeleteFavrt(record._id)} className='ms-auto my-auto' /> : <img src='./unfilledHeart.svg' onClick={()=>this.AddFavourite(record)}  className='ms-auto' />}
        </div>
            },
            {
                title: 'Overall AVERAGE RENTAL GROWTH',
                width: '15%',
                dataIndex: 'avgGrowth',
                key: 'avgGrowth',
                sorter: (a, b) => a.age - b.AverageRentalGrowth,
                sortOrder: sortedInfo.columnKey === 'AverageRentalGrowth' && sortedInfo.order,
                ellipsis: true,
                fixed: 'left',
                bordered: true,
            },
            {
                title: '2018',
                dataIndex: 'y2018',
                key: 'y2018',
                // filters: [
                //   { text: 'London', value: 'London' },
                //   { text: 'New York', value: 'New York' },
                // ],
                // filteredValue: filteredInfo.2018 || null,
                // onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 2018 && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: '2019',
                dataIndex: 'y2019',
                key: 'y2019',
                // filters: [
                //   { text: 'London', value: 'London' },
                //   { text: 'New York', value: 'New York' },
                // ],
                // filteredValue: filteredInfo.address || null,
                // onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 2019 && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: '2020',
                dataIndex: 'y2020',
                key: 'y2020',
                // filters: [
                //   { text: 'London', value: 'London' },
                //   { text: 'New York', value: 'New York' },
                // ],
                // filteredValue: filteredInfo.address || null,
                // onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 2020 && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: '2021',
                dataIndex: 'y2021',
                key: 'y2021',
                // filters: [
                //   { text: 'London', value: 'London' },
                //   { text: 'New York', value: 'New York' },
                // ],
                // filteredValue: filteredInfo.address || null,
                // onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 2021 && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: '2022',
                dataIndex: 'y2022',
                key: 'y2022',
                // filters: [
                //   { text: 'London', value: 'London' },
                //   { text: 'New York', value: 'New York' },
                // ],
                // filteredValue: filteredInfo.address || null,
                // onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 2022 && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Median RENTAL ',
                dataIndex: 'median',
                key: 'median',
                // filters: [
                //   { text: 'London', value: 'London' },
                //   { text: 'New York', value: 'New York' },
                // ],
                // filteredValue: filteredInfo.address || null,
                // onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Landlord FRIENDLY SCORE',
                dataIndex: 'LLfriendly',
                key: 'LLfriendly',
                // filters: [
                //   { text: 'London', value: 'London' },
                //   { text: 'New York', value: 'New York' },
                // ],
                // filteredValue: filteredInfo.address || null,
                // onFilter: (value, record) => record.address.includes(value),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
                ellipsis: true,
            },
        ];
        return (
            <>
                <div className="d-inline-flex w-100">
                    <Sidebar />
                    <div style={{ width: "inherit" }}>
                        <Dashnav />
                        {/* <div className='container'> */}
                        <div className='container mx-auto mt-3 px-md-5 Table' >
                            <p className='fs-40 Gothic_3D'>Rental Growth</p>
                            <div className='d-flex my-3'>
                                <div className='row w-25 my-auto'>
                                    <div className='d-block col-6'>
                                        <label className='bluetxt fs-13'>State</label>
                                        <select className="form-control form-select form-control-sm" onClick={this.setStateSort}>
                                            <option>All</option>
                                        </select>
                                    </div>
                                    <div className='d-block col-6'>
                                        <label className='bluetxt fs-13'>City</label>
                                        <select className="form-control form-select form-control-sm" onClick={this.setCitySort}>
                                            <option>All</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='ms-auto my-auto'>
                                    <button className='btn bluebtn px-4 fs-14' onClick={this.print}>Print</button>
                                    <CSVLink
                                        filename={"Rental_Growth_Table.csv"}
                                        className='btn bluebtn px-4 fs-14 ms-2'
                                        data={this.state.data}
                                        onClick={() => {
                                            message.success("The file is downloading")
                                        }}
                                    >
                                        Download CSV
                                    </CSVLink>
                                </div>
                            </div>
                            {this.state.loading ? (
                                <div className='text-center mt-5'><Spin /></div>

                            ) : (
                                <>
                                    <div >
                                        {console.log(this.state.data)}
                                        <Table columns={columns}
                                            colors={['#123123', 'rgba(123,123,123,12)']}
                                            averageDuplicates
                                            inferBlanks
                                            pagination={{ pageSize: 10, defaultCurrent: this.state.currentPage, total: this.state.totalPages * 10 }}
                                            dataSource={this.state.data} onChange={this.handleChange}
                                            scroll={{ x: 768 }} />
                                    </div>

                                    <iframe id="ifmcontentstoprint" style={{
                                        height: '100%',
                                        width: '100%',
                                        position: 'absolute',
                                        display: 'none',
                                    }}></iframe>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default withAuth(Aprecation)