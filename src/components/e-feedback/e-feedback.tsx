import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-feedback',
  styleUrl: 'e-feedback.css',
  shadow: true,
})
export class EFeedback {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
