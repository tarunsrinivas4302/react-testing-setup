import { renderHook, act } from '@testing-library/react';
import useCounter from './../hooks/useCounter.jsx';
import { expect } from 'vitest';


describe('use Counter', () => {
  test('should render the initial count as 0', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.counter).toBe(0)
  })

  test('should accept and render the same Initial Count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10
      }
    })

    expect(result.current.counter).toBe(10)
  })


  // If I run this below Test it throws an error should like this:: An update to Test Component inside a test was not wrapped in "act()"
  // What is act() ? when writing UI tests like rendering, user-events , or datafetching can be considered as  units of interaction with as user interface . react-dom/test-utils provides a  helper called act() that makes sure all updates related to these units have been processed and applied to DOM before make any assertions 
  test('should Increment the count', () => {
    const { result } = renderHook(useCounter)
    // act(() => result.current.incrementCounter)
    act(() => result.current.incrementCounter());
    expect(result.current.counter).toBe(1)
  })

  test('should decrement the count', () => {
    const { result } = renderHook(useCounter)
    // act(() => result.current.decrementCounter);
    act(() => result.current.decrementCounter());
    expect(result.current.counter).toBe(0);
  })
})

