import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-modal',
  styleUrl: 'e-modal.css',
  shadow: true,
})
export class EModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
