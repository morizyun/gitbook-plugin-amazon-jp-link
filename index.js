module.exports = {
    blocks: {
        // Author will be able to write "{% AsinLink asin="B01N59VNQY" %}macOS Sierra{% endAsinLink %}"
        AsinLink: {
            process: function(block, asin) {
                return "<a href=\"http://www.amazon.co.jp/gp/product/" + asin + "/ref=as_li_qf_sp_asin_il?ie=UTF8&amp;" +
                    "camp=247&amp;creative=1211&amp;creativeASIN=" + asin + "&amp;linkCode=as2&amp;tag=morizyun00-22\"" +
                    "target=\"_blank\"><img border=\"0\" src=\"http://ws.assoc-amazon.jp/widgets/q?_encoding=UTF8" +
                    "&amp;ASIN=" + asin + "&amp;Format=_SL320_&amp;ID=AsinImage&amp;MarketPlace=JP&amp;" +
                    "ServiceVersion=20070822&amp;WS=1&amp;tag=morizyun00-22\" width=\"150\" style=\"float: left;" +
                    " margin: 0 20px 20px 0;\"></a>"
            }
        }
    }
};
