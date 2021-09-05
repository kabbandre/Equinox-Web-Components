import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-scroll',
  shadow: true,
})
export class EScroll {
  render() {
    return (
      <Host>
        <div style={{ maxHeight: '200px', overflow: 'auto' }} class="e-scroll">
          <slot />
        </div>
      </Host>
    );
  }
}
