import { render, screen,fireEvent, cleanup } from '@testing-library/react';
import React from 'react';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Basic from './test_components/Basic';
import Counter from './test_components/Counter';



  Enzyme.configure({ adapter: new Adapter() })

  it('renders correctly enzyme', () => {
    const wrapper = shallow(<Basic />)
  
    expect(toJson(wrapper)).toMatchSnapshot();
  });


describe('Testing sum', () => {
    function sum(a, b) {
       return a + b;
    }

    it('should equal 4',()=>{
       expect(sum(2,2)).toBe(4);
      })

    test('also should equal 4', () => {
        expect(sum(2,2)).toBe(4);
      }) 
});



test('the increment method increments count', () => {
  const wrapper = shallow(<Counter />)

  expect(wrapper.instance().state.count).toBe(0)

   //wrapper.find('button.counter-button').simulate('click')
   //wrapper.setState({count: 1})
  wrapper.instance().increment()
  expect(wrapper.instance().state.count).toBe(1)
})

test('the increment method increments count using click button', () => {
  const wrapper = shallow(<Counter />)

  expect(wrapper.instance().state.count).toBe(0)

   wrapper.find('button.counter-button').simulate('click')
   wrapper.setState({count: 1})
  
  expect(wrapper.instance().state.count).toBe(1)
})