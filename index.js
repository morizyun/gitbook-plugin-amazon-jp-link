function renderAmazonJpLink(asin, tag, body) {
  return `<a href="http://www.amazon.co.jp/gp/product/${asin
            }/ref=as_li_qf_sp_asin_il?ie=UTF8&amp;camp=247&amp;creative=1211&amp;creativeASIN=${
            asin}&amp;linkCode=as2&amp;tag=${tag}" target="_blank">${
            body}</a><img src="http://www.assoc-amazon.jp/e/ir?t=${tag
            }&amp;l=as2&amp;o=9&amp;a=${asin}" width="1" height="1" border="0"` +
        ' alt="" style="border:none !important; margin:0px !important;">';
}

module.exports = {
  blocks: {
    AmazonJpLink: {
      process(block) {
        return renderAmazonJpLink(block.args[0], block.args[1], block.body);
      },
    },
    AmazonJpImage: {
      process(block) {
        const asin = block.args[0];
        const tag = block.args[1];
        let size = block.args[2];
        if (!size) { size = 150; }
        const imageSize = parseInt(size, 10) * 2;

        const body = `<img border="0" src="http://ws.assoc-amazon.jp/widgets/q?_encoding=UTF8&amp;ASIN=${
                    asin}&amp;Format=_SL${imageSize}_&amp;ID=AsinImage&amp;MarketPlace=JP&amp;ServiceVersion=20070822` +
                    `&amp;WS=1&amp;tag=${tag}" width="${size}" style="float: left; margin: 0 20px 20px 0;" />`;

        return renderAmazonJpLink(asin, tag, body);
      },
    },
  },
};
