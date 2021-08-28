import {Component, h} from '@stencil/core';

@Component({
  tag: 'e-radio',
  styleUrl: 'e-radio.styl',
  shadow: true,
})
export class ERadio {
  render() {
    return (
      <label class="container">
        <slot>
          Eclipse
        </slot>
        <input type="checkbox" />
        <span class="checkmark"/>
      </label>
    );
  }

}
