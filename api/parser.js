const Parser = require('@postlight/parser');

module.exports = async (req, res) => {
  // Kiểm tra phương thức GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Lấy URL từ query parameter
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Trích xuất nội dung từ URL bằng Postlight Parser
    const result = await Parser.parse(url);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to parse URL', details: error.message });
  }
};