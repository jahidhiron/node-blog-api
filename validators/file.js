const validateExtension = (ext) => {
  if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
    return true;
  } else {
    return false;
  }
};

module.exports = { validateExtension };
