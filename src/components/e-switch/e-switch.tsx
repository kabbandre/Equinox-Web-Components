import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-switch',
  styleUrl: 'e-switch.css',
  shadow: true,
})
export class ESwitch {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
