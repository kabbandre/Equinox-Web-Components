import {Component, Host, h, Prop, Watch, State} from '@stencil/core';
import {deserializeJSON, findPath, setPath} from "../../utils/utils";

interface Field {
  id: number
  name: string
  icon?: string
  children?: Field[]
  isOpen?: boolean
}

@Component({
  tag: 'e-fieldtree',
  styleUrl: 'e-fieldtree.css',
  shadow: true,
})
export class EFieldtree {
  @Prop() fields: string = "[{\"id\":1,\"icon\":\"ph-folder\",\"name\":\"Cats\",\"children\":[{\"id\":2,\"icon\":\"ph-file\",\"name\":\"Color cats\",\"children\":[{\"id\":3,\"name\":\"Yellow cats\"},{\"id\":4,\"name\":\"Black cats\"}]}]},{\"id\":5,\"icon\":\"ph-folder\",\"name\":\"Dogs\",\"children\":[{\"id\":6,\"icon\":\"ph-file\",\"name\":\"Color dogs\",\"children\":[{\"id\":7,\"name\":\"Yellow dogs\"},{\"id\":8,\"name\":\"Black dogs\"}]}]},{\"id\":9,\"icon\":\"ph-folder\",\"name\":\"Fishes\",\"children\":[{\"id\":10,\"icon\":\"ph-file\",\"name\":\"Color Fishes\",\"children\":[{\"id\":11,\"name\":\"Yellow Fishes\"},{\"id\":12,\"name\":\"Black Fishes\"}]}]}]"

  componentWillLoad() {
    this.deserializedFields = deserializeJSON(this.fields);
  }

  @Watch('fields')
  parseTabsProp(newValue: string) {
    if (newValue) this.deserializedFields = deserializeJSON(this.fields);
  }

  @State() deserializedFields: Field[] = []

  private changeOpen = ({id, isOpen}: Field) => {
    const path = findPath(this.deserializedFields, 'id', id)
    setPath(this.deserializedFields, [...path, 'isOpen'], !isOpen)
    this.deserializedFields = this.deserializedFields.map(field => field)
  }

  private parseFields = (fields: Field[], level = 1) => {
    return fields.map(field =>
      <div style={{display: 'flex', cursor: 'pointer', padding: '6px 0'}}>
        <div style={{display: 'flex', alignItems: 'baseline'}} onClick={() => this.changeOpen(field)}>
          {level === 1 && field.children && <e-icon size="24px" style={{marginRight: '33px'}} icon={field.isOpen ? "ph-minus-circle" : "ph-plus-circle"} />}
        </div>
        <div class={`branch ${field.isOpen ? 'branch-open' : ''}`}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}} onClick={() => this.changeOpen(field)}>
            <e-icon size="24px" icon={field.icon} />
            {field.name}
          </div>
          <div style={{marginLeft: '20px', display: 'flex', flexDirection: 'column'}}>
            {field.isOpen && field.children && this.parseFields(field.children, level + 1)}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Host>
        {this.parseFields(this.deserializedFields)}
      </Host>
    );
  }
}
