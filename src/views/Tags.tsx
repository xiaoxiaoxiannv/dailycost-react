import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  background:#d9e0eb;
  >li{
    border-bottom: 2px solid #e9e9e9;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
`;
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background:#5673a2;
  border-radius: 4px;
  color: white;
`;

const Center = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`;
function Tags() {
  const{tags,setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
        <li key={tag}>
          <span className='oneLine'>{tag}</span>
          <Icon name='right'/>
        </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>新建标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;