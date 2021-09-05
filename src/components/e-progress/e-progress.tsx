import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'e-progress',
  shadow: true,
})
export class EProgress {
  @Prop() bgColor: string = "var(--purple-100)"
  @Prop() barColor: string = "var(--purple-400)"
  @Prop() value: number = 0
  @Prop() maxValue: number = 100
  @Prop() height: string = "4px"
  @Prop() width: string = "260px"

  private outerStyle = () => ({
    background: this.bgColor,
    height: this.height,
    width: this.width
  })

  private innerStyle = () => ({
    background: this.barColor,
    width: `${this.value}%`,
    height: '100%'
  })

  render() {
    return (
      <Host>
        <div style={this.outerStyle()}>
          <div style={this.innerStyle()} />
        </div>
      </Host>
    );
  }

}
