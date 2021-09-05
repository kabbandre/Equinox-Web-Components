import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

type ValueType = string | boolean | number

@Component({
  tag: 'e-checkbox',
  styleUrl: 'e-checkbox.styl',
  shadow: true,
})
export class ECheckbox {
  checkboxInput: HTMLInputElement;
  @Prop({ mutable: true, reflect: true }) value: boolean = false;
  @Prop({ reflect: true }) falseValue: ValueType = false
  @Prop({ reflect: true }) trueValue: ValueType = true
  @Event({ composed: true }) valueChanged: EventEmitter;
  valueChangedHandler(checked: boolean) {
    if (!this.disabled) {
      this.valueChanged.emit(checked ? this.trueValue : this.falseValue);
    }
  }

  @Prop() indeterminate: boolean
  @Prop() rounded: boolean
  @Prop() disabled: boolean
  @Prop() type: "checkbox" | "switch" = "checkbox"
  private classes = () => ({
    indeterminate: this.indeterminate,
    [this.type]: true,
    rounded: this.rounded,
    disabled: this.disabled,
    container: true
  })

  render() {
    return (
      <label class={this.classes()}>
        <slot />
        <input checked={this.value}
               ref={el => this.checkboxInput = el}
               onChange={() =>
                 this.valueChangedHandler(this.checkboxInput.checked)
               } type="checkbox" />
        <span class="checkmark"/>
      </label>
    );
  }

}
