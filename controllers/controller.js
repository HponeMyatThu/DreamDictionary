const Model = require("../models/models");

exports.postContentPage = (req, res, next) => {
  Model.fetchAll((model) => {
    const blogId = req.body.bId;
    const blogTitle = req.body.bTitle;  
    const blogDetails = model.BlogDetail;
    res.render("content",{
        bId: blogId,
        bTitle: blogTitle,
        bDetail: blogDetails,
    });
  });
};

exports.getStartPage = (req, res, next) => {
  Model.fetchAll((model) => {
    const blogHeader = model.BlogHeader;
    console.log(
      "file: controller.js:6 ~ Model.fetchAll ~ blogHeader:",
      blogHeader
    );
    res.render("start", {
      bhs: blogHeader,
    });
  });
};
