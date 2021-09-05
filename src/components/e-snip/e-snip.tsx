import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-snip',
  styleUrl: 'e-snip.css',
  shadow: true,
})
export class ESnip {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
