import { Button } from 'antd';
import React from 'react';

export const SubmitBtn = ({ loginRegister, value, formValid }: any) => {
  return (
    <Button type='primary' onClick={loginRegister} disabled={!formValid}>
        {value}
    </Button>
  );
};
