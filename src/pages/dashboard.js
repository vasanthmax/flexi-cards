import React, { useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { FlipCardAll } from '../action/FlipCardAll';
import { NormalCardAll } from '../action/NormalCardAll';
import { PricingCardAll } from '../action/PricingCardAll';

const Dashboard = () => {
  const FlipCardSelector = useSelector(
    (state) => state.flipallReducer.flipcardall?.data
  );
  const NormalCardSelector = useSelector(
    (state) => state.normalallReducer.normalcardall?.data
  );
  const PricingCardSelector = useSelector(
    (state) => state.pricingallReducer.pricingcardall?.data
  );
  const dispatch = useDispatch();

  const actionCreator = () => [
    dispatch(NormalCardAll()),
    dispatch(PricingCardAll()),
    dispatch(FlipCardAll()),
  ];

  useEffect(() => {
    actionCreator();
  }, []);

  console.log(PricingCardSelector);
  console.log(NormalCardSelector);
  console.log(FlipCardSelector);

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
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
    },
  ];

  const data = [];

  if (FlipCardSelector) {
    let fliplenvalue = 0;

    for (let i = 0; i < FlipCardSelector.length; i++) {
      data.push({
        key: i,
        name: FlipCardSelector[i]['_id'],

        age: FlipCardSelector[i]['cardtype'],
        iframe: `http://localhost:3000/${FlipCardSelector[i][
          'cardtype'
        ].toLowerCase()}?id=${FlipCardSelector[i]['_id']}`,
      });
      fliplenvalue++;
    }
  }
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default Dashboard;
