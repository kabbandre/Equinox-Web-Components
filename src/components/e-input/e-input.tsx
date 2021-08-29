import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-input',
  styleUrl: 'e-input.css',
  shadow: true,
})
export class EInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
