module.exports = (req, res) => {
  console.log('Test endpoint hit');
  res.status(200).json({ message: "API is working" }); 
};
