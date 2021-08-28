import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-icon',
  styleUrl: 'e-icon.css',
  shadow: true,
})
export class EIcon {
  /**
   * Icon from Phosphor Icons library
   */
  @Prop() icon: string = "ph-smiley"
  /**
   * Color of the icon
   */
  @Prop() color: string
  /**
   * Size of the icon
   */
  @Prop() size: string = "16px"

  render() {
    const { color, size: fontSize } = this
    return (
      <Host>
        <i class={this.icon} style={{color, fontSize}}/>
      </Host>
    );
  }

}
