import { Component, Host, h } from '@stencil/core';

@Component({
  styleUrl: 'e-preview.styl',
  tag: 'e-preview',
  shadow: true,
})
export class EPreview {

  private wrapperStyle = () => ({
    height: '100vh',
    width: '100vw',
    background: 'url(/bg.png)',
    backgroundRepeat: 'no-repeat'
  })

  render() {
    return (
      <Host>
        <div style={this.wrapperStyle()}>
          <div class="toolbar">
            EQUINOX
          </div>
          <img src="/logo-outlined.svg" alt="Logo outlined" />
          <img src="/logo.svg" alt="Logo" />
        </div>
      </Host>
    );
  }

}
