import { Tag } from 'interface/lecture';
import React from 'react';

interface Props {
  tagListData: Tag[];
}

const TagList = ({ tagListData }: Props) => {
  const tagList = tagListData.map((tag) => {
    return <span key={tag.id}>{tag.name}</span>;
  });

  return <div>{tagList}</div>;
};

export default TagList;
