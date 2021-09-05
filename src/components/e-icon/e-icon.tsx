import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-icon',
  styleUrl: 'e-icon.css',
  shadow: true,
})
export class EIcon {
  /**
   * Icon from Phosphor Icons library
   */
  @Prop() icon: string
  /**
   * Color of the icon
   */
  @Prop() color: string
  /**
   * Size of the icon
   */
  @Prop() size: string = "inherit"

  render() {
    const { color, size: fontSize } = this
    return <i class={this.icon} style={{color, fontSize}}/>
  }
}
