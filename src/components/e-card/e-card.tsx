import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-card',
  styleUrl: 'e-card.styl',
  shadow: true,
})
export class ECard {
  @Prop({ reflect: true }) backdrop = true
  @Prop({ reflect: true }) dark: boolean
  @Prop({ reflect: true }) backdropBlur: "weak" | "medium" | "strong"  = "weak"

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
          <slot />
        </div>
      </Host>
    );
  }

}
