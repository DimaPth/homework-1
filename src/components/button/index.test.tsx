/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from '.';

describe('Button', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Button />, container);
    });
    expect(container?.innerHTML).toBeDefined();
  });

  it('render with children', () => {
    act(() => {
      render(<Button>Push me</Button>, container);
    });
    expect(container?.textContent).toBe('Push me');
  });

  it('render with props color = "yellow", size = "small", fullwidth, onClick', () => {
    act(() => {
      render(
        <Button color="yellow" size="small" fullWidth onClick={() => {}}>
          Push me
        </Button>,
        container,
      );
    });
    expect(container?.innerHTML).toBeDefined();
    expect(container?.querySelector('button')).not.toBeNull();
  });
});
