import readme from './readme.md';

export default {
  notes: readme,
  states: [
    {
      title: 'Radio group',
      description: 'This component is used to utilize <i>e-radio</i> component in groups',
      content: `
        <e-radio style="margin-bottom: 10px" value="dark">
            Dark mode
        </e-radio>
        <e-radio style="margin-bottom: 10px" value="light">
            Light mode
        </e-radio>
        <e-radio style="margin-bottom: 10px" value="unknown">
            Third option
        </e-radio>
      `
    },
  ]
}
