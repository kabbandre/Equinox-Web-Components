import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'e-radio-group',
  shadow: true,
})
export class ERadioGroup {
  @Element() host!: any;

  @Prop({ mutable: true }) value?: string;
  @Watch('value')
  onValueChange() {
    const radios = this.findNestedRadios()
    radios && radios.forEach(radio => {
      radio.checked = radio.value === this.value;
    });
  }

  @Event() valueChanged!: EventEmitter<void>;
  @Listen('valueChanged')
  onSelectionChange(event: Event) {
    const radio = event.target;
    // @ts-ignore
    this.value = radio.value;
  }

  connectedCallback() {
    this.onValueChange();
  }
  componentDidLoad() {
    this.onValueChange();
  }

  private findNestedRadios() {
    const slot = this.host.shadowRoot!.querySelector('slot')
    return slot && slot.assignedElements();
  }

  render() {
    return <slot />;
  }
}
