import {Component, Host, h, Prop, State, Watch, Event, EventEmitter} from '@stencil/core';
import {deserializeJSON} from "../../utils/utils";

type Tab = { title?: string, key?: string, disabled?: boolean }

@Component({
  tag: 'e-tabs',
  styleUrl: 'e-tabs.styl',
  shadow: true,
})
export class ETabs {
  @Prop() tabs: string = "[{\"key\":\"Stencil\",\"title\":\"www.stenciljs.com\"},{\"key\":\"Google\",\"title\":\"www.google.com\"}]"

  componentWillLoad() {
    this.deserializedTabs = deserializeJSON(this.tabs);
  }

  @Watch('tabs')
  parseTabsProp(newValue: string) {
    if (newValue) this.deserializedTabs = deserializeJSON(this.tabs);
  }

  @State() deserializedTabs: Tab[] = []
  @State() selectedTab: Tab = {
    title: null,
    key: null
  }

  @Event() tabSelected: EventEmitter<Tab>;
  tabSelectedHandler(tab: Tab) {
    this.selectedTab = {...tab}
    this.tabSelected.emit(tab)
  }


  render() {
    return (
      <Host>
        <div class="tabs">
          {
            this.deserializedTabs.map(tab => (
              <div class={`tab ${this.selectedTab.key === tab.key && 'active'}`} onClick={() => !tab.disabled && this.tabSelectedHandler(tab)}>
                {tab.title}
              </div>
            ))
          }
        </div>
      </Host>
    );
  }

}
