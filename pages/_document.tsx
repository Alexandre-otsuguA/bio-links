import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import { getCssText } from 'styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
