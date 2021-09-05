import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-radio',
  styleUrl: 'e-radio.styl',
  shadow: true,
})
export class ERadio {
  @Prop() name: string
  @Prop({ mutable: true }) value: any
  @Event() input: EventEmitter
  inputHandler(ev) {
    this.value = ev.target ? ev.target.value : null
    this.input.emit(this.value)
  }

  render() {
    return (
      <label class="container">
        <slot>
          Eclipse
        </slot>
        <input name={this.name} onInput={(ev) => this.inputHandler(ev)} type="checkbox" />
        <span class="checkmark"/>
      </label>
    );
  }

}
