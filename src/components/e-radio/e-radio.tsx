import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'e-radio',
  styleUrl: 'e-radio.styl',
  shadow: true,
})
export class ERadio {
  @Prop() value!: string;
  @Prop({ mutable: true, reflect: true }) checked = false;
  @Event() valueChanged!: EventEmitter<CustomEvent>;
  valueChangedHandler() {
    this.checked = true;
    this.valueChanged.emit({
      AT_TARGET: 0,
      BUBBLING_PHASE: 0,
      CAPTURING_PHASE: 0,
      NONE: 0,
      bubbles: false,
      cancelBubble: false,
      cancelable: false,
      composed: false,
      composedPath(): EventTarget[] {
        return [];
      },
      currentTarget: undefined,
      defaultPrevented: false,
      eventPhase: 0,
      initCustomEvent(): void {},
      initEvent(): void {},
      isTrusted: false,
      returnValue: false,
      srcElement: undefined,
      target: undefined,
      timeStamp: 0,
      type: "",
      preventDefault(): void {},
      stopImmediatePropagation(): void {},
      stopPropagation(): void {},
      detail: this.value
    });
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
