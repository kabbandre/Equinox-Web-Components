import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-btn',
  styleUrl: 'e-btn.styl',
  shadow: true,
})
export class EBtn {
  /**
   * Make button edges rounded
   */
  @Prop() rounded?: boolean
  /**
   * Disable button
   */
  @Prop() disabled?: boolean
  /**
   * Turn button into the icon button. Pass icon code to this attribute.
   */
  @Prop() icon?: string = "ph-plus"
  /**
   * Button size
   */
  @Prop() size?: "xs" | "sm" | "md" | "lg" | "xl" | "xll" = "xs"
  /**
   * Prepend icon
   */
  @Prop() prependIcon?: string = ""
  /**
   * Append icon
   */
  @Prop() appendIcon?: string = ""

  private classes = () => ({
    rounded: this.rounded,
    disabled: this.disabled,
    icon: !!this.icon,
    [this.size]: true
  })

  private renderIcon = (icon) => (icon && <e-icon icon={icon} />)

  private renderContent = () => {
    if (this.icon) {
      return (
        <e-icon icon={this.icon} />
      )
    } else {
      return [
        <slot name="prepend-icon">
          {this.renderIcon(this.prependIcon)}
        </slot>,
        <slot>
          Eclipse
        </slot>,
        <slot name="append-icon">
          {this.renderIcon(this.appendIcon)}
        </slot>
      ]
    }
  }

  render() {
    return (
      <button class={this.classes()}>
        {this.renderContent()}
      </button>
    );
  }

}
