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

  it('render with props color = "yellow"', () => {
    act(() => {
      render(<Button color="yellow">Push me</Button>, container);
    });
    expect(container?.innerHTML).toBeDefined();
    expect(container?.querySelector('button.yellow')).not.toBeNull();
  });

  it('render with props size = "small"', () => {
    act(() => {
      render(<Button size="small">Push me</Button>, container);
    });
    expect(container?.innerHTML).toBeDefined();
    expect(container?.querySelector('button.small')).not.toBeNull();
  });

  it('render with props fullWitdh', () => {
    act(() => {
      render(<Button fullWidth>Push me</Button>, container);
    });
    expect(container?.innerHTML).toBeDefined();
    expect(container?.querySelector('button.fullWidth')).not.toBeNull();
  });
});
