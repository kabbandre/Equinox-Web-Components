import {Component, h, State, Prop} from '@stencil/core';

@Component({
  tag: 'e-collapse',
  styleUrl: 'e-collapse.styl',
  shadow: true,
})
export class ECollapse {
  @Prop() headerTitle: string
  @Prop() openIcon: string = "ph-plus-circle"
  @Prop() closeIcon: string = "ph-x-circle"

  @State() isOpen: boolean = false

  render() {
    return (
      <div class="e-collapse">
        <div class="e-collapse-header" onClick={() => this.isOpen = !this.isOpen}>
          <slot name="title">
            {this.headerTitle}
          </slot>
          <e-icon size="24px" icon={this.isOpen ? this.closeIcon : this.openIcon} />
        </div>
        <hr />
        {this.isOpen && (
          <div class="e-collapse__text">
            <slot />
          </div>
        )}
      </div>
    );
  }

}
