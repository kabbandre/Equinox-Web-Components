import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-description',
  styleUrl: 'e-description.css',
  shadow: true,
})
export class EDescription {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
