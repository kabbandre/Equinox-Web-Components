import {Component, Host, h, Prop, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'e-chat-box',
  styleUrl: 'e-chat-box.styl',
  shadow: true,
})
export class EChatBox {
  @Prop() type: string = 'text';
  @Prop({ mutable: true }) value: string

  @Prop() placeholder = "Message to..."
  @Prop() outerPrependIcon = "ph-plus"
  @Prop() prependIcon = "ph-smiley-sticker"
  @Prop() appendIcon = "ph-dots-three"
  @Prop() outerAppendIcon = "ph-paper-plane"

  @Prop() backdrop = true
  @Prop() dark: boolean = true
  @Prop() backdropBlur: "weak" | "medium" | "strong"  = "weak"

  private classes = () => {
    const classes = {
      'e-chat-box': true,
    }
    const setting = {
      style: this.dark ? 'dark' : 'light',
      blur: this.backdropBlur
    }
    if (this.backdrop) {
      classes[`silicon-${setting.style}-${setting.blur}`] = true
    }
    return {
      ...classes,
      [setting.style]: true
    }
  }

  @Event() outerPrependClick: EventEmitter<string>;
  onOuterPrependClick() {
    this.outerPrependClick.emit('outer-prepend-click');
  }
  @Event() prependClick: EventEmitter<string>;
  onPrependClick() {
    this.prependClick.emit('prepend-click');
  }
  @Event() appendClick: EventEmitter<string>;
  onAppendClick() {
    this.appendClick.emit('append-click');
  }
  @Event() outerAppendClick: EventEmitter<string>;
  onOuterAppendClick() {
    this.outerAppendClick.emit('outer-append-click');
  }
  @Event() valueChange: EventEmitter;
  handleChange(event) {
    const val = event.target.value;
    console.log(val);
    this.value = val;
    this.valueChange.emit(val);
  }




  render() {
    return (
      <Host>
        <div class={this.classes()}>
          <slot name="outer-prepend">
            <e-btn onClick={this.onOuterPrependClick.bind(this)} icon={this.outerPrependIcon} size="sm" />
          </slot>
          <slot name="prepend">
            <e-btn onClick={this.onPrependClick.bind(this)} icon={this.prependIcon} size="sm" />
          </slot>
          <input type={this.type} value={this.value} onInput={event => this.handleChange(event)} placeholder={this.placeholder} />
          <slot name="append">
            <e-btn onClick={this.onAppendClick.bind(this)} icon={this.appendIcon} size="sm" />
          </slot>
          <slot name="outer-append">
            <e-btn onClick={this.onOuterAppendClick.bind(this)} icon={this.outerAppendIcon} size="sm" />
          </slot>
        </div>
      </Host>
    );
  }

}
