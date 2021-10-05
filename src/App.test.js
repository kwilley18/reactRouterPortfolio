import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme'
import { isTypedArray } from 'util/types';
import { hasUncaughtExceptionCaptureCallback } from 'process';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/ 

it('Project button is rendered', () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('[data-test="project-button"]')

  button.simulate('click')

  expect(button.length).toBe(1); 
})

it('Contact button is rendered', () => {
  const wrapper = shallow(<App />)
  const button = wrapper.find('[data-test="contact-button"]')

  button.simulate('click')

  expect(button.length).toBe(1); 
})
 