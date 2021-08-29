import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-textarea',
  styleUrl: 'e-textarea.css',
  shadow: true,
})
export class ETextarea {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
