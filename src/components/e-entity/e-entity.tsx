import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-entity',
  styleUrl: 'e-entity.css',
  shadow: true,
})
export class EEntity {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
