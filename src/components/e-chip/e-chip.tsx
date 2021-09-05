import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-chip',
  styleUrl: 'e-chip.styl',
  shadow: true,
})
export class EChip {
  @Prop() color: string
  @Prop() textColor: string

  @Prop() text: boolean
  @Prop() outlined: boolean
  @Prop() disabled: boolean
  @Prop() shadow: boolean
  @Prop() rounded: boolean

  @Prop() prependIcon: string

  private classes = () => ({
    text: this.text,
    outlined: this.outlined,
    disabled: this.disabled,
    shadow: this.shadow,
    rounded: this.rounded,
  })
  private styles = () => {
    const styles: any = {}
    if (this.textColor) { styles.color = this.textColor }
    if (this.color) {
      if (this.outlined) {
        styles.borderColor = this.color
      }
      if (!this.outlined && !this.shadow && !this.text && !this.disabled) {
        styles.background = this.color
      }
    }
    return styles
  }
  private renderIcon = (icon) => (icon && <e-icon icon={icon} />)

  render() {
    return (
      <button class={this.classes()} style={this.styles()}>
        <slot name="prepend">
          {this.renderIcon(this.prependIcon)}
        </slot>
        <slot/>
        <slot name="append" />
      </button>
    );
  }

}
