import {Component, Host, h, State, Prop} from '@stencil/core';

@Component({
  tag: 'e-expand',
  styleUrl: 'e-expand.css',
  shadow: true,
})
export class EExpand {
  @Prop() maxHeight: string = "100px"
  @Prop() openButtonText: string = "Show more"
  @Prop() openButtonIcon: string = "ph-caret-down"
  @Prop() hideButtonText: string = "Show less"
  @Prop() hideButtonIcon: string = "ph-caret-up"
  @Prop() elevation: string = "6"
  @State() isOpen: boolean = false

  render() {
    return (
      <Host>
        <div class="expand__content" style={{ maxHeight: !this.isOpen ? this.maxHeight : undefined }}>
          <slot></slot>
        </div>
        <div class="expand-wrapper">
          <button class={`expand__button elevation-${this.elevation}`} onClick={() => this.isOpen = !this.isOpen}>
            <slot name="text">
              {this.isOpen ? this.hideButtonText : this.openButtonText}
            </slot>
            <e-icon size="14px" icon={this.isOpen ? this.hideButtonIcon : this.openButtonIcon} />
          </button>
        </div>
      </Host>
    );
  }

}
