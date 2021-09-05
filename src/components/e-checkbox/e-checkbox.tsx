import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-checkbox',
  styleUrl: 'e-checkbox.styl',
  shadow: true,
})
export class ECheckbox {
  @Prop() indeterminate: boolean

  @Prop({ mutable: true }) value: boolean
  @Event() valueChanged: EventEmitter<boolean>
  valueChangedHandler(ev) {
    this.value = ev.target ? ev.target.value : null
    this.valueChanged.emit(this.value)
  }

  private classes = () => ({
    indeterminate: this.indeterminate,
    container: true
  })

  render() {
    return (
      <label class={this.classes()}>
        <slot />
        <input onInput={(ev) => this.valueChangedHandler(ev)} type="checkbox" />
        <span class="checkmark"/>
      </label>
    );
  }

}
