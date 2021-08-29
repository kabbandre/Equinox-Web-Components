import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-card',
  styleUrl: 'e-card.styl',
  shadow: true,
})
export class ECard {
  @Prop() backdrop = true
  @Prop() dark: boolean
  @Prop() backdropBlur: "weak" | "medium" | "strong"  = "weak"

  private classes = () => {
    if (this.backdrop) {
      const setting = {
        style: this.dark ? 'dark' : 'light',
        blur: this.backdropBlur
      }
      return {
        [`silicon-${setting.style}-${setting.blur}`]: true,
        'e-card': true
      }
    } else {
      return {}
    }
  }

  render() {
    return (
      <Host>
        <div class={this.classes()}>
          <slot>
            <div style={{
              padding: '16px',
              width: '180px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <e-avatar text="MJ" size="xxl" />
              <div style={{
                display: 'flex',
                marginTop: '17px',
                marginBottom: '9px',
                color: 'white'
              }}>
                <e-icon style={{
                  marginRight: '12px'
                }} icon="ph-eye" />
                0
              </div>
              <div style={{
                color: 'var(--gray-400)'
              }}>
                Yesterday
              </div>
              <div style={{
                color: 'var(--gray-400)'
              }}>
                1:42 PM
              </div>
            </div>
          </slot>
        </div>
      </Host>
    );
  }

}
