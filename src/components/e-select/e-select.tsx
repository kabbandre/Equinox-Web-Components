import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-select',
  styleUrl: 'e-select.css',
  shadow: true,
})
export class ESelect {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
