import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-fieldtree',
  styleUrl: 'e-fieldtree.css',
  shadow: true,
})
export class EFieldtree {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
