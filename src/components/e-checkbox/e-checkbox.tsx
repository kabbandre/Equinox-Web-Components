import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-checkbox',
  styleUrl: 'e-checkbox.styl',
  shadow: true,
})
export class ECheckbox {
  @Prop() indeterminate: boolean

  private classes = () => ({
    indeterminate: this.indeterminate,
    container: true
  })

  render() {
    return (
      <label class={this.classes()}>
        <slot />
        <input type="checkbox" />
        <span class="checkmark"/>
      </label>
    );
  }

}
