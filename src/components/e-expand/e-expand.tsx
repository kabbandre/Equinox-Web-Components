import {Component, Host, h, State, Prop} from '@stencil/core';

@Component({
  tag: 'e-expand',
  styleUrl: 'e-expand.css',
  shadow: true,
})
export class EExpand {
  @Prop() maxHeight: string = "100px"
  @Prop() openButtonText: string = "Show more"
  @Prop() hideButtonText: string = "Show less"
  @Prop() elevation: string = "6"
  @State() isOpen: boolean = false

  render() {
    return (
      <Host>
        <div class="expand__content" style={{ maxHeight: !this.isOpen ? this.maxHeight : undefined }}>
          <slot></slot>
        </div>
        <button class={`expand__button elevation-${this.elevation}`} onClick={() => this.isOpen = !this.isOpen}>
          <slot name="text">
            {this.isOpen ? this.hideButtonText : this.openButtonText}
          </slot>
          <e-icon icon="ph-chevron-up" />
        </button>
      </Host>
    );
  }

}
