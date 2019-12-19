import React from 'react';
import { mount } from 'enzyme';
import { Header } from './index';
import { MEDIA_TYPES } from '../../constants';

describe('Header', () => {
  let selectedMedia = MEDIA_TYPES[0].value;
  let mockHandler = jest.fn();
  let handler = e => {
    selectedMedia = e;
  };

  it('should render with menus', () => {
    const wrapper = mount(
      <Header
        mediaTypes={MEDIA_TYPES}
        selectedMedia={selectedMedia}
        onMediaChange={mockHandler}
      />
    );
  });

  it('should call handler when Media Change', () => {
    const wrapper = mount(
      <Header
        mediaTypes={MEDIA_TYPES}
        selectedMedia={selectedMedia}
        onMediaChange={mockHandler}
      />
    );
    wrapper.children().debug();
    wrapper
      .find(`[data-test-id='menu-movie']`)
      .first()
      .simulate('click');
    expect(mockHandler).toBeCalled();
  });

  it('should change selected menu item', () => {
    const wrapper = mount(
      <Header
        mediaTypes={MEDIA_TYPES}
        selectedMedia={selectedMedia}
        onMediaChange={handler}
      />
    );
    wrapper
      .find(`[data-test-id='menu-music']`)
      .first()
      .simulate('click');
    expect(selectedMedia).toEqual('music');
  });
});
