import * as React from 'react';
import { shallow } from 'enzyme';
import { CheckBoxWithLabel } from './checkBoxWithLabel';

test('checkboxwithlabel changes the text after click', () => {
    const checkbox = shallow(<CheckBoxWithLabel labelOn="On" labelOff="Off"/>);
    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');
});