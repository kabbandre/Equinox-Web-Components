import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-collapse',
  styleUrl: 'e-collapse.css',
  shadow: true,
})
export class ECollapse {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
