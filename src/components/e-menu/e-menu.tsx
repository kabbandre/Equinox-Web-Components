import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-menu',
  styleUrl: 'e-menu.css',
  shadow: true,
})
export class EMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
