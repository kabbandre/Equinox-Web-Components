import {Component, Host, h, Prop} from '@stencil/core';
import {AvatarSizes} from "../../types";
import {getAbbr} from "../../utils/utils";

@Component({
  tag: 'e-avatar',
  styleUrl: 'e-avatar.styl',
  shadow: true,
})
export class EAvatar {
  @Prop() size: AvatarSizes = "md"
  @Prop() color: string = "#CBD5E0"
  @Prop() text?: string

  private classes = () => ({
    'e-avatar': true,
    [this.size]: true
  })

  private styles = () => ({
    backgroundColor: this.color,
  })

  render() {
    return (
      <Host>
        <div class={this.classes()} style={this.styles()}>
          <slot>
            {getAbbr(this.text)}
          </slot>
        </div>
      </Host>
    );
  }
}
