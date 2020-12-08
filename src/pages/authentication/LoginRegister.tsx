import React, { useCallback, useEffect, useState } from 'react';
import '../../App.css';
import { Button, Input, Form } from 'antd';
import { useDispatch } from 'react-redux';
import './LoginForm.css';
import {
  fetchLoginUser,
  fetchRegisterUser,
} from '../../redux/actions/user/actions';
import { SubmitBtn } from '../../components/authentication/SubmitBtn';
import { useHistory } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 7 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const LoginRegister = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [nameError, setNameError] = useState('Name is empty');
  const [emailError, setEmailError] = useState('Email is empty');
  const [passwordError, setPasswordError] = useState('Password is empty');

  const [formValid, setFormValid] = useState(false);

  const [formTitle, setTitle] = useState('Login');
  const [loginBtn, setLoginBtn] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    history.push('/login');
    if(emailError || passwordError) setFormValid(false);
    else setFormValid(true);
  }, [emailError, history, passwordError]);

  const login = (e: Event) => {
    e.preventDefault();

    const dataLoginUser = {
      email: email,
      password: password,
    };

    dispatch(fetchLoginUser(dataLoginUser));
  };

  const register = (e: Event) => {
    e.preventDefault();

    const dataRegisterUser = {
      email: email,
      password: password,
      name: name,
    };

    dispatch(fetchRegisterUser(dataRegisterUser));
  };

  const getAction = (value: boolean) => {
    const action = value ? 'reg' : '';
    if (action) {
      setTitle('Register New User');
      setLoginBtn(false);
    } else {
      setTitle('Login');
      setLoginBtn(true);
    }
  };

  const getActionCallback = useCallback(() => {
    getAction(loginBtn);
  }, [loginBtn]);

  const submitBtn = loginBtn ? (
    <SubmitBtn loginRegister={login} value='Enter' formValid={formValid} />
  ) : (
    <SubmitBtn loginRegister={register} value='Register' formValid={formValid} />
  );

  const loginRegister = loginBtn ? (
    <Button onClick={getActionCallback}>Register</Button>
  ) : (
    <Button onClick={getActionCallback}>Login</Button>
  );

  const blurHandler = useCallback((event) => {
    event.persist();
    switch (event.target?.name){
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  }, []);

  const setNameCallback = useCallback((event) => {
    event.persist();
    setName(event.target.value);
    if (/(?=.*[!@#$%^&*,./?'-])/.test(String(event.target.value))) {
      if (!event.target.value.length) setNameError('Name is empty');
      else setNameError('Name incorrect') ;
    }
    else setNameError('');
  }, []);

  const setEmailCallback = useCallback((event) => {
    event.persist();
    setEmail(event.target.value);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(event.target.value).toLowerCase())) {
      if (event.target.value.length) setEmailError('Email incorrect');
      else setEmailError('Email is empty');
    }
    else setEmailError('');
  }, []);

  const setPasswordCallback = useCallback((event) => {
    event.persist();
    setPassword(event.target.value);

    if(!/[0-9a-zA-Z]{6,}/.test(String(event.target.value))){
      setPasswordError('Password length incorrect');
      if(!event.target.value) setPasswordError('Password is empty');
    }
    else if(!/(?=.*[0-9])/.test(String(event.target.value))) setPasswordError('Missing number for password'); 
    else if (!/(?=.*[a-z])/.test(String(event.target.value))) setPasswordError('Missing lowercase symbols for password');
    else if (!/(?=.*[A-Z])/.test(String(event.target.value))) setPasswordError('Missing uppercase symbols for password');
    else setPasswordError('');
  }, []);

  const loginRegusterShow = !loginBtn ? (
    <Form.Item label='Name' name='username'>
      {(nameDirty && nameError) && <h4 className='errorMessage'>{nameError}</h4>}
      <Input type='name' name='name' onBlur={blurHandler} onChange={setNameCallback} value={name} />
    </Form.Item>
  ) : (
    <div></div>
  );

  return (
    <Form className='form' {...layout} name='basic'>
      <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
        <h2>{formTitle}</h2>
      </Form.Item>

      <Form.Item label='Email' name='useremail'>
        {(emailDirty && emailError) && <h4 className='errorMessage'>{emailError}</h4>}
        <Input type='text' onBlur={blurHandler} name='email' onChange={setEmailCallback} value={email} />
      </Form.Item>

      <Form.Item label='Password' name='userpassword'>
        {(passwordDirty && passwordError) && <h4 className='errorMessage'>{passwordError}</h4>}
        <Input
          onBlur={blurHandler}
          name='password'
          type='password'
          onChange={setPasswordCallback}
          value={password}
        />
      </Form.Item>
      {loginRegusterShow}
      <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
        {submitBtn}
      </Form.Item>
      <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
        {loginRegister}
      </Form.Item>
    </Form>
  );
};

export default LoginRegister;
