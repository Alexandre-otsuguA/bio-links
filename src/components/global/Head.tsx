import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link
      rel='icon'
      href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🕹️</text></svg>'
    />
    {/* Buy me a coffe */}
    <script
      defer
      src='https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
      data-name='BMC-Widget'
      data-cfasync='false'
      data-id='aleaugusto.dev'
      data-description='Support me on Buy me a coffee!'
      data-message=''
      data-color='var(--colors-buymeacoffee)'
      data-position='Right'
      data-x_margin='18'
      data-y_margin='18'
    />
  </NextHead>
);

export default Head;
