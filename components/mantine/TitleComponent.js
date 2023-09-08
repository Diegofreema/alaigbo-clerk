'use client';
import { Title } from '@mantine/core';
import React from 'react';

const TitleComponent = ({ order, ta, children, fw, color, className }) => {
  return (
    <Title order={order} fw={fw} ta={ta} color={color} className={className}>
      {children}
    </Title>
  );
};

export default TitleComponent;
