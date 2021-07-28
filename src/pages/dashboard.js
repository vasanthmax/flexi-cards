import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { FlipCardAll } from '../action/FlipCardAll';
import { FlexiApiDelete } from '../action/FlipDelete';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();

  const [deletelinkid, setDeleteLinkid] = useState('');
  const [deletecardtype, setDeletecardtype] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (keyvalue, cardtype) => {
    console.log(keyvalue);
    setDeleteLinkid(keyvalue);
    setDeletecardtype(cardtype);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log(deletelinkid);
    dispatch(FlexiApiDelete(deletelinkid, deletecardtype));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const FlipCardSelector = useSelector(
    (state) => state.flipallReducer.flipcardall[0]
  );
  const NormalCardSelector = useSelector(
    (state) => state.flipallReducer.flipcardall[1]
  );
  const PricingCardSelector = useSelector(
    (state) => state.flipallReducer.flipcardall[2]
  );
  const cardDelete = useSelector((state) => state.flipdeleteReducer.flip?.data);
  console.log(cardDelete);
  useEffect(() => {
    dispatch(FlipCardAll());
  }, [dispatch, cardDelete]);

  let MixedArray = [];
  if (FlipCardSelector && PricingCardSelector && NormalCardSelector) {
    MixedArray = [
      ...FlipCardSelector,
      ...PricingCardSelector,
      ...NormalCardSelector,
    ];
  }
  const columns = [
    {
      title: 'CARD_ID',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'CARD_TYPE',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'IFRAME_LINK',
      dataIndex: 'iframe',
      key: 'iframe',
      render: (text) => <a href={text}>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: (text) => <div>{text}</div>,
    },
  ];

  const data = [];
  if (FlipCardSelector && PricingCardSelector && NormalCardSelector) {
    for (let i = 0; i < MixedArray.length; i++) {
      const keyvalue = MixedArray[i]['_id'];
      data.push({
        key: i,
        name: MixedArray[i]['_id'],

        age: MixedArray[i]['cardtype'],
        iframe: `http://localhost:3000/${MixedArray[i][
          'cardtype'
        ].toLowerCase()}?id=${MixedArray[i]['_id']}`,
        action: (
          <div>
            <button
              style={{
                background: 'none',
                border: 'none',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              onClick={() => showModal(keyvalue, MixedArray[i]['cardtype'])}
            >
              <DeleteFilled style={{ fontSize: '20px', marginRight: '10px' }} />
            </button>
            <Link
              to={`update/${MixedArray[i]['cardtype']}?id=${keyvalue}&sheet=${MixedArray[i]['sheetid']}`}
              style={{ textDecoration: 'none' }}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => showModal(keyvalue, MixedArray[i]['cardtype'])}
              >
                <EditFilled
                  style={{
                    fontSize: '20px',
                    color: '#000',
                    marginLeft: '10px',
                  }}
                />
              </button>
            </Link>

            <Modal
              title='Delete'
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Do you want to Delete the Card ?</p>
            </Modal>
          </div>
        ),
      });
    }
  }
  return (
    <div className='dashboard' style={{ fontFamily: 'Poppins' }}>
      <h1>Dashboard</h1>
      <div className='button-flex'>
        <a href='http://localhost:3000/userarea'>
          <button className='addnew'>Add New</button>
        </a>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default Dashboard;
