import readme from './readme.md';

export default {
  notes: readme,
  states: [
    {
      title: 'Equinox Card',
      props: {},
      containerStyle: {
        background: 'url(/image.jpg)',
        backgroundPosition: 'center',
        padding: '20px',
        borderRadius: '10px'
      },
      content: `
            <div style="
              padding: 16px;
              width: 180px;
              display: flex;
              flex-direction: column;
              align-items: center;
            ">
              <e-avatar text="MJ" size="xxl"></e-avatar>
              <div style="
                display: flex;
                margin-top: 17px;
                margin-bottom: 9px;
                color: white
              ">
                <e-icon style="margin-right: 12px;" icon="ph-eye"></e-icon>
                0
              </div>
              <div style="
                color: var(--gray-400);
              ">
                Yesterday
              </div>
              <div style="
                color: var(--gray-400);
              ">
                1:42 PM
              </div>
            </div>
      `
    }
  ]
}
