let baseUrl;
if (process.env.NODE_ENV == 'production') {
	// baseUrl = 'https://lovelymart.onrender.com/';
} else {
	baseUrl = 'http://localhost:5011/';
}
export { baseUrl };