import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-radio',
  styleUrl: 'e-radio.styl',
  shadow: true,
})
export class ERadio {
  @Prop({ mutable: true }) name: string
  @Prop({ mutable: true }) value: any
  @Event() valueChanged: EventEmitter
  valueChangedHandler(ev) {
    this.value = ev.target ? ev.target.value : null
    this.valueChanged.emit(this.value)
  }

  render() {
    return (
      <label class="container">
        <slot>
          Eclipse
        </slot>
        <input name={this.name} onInput={(ev) => this.valueChangedHandler(ev)} type="checkbox" />
        <span class="checkmark"/>
      </label>
    );
  }

}
