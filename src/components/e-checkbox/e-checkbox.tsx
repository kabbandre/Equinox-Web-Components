import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-checkbox',
  styleUrl: 'e-checkbox.styl',
  shadow: true,
})
export class ECheckbox {
  checkboxInput: HTMLInputElement;
  @Prop({ mutable: true, reflect: true }) value: boolean = false;
  @Event({ eventName: "checkedChanged", composed: true }) valueChanged: EventEmitter;
  valueChangedHandler(checked: boolean) {
    this.valueChanged.emit(checked);
  }
  @Prop() indeterminate: boolean
  private classes = () => ({
    indeterminate: this.indeterminate,
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
