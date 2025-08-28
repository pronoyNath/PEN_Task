import { Tabs } from 'antd';
import AllContent from './AllContent';
import Branding from './Branding';
const onChange = key => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'All',
    children: <AllContent/>,
  },
  {
    key: '2',
    label: 'Branding',
    children: <Branding/>,
  },
  {
    key: '3',
    label: 'Web Design',
    children: <AllContent/>,
  },
  {
    key: '4',
    label: 'Digital Marketing',
    children: <Branding/>,
  },
];
const RecentProjectsTabs = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default RecentProjectsTabs;