const signup = (req, res) => {
  // code here
  const { name, email, password, confirmPassword } = req.body;
  console.log(name, email, password, confirmPassword);
  res.status(200).json({
    success: true,
    data: {},
  });
};

module.exports = {
  signup,
};
