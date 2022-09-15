import {useEffect, useState} from 'react'
import {MainApi} from "../../services/api";
import {Checkbox, Modal, Table} from "antd";
import {ExclamationCircleOutlined,} from "@ant-design/icons"

function RegisteredUsers() {
    const [searchTerm, setSearchTerm] = useState([])
    const [allStudents, setAllStudents] = useState([])

    const handleActivate = (id, bool) => {
        fetch(`${MainApi}/students/checked/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    checked: bool
                }
            )
        }).then(function (res) {
            return res.json();
        })
            .then(function (data) {
                console.log(data);
            })
    }

    const onChange = (e, id) => {
        if (e.target.checked) {
            Modal.confirm({
                centered: true,
                title: "Rostan ham to'lov qilmoqchimisiz?",
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                    handleActivate(id, e.target.checked)
                },
            })
        } else {
            Modal.confirm({
                centered: true,
                title: "Rostan to'lovni bekor qilmoqchimisiz?",
                icon: <ExclamationCircleOutlined/>,
                onOk() {
                    handleActivate(id, e.target.checked)
                },
            })
        }
    };

    useEffect(() => {
        fetch(`${MainApi}/students/all`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAllStudents(data)
            });
    }, [])

    const columns = [
        {
            title: 'Rasm',
            dataIndex: 'bio_img',
            key: 'bio_img',
            render: (text) => <img src={text} alt="yurt" className="imgs"/>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Familiya',
            dataIndex: 'surename',
            key: 'surename',
        },
        {
            title: 'Otasining ismi',
            key: 'father_name',
            dataIndex: 'father_name'
        },
        {
            title: 'Universitet',
            key: 'university',
            dataIndex: 'university'
        },
        {
            title: 'Fakulteti',
            key: 'facultet',
            dataIndex: 'facultet'
        },
        {
            title: 'Darajasi',
            key: 'study_level',
            dataIndex: 'study_level'
        },
        {
            title: 'To\'lov',
            key: 'id',
            render: (values) => {
                return (
                    <Checkbox onChange={e => onChange(e, values?._id)}>To'lov</Checkbox>
                )
            }
        },
    ];

    // console.log(allStudents)
    return (
        <>
            <div className="left_spaced">
                <div class="row pt-5 students_list">
                    <div class="col-xl-12">
                        <div class="card ">
                            <div class="card-body">
                                <div class="box">
                                    <form name="search" className='search_form'>
                                        <input type="text" class="input" name="txt"
                                               onmouseout="document.search.txt.value = ''" onChange={e => {
                                            setSearchTerm(e.target.value)
                                        }}/> <span class="deff">Search</span>
                                    </form>
                                </div>
                                <h4 class="mt-0 mb-4 pt-2">Barcha e`lonlar ro'yhati</h4>
                                <div class="table-responsive mt-5">
                                    <Table scroll={{x: "max-content"}} columns={columns} dataSource={allStudents}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisteredUsers;
