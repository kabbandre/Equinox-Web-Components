import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'e-radio',
  styleUrl: 'e-radio.styl',
  shadow: true,
})
export class ERadio {
  @Prop() value!: string;
  @Prop({ mutable: true, reflect: true }) checked = false;
  @Event() valueChanged!: EventEmitter<void>;
  valueChangedHandler() {
    this.checked = true;
    this.valueChanged.emit();
  }

  render() {
    return (
      <label class="container">
        <slot>
          Eclipse
        </slot>
        <input checked={this.checked} onClick={this.valueChangedHandler.bind(this)} type="checkbox" />
        <span class="checkmark"/>
      </label>
    );
  }

}
