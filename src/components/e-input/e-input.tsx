import {Component, Host, h, Prop, EventEmitter, Event} from '@stencil/core';
import {InputSizes} from "../../types";

@Component({
  tag: 'e-input',
  styleUrl: 'e-input.styl',
  shadow: true,
})
export class EInput {
  @Prop() outlined: boolean
  @Prop() ghost: boolean
  @Prop() rounded: boolean
  @Prop() size: InputSizes = "md"

  @Prop() prependIcon: string
  @Prop() appendIcon: string

  @Prop() placeholder: string
  @Prop() type: string = "text"
  @Prop({ mutable: true, reflect: true }) value: string | number
  @Event() valueChanged: EventEmitter<string | number>
  valueChangedHandler(ev) {
    this.value = ev.target ? ev.target.value : null
    this.valueChanged.emit(this.value)
  }

  private classes = () => ({
    outlined: this.outlined,
    ghost: this.ghost,
    rounded: this.rounded,
    [this.size]: true,
    ['input-wrapper']: true
  })

  private renderIcon = (icon) => (icon && <e-icon size="18px" icon={icon} />)

  render() {
    return (
      <Host>
        <div class={this.classes()}>
          <slot name="prepend-icon">
            {this.renderIcon(this.prependIcon)}
          </slot>
          <input placeholder={this.placeholder} value={this.value} onInput={(ev) => this.valueChangedHandler(ev)}/>
          <slot name="append-icon">
            {this.renderIcon(this.appendIcon)}
          </slot>
        </div>
      </Host>
    );
  }
}
