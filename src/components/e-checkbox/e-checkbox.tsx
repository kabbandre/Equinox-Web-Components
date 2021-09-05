import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-checkbox',
  styleUrl: 'e-checkbox.styl',
  shadow: true,
})
export class ECheckbox {
  @Prop() indeterminate: boolean

  @Prop({ mutable: true }) value: boolean
  @Event() input: EventEmitter<boolean>
  inputHandler(ev) {
    this.value = ev.target ? ev.target.value : null
    this.input.emit(this.value)
  }

  private classes = () => ({
    indeterminate: this.indeterminate,
    container: true
  })

  render() {
    return (
      <label class={this.classes()}>
        <slot />
        <input onInput={(ev) => this.inputHandler(ev)} type="checkbox" />
        <span class="checkmark"/>
      </label>
    );
  }

}
